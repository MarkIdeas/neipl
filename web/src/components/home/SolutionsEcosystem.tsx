"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { certificates } from "@/content/pages";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";
import { CertificateLightboxModal } from "./ClientEndorsements";
import {
  GearIcon,
  RobotIcon,
  PlugIcon,
  BoltIcon,
  ChartIcon,
  CpuChipIcon,
  WrenchShieldIcon,
  ArrowRightIcon,
  CheckIcon,
  BuildingIcon,
} from "@/components/icons";

interface SolutionPairItem {
  num: string;
  title: string;
  shortLabel: string;
  anchor: string;
  badge: string;
  image: string;
  desc: string;
  bullets: readonly string[];
  icon: React.ComponentType<{ size?: number; className?: string }>;
  certIndex: number;
}

const ALL_SOLUTIONS: readonly SolutionPairItem[] = [
  {
    num: "01",
    title: "Industrial Automation",
    shortLabel: "Automation",
    anchor: "automation",
    badge: "PLC · SCADA · RTU",
    image: "/images/service_automation.jpg",
    desc: "Turnkey control system architecture: PLC, SCADA, RTU panels, HMI design, and fail-safe plant commissioning across continuous-process industries.",
    bullets: [
      "Turnkey PLC & RTU control panels",
      "Plant-wide SCADA telemetry",
      "Distributed fail-safe I/O architectures",
    ],
    icon: GearIcon,
    certIndex: 1, // Mahagenco Work Completion Certificate
  },
  {
    num: "02",
    title: "Robotics Integration",
    shortLabel: "Robotics",
    anchor: "robotics",
    badge: "Turnkey Workcells",
    image: "/images/service_robotics.jpg",
    desc: "Complete robotic workcells engineered for micron-level repeatability, arc welding, palletizing, and hazardous industrial material handling.",
    bullets: [
      "Robotic arc welding cells",
      "High-speed palletization & packaging",
      "Automated machine tending cells",
    ],
    icon: RobotIcon,
    certIndex: 6, // TPTY Traversers / Heavy Precision Positioning
  },
  {
    num: "03",
    title: "Electrical Panels (CPRI 6000A)",
    shortLabel: "CPRI Panels",
    anchor: "panels",
    badge: "CPRI Tested 6000A / 50kA",
    image: "/images/service_panels.jpg",
    desc: "CPRI type-tested low-tension switchboards and motor control centers engineered to withstand severe 6000A short circuit faults.",
    bullets: [
      "CPRI certified tested to 6000A",
      "AMF & APFC automatic capacitor banks",
      "Heavy-duty MCC & PCC switchboards",
    ],
    icon: PlugIcon,
    certIndex: 3, // Vasavadatta Cement (Aditya Birla)
  },
  {
    num: "04",
    title: "Drive Systems (Yaskawa Tier-1)",
    shortLabel: "Drives & Motion",
    anchor: "drives",
    badge: "Yaskawa Authorized Partner",
    image: "/images/service_drives.jpg?v=2",
    desc: "Variable frequency, servo, and DC drive engineering. Authorized tier-1 Yaskawa channel partner with factory-certified drive testing lab support.",
    bullets: [
      "Yaskawa GA700 & A1000 inverters",
      "Sigma-7 high-precision servos",
      "Crane VVVF anti-sway drive systems",
    ],
    icon: BoltIcon,
    certIndex: 0, // Visaka Industries VFD Performance Certificate
  },
  {
    num: "05",
    title: "Field Instrumentation (Yokogawa)",
    shortLabel: "Instrumentation",
    anchor: "instrumentation",
    badge: "Yokogawa Channel Partner",
    image: "/images/service_instrumentation.jpg",
    desc: "Precision process transmitters and measurement networks. Authorized Yokogawa channel partner for mission-critical industrial loops.",
    bullets: [
      "Differential pressure & flow loops",
      "Temperature & level transmitters",
      "Yokogawa certified loop calibration",
    ],
    icon: ChartIcon,
    certIndex: 2, // Yokogawa Authorization Letter
  },
  {
    num: "06",
    title: "Municipal & Heavy Pumping Systems",
    shortLabel: "Pumping SCADA",
    anchor: "embedded",
    badge: "Municipal Water PSU",
    image: "/images/service_embedded.jpg",
    desc: "Automated municipal water pumping station control, APFC energy mitigation banks, and distributed reservoir SCADA networks.",
    bullets: [
      "Automated multi-pump VVVF panels",
      "APFC power factor correction banks",
      "Reservoir level & telemetry loops",
    ],
    icon: CpuChipIcon,
    certIndex: 4, // Kolhapur Municipal Corporation (KMC)
  },
  {
    num: "07",
    title: "24/7 AMC & Railway Test Benches",
    shortLabel: "Railways & AMC",
    anchor: "maintenance",
    badge: "Indian Railways Proven",
    image: "/images/service_maintenance.jpg?v=2",
    desc: "Locomotive alternator test bench automation and round-the-clock emergency AMC contracts backed by dedicated spares depots in Hyderabad & Pune.",
    bullets: [
      "Locomotive dyno test bench rigs",
      "24/7 emergency breakdown dispatch",
      "Hyderabad & Pune genuine spares depots",
    ],
    icon: WrenchShieldIcon,
    certIndex: 5, // S.E.C. Railway Raipur Test Bench
  },
];

export function SolutionsEcosystem() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxCertIndex, setLightboxCertIndex] = useState<number | null>(null);

  const nextSlide = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % ALL_SOLUTIONS.length);
  }, []);

  useEffect(() => {
    if (isPaused || lightboxCertIndex !== null) return;
    const interval = setInterval(nextSlide, 4200);
    return () => clearInterval(interval);
  }, [isPaused, lightboxCertIndex, nextSlide]);

  const active = ALL_SOLUTIONS[activeIdx];
  const ActiveIcon = active.icon;
  const activeCert = certificates[active.certIndex] || certificates[0];
  const certCode = `CERT-${String(active.certIndex + 1).padStart(2, "0")}`;

  return (
    <section
      id="solutions"
      aria-label="Solutions Ecosystem and Verified Completion Records"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative min-h-[calc(100vh-4.5rem)] flex flex-col justify-evenly bg-white py-8 sm:py-12 text-slate-800 border-b border-slate-200/90 overflow-hidden"
    >
      <Container>
        {/* Compact Executive Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-4 sm:mb-6">
          <div>
            <Eyebrow>Capabilities &amp; Verified Proof</Eyebrow>
            <SectionHeading tone="dark" className="mt-1 text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-slate-900">
              End-to-End Capabilities Backed by Signed Completion Records
            </SectionHeading>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-2xl">
              Explore our core engineering disciplines, each paired directly with verified PSU and enterprise work completion certificates.
            </p>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-1.5 text-xs font-bold text-slate-800 transition-all hover:border-amber-500 hover:bg-amber-500 hover:text-white shadow-2xs self-start md:self-auto"
          >
            <span>Inspect All 15 Records in Gallery</span>
            <ArrowRightIcon size={14} />
          </Link>
        </div>

        {/* Top Horizontal Segmented Switcher Ribbon */}
        <div
          role="tablist"
          aria-label="Industrial Solutions Selector"
          className="flex overflow-x-auto no-scrollbar gap-1.5 sm:gap-2 pb-1 mb-5"
        >
          {ALL_SOLUTIONS.map((s, idx) => {
            const isActive = idx === activeIdx;
            const Icon = s.icon;
            return (
              <button
                key={s.num}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  setActiveIdx(idx);
                  setIsPaused(true);
                }}
                onMouseEnter={() => {
                  setActiveIdx(idx);
                  setIsPaused(true);
                }}
                className={`flex-none sm:flex-1 relative overflow-hidden inline-flex items-center justify-center gap-1.5 rounded-lg px-2.5 sm:px-3 py-2 text-xs font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-amber-500 text-slate-950 shadow-xs ring-1 ring-amber-600/30"
                    : "border border-slate-200 bg-slate-50/90 text-slate-700 hover:border-slate-300 hover:bg-slate-100"
                }`}
              >
                <Icon size={14} className={isActive ? "text-slate-950" : "text-slate-500"} />
                <span className="whitespace-nowrap">{s.shortLabel}</span>
                {isActive && !isPaused && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-950/40 animate-pulse"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Bottom Split Feature Stage: Capability (Left) + Signed Verification Record (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch rounded-2xl border border-slate-200/90 bg-slate-50/70 p-4 sm:p-6 shadow-xs">
          {/* Left Column: Solution Brief, Specs & Deliverables */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Badge & Number */}
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-amber-800 border border-amber-300 bg-amber-100/90 px-2 py-0.5 rounded-md">
                  {active.badge}
                </span>
                <span className="font-mono text-[10px] font-extrabold text-slate-400">
                  DISCIPLINE {active.num} OF 07
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-2 text-lg sm:text-xl lg:text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                <ActiveIcon size={20} className="text-amber-500 flex-none" />
                <span>{active.title}</span>
              </h3>

              {/* Description */}
              <p className="mt-2 text-xs sm:text-[13.5px] leading-relaxed text-slate-600">
                {active.desc}
              </p>

              {/* Engineered Deliverables Checklist */}
              <div className="mt-3.5 pt-3 border-t border-slate-200/80">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 block mb-1.5">
                  Engineered Deliverables &amp; Inclusions
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {active.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="flex items-start gap-1.5 rounded-md border border-slate-200/80 bg-white px-2 py-1.5 text-[11px] font-medium text-slate-800 shadow-2xs"
                    >
                      <span className="text-emerald-600 flex-none mt-0.5">
                        <CheckIcon size={12} />
                      </span>
                      <span className="leading-tight">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Action Links */}
            <div className="mt-4 pt-3 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
              <Link
                href={`/services#${active.anchor}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-amber-700 transition-colors"
              >
                <span>Explore Technical Specs</span>
                <ArrowRightIcon size={14} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-1.5 text-xs font-bold text-white transition-all hover:bg-slate-800 shadow-2xs"
              >
                <span>Request Quotation →</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Verified Signed Certificate & Performance Dossier Card */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-xs">
            <div>
              {/* Certificate Top Metadata Row */}
              <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-slate-200/80">
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-amber-100 border border-amber-300 px-2 py-0.5 font-mono text-[10px] font-extrabold text-amber-900">
                    {certCode}
                  </span>
                  {activeCert.sector && (
                    <span className="rounded-full bg-slate-100 border border-slate-200 px-2.5 py-0.5 text-[10px] font-semibold text-slate-600">
                      {activeCert.sector}
                    </span>
                  )}
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                  <CheckIcon size={10} />
                  <span>Signed &amp; Sealed Record</span>
                </span>
              </div>

              {/* Client Brand & Handover Document */}
              <div className="mt-3 flex items-start gap-3">
                {activeCert.logo ? (
                  <div className="flex h-11 w-18 flex-none items-center justify-center rounded-lg border border-slate-200 bg-white p-1 shadow-2xs">
                    <Image
                      src={activeCert.logo}
                      alt={`${activeCert.client} logo`}
                      width={64}
                      height={32}
                      className="max-h-8 w-auto object-contain"
                    />
                  </div>
                ) : (
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg border border-amber-300 bg-amber-50 font-mono text-xs font-black text-amber-800">
                    <BuildingIcon size={18} />
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm sm:text-[15px] font-extrabold text-slate-900 leading-tight truncate">
                    {activeCert.client}
                  </h4>
                  <p className="mt-0.5 text-[11px] font-bold uppercase tracking-wider text-amber-700 truncate">
                    {activeCert.doc}
                  </p>
                </div>
              </div>

              {/* Official Handover Scope */}
              <div className="mt-2.5 rounded-lg border border-slate-200/80 bg-slate-50 p-2.5 text-xs leading-relaxed text-slate-700">
                <span className="font-mono text-[9.5px] font-extrabold uppercase tracking-wider text-slate-500 block mb-0.5">
                  Handover Scope &amp; Deliverable:
                </span>
                {activeCert.scope}
              </div>
            </div>

            {/* Document Action Footer */}
            <div className="mt-3.5 pt-2.5 border-t border-slate-200/80 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setLightboxCertIndex(active.certIndex)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-amber-500 px-3 py-1.5 text-xs font-extrabold text-slate-950 shadow-2xs transition-all hover:bg-amber-400 cursor-pointer"
              >
                <span>Inspect Signed Scan</span>
                <ArrowRightIcon size={12} />
              </button>

              <a
                href={activeCert.href}
                target="_blank"
                rel="noopener noreferrer"
                title="Open original scan in new tab"
                className="text-[11px] font-semibold text-slate-500 hover:text-slate-800 transition-colors"
              >
                Raw Document Scan ↗
              </a>
            </div>
          </div>
        </div>

        {/* Sleek Bottom Credibility Bar */}
        <div className="mt-4 rounded-xl border border-slate-200/90 bg-slate-50/80 px-4 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs">
          <div className="flex flex-wrap items-center gap-2.5 text-slate-600">
            <span className="inline-flex items-center gap-1.5 text-emerald-700 font-bold">
              <CheckIcon size={14} />
              <span>15 Original Signed Certificates on File</span>
            </span>
            <span className="hidden md:inline text-slate-400">·</span>
            <span className="hidden md:inline text-slate-600">
              CPRI 6000A / 50kA Certified Type Test Reports
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/about#certifications"
              className="font-bold text-amber-700 hover:text-amber-800 transition-colors"
            >
              Credentials &amp; Awards →
            </Link>
            <Link
              href="/gallery"
              className="rounded-lg bg-slate-900 px-2.5 py-1 font-bold text-white hover:bg-slate-800 transition-colors"
            >
              Gallery Overview
            </Link>
          </div>
        </div>
      </Container>

      {/* Lightbox Modal for Full Signed Scan Preview */}
      <CertificateLightboxModal
        activeIndex={lightboxCertIndex}
        onClose={() => setLightboxCertIndex(null)}
        onSelectIndex={(idx) => setLightboxCertIndex(idx)}
      />
    </section>
  );
}
