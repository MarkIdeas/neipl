import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container, Eyebrow } from "@/components/ui";
import { ArrowRightIcon } from "@/components/icons";
import { ServicesExplorer } from "@/components/services/ServicesExplorer";

export const metadata: Metadata = {
  title: "Solutions & Engineering Capabilities",
  description:
    "End-to-end industrial automation, CPRI-certified 6000A electrical panel design, robotics integration, Yaskawa drive repair, Yokogawa instrumentation, and 24/7 AMC contracts.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* 1. Services Hero (Dark Industrial Theme) */}
      <section
        id="hero"
        aria-label="Services Hero"
        className="relative flex min-h-[55vh] items-center overflow-hidden bg-canvas py-24"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services-clean-bg.jpg"
            alt="Pristine Automated Production Line"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-canvas/85 via-canvas/90 to-canvas"
          />
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/4 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-amber-500/10 blur-[140px]"
          />
        </div>

        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow center>Solutions Ecosystem</Eyebrow>
            <h1 className="mt-4 text-[clamp(2.5rem,5vw,4.25rem)] font-extrabold tracking-tight leading-[1.12] text-white">
              End-to-End Industrial <br />
              <span className="text-amber-500">Automation & Engineering</span>
            </h1>
            <p className="mt-6 text-[17px] leading-relaxed text-slate-300">
              From preliminary single-line electrical design and CPRI 6000A switchboard manufacturing to turnkey robotics deployment and 24/7 AMC lifecycle support.
            </p>

            {/* Quick Proof Badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {[
                "✓ CPRI Tested to 6000A",
                "✓ Yaskawa Authorized Partner",
                "✓ Yokogawa Channel Partner",
                "✓ 24/7 Rapid Response SLA",
              ].map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[12px] font-bold text-amber-400 backdrop-blur-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Interactive Services Explorer (Client Component with Scrollspy & Mobile Tabs) */}
      <ServicesExplorer />

      {/* 3. Bottom CTA (Dark Theme) */}
      <section className="bg-canvas py-20 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow center>Turnkey Execution</Eyebrow>
            <h2 className="mt-3 text-[28px] sm:text-[34px] font-extrabold text-white">
              Ready to Upgrade or Commission Your Plant Automation?
            </h2>
            <p className="mt-3 text-[16px] text-slate-300">
              Speak directly with our senior systems engineers in Hyderabad or Pune to discuss single-line sizing, delivery lead times, and on-site commissioning.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-[14px] font-extrabold text-slate-950 shadow-md transition-all hover:bg-amber-400"
              >
                <span>Request Engineering Consultation</span>
                <ArrowRightIcon size={16} />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-[14px] font-bold text-white transition-all hover:bg-white/15"
              >
                <span>Explore OEM Product Catalogue</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
