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
  proof1Index: number;
  proof2Index: number;
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
    proof1Index: 1, // Mahagenco Work Completion Certificate (CERT-02)
    proof2Index: 11, // Vishwa Engineering Excellence (CERT-12)
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
    proof1Index: 6, // TPTY Traversers / Railway Workshops (CERT-07)
    proof2Index: 9, // DCS Limited (CERT-10)
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
    proof1Index: 3, // Vasavadatta Cement / Aditya Birla (CERT-04)
    proof2Index: 10, // ARM Limited, Kenya (CERT-11)
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
    proof1Index: 0, // Visaka Industries VFD Performance Certificate (CERT-01)
    proof2Index: 12, // Ganesh Agro Industries (CERT-13)
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
    proof1Index: 2, // Yokogawa India Authorization Letter (CERT-03)
    proof2Index: 7, // Vaishali Agro Soya Products (CERT-08)
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
    proof1Index: 4, // Kolhapur Municipal Corporation (CERT-05)
    proof2Index: 8, // Narayan Agro Oils (CERT-09)
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
    proof1Index: 5, // S.E.C. Railway Raipur Dyno Test Bench (CERT-06)
    proof2Index: 13, // Sanchalan Bhavan / South Central Railway (CERT-14)
  },
];

function ProofCard({
  certIndex,
  onInspect,
}: {
  certIndex: number;
  onInspect: (idx: number) => void;
}) {
  const cert = certificates[certIndex];
  if (!cert) return null;
  const certCode = `CERT-${String(certIndex + 1).padStart(2, "0")}`;

  return (
    <div className="flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-3.5 sm:p-4 shadow-xs">
      <div>
        {/* Certificate Top Metadata Row */}
        <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-200/80">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="rounded-md bg-amber-100 border border-amber-300 px-1.5 py-0.5 font-mono text-[10px] font-extrabold text-amber-900 flex-none">
              {certCode}
            </span>
            {cert.sector && (
              <span className="rounded-full bg-slate-100 border border-slate-200 px-2 py-0.5 text-[9.5px] font-semibold text-slate-600 truncate">
                {cert.sector}
              </span>
            )}
          </div>
          <span className="flex-none inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[9.5px] font-bold text-emerald-800">
            <CheckIcon size={10} />
            <span>Signed Record</span>
          </span>
        </div>

        {/* Client Brand & Handover Document */}
        <div className="mt-2.5 flex items-center gap-2.5">
          {cert.logo ? (
            <div className="flex h-10 w-16 flex-none items-center justify-center rounded-lg border border-slate-200 bg-white p-1 shadow-2xs">
              <Image
                src={cert.logo}
                alt={`${cert.client} logo`}
                width={56}
                height={28}
                className="max-h-7 w-auto object-contain"
              />
            </div>
          ) : (
            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-amber-300 bg-amber-50 font-mono text-xs font-black text-amber-800">
              <BuildingIcon size={16} />
            </div>
          )}
          <div className="min-w-0 flex-1">
            <h4 className="text-xs sm:text-[13.5px] font-extrabold text-slate-900 leading-tight truncate">
              {cert.client}
            </h4>
            <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-700 truncate">
              {cert.doc}
            </p>
          </div>
        </div>

        {/* Official Handover Scope */}
        <div className="mt-2 rounded-lg border border-slate-200/80 bg-slate-50 p-2 text-[11px] leading-snug text-slate-700 line-clamp-2">
          <span className="font-mono text-[9px] font-extrabold uppercase tracking-wider text-slate-500 block mb-0.5">
            Scope &amp; Deliverable:
          </span>
          {cert.scope}
        </div>
      </div>

      {/* Document Action Footer */}
      <div className="mt-2.5 pt-2 border-t border-slate-200/80 flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => onInspect(certIndex)}
          className="inline-flex items-center gap-1 rounded-lg bg-amber-500 px-2.5 py-1 text-[11px] font-extrabold text-slate-950 shadow-2xs transition-all hover:bg-amber-400 cursor-pointer"
        >
          <span>Inspect Signed Scan</span>
          <ArrowRightIcon size={11} />
        </button>

        <a
          href={cert.href}
          target="_blank"
          rel="noopener noreferrer"
          title="Open original scan in new tab"
          className="text-[10px] font-semibold text-slate-500 hover:text-slate-800 transition-colors"
        >
          Raw Scan ↗
        </a>
      </div>
    </div>
  );
}

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

  return (
    <section
      id="solutions"
      aria-label="Solutions Ecosystem and Verified Completion Records"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative min-h-[calc(100vh-4.5rem)] flex flex-col justify-evenly bg-white py-6 sm:py-8 text-slate-800 border-b border-slate-200/90 overflow-hidden"
    >
      <Container>
        {/* Compact Executive Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-3.5 sm:mb-4">
          <div>
            <Eyebrow>Capabilities &amp; Verified Proof</Eyebrow>
            <SectionHeading tone="dark" className="mt-1 text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-slate-900">
              End-to-End Capabilities Backed by Signed Completion Records
            </SectionHeading>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-2xl">
              Explore our core engineering disciplines, each paired directly with field photos and verified PSU &amp; enterprise work completion certificates.
            </p>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-800 transition-all hover:border-amber-500 hover:bg-amber-500 hover:text-white shadow-2xs self-start md:self-auto"
          >
            <span>Inspect All 15 Records in Gallery</span>
            <ArrowRightIcon size={14} />
          </Link>
        </div>

        {/* Top Horizontal Segmented Switcher Ribbon */}
        <div
          role="tablist"
          aria-label="Industrial Solutions Selector"
          className="flex overflow-x-auto no-scrollbar gap-1.5 sm:gap-2 pb-1 mb-3.5 sm:mb-4"
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
                className={`flex-none sm:flex-1 relative overflow-hidden inline-flex items-center justify-center gap-1.5 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-xs font-bold transition-all duration-200 cursor-pointer ${
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

        {/* 2x2 Matrix Feature Stage: Row 1 (Specs + Industrial Photo) | Row 2 (Verified Proof 1 + Verified Proof 2) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 sm:gap-4 items-stretch">
          {/* Quadrant 1 (Top-Left): Capability Brief & Engineered Specs */}
          <div className="flex flex-col justify-between rounded-xl border border-slate-200/90 bg-slate-50/70 p-4 sm:p-5 shadow-xs">
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
              <h3 className="mt-2 text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                <ActiveIcon size={20} className="text-amber-500 flex-none" />
                <span>{active.title}</span>
              </h3>

              {/* Description */}
              <p className="mt-1.5 text-xs sm:text-[13px] leading-relaxed text-slate-600">
                {active.desc}
              </p>

              {/* Engineered Deliverables Checklist */}
              <div className="mt-3 pt-2.5 border-t border-slate-200/80">
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
            <div className="mt-3.5 pt-2.5 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
              <Link
                href={`/services#${active.anchor}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-amber-700 transition-colors"
              >
                <span>Explore Technical Specs</span>
                <ArrowRightIcon size={14} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-bold text-white transition-all hover:bg-slate-800 shadow-2xs"
              >
                <span>Request Quotation →</span>
              </Link>
            </div>
          </div>

          {/* Quadrant 2 (Top-Right): High-Definition Industrial Photo */}
          <div className="relative min-h-[200px] sm:min-h-[220px] rounded-xl border border-slate-200/90 overflow-hidden shadow-xs group bg-slate-900">
            <Image
              src={active.image}
              alt={active.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white gap-2">
              <div className="min-w-0">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-0.5">
                  Factory &amp; Field Reference
                </span>
                <p className="text-xs sm:text-sm font-extrabold text-white tracking-tight truncate">
                  {active.title} Execution
                </p>
              </div>
              <span className="flex-none rounded-md bg-slate-900/80 backdrop-blur-xs border border-white/20 px-2 py-0.5 font-mono text-[10px] font-bold text-amber-300">
                {active.badge}
              </span>
            </div>
          </div>

          {/* Quadrant 3 (Bottom-Left): Verified Proof #1 Card */}
          <ProofCard
            certIndex={active.proof1Index}
            onInspect={setLightboxCertIndex}
          />

          {/* Quadrant 4 (Bottom-Right): Verified Proof #2 Card */}
          <ProofCard
            certIndex={active.proof2Index}
            onInspect={setLightboxCertIndex}
          />
        </div>

        {/* Sleek Bottom Credibility Bar */}
        <div className="mt-3.5 sm:mt-4 rounded-xl border border-slate-200/90 bg-slate-50/80 px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
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
