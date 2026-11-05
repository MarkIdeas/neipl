import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";
import { brandColors } from "@/lib/brand";

describe("Brand Tokens & No-Inline-Hex Enforcement", () => {
  it("matches the canonical Dark Midnight & Emerald Green color identity", () => {
    expect(brandColors.canvas).toBe("#090e1a");
    expect(brandColors.surface).toBe("#0f1624");
    expect(brandColors.card).toBe("#141c2e");
    expect(brandColors.accent).toBe("#10b981");
  });

  it("enforces zero raw inline hex codes across all TSX component files", () => {
    const srcDir = path.resolve(__dirname, "../../");
    const tsxFiles: string[] = [];

    function findTsxFiles(dir: string) {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          if (entry.name !== "node_modules" && entry.name !== ".next") {
            findTsxFiles(fullPath);
          }
        } else if (entry.isFile() && entry.name.endsWith(".tsx")) {
          tsxFiles.push(fullPath);
        }
      }
    }

    findTsxFiles(srcDir);
    expect(tsxFiles.length).toBeGreaterThan(0);

    // Regex to detect raw hex colors in TSX code (e.g. "#10b981", "#fff", "bg-[#...]")
    const rawHexRegex = /#(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\b/g;

    const violations: { file: string; match: string }[] = [];

    for (const file of tsxFiles) {
      const content = fs.readFileSync(file, "utf8");
      // Remove comments to prevent false positives
      const cleanContent = content
        .replace(/\/\*[\s\S]*?\*\//g, "")
        .replace(/\/\/.*/g, "");

      const matches = cleanContent.match(rawHexRegex);
      if (matches) {
        for (const match of matches) {
          violations.push({
            file: path.relative(srcDir, file),
            match,
          });
        }
      }
    }

    expect(violations).toEqual([]);
  });
});
