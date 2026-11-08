import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { industries } from "@/content/pages";
import { IndustryViewer, type IndustryItem } from "@/components/industries/IndustryViewer";
import { Container, Eyebrow, SectionHeading, ButtonLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Explore the 13 major industries served by Nandini Enterprises with turnkey automation, robotics, and CPRI-certified electrical panels.",
  alternates: {
    canonical: "/industries",
  },
};

export default function IndustriesPage() {
  const viewerIndustries: readonly IndustryItem[] = industries.map((i) => ({
    name: i.name,
    desc: i.desc,
    img: i.img || "/images/subpage_bg.jpg",
  }));

  return (
    <>
      {/* 1. Industries Hero */}
      <section
        id="hero"
        aria-label="Industries Hero"
        className="relative flex min-h-[50vh] items-center overflow-hidden py-24"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_industrial.jpg"
            alt="Multi-Industry Automated Facility"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-canvas/80 via-canvas/95 to-canvas"
          />
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/3 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[140px]"
          />
        </div>

        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow center>Cross-Sector Impact</Eyebrow>
            <h1 className="mt-4 text-[clamp(2.5rem,5vw,4.25rem)] font-extrabold tracking-tight leading-[1.15] text-text-white">
              Industries We <br />
              <span className="text-accent">Power & Automate</span>
            </h1>
            <p className="mt-6 text-[18px] leading-relaxed text-text-muted">
              Delivering precision process control, CPRI-certified electrical switchgear, and robust
              robotics across 13 major industrial sectors in India and internationally.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Interactive Industry Viewer (Bright Theme) */}
      <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-24 text-slate-900">
        <Container>
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <Eyebrow center>Domain Expertise</Eyebrow>
            <SectionHeading className="mt-3 text-slate-950">
              Comprehensive Sector Coverage
            </SectionHeading>
            <p className="mt-3 text-[15px] sm:text-[16px] text-slate-600">
              Select any industry below to inspect our specific engineering deployments and applications.
            </p>
          </div>

          <IndustryViewer industries={viewerIndustries} />
        </Container>
      </section>

      {/* 3. Bottom CTA */}
      <section className="border-t border-line bg-canvas py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-[28px] font-extrabold text-text-white">
              Have a Sector-Specific Automation Requirement?
            </h2>
            <p className="mt-3 text-[16px] text-text-muted">
              Our domain specialists are ready to review your specifications and compliance requirements.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <ButtonLink href="/contact" variant="primary" size="md">
                Talk to an Industry Specialist
              </ButtonLink>
              <ButtonLink href="/services" variant="ghost" size="md">
                Explore Services
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
