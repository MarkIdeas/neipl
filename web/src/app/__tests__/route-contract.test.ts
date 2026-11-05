import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";
import sitemap from "@/app/sitemap";

describe("Route Contract & Canonical SEO Integrity", () => {
  const appDir = path.resolve(__dirname, "../");

  const requiredRoutes = [
    { route: "", file: path.join(appDir, "page.tsx") },
    { route: "/about", file: path.join(appDir, "about/page.tsx") },
    { route: "/products", file: path.join(appDir, "products/page.tsx") },
    { route: "/services", file: path.join(appDir, "services/page.tsx") },
    { route: "/industries", file: path.join(appDir, "industries/page.tsx") },
    { route: "/gallery", file: path.join(appDir, "gallery/page.tsx") },
    { route: "/contact", file: path.join(appDir, "contact/page.tsx") },
  ];

  it("verifies all core routes exist on the filesystem", () => {
    for (const { file } of requiredRoutes) {
      expect(fs.existsSync(file)).toBe(true);
    }
  });

  it("verifies every route file contains an h1 heading tag", () => {
    for (const { file, route } of requiredRoutes) {
      const content = fs.readFileSync(file, "utf8");
      // Check for <h1 in the page or imported components
      const hasDirectH1 = /<h1[\s>]/.test(content);
      const isHome = route === "";
      // In home page, h1 is inside Hero component
      if (isHome) {
        const heroFile = path.resolve(appDir, "../components/home/Hero.tsx");
        const heroContent = fs.readFileSync(heroFile, "utf8");
        expect(/<h1[\s>]/.test(heroContent)).toBe(true);
      } else {
        expect(hasDirectH1).toBe(true);
      }
    }
  });

  it("verifies all routes are registered in sitemap.ts", () => {
    const sitemapEntries = sitemap();
    const urls = sitemapEntries.map((e) => e.url);

    for (const { route } of requiredRoutes) {
      const fullUrl = `https://website-nandiniautomation.pages.dev${route}`;
      expect(urls).toContain(fullUrl);
    }
  });
});
