"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";

export interface GalleryProject {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly sector: string;
  readonly image: string;
  readonly desc: string;
  readonly specs: readonly string[];
  readonly outcome: string;
}

const ALL_PROJECTS: readonly GalleryProject[] = [
  {
    id: "panel-1",
    title: "CPRI-Certified 6000A LT Switchboard",
    category: "Panels",
    sector: "Heavy Industrial Power",
    image: "/images/gallery_panel_lt_switchboard.jpg",
    desc: "Short-circuit and arc-fault tested heavy-duty PCC/LT switchboard with electrolytic ETP copper busbar interleaving.",
    specs: ["IS/IEC 61439 · 6000A", "Form 4b Compartments", "2.5kV HV Tested"],
    outcome: "Zero thermal hotspots under continuous full-load factory acceptance testing.",
  },
  {
    id: "panel-2",
    title: "Automatic Power Factor Correction (APFC)",
    category: "Panels",
    sector: "Utility & Municipal Plants",
    image: "/images/gallery_panel_apfc.jpg",
    desc: "Microprocessor-switched heavy-duty capacitor bank panel with detuned harmonic blocking reactors.",
    specs: ["0.99 PF Maintained", "7% / 14% Detuned Reactor", "Thyristor Switching"],
    outcome: "Eliminated utility reactive power penalties across multi-pump municipal stations.",
  },
  {
    id: "panel-3",
    title: "AMF & DG Synchronization Panel",
    category: "Panels",
    sector: "Mission-Critical Backup",
    image: "/images/gallery_panel_amf_dg.jpg",
    desc: "Seamless utility-to-diesel generator auto changeover with PLC load sharing and reverse-power protection.",
    specs: ["Auto Mains Failure", "Multi-DG Sync Bus", "IP54 / IP65 Enclosure"],
    outcome: "Sub-second failover transfer for continuous pharmaceutical and process lines.",
  },
  {
    id: "robotics-1",
    title: "6-Axis Robotic Arc Welding Cell",
    category: "Robotics",
    sector: "Automotive & Heavy Fab",
    image: "/images/gallery_robotics_welding.jpg",
    desc: "Turnkey MIG/TIG robotic welding workcell with dual-station rotary positioners and safety light curtains.",
    specs: ["6-Axis Articulated Arm", "Seam Tracking Sensor", "Dual-Index Positioner"],
    outcome: "Delivered sub-millimeter weld repeatability and 35% higher shift throughput.",
  },
  {
    id: "robotics-2",
    title: "High-Speed End-of-Line Palletizing Station",
    category: "Robotics",
    sector: "FMCG & Cement Bagging",
    image: "/images/robotics_palletizing.jpg",
    desc: "Automated multi-SKU carton and bag stacking robotic cell with custom pneumatic vacuum/servo grippers.",
    specs: ["High-Payload Robot", "Servo Gripper Tooling", "Infeed Conveyor PLC"],
    outcome: "Automated 24/7 end-of-line stacking while eliminating manual lifting injuries.",
  },
  {
    id: "robotics-3",
    title: "Automated Quality Inspection & CNC Tending",
    category: "Robotics",
    sector: "Precision Manufacturing",
    image: "/images/gallery_robotics_cnc_vision.jpg",
    desc: "High-speed CNC machine tending robot integrated with Baumer optical vision inspection and reject chute.",
    specs: ["CNC Door Interlock", "Baumer Vision Check", "Zero-Defect Sorting"],
    outcome: "Reduced machine idle cycle time by 42% with 100% automated dimensional gauging.",
  },
  {
    id: "drives-1",
    title: "Yaskawa GA700 Multi-Drive Synchronization",
    category: "Drives",
    sector: "Continuous Process Lines",
    image: "/images/gallery_drives_ga700.jpg",
    desc: "Coordinated multi-motor AC vector drive lineup with fiber-optic speed/torque sharing and common DC bus.",
    specs: ["Yaskawa GA700 / A1000", "Common DC Bus D1000", "Closed-Loop Vector"],
    outcome: "Synchronized web tension across 12+ sectional motors with zero sheet breakage.",
  },
  {
    id: "drives-2",
    title: "Industrial Overhead Crane VVVF & Regen Control",
    category: "Drives",
    sector: "Steel & Heavy Engineering",
    image: "/images/gallery_drives_crane_regen.jpg",
    desc: "Heavy-duty hoist, long-travel, and cross-travel crane drive panels with R1000 regenerative braking energy recovery.",
    specs: ["Yaskawa R1000 Regen", "Anti-Sway Hoist Logic", "Zero-Speed Holding"],
    outcome: "Smooth stepless load hoisting with 28% regenerative braking energy recovery.",
  },
  {
    id: "automation-1",
    title: "Turnkey PLC & SCADA Process Control Desk",
    category: "Automation",
    sector: "Power, Chemical & Pharma",
    image: "/images/gallery_automation_plc_scada.jpg",
    desc: "Redundant PLC architecture with distributed remote I/O panels, Yokogawa field loops, and centralized SCADA historian.",
    specs: ["Redundant PLC / RTU", "MODBUS / PROFINET", "Yokogawa 4-20mA HART"],
    outcome: "Real-time alarm telemetry, batch recipe traceability, and automated interlocks.",
  },
  {
    id: "automation-2",
    title: "Commercial High-Rise Elevator Multi-Car Dispatch",
    category: "Automation",
    sector: "Building Infrastructure",
    image: "/images/gallery_automation_elevator.jpg",
    desc: "Integrated closed-loop VVVF regenerative lift controller for high-speed commercial and hospital towers.",
    specs: ["Smooth S-Curve Profile", "ARD Battery Rescue", "Regenerative Drive"],
    outcome: "Precision floor leveling within ±2mm and quiet, jerk-free cabin acceleration.",
  },
  {
    id: "automation-3",
    title: "Transit Hub Heavy-Duty Escalator Control",
    category: "Automation",
    sector: "Railways & Metro Transit",
    image: "/images/gallery_automation_escalator.jpg",
    desc: "Automated public-transit escalator controller with radar passenger detection and sleep-mode VFD energy optimization.",
    specs: ["Auto Idle Speed Mode", "Safety Chain Monitoring", "Heavy-Duty VFD"],
    outcome: "Cut off-peak escalator power consumption by 38% across transit concourses.",
  },
  {
    id: "trade-1",
    title: "IITEX Industrial Automation Expo Showcase",
    category: "Exhibitions",
    sector: "Live Technology Demo",
    image: "/images/gallery_trade_iitex_expo.jpg",
    desc: "Live interactive exhibition booth demonstrating synchronized Yaskawa robotics, Sigma-7 servos, and smart MCC panels.",
    specs: ["Live 6-Axis Demo", "Sigma-7 Motion Rig", "CPRI Panel Cutaway"],
    outcome: "Showcased turnkey Hyderabad & Pune engineering capabilities to 1,500+ plant heads.",
  },
];

const CATEGORIES = [
  "All",
  "Panels",
  "Robotics",
  "Drives",
  "Automation",
  "Exhibitions",
] as const;

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredWithIndex = ALL_PROJECTS.map((project, originalIndex) => ({
    project,
    originalIndex,
  })).filter(
    ({ project }) =>
      activeCategory === "All" || project.category === activeCategory
  );

  const getCategoryCount = (cat: string) =>
    cat === "All"
      ? ALL_PROJECTS.length
      : ALL_PROJECTS.filter((p) => p.category === cat).length;

  const total = ALL_PROJECTS.length;

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + total) % total);
  }, [selectedIndex, total]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % total);
  }, [selectedIndex, total]);

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handlePrev, handleNext]);

  const activeModalProject =
    selectedIndex !== null ? ALL_PROJECTS[selectedIndex] : null;

  return (
    <div>
      {/* Category Filter Pills with Live Counts */}
      <div
        role="tablist"
        aria-label="Filter installation gallery by category"
        className="flex flex-wrap items-center justify-center gap-2.5"
      >
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          const count = getCategoryCount(cat);
          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveCategory(cat)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-bold transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-amber-500 text-slate-950 shadow-md"
                  : "border border-white/15 bg-white/5 text-slate-300 hover:border-amber-400/50 hover:text-white"
              }`}
            >
              <span>{cat}</span>
              <span
                className={`rounded-full px-2 py-0.5 font-mono text-[11px] font-extrabold ${
                  isActive
                    ? "bg-slate-950/20 text-slate-950"
                    : "bg-white/10 text-amber-400"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid of Enriched Project Cards */}
      <div
        data-testid="gallery-installations-grid"
        className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filteredWithIndex.map(({ project, originalIndex }) => (
          <div
            key={project.id}
            data-testid="gallery-installation-card"
            className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/60 hover:bg-white/10"
          >
            <div>
              {/* Image Frame (Clickable to open Lightbox) */}
              <div
                onClick={() => setSelectedIndex(originalIndex)}
                className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900 cursor-pointer"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent"
                />
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                  <span className="rounded-md bg-amber-500 px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-950 shadow-xs">
                    {project.category}
                  </span>
                  <span className="rounded-full bg-slate-950/85 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-slate-200 border border-white/15">
                    {project.sector}
                  </span>
                </div>
              </div>

              {/* Text & Hardware Specs Area */}
              <div className="p-6">
                <h3 className="text-[18px] font-extrabold text-white transition-colors group-hover:text-amber-400">
                  {project.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-300">
                  {project.desc}
                </p>

                {/* Hardware Stack Pills */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.specs.map((spec) => (
                    <span
                      key={spec}
                      className="rounded-md border border-white/10 bg-slate-950/60 px-2.5 py-1 font-mono text-[11px] font-semibold text-amber-400"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Outcome Highlight */}
                <div className="mt-4 flex items-start gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-[12px] text-emerald-200">
                  <span className="mt-0.5 flex h-4 w-4 flex-none items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                    <CheckIcon size={10} />
                  </span>
                  <span>{project.outcome}</span>
                </div>
              </div>
            </div>

            {/* Action Footer */}
            <div className="px-6 pb-6 pt-3 border-t border-white/10 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setSelectedIndex(originalIndex)}
                className="inline-flex items-center gap-1.5 text-[13px] font-extrabold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
              >
                <span>Inspect Installation</span>
                <ArrowRightIcon size={14} />
              </button>

              <Link
                href={`/contact?project=${encodeURIComponent(project.title)}`}
                className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-[12px] font-bold text-white hover:border-amber-400 hover:bg-amber-500 hover:text-slate-950 transition-all"
              >
                Inquire
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Step 3: In-Page Project Inspection Lightbox Modal */}
      {activeModalProject && selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeModalProject.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 sm:p-6 backdrop-blur-md"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-slate-900 text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-slate-950/80 px-6 py-4">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-amber-500 px-2.5 py-0.5 font-mono text-[11px] font-extrabold uppercase text-slate-950">
                    {activeModalProject.category}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-semibold text-slate-300">
                    {activeModalProject.sector}
                  </span>
                  <span className="font-mono text-[11px] font-bold text-amber-400">
                    PROJECT {String(selectedIndex + 1).padStart(2, "0")} OF{" "}
                    {String(total).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-1.5 text-[18px] sm:text-[20px] font-extrabold text-white">
                  {activeModalProject.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                aria-label="Close installation preview"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-[16px] font-bold text-slate-300 transition-colors hover:border-amber-400 hover:text-white cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-6 space-y-5">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/10 bg-slate-950">
                <Image
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-cover"
                />
              </div>

              <p className="text-[14px] sm:text-[15px] leading-relaxed text-slate-200">
                {activeModalProject.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {activeModalProject.specs.map((spec) => (
                  <span
                    key={spec}
                    className="rounded-lg border border-amber-500/30 bg-amber-500/15 px-3 py-1 font-mono text-[12px] font-bold text-amber-400"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/10 p-4 text-[13px] text-emerald-200">
                <strong className="text-emerald-300">Verified Outcome:</strong>{" "}
                {activeModalProject.outcome}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 bg-slate-950/90 px-6 py-4">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="rounded-lg border border-white/15 bg-white/5 px-3.5 py-2 text-[12px] font-bold text-slate-200 transition-colors hover:border-amber-400 hover:text-amber-400 cursor-pointer"
                >
                  ‹ Prev Installation
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="rounded-lg border border-white/15 bg-white/5 px-3.5 py-2 text-[12px] font-bold text-slate-200 transition-colors hover:border-amber-400 hover:text-amber-400 cursor-pointer"
                >
                  Next Installation ›
                </button>
              </div>

              <Link
                href={`/contact?project=${encodeURIComponent(
                  activeModalProject.title
                )}`}
                onClick={() => setSelectedIndex(null)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-amber-500 px-5 py-2.5 text-[13px] font-extrabold text-slate-950 transition-colors hover:bg-amber-400"
              >
                <span>Inquire on Similar Project</span>
                <ArrowRightIcon size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
