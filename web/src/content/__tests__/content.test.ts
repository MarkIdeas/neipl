import { describe, it, expect } from "vitest";
import { company, partnerBrands, stats } from "@/content/site";
import { certificates, industries, leaders, awards } from "@/content/pages";
import { catalogue, productLines } from "@/content/catalogue";

describe("Commercial Ground Truth & Content Integrity", () => {
  it("verifies company was founded in 2006", () => {
    expect(company.foundedYear).toBe(2006);
    expect(company.yearsOfExperience).toBeGreaterThanOrEqual(20);
    expect(stats.length).toBeGreaterThanOrEqual(4);
  });

  it("contains all 15 checkable original performance certificates with unique valid URLs", () => {
    expect(certificates.length).toBe(15);
    const urls = new Set<string>();
    for (const cert of certificates) {
      expect(cert.client).toBeTruthy();
      expect(cert.doc).toBeTruthy();
      expect(cert.href).toMatch(/^https:\/\/nandiniautomation\.com\/wp-content\/uploads\//);
      expect(urls.has(cert.href)).toBe(false);
      urls.add(cert.href);
    }
  });

  it("contains 13 distinct industrial sectors with associated imagery", () => {
    expect(industries.length).toBe(13);
    for (const ind of industries) {
      expect(ind.name).toBeTruthy();
      expect(ind.desc).toBeTruthy();
      expect(ind.img).toMatch(/^\/images\/industries\//);
    }
  });

  it("contains verified executive leadership and accredited awards", () => {
    expect(leaders.length).toBe(2);
    expect(leaders[0].name).toBe("Maruti Marlapalle");
    expect(leaders[1].name).toBe("Pratima Maruti Marlapalle");
    expect(awards.length).toBeGreaterThanOrEqual(4);
  });

  it("contains pinned equipment catalogue with real part numbers", () => {
    expect(catalogue.length).toBeGreaterThanOrEqual(15);
    for (const item of catalogue) {
      expect(item.name).toBeTruthy();
      expect(item.cat).toBeTruthy();
      expect(item.part).toBeTruthy();
      expect(item.img).toBeTruthy();
    }
    expect(productLines.length).toBe(6);
  });

  it("contains authorized OEM partner brands", () => {
    const brandNames = partnerBrands.map((b) => b.name);
    expect(brandNames).toContain("Yaskawa");
    expect(brandNames).toContain("Siemens");
    expect(brandNames).toContain("Yokogawa");
    expect(brandNames).toContain("Baumer");
    expect(brandNames).toContain("GIC");
  });
});
