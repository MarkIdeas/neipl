import React from "react";
import {
  Hero,
  ClientsPartnersMarquee,
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
      {/* 01. Cinematic Industrial Hero (Dark Theme) */}
      <Hero />

      {/* 02. Dual Auto-Scrolling Clients & OEM Partners Strips (Bright Theme) */}
      <ClientsPartnersMarquee />

      {/* 03. Industries with Interactive Pan-Out Cards (Dark Cinematic Theme) */}
      <IndustriesCinematic />

      {/* 04. Solutions & Capabilities Ecosystem (Bright Theme) */}
      <SolutionsEcosystem />

      {/* 05. Engineering Proof Points & CPRI 6000A Expertise (Dark Theme) */}
      <CompanyExpertise />

      {/* 06. Featured Projects & Case Studies (Bright Theme) */}
      <FeaturedCaseStudies />

      {/* 07. Verified Client Endorsements & Scans (Dark Theme) */}
      <ClientEndorsements />

      {/* 08. Project Enquiry CTA (Bright Theme) */}
      <EnquiryCtaBanner />
    </>
  );
}
