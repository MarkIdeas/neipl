"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { industries } from "@/content/pages";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";
import {
  ArrowRightIcon,
  OilGasLineIcon,
  PharmaLineIcon,
  PowerGenerationLineIcon,
  ChemicalLineIcon,
  WaterTreatmentLineIcon,
  FoodBeverageLineIcon,
  BmsLineIcon,
  AutomotiveLineIcon,
  PaperPulpLineIcon,
  SolarEnergyLineIcon,
  RailwaysLineIcon,
  CementManufacturingLineIcon,
  CivilInfrastructureLineIcon,
} from "@/components/icons";

const INDUSTRY_LINE_ICONS: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  "Oil & Gas": OilGasLineIcon,
  "Pharmaceuticals": PharmaLineIcon,
  "Power Generation & Distribution": PowerGenerationLineIcon,
  "Chemical & Petrochemical": ChemicalLineIcon,
  "Water & Waste Water Treatment": WaterTreatmentLineIcon,
  "Food & Beverages": FoodBeverageLineIcon,
  "Building Management Systems (BMS)": BmsLineIcon,
  "Automotive Manufacturing": AutomotiveLineIcon,
  "Paper & Pulp Processing": PaperPulpLineIcon,
  "Solar Energy Plants": SolarEnergyLineIcon,
  "Railways & Rolling Stock": RailwaysLineIcon,
  "Cement Manufacturing": CementManufacturingLineIcon,
  "Civil Infrastructure & Metro": CivilInfrastructureLineIcon,
};

interface SectorMeta {
  readonly subtitle: string;
  readonly systems: readonly string[];
}

const SECTOR_METADATA: Record<string, SectorMeta> = {
  "Oil & Gas": {
    subtitle: "Refinery Pumping & Offshore SIL-3 Safety",
    systems: [
      "ATEX & IECEx Zone 1 / 2 Flameproof Panels",
      "SIL-3 Emergency Shutdown Systems (ESD)",
      "Gas Compressor Surge Control & Telemetry",
    ],
  },
  "Pharmaceuticals": {
    subtitle: "Cleanroom Air Handling & Batch GMP Control",
    systems: [
      "21 CFR Part 11 Electronic Recipe Records",
      "Variable Air Volume (VAV) Cleanroom VFDs",
      "Automated High-Accuracy Ingredient Dosing",
    ],
  },
  "Power Generation & Distribution": {
    subtitle: "Turbine SCADA & CPRI 6000A Switchboards",
    systems: [
      "CPRI-Certified 6000A Form 4b Switchboards",
      "Dual Turbine Governor Synchronization",
      "IEC 61850 Substation Protection Protocols",
    ],
  },
  "Chemical & Petrochemical": {
    subtitle: "Continuous Reactions & Ex-d Hazardous Interlocks",
    systems: [
      "Exothermic Reaction Safety Interlocks",
      "Flameproof Pushbutton & Starter Stations",
      "Redundant Modbus/TCP Field Instrument Loops",
    ],
  },
  "Water & Waste Water Treatment": {
    subtitle: "Aeration Control & Harmonic-Mitigated VFDs",
    systems: [
      "Harmonic-Mitigated Multi-Pump VVVF Panels",
      "Automated Chemical Dosing & pH Regulation",
      "Clarifier Scraper PLC Automation Sequences",
    ],
  },
  "Food & Beverages": {
    subtitle: "Sanitary Drives & High-Speed Bottling Automation",
    systems: [
      "Stainless IP66 Washdown Drive Enclosures",
      "High-Speed Rotary Bottling Motion Control",
      "Automated End-of-Line Palletizing Cells",
    ],
  },
  "Building Management Systems (BMS)": {
    subtitle: "Integrated HVAC Ventilation & Fire Safety",
    systems: [
      "BACnet & Modbus BMS Central Console",
      "Chiller Plant Efficiency Optimization VFDs",
      "Emergency Power Auto-Changeover (AMF)",
    ],
  },
  "Automotive Manufacturing": {
    subtitle: "Robotic Arc Welding & Chassis Conveyance",
    systems: [
      "Yaskawa 6-Axis Turnkey Robotic Welding Cells",
      "Chassis Line Synchronized Conveyance Drives",
      "Computerized Dyno Test Quality Benches",
    ],
  },
  "Paper & Pulp Processing": {
    subtitle: "Sectional Web Tension & Digester Telemetry",
    systems: [
      "Multi-Drive Web Tension Sectional Coordination",
      "Digester Continuous Level Loop Telemetry",
      "Energy-Recovery Boiler Instrumentation",
    ],
  },
  "Solar Energy Plants": {
    subtitle: "Central Inverters & Substation Synchronization",
    systems: [
      "Central String Inverter Protection Switchgear",
      "Weather-Tracking Pyranometer Telemetry",
      "Grid Substation Synchronization SCADA",
    ],
  },
  "Railways & Rolling Stock": {
    subtitle: "Alternator Dyno Benches & Workshop Traversers",
    systems: [
      "RDSO Compliant Relay Logic Architecture",
      "Traction Motor Dyno Load Test Rigs",
      "Heavy Workshop Traverser VVVF Panels",
    ],
  },
  "Cement Manufacturing": {
    subtitle: "High-Torque Heavy Kilns & Baghouse Loops",
    systems: [
      "High-Torque Kiln VVVF Multi-Drive Systems",
      "Baghouse Pulse-Jet Solenoid Sequencing",
      "Ball Mill Active Harmonic Filter Banks",
    ],
  },
  "Civil Infrastructure & Metro": {
    subtitle: "Transit Escalator VFDs & Tunnel Ventilation",
    systems: [
      "Heavy Transit Escalator VVVF Controllers",
      "Emergency Tunnel Jet Fan Reversible Drives",
      "Form 4b Substation Power Distribution",
    ],
  },
};

export function IndustriesCinematic() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const previewCardRef = useRef<HTMLDivElement>(null);

  const activeIndex = hoveredIndex !== null ? hoveredIndex : selectedIndex;
  const activeSector = industries[activeIndex] || industries[0];
  const sectorNumber = String(activeIndex + 1).padStart(2, "0");
  const sectorSlug = encodeURIComponent(
    activeSector.name.toLowerCase().replace(/\s+/g, "-")
  );

  const ActiveIcon = INDUSTRY_LINE_ICONS[activeSector.name] || OilGasLineIcon;
  const activeMeta = SECTOR_METADATA[activeSector.name] || {
    subtitle: activeSector.desc.slice(0, 48) + "...",
    systems: [
      "Turnkey PLC / SCADA Control Architecture",
      "Custom Switchboard & MCC Power Distribution",
      "Harmonic-Mitigated Vector Drive Deployments",
    ],
  };

  return (
    <section
      id="domain-expertise"
      className="relative overflow-hidden bg-canvas py-20 sm:py-32"
    >
      {/* Background Cinematic Factory Photography with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_industrial.jpg"
          alt="Industrial Automation Facility Background"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-canvas/95 via-canvas/80 to-canvas/95"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(233,155,53,0.08)_0%,transparent_70%)]"
        />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-14">
          <Eyebrow center>Domain Expertise</Eyebrow>
          <SectionHeading className="mt-3 text-white">
            Industries Powered by <span className="text-amber-500">Nandini</span>
          </SectionHeading>
          <p className="mt-4 text-[15px] sm:text-[16px] text-slate-300">
            Tap or hover over any industry to inspect custom panel architectures, PLC logic, and drive deployments.
          </p>
        </div>

        {/*
          Responsive Layout:
          - On Mobile (< lg): Pattern 1 — Horizontal Swipeable Chips at the top + Interactive Preview Card immediately below (zero yo-yo scrolling).
          - On Desktop (lg+): 2-Column Grid (Left: 13 Sector Cards, Right: Sticky Telemetry HUD Card).
        */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-start">
          {/* Interactive Telemetry HUD Card Column */}
          <div
            ref={previewCardRef}
            data-testid="industry-preview-card"
            className="order-first lg:order-last lg:col-span-5 lg:sticky lg:top-28"
          >
            {/* Mobile Pattern 1: Horizontal Swipeable Sector Chips (Visible only on < lg) */}
            <div className="mb-4 lg:hidden">
              <div className="mb-2 flex items-center justify-between px-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                  Swipe &amp; Tap Industries
                </span>
                <span className="text-[11px] font-medium text-slate-400">
                  13 Key Sectors
                </span>
              </div>

              <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 pt-1 scrollbar-none snap-x snap-mandatory">
                {industries.map((ind, idx) => {
                  const isActive = activeIndex === idx;
                  const IconComp = INDUSTRY_LINE_ICONS[ind.name] || OilGasLineIcon;

                  return (
                    <button
                      key={`mobile-chip-${ind.name}`}
                      type="button"
                      onClick={() => {
                        setSelectedIndex(idx);
                        setHoveredIndex(null);
                      }}
                      className={`flex-none snap-start flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-bold transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "bg-amber-500 text-slate-950 shadow-md border border-amber-400 scale-105"
                          : "bg-slate-900/90 border border-white/15 text-slate-300 hover:border-amber-400"
                      }`}
                    >
                      <IconComp size={16} className={isActive ? "text-slate-950" : "text-amber-400"} />
                      <span className="whitespace-nowrap">{ind.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/15 bg-slate-900/90 backdrop-blur-2xl shadow-2xl transition-all duration-500">
              {/* Sector Photography (Bright & Vivid) */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 border-b border-white/10">
                <Image
                  src={activeSector.img || "/images/subpage_bg.jpg"}
                  alt={activeSector.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                />

                {/* Top-Left Sector Counter Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="rounded-full bg-amber-500 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-950 shadow-md">
                    Sector {sectorNumber} / {industries.length}
                  </span>
                </div>

                {/* Top-Right Floating Free-Standing Glowing Icon Badge */}
                <div className="absolute top-4 right-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950/85 border border-white/20 text-amber-400 backdrop-blur-md shadow-lg">
                    <ActiveIcon size={24} />
                  </div>
                </div>
              </div>

              {/* Telemetry Console Details Body */}
              <div className="p-6 sm:p-8 space-y-5">
                <div>
                  <div className="flex items-center gap-3">
                    <ActiveIcon size={28} className="text-amber-400 flex-none" />
                    <h3 className="text-[20px] sm:text-[22px] font-extrabold text-white leading-tight">
                      {activeSector.name}
                    </h3>
                  </div>

                  <p className="mt-2.5 text-[13.5px] sm:text-[14px] leading-relaxed text-slate-300">
                    {activeSector.desc}
                  </p>
                </div>

                {/* Key Engineered Systems List */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 space-y-2">
                  <span className="block font-mono text-[10px] font-extrabold uppercase tracking-widest text-amber-400">
                    Turnkey Automation Scope:
                  </span>
                  <div className="space-y-1.5">
                    {activeMeta.systems.map((sys) => (
                      <div
                        key={sys}
                        className="flex items-center gap-2 text-[12.5px] text-slate-200"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-400 flex-none" />
                        <span>{sys}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Footer */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <Link
                    href={`/industries#${sectorSlug}`}
                    className="inline-flex items-center gap-1.5 text-[13px] font-bold text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <span>View Engineering Deployments</span>
                    <ArrowRightIcon size={14} />
                  </Link>
                  <Link
                    href={`/contact?industry=${encodeURIComponent(activeSector.name)}`}
                    className="rounded-xl bg-amber-500 px-4 py-2 text-[12.5px] font-extrabold text-slate-950 hover:bg-amber-400 transition-colors shadow-sm"
                  >
                    Consult on Specifications
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Sector Selector Console with 36px Free-Standing Line-Art Icons */}
          <div
            data-testid="industry-selector-list"
            className="hidden lg:block order-last lg:order-first lg:col-span-7"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {industries.map((ind, idx) => {
                const isActive = activeIndex === idx;
                const IconComp = INDUSTRY_LINE_ICONS[ind.name] || OilGasLineIcon;
                const meta = SECTOR_METADATA[ind.name];
                const isLast = idx === industries.length - 1;

                return (
                  <button
                    key={ind.name}
                    type="button"
                    data-testid="industry-selector-pill"
                    aria-pressed={isActive}
                    onClick={() => {
                      setSelectedIndex(idx);
                      setHoveredIndex(null);
                      if (
                        typeof window !== "undefined" &&
                        window.innerWidth < 1024 &&
                        typeof previewCardRef.current?.scrollIntoView === "function"
                      ) {
                        previewCardRef.current.scrollIntoView({
                          behavior: "smooth",
                          block: "nearest",
                        });
                      }
                    }}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onFocus={() => setSelectedIndex(idx)}
                    className={`ind-cinematic-pill group flex items-center gap-3.5 sm:gap-4 rounded-2xl p-3 sm:p-3.5 text-left transition-colors duration-200 cursor-pointer ${
                      isLast ? "sm:col-span-2" : ""
                    } ${
                      isActive
                        ? "border-2 border-amber-500 bg-amber-500/15 text-white shadow-[0_0_20px_rgba(233,155,53,0.25)]"
                        : "border-2 border-white/10 bg-slate-950/80 hover:border-amber-400 hover:shadow-[0_0_15px_rgba(233,155,53,0.2)] text-slate-200"
                    }`}
                  >
                    {/* Left: Free-Standing Line-Art Graphic (36px, No Enclosing Box) */}
                    <div
                      className={`flex-none flex items-center justify-center transition-colors duration-200 ${
                        isActive
                          ? "text-amber-400"
                          : "text-amber-400/90 group-hover:text-amber-300"
                      }`}
                    >
                      <IconComp size={36} />
                    </div>

                    {/* Right: Sector Name & Short Description */}
                    <div className="flex-auto min-w-0 space-y-1">
                      <h4
                        className={`truncate sm:whitespace-normal text-[14px] sm:text-[15px] font-extrabold leading-snug transition-colors ${
                          isActive
                            ? "text-amber-400"
                            : "text-white group-hover:text-amber-200"
                        }`}
                      >
                        {ind.name}
                      </h4>

                      <p
                        className={`line-clamp-2 text-[11.5px] sm:text-[12px] font-medium leading-relaxed transition-colors ${
                          isActive
                            ? "text-slate-200"
                            : "text-slate-400 group-hover:text-slate-300"
                        }`}
                      >
                        {meta?.subtitle || ind.desc.slice(0, 50) + "..."}
                      </p>
                    </div>

                    <span
                      className={`hidden sm:inline text-[13px] transition-transform group-hover:translate-x-1 flex-none ${
                        isActive
                          ? "text-amber-400 font-black"
                          : "text-slate-500 group-hover:text-amber-300"
                      }`}
                    >
                      →
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
