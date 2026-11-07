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

      {/* 02. Credibility & 3-Step Execution Plan (Unified Master Bright Section) */}
      <section
        id="credibility-and-execution"
        className="relative min-h-[calc(100vh-4.5rem)] flex flex-col justify-evenly bg-white border-y border-slate-200/90 text-slate-900 overflow-hidden py-8 sm:py-12"
      >
        {/* Tier 1: Clients & OEM Partners Cotmac-Style Paced Slider */}
        <ClientsPartnersMarquee />

        {/* Seamless Architectural Divider */}
        <div className="mx-auto max-w-5xl w-full px-4 sm:px-6 my-2 sm:my-3">
          <div className="border-t border-slate-200/80" />
        </div>

        {/* Tier 2: 3-Step Adoption Plan & Turnkey Delivery Guarantee */}
        <ThreeStepPlan />
      </section>

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
