import React from "react";
import fs from "fs";
import path from "path";
import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, within, fireEvent } from "@testing-library/react";
import { setViewport } from "../../../vitest.setup";

import HomePage from "@/app/page";
import AboutPage from "@/app/about/page";
import ServicesPage from "@/app/services/page";
import ProductsPage from "@/app/products/page";
import IndustriesPage from "@/app/industries/page";
import GalleryPage from "@/app/gallery/page";
import ContactPage from "@/app/contact/page";

import { IndustriesCinematic } from "@/components/home/IndustriesCinematic";
import { CompanyExpertise } from "@/components/home/CompanyExpertise";
import { ClientEndorsements } from "@/components/home/ClientEndorsements";
import { ClientsPartnersMarquee } from "@/components/home/ClientsPartnersMarquee";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

const publicDir = path.resolve(__dirname, "../../../public");

function assertImagesAndLinksValid(
  container: HTMLElement,
  options: { requireLinks?: boolean } = { requireLinks: true }
) {
  const images = container.querySelectorAll("img");
  expect(images.length).toBeGreaterThan(0);

  images.forEach((img) => {
    const src = img.getAttribute("src");
    const alt = img.getAttribute("alt");
    expect(src).toBeTruthy();
    expect(alt).not.toBeNull();

    if (src && src.startsWith("/images/")) {
      const cleanPath = src.split("?")[0];
      const diskPath = path.join(publicDir, cleanPath);
      expect(
        fs.existsSync(diskPath),
        `Expected image asset to exist on disk: ${cleanPath}`
      ).toBe(true);
    }
  });

  const links = container.querySelectorAll("a");
  if (options.requireLinks) {
    expect(links.length).toBeGreaterThan(0);
  }
  links.forEach((link) => {
    const href = link.getAttribute("href");
    expect(href).toBeTruthy();
  });
}

describe("Desktop (1440px) & Mobile (375px) Responsive Rendering Suite", () => {
  beforeEach(() => {
    setViewport(1440, 900);
  });

  describe("1. Domain Expertise (IndustriesCinematic) — Mobile & Desktop Parity", () => {
    it("places the active sector preview card FIRST on mobile (order-first) and right column on desktop (lg:order-last)", () => {
      setViewport(375, 812);
      const { container } = render(<IndustriesCinematic />);

      const previewCard = screen.getByTestId("industry-preview-card");
      const selectorList = screen.getByTestId("industry-selector-list");

      expect(previewCard.className).toContain("order-first");
      expect(previewCard.className).toContain("lg:order-last");
      expect(selectorList.className).toContain("order-last");
      expect(selectorList.className).toContain("lg:order-first");

      // All 13 industry pills render in a 2-column mobile grid with SVG line-art icons
      const pills = screen.getAllByTestId("industry-selector-pill");
      expect(pills).toHaveLength(13);
      pills.forEach((pill) => {
        const svg = pill.querySelector("svg");
        expect(svg).not.toBeNull();
      });

      assertImagesAndLinksValid(container);
    });

    it("updates the sector image, badge, and links on mobile tap (onClick) without requiring hover", () => {
      setViewport(375, 812);
      render(<IndustriesCinematic />);

      const previewCard = screen.getByTestId("industry-preview-card");
      expect(within(previewCard).getByText(/Sector 01 \/ 13/i)).toBeInTheDocument();

      // Tap "Railways & Rolling Stock" (11th sector) on mobile
      const pills = screen.getAllByTestId("industry-selector-pill");
      fireEvent.click(pills[10]);

      expect(within(previewCard).getByText(/Sector 11 \/ 13/i)).toBeInTheDocument();
      expect(
        within(previewCard).getByRole("heading", {
          name: /Railways & Rolling Stock/i,
        })
      ).toBeInTheDocument();

      const img = previewCard.querySelector("img");
      expect(img?.getAttribute("src")).toBe("/images/industries/railways.jpg");
    });
  });

  describe("2. Engineering Standards (CompanyExpertise) — Mobile & Desktop Parity", () => {
    it("renders the CPRI 6000A visual showcase directly below the heading on mobile (order-2) before the proof grid (order-3)", () => {
      setViewport(375, 812);
      const { container } = render(<CompanyExpertise />);

      const visualShowcase = screen.getByTestId("engineering-visual-showcase");
      const proofGrid = screen.getByTestId("engineering-proof-grid");

      expect(visualShowcase.className).toContain("order-2");
      expect(proofGrid.className).toContain("order-3");

      // Verify all 4 proof cards render in a 2-column grid with SVG icons
      const proofCards = screen.getAllByTestId("engineering-proof-card");
      expect(proofCards).toHaveLength(4);
      proofCards.forEach((card) => {
        expect(card.querySelector("svg")).not.toBeNull();
      });

      // Verify Hyderabad HQ is rendered inside the showcase
      expect(
        within(visualShowcase).getByText(/Jeedimetla Works HQ · Hyderabad/i)
      ).toBeInTheDocument();

      assertImagesAndLinksValid(container);
    });
  });

  describe("3. Verified Proof (ClientEndorsements) — Mobile & Desktop Parity", () => {
    it("renders client/OEM logo or icon inside every certificate card on both mobile and desktop", () => {
      for (const width of [375, 1440]) {
        setViewport(width, 812);
        const { container, unmount } = render(<ClientEndorsements />);

        // Default Featured Flagships tab shows 6 cards
        const cards = screen.getAllByTestId("verified-cert-card");
        expect(cards).toHaveLength(6);

        cards.forEach((card) => {
          const iconBox = within(card).getByTestId("verified-cert-icon");
          const hasLogoImg = iconBox.querySelector("img") !== null;
          const hasSvgIcon = iconBox.querySelector("svg") !== null;
          expect(hasLogoImg || hasSvgIcon).toBe(true);
        });

        // Switch to "All Verified Scans" (15 certificates) and verify all 15 have icons and scan links
        const allTab = screen.getByRole("tab", { name: /All Verified Scans/i });
        fireEvent.click(allTab);

        const allCards = screen.getAllByTestId("verified-cert-card");
        expect(allCards).toHaveLength(15);
        allCards.forEach((card) => {
          const iconBox = within(card).getByTestId("verified-cert-icon");
          expect(
            iconBox.querySelector("img") !== null ||
              iconBox.querySelector("svg") !== null
          ).toBe(true);
        });

        assertImagesAndLinksValid(container);
        unmount();
      }
    });

    it("opens the in-page CertificateLightboxModal when clicking Inspect Signed Scan on mobile", () => {
      setViewport(375, 812);
      render(<ClientEndorsements />);

      const inspectButtons = screen.getAllByRole("button", {
        name: /Inspect Signed Scan/i,
      });
      fireEvent.click(inspectButtons[0]);

      const dialog = screen.getByRole("dialog");
      expect(dialog).toBeInTheDocument();
      expect(within(dialog).getByText(/CERT-01 OF 15/i)).toBeInTheDocument();
    });
  });

  describe("4. Clients & OEM Partners Marquee — Responsive Column Alignment", () => {
    it("applies responsive column CSS variables for mobile (2 cols), tablet (3-4 cols), and desktop (5 cols)", () => {
      setViewport(375, 812);
      const { container } = render(<ClientsPartnersMarquee />);

      const clientTrack = screen.getByTestId("logo-slider-track-client");
      const partnerTrack = screen.getByTestId("logo-slider-track-partner");

      expect(clientTrack.className).toContain("[--visible-cols:2]");
      expect(clientTrack.className).toContain("lg:[--visible-cols:5]");
      expect(partnerTrack.className).toContain("[--visible-cols:2]");
      expect(partnerTrack.className).toContain("lg:[--visible-cols:5]");

      assertImagesAndLinksValid(container, { requireLinks: false });
    });
  });

  describe("5. Mobile Navigation Drawer & Site Layout (SiteHeader & SiteFooter)", () => {
    it("opens the MobileNav hamburger menu on mobile and expands all accordion sections with valid links", () => {
      setViewport(375, 812);
      const { container } = render(
        <>
          <SiteHeader />
          <SiteFooter />
        </>
      );

      const toggleBtn = screen.getByRole("button", {
        name: /Toggle navigation menu/i,
      });
      fireEvent.click(toggleBtn);

      // Expand Company, Solutions, Industries, Products accordions in MobileNav
      const companyButtons = screen.getAllByRole("button", { name: /Company/i });
      fireEvent.click(companyButtons[companyButtons.length - 1]);
      expect(screen.getByText(/Certifications & CPRI Scans/i)).toBeInTheDocument();

      const solutionsButtons = screen.getAllByRole("button", {
        name: /Solutions/i,
      });
      fireEvent.click(solutionsButtons[solutionsButtons.length - 1]);
      expect(
        screen.getByText(/Industrial Automation \(PLC\/SCADA\)/i)
      ).toBeInTheDocument();

      assertImagesAndLinksValid(container);
    });
  });

  describe("6. Full Route Pages Rendering Audit (Mobile 375px & Desktop 1440px)", () => {
    const pages = [
      { name: "HomePage (/)", Comp: HomePage },
      { name: "AboutPage (/about)", Comp: AboutPage },
      { name: "ServicesPage (/services)", Comp: ServicesPage },
      { name: "ProductsPage (/products)", Comp: ProductsPage },
      { name: "IndustriesPage (/industries)", Comp: IndustriesPage },
      { name: "GalleryPage (/gallery)", Comp: GalleryPage },
      { name: "ContactPage (/contact)", Comp: ContactPage },
    ] as const;

    for (const { name, Comp } of pages) {
      it(`renders ${name} cleanly with valid images and links on both Mobile (375px) and Desktop (1440px)`, () => {
        for (const width of [375, 1440]) {
          setViewport(width, 812);
          const { container, unmount } = render(<Comp />);
          assertImagesAndLinksValid(container);
          unmount();
        }
      });
    }

    it("renders 6 Milestones, 2 Executive Leaders with portraits, 5-Stage FAT Pipeline, and 2 Facilities on /about", () => {
      // 1. Mobile (375px) check
      setViewport(375, 812);
      const { unmount } = render(<AboutPage />);

      // 6 Milestones in Scrubber & Active Cockpit Console
      expect(screen.getAllByTestId("evolution-milestone-tab")).toHaveLength(6);
      expect(screen.getByTestId("evolution-active-cockpit")).toBeInTheDocument();

      // 2 Executive Leaders
      expect(screen.getAllByTestId("executive-leader-card")).toHaveLength(2);

      // 5 FAT Quality Mobile Pills & Active Console
      expect(screen.getAllByTestId("fat-workflow-mobile-pill")).toHaveLength(5);
      expect(screen.getByTestId("fat-active-station-console")).toBeInTheDocument();

      // 2 Dual Facilities
      expect(screen.getAllByTestId("dual-facility-card")).toHaveLength(2);

      unmount();

      // 2. Desktop (1440px) check: step through Milestone Cockpit & FAT pipeline nodes
      setViewport(1440, 900);
      render(<AboutPage />);

      // Verify 4-second auto-advancing indicators are initially active
      expect(screen.getByText(/Auto-Advancing Timeline \(4s\)/i)).toBeInTheDocument();
      expect(screen.getByText(/Auto-Advancing Pipeline \(4s\)/i)).toBeInTheDocument();

      const milestoneTabs = screen.getAllByTestId("evolution-milestone-tab");
      expect(milestoneTabs).toHaveLength(6);

      // Click Mile 3 tab (2014 CPRI 6000A)
      fireEvent.click(milestoneTabs[2]);
      const cockpitPlate = screen.getByTestId("evolution-active-cockpit");
      expect(within(cockpitPlate).getByText(/2014/i)).toBeInTheDocument();
      expect(within(cockpitPlate).getByText(/CPRI 6000A Type-Test Certification/i)).toBeInTheDocument();

      // Click "Next Era →" to advance to 2018
      const nextEraBtn = screen.getByRole("button", { name: /Next Era/i });
      fireEvent.click(nextEraBtn);
      expect(within(cockpitPlate).getByText(/2018/i)).toBeInTheDocument();

      const desktopNodes = screen.getAllByTestId("fat-workflow-node");
      expect(desktopNodes).toHaveLength(5);

      // Click Stage 2 node ("Dielectric Hipot")
      fireEvent.click(desktopNodes[1]);
      const consolePlate = screen.getByTestId("fat-active-station-console");
      expect(within(consolePlate).getByText(/Stage 2 of 05/i)).toBeInTheDocument();
      expect(within(consolePlate).getByText(/Dielectric & Insulation Resistance Test/i)).toBeInTheDocument();

      // Click "Next Test Station →" to advance to Stage 3
      const nextBtn = screen.getByRole("button", { name: /Next Test Station/i });
      fireEvent.click(nextBtn);
      expect(within(consolePlate).getByText(/Stage 3 of 05/i)).toBeInTheDocument();
    });

    it("places the active IndustryViewer hero card FIRST on mobile (order-first) on /industries", () => {
      setViewport(375, 812);
      render(<IndustriesPage />);

      const viewerCard = screen.getByTestId("industry-viewer-card");
      const viewerList = screen.getByTestId("industry-viewer-list");
      expect(viewerCard.className).toContain("order-first");
      expect(viewerCard.className).toContain("lg:order-last");
      expect(viewerList.className).toContain("order-last");
      expect(viewerList.className).toContain("lg:order-first");
    });

    it("supports mobile 2-column layout, category filtering, part-number search, and OEM logos on /products", () => {
      setViewport(375, 812);
      render(<ProductsPage />);

      // 6 Primary Equipment Lines
      const lineCards = screen.getAllByTestId("product-line-card");
      expect(lineCards).toHaveLength(6);

      // 24 Stocked & Custom Equipment Catalogue cards in a 2-column mobile grid
      const catalogueGrid = screen.getByTestId("product-catalogue-grid");
      expect(catalogueGrid.className).toContain("grid-cols-2");
      expect(screen.getAllByTestId("product-catalogue-card")).toHaveLength(24);

      // Filter by "Electrical panel" category (4 CPRI switchboards)
      const panelTab = screen.getByRole("tab", { name: /Electrical panel/i });
      fireEvent.click(panelTab);
      expect(screen.getAllByTestId("product-catalogue-card")).toHaveLength(4);

      // Reset to "All" and search by part number "GA700-4T"
      const allTab = screen.getByRole("tab", { name: /All/i });
      fireEvent.click(allTab);
      const searchInput = screen.getByRole("searchbox", {
        name: /Search equipment catalogue/i,
      });
      fireEvent.change(searchInput, { target: { value: "GA700-4T" } });
      expect(screen.getAllByTestId("product-catalogue-card")).toHaveLength(1);

      // 6 Official OEM Partner Logo cards
      const oemLogoCards = screen.getAllByTestId("oem-partner-logo-card");
      expect(oemLogoCards).toHaveLength(6);
    });

    it("renders 6 Flagship Case Studies, filters 12 Installations, and opens the Project Lightbox Modal on /gallery", () => {
      setViewport(375, 812);
      render(<GalleryPage />);

      // 6 Flagship Engineering Case Studies
      const caseStudies = screen.getAllByTestId("flagship-case-study-card");
      expect(caseStudies).toHaveLength(6);

      // 12 System Installations by default with unique, dedicated engineering photographs
      const installationCards = screen.getAllByTestId("gallery-installation-card");
      expect(installationCards).toHaveLength(12);

      const installationImages = installationCards.map((card) => {
        const img = card.querySelector("img");
        expect(img).not.toBeNull();
        return img?.getAttribute("src") ?? "";
      });
      const uniqueImages = new Set(installationImages);
      expect(uniqueImages.size).toBe(12);

      // Filter by "Robotics" (3 cells)
      const roboticsTab = screen.getByRole("tab", { name: /Robotics/i });
      fireEvent.click(roboticsTab);
      expect(screen.getAllByTestId("gallery-installation-card")).toHaveLength(3);

      // Reset to "All" and open Project Lightbox Modal
      const allTab = screen.getByRole("tab", { name: /All/i });
      fireEvent.click(allTab);

      const inspectBtns = screen.getAllByRole("button", {
        name: /Inspect Installation/i,
      });
      fireEvent.click(inspectBtns[0]);

      const dialog = screen.getByRole("dialog");
      expect(dialog).toBeInTheDocument();
      expect(within(dialog).getByText(/PROJECT 01 OF 12/i)).toBeInTheDocument();
    });
  });
});
