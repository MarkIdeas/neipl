"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";
import { useCountUp } from "@/hooks/useCountUp";
import {
  CheckIcon,
  ArrowRightIcon,
  BoltIcon,
  ClockIcon,
  WrenchShieldIcon,
  GearIcon,
  MapPinIcon,
} from "@/components/icons";

const FAT_PROTOCOLS = [
  "IS/IEC 61439-1 & 2 Switchgear Compliance",
  "2.5kV Dielectric & Megger Insulation Tested",
  "IP54 / IP65 Dust & Moisture Ingress Rated",
  "Electrolytic ETP Grade Copper Busbar Sizing",
] as const;

export function CompanyExpertise() {
  const { display: cpriDisplay, ref: cpriRef } = useCountUp(6000, 1600, "A");
  const { display: yearsDisplay, ref: yearsRef } = useCountUp(20, 1400, "+");
  const { display: oemDisplay, ref: oemRef } = useCountUp(6, 1200, " Tier-1");

  return (
    <section
      id="engineering-standards"
      className="border-y border-slate-800 bg-navy-dark py-20 sm:py-32 text-white"
    >
      <Container>
        {/*
          Responsive 12-Column Grid:
          - Mobile (< lg):
            1. Heading & Intro (order-1)
            2. Visual Facility Image & Dual-Hub Showcase (order-2) — visible right under the title without scrolling to the bottom
            3. 2x2 Proof Cards + FAT Protocol + CTAs (order-3)
          - Desktop (lg+):
            Left 7 cols: Heading (row 1) + Proof Cards & CTAs (row 2)
            Right 5 cols: Visual Facility Showcase spanning both rows (lg:col-start-8 lg:row-start-1 lg:row-span-2)
        */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-8 items-start">
          {/* 1. Heading & Intro (Order 1 on Mobile, Top-Left on Desktop) */}
          <div className="order-1 lg:col-span-7">
            <Eyebrow>Two Decades of Engineering Legacy</Eyebrow>
            <SectionHeading className="mt-3 text-white">
              From Jeedimetla Workshop in 2006 to <br />
              <span className="text-amber-400">National Infrastructure Scale as NEIPL</span>
            </SectionHeading>
            <p className="mt-4 sm:mt-5 text-[15px] sm:text-[16px] leading-relaxed text-slate-300">
              Founded in 2006 in Jeedimetla, Hyderabad, with our Western Region technology center in MIDC Bhosari, Pune, Nandini Enterprises was built on one unbreakable engineering pledge: zero-compromise electrical safety. Over twenty years, that rigor earned 15 CPRI certificates, 6000A short-circuit ratings, and the trust of Indian Railways and state power utilities. Today, that legacy advances as <strong className="text-white font-semibold">NEIPL</strong> — bridging Robotics, Advanced Telemetry, and National Civil Infrastructure.
            </p>
          </div>

          {/* 2. Composite Visual Showcase Frame (Order 2 on Mobile — Immediately Visible; Right Column on Desktop) */}
          <div
            data-testid="engineering-visual-showcase"
            className="order-2 lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2 self-center"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-slate-950 shadow-2xl">
              {/* Primary Facility Image */}
              <div className="relative aspect-[16/11] sm:aspect-[4/4.2] w-full overflow-hidden bg-slate-900">
                <Image
                  src="/images/panel_indian.jpg"
                  alt="CPRI Certified Panel Assembly Facility in Hyderabad"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent"
                />

                {/* Top Floating Verification Seal */}
                <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/85 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-white border border-white/15">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>ISO &amp; CPRI Compliant Works</span>
                  </span>
                  <span className="rounded-md bg-amber-500 px-2.5 py-1 font-mono text-[11px] font-extrabold uppercase text-slate-950 shadow-sm">
                    6000A Fault Rated
                  </span>
                </div>
              </div>

              {/* Dual Manufacturing & Engineering Hubs Overlay Card */}
              <div className="p-4 sm:p-6 bg-slate-950 border-t border-white/10 space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-amber-500 text-slate-950 shadow-md">
                    <CheckIcon size={20} />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h5 className="text-[14px] sm:text-[15px] font-extrabold text-white">
                        Jeedimetla Works HQ · Hyderabad
                      </h5>
                      <span className="rounded bg-amber-500/20 px-2 py-0.5 text-[10px] font-bold text-amber-400">
                        100% FAT Tested Before Dispatch
                      </span>
                    </div>
                    <p className="mt-1 text-[12px] leading-relaxed text-slate-300">
                      Plot No. 78/A/2 &amp; 3, Phase VI, Industrial Park — In-house CNC sheet-metal fabrication, copper busbar shaping, robotic cell integration &amp; HV testing bay.
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-3.5 flex items-start gap-3.5">
                  <div className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-white/10 text-amber-400 border border-white/10">
                    <MapPinIcon size={18} />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h5 className="text-[13px] sm:text-[14px] font-bold text-white">
                        Western Region Hub · Pune
                      </h5>
                      <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-slate-300">
                        Branch Office
                      </span>
                    </div>
                    <p className="mt-0.5 text-[12px] text-slate-400">
                      J135, MIDC Bhosari, Pune 411 026 — Supporting Maharashtra industrial corridors &amp; 24/7 AMC dispatch.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. 2x2 Animated Proof Cards, FAT Strip & CTAs (Order 3 on Mobile, Bottom-Left on Desktop) */}
          <div
            data-testid="engineering-proof-grid"
            className="order-3 lg:col-span-7"
          >
            {/* 2x2 Animated Engineering Proof Cards (2 cols on both Mobile & Desktop) */}
            <div className="grid grid-cols-2 gap-3 sm:gap-5">
              {/* Card 1: 6000A CPRI */}
              <div
                data-testid="engineering-proof-card"
                className="group rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 transition-all duration-300 hover:border-amber-400/50 hover:bg-white/10"
              >
                <div className="flex items-center justify-between gap-1">
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/25">
                    <BoltIcon size={18} />
                  </div>
                  <span className="rounded-full bg-amber-500/15 px-2 py-0.5 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-amber-400 border border-amber-500/30">
                    IS/IEC 61439
                  </span>
                </div>
                <span
                  ref={cpriRef}
                  className="mt-3 sm:mt-4 block font-mono text-[24px] sm:text-[32px] font-black text-amber-400 leading-none"
                >
                  {cpriDisplay}
                </span>
                <h4 className="mt-2 text-[13px] sm:text-[15px] font-bold text-white leading-snug">
                  CPRI Type-Tested Switchboards
                </h4>
                <p className="mt-1 text-[11px] sm:text-[12px] leading-relaxed text-slate-400">
                  Certified short-circuit withstand &amp; arc-fault containment rating for LT panels.
                </p>
              </div>

              {/* Card 2: 20+ Years */}
              <div
                data-testid="engineering-proof-card"
                className="group rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 transition-all duration-300 hover:border-amber-400/50 hover:bg-white/10"
              >
                <div className="flex items-center justify-between gap-1">
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/25">
                    <ClockIcon size={18} />
                  </div>
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-slate-300">
                    Est. 2006
                  </span>
                </div>
                <span
                  ref={yearsRef}
                  className="mt-3 sm:mt-4 block font-mono text-[24px] sm:text-[32px] font-black text-amber-400 leading-none"
                >
                  {yearsDisplay}
                </span>
                <h4 className="mt-2 text-[13px] sm:text-[15px] font-bold text-white leading-snug">
                  Years of Turnkey Heritage
                </h4>
                <p className="mt-1 text-[11px] sm:text-[12px] leading-relaxed text-slate-400">
                  Proven industrial automation &amp; commissioning across Indian PSUs and private plants.
                </p>
              </div>

              {/* Card 3: A-Grade License */}
              <div
                data-testid="engineering-proof-card"
                className="group rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 transition-all duration-300 hover:border-amber-400/50 hover:bg-white/10"
              >
                <div className="flex items-center justify-between gap-1">
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/25">
                    <WrenchShieldIcon size={18} />
                  </div>
                  <span className="rounded-full bg-amber-500/15 px-2 py-0.5 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-amber-400 border border-amber-500/30">
                    Govt. Certified
                  </span>
                </div>
                <span className="mt-3 sm:mt-4 block font-mono text-[22px] sm:text-[30px] font-black text-amber-400 leading-none">
                  A-Grade
                </span>
                <h4 className="mt-2 text-[13px] sm:text-[15px] font-bold text-white leading-snug">
                  Electrical Contractor License
                </h4>
                <p className="mt-1 text-[11px] sm:text-[12px] leading-relaxed text-slate-400">
                  Government-authorized for high-voltage substation, transformer &amp; plant installations.
                </p>
              </div>

              {/* Card 4: 6 Tier-1 OEMs */}
              <div
                data-testid="engineering-proof-card"
                className="group rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 transition-all duration-300 hover:border-amber-400/50 hover:bg-white/10"
              >
                <div className="flex items-center justify-between gap-1">
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/25">
                    <GearIcon size={18} />
                  </div>
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-slate-300">
                    Direct Channel
                  </span>
                </div>
                <span
                  ref={oemRef}
                  className="mt-3 sm:mt-4 block font-mono text-[22px] sm:text-[30px] font-black text-amber-400 leading-none"
                >
                  {oemDisplay}
                </span>
                <h4 className="mt-2 text-[13px] sm:text-[15px] font-bold text-white leading-snug">
                  Global OEM Alliances
                </h4>
                <p className="mt-1 text-[11px] sm:text-[12px] leading-relaxed text-slate-400">
                  Authorized system integrator for Yaskawa, Siemens, Yokogawa, Baumer, Honeywell &amp; GIC.
                </p>
              </div>
            </div>

            {/* 4-Point Factory Acceptance Testing (FAT) Protocol Strip */}
            <div className="mt-5 sm:mt-6 rounded-2xl border border-white/10 bg-slate-950/60 p-4 sm:p-5">
              <div className="text-[11px] font-extrabold uppercase tracking-widest text-amber-400 mb-3">
                Mandatory 4-Stage Factory Acceptance Testing (FAT) Protocol
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {FAT_PROTOCOLS.map((protocol) => (
                  <div
                    key={protocol}
                    className="flex items-center gap-2 text-[12px] font-semibold text-slate-200"
                  >
                    <span className="flex h-4 w-4 flex-none items-center justify-center rounded-full bg-amber-500/20 text-amber-400">
                      <CheckIcon size={10} />
                    </span>
                    <span>{protocol}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* High-Contrast Action Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 sm:px-6 py-3 sm:py-3.5 text-[13px] sm:text-[14px] font-extrabold text-slate-950 transition-all hover:bg-amber-400 shadow-lg shadow-amber-500/20"
              >
                <span>Explore Engineering Profile</span>
                <ArrowRightIcon size={16} />
              </Link>
              <Link
                href="/about#certifications"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 sm:px-6 py-3 sm:py-3.5 text-[13px] sm:text-[14px] font-bold text-white transition-all hover:border-amber-400/50 hover:bg-white/10"
              >
                <span>View CPRI &amp; Statutory Credentials</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
