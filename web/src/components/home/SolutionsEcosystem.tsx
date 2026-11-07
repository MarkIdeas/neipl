"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";
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
} from "@/components/icons";

interface SolutionItem {
  num: string;
  title: string;
  shortLabel: string;
  anchor: string;
  badge: string;
  image: string;
  desc: string;
  bullets: readonly string[];
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const ALL_SOLUTIONS: readonly SolutionItem[] = [
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
  },
  {
    num: "06",
    title: "Embedded & IoT Edge Gateways",
    shortLabel: "IoT & Embedded",
    anchor: "embedded",
    badge: "Custom Edge Firmware",
    image: "/images/service_embedded.jpg",
    desc: "Bespoke industrial electronics, microcontroller hardware engineering, edge telemetry gateways, and real-time cloud SCADA firmware.",
    bullets: [
      "Custom controller hardware & PCB design",
      "Industrial edge telemetry gateways",
      "Remote predictive diagnostics",
    ],
    icon: CpuChipIcon,
  },
  {
    num: "07",
    title: "24/7 AMC & Rapid Spares Depot",
    shortLabel: "24/7 AMC SLA",
    anchor: "maintenance",
    badge: "24/7 Rapid Response SLA",
    image: "/images/service_maintenance.jpg?v=2",
    desc: "Preventative and emergency annual maintenance contracts backed by 24/7 on-site field engineers and dedicated spares depots in Hyderabad & Pune.",
    bullets: [
      "24/7 emergency breakdown dispatch",
      "Preventative VVVF & servo servicing",
      "Hyderabad & Pune genuine spares depots",
    ],
    icon: WrenchShieldIcon,
  },
];

export function SolutionsEcosystem() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = ALL_SOLUTIONS[activeIdx];
  const ActiveIcon = active.icon;

  return (
    <section
      id="solutions"
      aria-label="Solutions and Capabilities Ecosystem"
      className="relative bg-white py-6 sm:py-8 lg:py-8 text-slate-800 border-b border-slate-200/90 overflow-hidden"
    >
      <Container>
        {/* Compact Executive Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-4 sm:mb-5">
          <div>
            <Eyebrow>Solutions Ecosystem</Eyebrow>
            <SectionHeading tone="dark" className="mt-1 text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-slate-900">
              End-to-End Industrial Capabilities
            </SectionHeading>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-2xl">
              From preliminary single-line engineering and CPRI 6000A panel fabrication to robotics commissioning and round-the-clock AMC lifecycle support.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-1.5 text-xs font-bold text-slate-800 transition-all hover:border-amber-500 hover:bg-amber-500 hover:text-white shadow-2xs self-start md:self-auto"
          >
            <span>Browse All 7 Verticals</span>
            <ArrowRightIcon size={14} />
          </Link>
        </div>

        {/* Top Horizontal Segmented Switcher Ribbon */}
        <div
          role="tablist"
          aria-label="Industrial Solutions Selector"
          className="flex overflow-x-auto no-scrollbar gap-1.5 sm:gap-2 pb-1 mb-4"
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
                onClick={() => setActiveIdx(idx)}
                onMouseEnter={() => setActiveIdx(idx)}
                className={`flex-none sm:flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg px-2.5 sm:px-3 py-2 text-xs font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-amber-500 text-slate-950 shadow-xs ring-1 ring-amber-600/30"
                    : "border border-slate-200 bg-slate-50/90 text-slate-700 hover:border-slate-300 hover:bg-slate-100"
                }`}
              >
                <Icon size={14} className={isActive ? "text-slate-950" : "text-slate-500"} />
                <span className="whitespace-nowrap">{s.shortLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Bottom Split Feature Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch rounded-xl border border-slate-200/90 bg-slate-50/70 p-4 sm:p-5 shadow-xs">
          {/* Left Column: Solution Brief, Specs & Deliverables */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Badge & Number */}
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-amber-800 border border-amber-300 bg-amber-100/90 px-2 py-0.5 rounded-md">
                  {active.badge}
                </span>
                <span className="font-mono text-[10px] font-extrabold text-slate-400">
                  VERTICAL {active.num} OF 07
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

          {/* Right Column: High-Resolution Industrial Photographic Stage */}
          <div className="lg:col-span-5 relative min-h-[200px] sm:min-h-[240px] lg:min-h-[260px] rounded-lg overflow-hidden border border-slate-200/90 bg-slate-900 shadow-xs">
            <Image
              src={active.image}
              alt={`${active.title} engineered deployment`}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
              priority={activeIdx === 0}
            />
            {/* Gradient Scrim */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

            {/* Context Badge on Visual */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
              <div className="rounded-md border border-white/20 bg-slate-950/80 px-2.5 py-1 backdrop-blur-xs">
                <span className="font-mono text-[10px] font-bold text-amber-400 block">
                  {active.badge}
                </span>
                <span className="text-xs font-extrabold text-white">
                  {active.title}
                </span>
              </div>
              <span className="rounded-full bg-emerald-500/20 border border-emerald-400/40 px-2 py-0.5 text-[10px] font-bold text-emerald-300 backdrop-blur-xs">
                Active Architecture
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
