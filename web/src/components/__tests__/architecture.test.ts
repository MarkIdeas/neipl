import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

describe("Architecture & 4-Tier Dependency DAG Contract", () => {
  const srcDir = path.resolve(__dirname, "../../");

  function getFiles(dir: string, ext: string = ".ts"): string[] {
    const results: string[] = [];
    if (!fs.existsSync(dir)) return results;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        results.push(...getFiles(fullPath, ext));
      } else if (entry.isFile() && (entry.name.endsWith(ext) || entry.name.endsWith(ext + "x"))) {
        results.push(fullPath);
      }
    }
    return results;
  }

  it("verifies Tier 1 (types/) imports nothing from higher tiers or peers", () => {
    const typesFiles = getFiles(path.join(srcDir, "types"));

    for (const file of typesFiles) {
      const content = fs.readFileSync(file, "utf8");
      expect(content).not.toMatch(/from\s+["']@\/(lib|content|components|app)/);
      expect(content).not.toMatch(/from\s+["']\.\.\/(lib|content|components|app)/);
    }
  });

  it("verifies Tier 2 core peers (lib/ and content/) never import higher tiers or each other", () => {
    const libFiles = getFiles(path.join(srcDir, "lib"));
    for (const file of libFiles) {
      const content = fs.readFileSync(file, "utf8");
      expect(content).not.toMatch(/from\s+["']@\/(content|components|app)/);
      expect(content).not.toMatch(/from\s+["']\.\.\/(content|components|app)/);
    }

    const contentFiles = getFiles(path.join(srcDir, "content")).filter(
      (f) => !f.includes("__tests__")
    );
    for (const file of contentFiles) {
      const content = fs.readFileSync(file, "utf8");
      expect(content).not.toMatch(/from\s+["']@\/(lib|components|app)/);
      expect(content).not.toMatch(/from\s+["']\.\.\/(lib|components|app)/);
    }
  });

  it("verifies Tier 3 primitives (ui/ and icons/) never import @/content or section components", () => {
    const uiFiles = getFiles(path.join(srcDir, "components/ui"));
    const iconFiles = getFiles(path.join(srcDir, "components/icons"));
    const primitiveFiles = [...uiFiles, ...iconFiles];

    for (const file of primitiveFiles) {
      const content = fs.readFileSync(file, "utf8");
      expect(content).not.toMatch(/from\s+["']@\/content/);
      expect(content).not.toMatch(/from\s+["']\.\.\/\.\.\/content/);
      expect(
        content
      ).not.toMatch(/from\s+["']@\/components\/(home|about|products|gallery|industries|contact|services|layout)/);
      expect(content).not.toMatch(/from\s+["']@\/app/);
    }
  });

  it("verifies Tier 3 layout components (layout/) never import page section components", () => {
    const layoutFiles = getFiles(path.join(srcDir, "components/layout"));

    for (const file of layoutFiles) {
      const content = fs.readFileSync(file, "utf8");
      expect(
        content
      ).not.toMatch(/from\s+["']@\/components\/(home|about|products|gallery|industries|contact|services)/);
      expect(
        content
      ).not.toMatch(/from\s+["']\.\.\/(home|about|products|gallery|industries|contact|services)/);
    }
  });

  it("verifies Tier 3 page areas (components/<Area>/) never import sibling page areas", () => {
    const pageAreas = ["home", "about", "products", "gallery", "industries", "services", "contact"];

    for (const area of pageAreas) {
      const areaFiles = getFiles(path.join(srcDir, `components/${area}`));
      const siblingAreas = pageAreas.filter((a) => a !== area);
      const siblingPattern = new RegExp(
        `from\\s+["'](@\\/components\\/|\\.\\.\\/)(${siblingAreas.join("|")})`
      );

      for (const file of areaFiles) {
        const content = fs.readFileSync(file, "utf8");
        expect(content).not.toMatch(siblingPattern);
      }
    }
  });
});
