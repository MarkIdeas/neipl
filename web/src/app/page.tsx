import React from "react";
import {
  Hero,
  ClientsPartnersMarquee,
  ThreeStepPlan,
  IndustriesCinematic,
  SolutionsEcosystem,
  CompanyExpertise,
  FeaturedCaseStudies,
  ClientEndorsements,
  EnquiryCtaBanner,
} from "@/components/home";

export default function HomePage() {
  return (
    <>
      {/* 01. StoryBrand Cinematic Industrial Hero (Dark Theme) */}
      <Hero />

      {/* 02. Dual Auto-Scrolling Clients & OEM Partners Strips (Bright Theme) */}
      <ClientsPartnersMarquee />

      {/* 03. 3-Step Adoption Plan & Turnkey Delivery Comparison (Dark Theme) */}
      <ThreeStepPlan />

      {/* 04. Industries with Interactive Pan-Out Cards (Dark Cinematic Theme) */}
      <IndustriesCinematic />

      {/* 05. Solutions & Capabilities Ecosystem (Bright Theme) */}
      <SolutionsEcosystem />

      {/* 06. Engineering Proof Points & CPRI 6000A Expertise (Dark Theme) */}
      <CompanyExpertise />

      {/* 07. Featured Projects & Case Studies (Bright Theme) */}
      <FeaturedCaseStudies />

      {/* 08. Verified Client Endorsements & Scans (Dark Theme) */}
      <ClientEndorsements />

      {/* 09. Project Enquiry CTA (Bright Theme) */}
      <EnquiryCtaBanner />
    </>
  );
}

