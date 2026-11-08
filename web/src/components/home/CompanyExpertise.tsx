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
      aria-label="Two Decades of Engineering Legacy"
      className="relative min-h-[calc(100vh-4.5rem)] flex flex-col justify-between bg-navy-dark py-6 sm:py-8 border-y border-slate-800 text-white overflow-hidden"
    >
      <Container className="flex-1 flex flex-col justify-between gap-4 sm:gap-5">
        {/* Full-Width Executive Header (Top of Section - Natural Source Order) */}
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <Eyebrow>Two Decades of Engineering Legacy</Eyebrow>
            <SectionHeading className="mt-1 text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white">
              From Jeedimetla Workshop in 2006 to National Infrastructure Scale as NEIPL
            </SectionHeading>
            <p className="mt-1 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              Founded in 2006 with our Western Region technology center in MIDC Bhosari, Pune, our zero-compromise electrical engineering earned 15 CPRI certificates, 6000A short-circuit ratings, and the trust of Indian Railways and state power utilities.
            </p>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/5 px-3.5 py-1.5 text-xs font-bold text-white transition-all hover:border-amber-400 hover:bg-amber-500 hover:text-slate-950 shadow-2xs self-start md:self-auto flex-none"
          >
            <span>Explore Engineering Profile</span>
            <ArrowRightIcon size={14} />
          </Link>
        </div>

        {/* Balanced 50/50 Dual Stage (Left: Technical Authority | Right: Physical Facilities) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-stretch flex-1">
          {/* Left Column: 4 Authority Pillars, FAT Protocol & CTAs (Order 3 on Mobile, Order 1 on Desktop) */}
          <div
            data-testid="engineering-proof-grid"
            className="order-3 lg:order-1 flex flex-col justify-between space-y-3"
          >
            {/* 2x2 Metric Authority Cards */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              {/* Card 1: 6000A CPRI */}
              <div
                data-testid="engineering-proof-card"
                className="group rounded-xl border border-white/10 bg-white/5 p-3.5 sm:p-4 transition-all duration-300 hover:border-amber-400/50 hover:bg-white/10 shadow-xs"
              >
                <div className="flex items-center justify-between gap-1">
                  <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-amber-500/15 text-amber-400 border border-amber-500/25">
                    <BoltIcon size={16} />
                  </div>
                  <span className="rounded-full bg-amber-500/15 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-amber-400 border border-amber-500/30">
                    IS/IEC 61439
                  </span>
                </div>
                <span
                  ref={cpriRef}
                  className="mt-2.5 sm:mt-3 block font-mono text-2xl sm:text-3xl font-black text-amber-400 leading-none"
                >
                  {cpriDisplay}
                </span>
                <h4 className="mt-1.5 text-xs sm:text-sm font-bold text-white leading-snug">
                  CPRI Type-Tested Switchboards
                </h4>
                <p className="mt-1 text-[11px] leading-relaxed text-slate-400">
                  Certified short-circuit withstand &amp; arc-fault containment rating for LT panels.
                </p>
              </div>

              {/* Card 2: 20+ Years */}
              <div
                data-testid="engineering-proof-card"
                className="group rounded-xl border border-white/10 bg-white/5 p-3.5 sm:p-4 transition-all duration-300 hover:border-amber-400/50 hover:bg-white/10 shadow-xs"
              >
                <div className="flex items-center justify-between gap-1">
                  <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-amber-500/15 text-amber-400 border border-amber-500/25">
                    <ClockIcon size={16} />
                  </div>
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-slate-300">
                    Est. 2006
                  </span>
                </div>
                <span
                  ref={yearsRef}
                  className="mt-2.5 sm:mt-3 block font-mono text-2xl sm:text-3xl font-black text-amber-400 leading-none"
                >
                  {yearsDisplay}
                </span>
                <h4 className="mt-1.5 text-xs sm:text-sm font-bold text-white leading-snug">
                  Years of Turnkey Heritage
                </h4>
                <p className="mt-1 text-[11px] leading-relaxed text-slate-400">
                  Proven industrial automation &amp; commissioning across Indian PSUs and private plants.
                </p>
              </div>

              {/* Card 3: A-Grade License */}
              <div
                data-testid="engineering-proof-card"
                className="group rounded-xl border border-white/10 bg-white/5 p-3.5 sm:p-4 transition-all duration-300 hover:border-amber-400/50 hover:bg-white/10 shadow-xs"
              >
                <div className="flex items-center justify-between gap-1">
                  <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-amber-500/15 text-amber-400 border border-amber-500/25">
                    <WrenchShieldIcon size={16} />
                  </div>
                  <span className="rounded-full bg-amber-500/15 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-amber-400 border border-amber-500/30">
                    Govt. Certified
                  </span>
                </div>
                <span className="mt-2.5 sm:mt-3 block font-mono text-2xl sm:text-3xl font-black text-amber-400 leading-none">
                  A-Grade
                </span>
                <h4 className="mt-1.5 text-xs sm:text-sm font-bold text-white leading-snug">
                  Electrical Contractor License
                </h4>
                <p className="mt-1 text-[11px] leading-relaxed text-slate-400">
                  Government-authorized for high-voltage substation, transformer &amp; plant installations.
                </p>
              </div>

              {/* Card 4: 6 Tier-1 OEMs */}
              <div
                data-testid="engineering-proof-card"
                className="group rounded-xl border border-white/10 bg-white/5 p-3.5 sm:p-4 transition-all duration-300 hover:border-amber-400/50 hover:bg-white/10 shadow-xs"
              >
                <div className="flex items-center justify-between gap-1">
                  <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-amber-500/15 text-amber-400 border border-amber-500/25">
                    <GearIcon size={16} />
                  </div>
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-slate-300">
                    Direct Channel
                  </span>
                </div>
                <span
                  ref={oemRef}
                  className="mt-2.5 sm:mt-3 block font-mono text-2xl sm:text-3xl font-black text-amber-400 leading-none"
                >
                  {oemDisplay}
                </span>
                <h4 className="mt-1.5 text-xs sm:text-sm font-bold text-white leading-snug">
                  Global OEM Alliances
                </h4>
                <p className="mt-1 text-[11px] leading-relaxed text-slate-400">
                  Authorized system integrator for Yaskawa, Siemens, Yokogawa, Baumer, Honeywell &amp; GIC.
                </p>
              </div>
            </div>

            {/* Compact 4-Point Factory Acceptance Testing (FAT) Protocol Strip */}
            <div className="rounded-xl border border-white/10 bg-slate-950/60 p-3 sm:p-3.5">
              <div className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 mb-2">
                Mandatory 4-Stage Factory Acceptance Testing (FAT) Protocol
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {FAT_PROTOCOLS.map((protocol) => (
                  <div
                    key={protocol}
                    className="flex items-center gap-2 text-[11px] font-semibold text-slate-200"
                  >
                    <span className="flex h-4 w-4 flex-none items-center justify-center rounded-full bg-amber-500/20 text-amber-400">
                      <CheckIcon size={10} />
                    </span>
                    <span className="truncate">{protocol}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Dual Action Links */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 rounded-lg bg-amber-500 px-4 py-2 text-xs font-extrabold text-slate-950 transition-all hover:bg-amber-400 shadow-sm"
              >
                <span>Explore Engineering Profile</span>
                <ArrowRightIcon size={14} />
              </Link>
              <Link
                href="/about#certifications"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-xs font-bold text-white transition-all hover:border-amber-400/50 hover:bg-white/10"
              >
                <span>View CPRI Credentials</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Composite Visual Showcase & Dual Infrastructure Hubs (Order 2 on Mobile, Order 2 on Desktop) */}
          <div
            data-testid="engineering-visual-showcase"
            className="order-2 lg:order-2 flex flex-col rounded-2xl border border-white/15 bg-slate-950 shadow-xl overflow-hidden"
          >
            {/* Primary Facility Widescreen 16:9 Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900 flex-none">
              <Image
                src="/images/panel_indian.jpg"
                alt="CPRI Certified Panel Assembly Facility in Hyderabad"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent"
              />

              {/* Top Floating Verification Seals */}
              <div className="absolute top-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/85 backdrop-blur-md px-2.5 py-0.5 text-[10.5px] font-bold text-white border border-white/15">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ISO &amp; CPRI Compliant Works</span>
                </span>
                <span className="rounded-md bg-amber-500 px-2.5 py-0.5 font-mono text-[10.5px] font-extrabold uppercase text-slate-950 shadow-sm">
                  6000A Fault Rated
                </span>
              </div>
            </div>

            {/* Dual Manufacturing & Engineering Hubs Console */}
            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3 bg-slate-950 border-t border-white/10">
              {/* Hub 1: Hyderabad HQ */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-amber-500 text-slate-950 shadow-sm">
                  <CheckIcon size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h5 className="text-xs sm:text-sm font-extrabold text-white truncate">
                      Jeedimetla Works HQ · Hyderabad
                    </h5>
                    <span className="rounded bg-amber-500/20 px-2 py-0.5 text-[9.5px] font-bold text-amber-400">
                      100% FAT Tested
                    </span>
                  </div>
                  <p className="mt-0.5 text-[11.5px] leading-relaxed text-slate-300">
                    Plot No. 78/A/2 &amp; 3, Phase VI, Industrial Park — CNC sheet-metal fabrication, copper busbar shaping, robotic cell integration &amp; 2.5kV HV testing bay.
                  </p>
                </div>
              </div>

              {/* Architectural Divider */}
              <div className="border-t border-white/10" />

              {/* Hub 2: Pune Branch */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-white/10 text-amber-400 border border-white/10">
                  <MapPinIcon size={16} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h5 className="text-xs sm:text-sm font-bold text-white truncate">
                      Western Region Hub · Pune
                    </h5>
                    <span className="rounded bg-white/10 px-2 py-0.5 text-[9.5px] font-semibold text-slate-300">
                      Branch Office
                    </span>
                  </div>
                  <p className="mt-0.5 text-[11.5px] text-slate-400">
                    J135, MIDC Bhosari, Pune 411 026 — Supporting Maharashtra industrial corridors, component VFD diagnostics &amp; 24/7 AMC dispatch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
