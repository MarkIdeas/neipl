"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { milestones, type CompanyMilestone } from "@/content/pages";
import {
  CheckIcon,
  RocketIcon,
  TrophyIcon,
  GraduationCapIcon,
  GlobeIcon,
  DualHexHoneycombIcon,
  CpuChipIcon,
} from "@/components/icons";

// Dedicated milestone icons matching each strategic epoch
const milestoneIcons = [
  RocketIcon,            // 2006: Inception & Foundational Launch
  TrophyIcon,            // 2010–2011: L&T National Industry Awards
  GraduationCapIcon,     // 2014: CPRI 6000A Type-Test Certification
  GlobeIcon,             // 2018: Global OEM Strategic Alliances (Yaskawa & Yokogawa)
  DualHexHoneycombIcon,  // 2022: Dual-Hub Footprint & Pune Lab Expansion
  CpuChipIcon,           // 2026: Next-Gen Smart Engineering & Edge AI IIoT
] as const;

export function EvolutionTimeline() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Auto-transition every 4 seconds unless paused by user selection or hovered
  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;

    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % milestones.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered]);

  const current: CompanyMilestone = milestones[activeIdx];
  const CurrentIcon = milestoneIcons[activeIdx] ?? RocketIcon;

  // Manual selection handler: locks on clicked card and pauses autoplay
  const handleSelectMilestone = (idx: number) => {
    setActiveIdx(idx);
    setIsAutoPlaying(false);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? milestones.length - 1 : prev - 1));
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % milestones.length);
    setIsAutoPlaying(false);
  };

  return (
    <div
      role="region"
      aria-label="20-Year Historical Evolution Timeline"
      className="space-y-6"
    >
      {/* 1. Industrial Expressway Scrubber Ribbon with Auto-Play Status Header */}
      <div className="space-y-2.5">
        <div className="flex flex-wrap items-center justify-between gap-3 px-1">
          <div className="flex items-center gap-2">
            <span
              className={`h-2.5 w-2.5 rounded-full ${
                isAutoPlaying && !isHovered
                  ? "bg-amber-500 animate-pulse"
                  : "bg-slate-400"
              }`}
            />
            <span className="font-mono text-[11px] font-extrabold uppercase tracking-wider text-slate-600">
              {isAutoPlaying && !isHovered
                ? "Auto-Advancing Timeline (4s)"
                : "Manual Hold (Click Any Era to Inspect)"}
            </span>
          </div>

          <button
            type="button"
            data-testid="evolution-autoplay-toggle"
            onClick={() => setIsAutoPlaying((prev) => !prev)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1 font-mono text-[11px] font-bold text-slate-700 shadow-2xs transition-all hover:border-amber-400 hover:text-slate-900"
          >
            <span>{isAutoPlaying ? "⏸ Pause Auto-Cycle" : "▶ Resume Auto-Cycle"}</span>
          </button>
        </div>

        {/* Highway Roadway Scrubber Track */}
        <div className="relative overflow-hidden rounded-2xl border-2 border-slate-700/80 bg-slate-900 p-2 sm:p-3 shadow-xl">
          {/* Continuous Dashed Highway Centerline */}
          <div
            aria-hidden="true"
            className="absolute inset-x-4 top-1/2 -translate-y-1/2 h-0.5 border-t-2 border-dashed border-amber-400/40 pointer-events-none hidden md:block"
          />

          {/* 6 Interactive Milestone Waypoints */}
          <div className="relative z-10 flex overflow-x-auto gap-2 sm:gap-3 no-scrollbar md:grid md:grid-cols-6">
            {milestones.map((m: CompanyMilestone, idx: number) => {
              const isCurrent = idx === activeIdx;
              const isPassed = idx < activeIdx;
              const IconComp = milestoneIcons[idx] ?? RocketIcon;

              return (
                <button
                  key={m.year}
                  type="button"
                  data-testid="evolution-milestone-tab"
                  aria-current={isCurrent ? "step" : undefined}
                  onClick={() => handleSelectMilestone(idx)}
                  className={`group flex-none md:flex-auto flex items-center gap-2.5 sm:gap-3 rounded-xl p-2.5 sm:p-3 text-left transition-all duration-300 focus:outline-none min-w-[190px] md:min-w-0 ${
                    isCurrent
                      ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 scale-[1.02]"
                      : isPassed
                      ? "bg-slate-950/80 text-amber-400 border border-amber-500/30 hover:border-amber-400 hover:bg-slate-800"
                      : "bg-slate-950/60 text-slate-400 border border-white/10 hover:border-white/30 hover:text-white hover:bg-slate-800/80"
                  }`}
                >
                  {/* Left: Prominent Free-Standing Outline Graphic (Full Size, No Enclosing Box) */}
                  <div
                    className={`flex-none flex items-center justify-center transition-all duration-300 ${
                      isCurrent
                        ? "text-slate-950 scale-105"
                        : isPassed
                        ? "text-amber-400 group-hover:scale-110"
                        : "text-slate-400 group-hover:text-amber-300 group-hover:scale-110"
                    }`}
                  >
                    <IconComp
                      size={42}
                      strokeWidth={1.75}
                      className="transition-transform duration-300"
                    />
                  </div>

                  {/* Right: Clean 3-Tier Vertical Typography Stack */}
                  <div className="flex-auto min-w-0 space-y-0.5">
                    <div className="flex items-center gap-1.5 font-mono text-[10px] font-extrabold uppercase tracking-widest">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          isCurrent
                            ? "bg-slate-950"
                            : isPassed
                            ? "bg-amber-400"
                            : "bg-slate-500"
                        }`}
                      />
                      <span
                        className={
                          isCurrent
                            ? "text-slate-900"
                            : isPassed
                            ? "text-amber-400/90"
                            : "text-slate-400"
                        }
                      >
                        Mile 0{idx + 1}
                      </span>
                    </div>

                    <div className="font-mono text-[15px] sm:text-[17px] font-black leading-tight tracking-tight">
                      <span className={isCurrent ? "text-slate-950" : "text-white"}>
                        {m.shortYear}
                      </span>
                    </div>

                    <p
                      className={`truncate text-[11px] font-bold leading-none ${
                        isCurrent
                          ? "text-slate-900"
                          : isPassed
                          ? "text-slate-300"
                          : "text-slate-400 group-hover:text-slate-300"
                      }`}
                    >
                      {m.badge}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 2. Cinematic Split Cockpit Console (Zero Vertical Scroll, Hover-to-Pause) */}
      <div
        data-testid="evolution-active-cockpit"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl transition-all duration-300"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-center">
          {/* Left Column: Milestone Story & High-Impact Specs */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6">
            <div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/15 px-3 py-1 font-mono text-[12px] font-extrabold text-amber-800">
                  <CurrentIcon size={14} />
                  <span>Era 0{activeIdx + 1} of 06 · {current.badge}</span>
                </span>
                <span className="text-[12px] font-bold text-slate-500">
                  Historical Benchmark
                </span>
              </div>

              <div className="mt-3 flex items-baseline gap-4">
                <span className="font-mono text-[36px] sm:text-[44px] font-black text-amber-600 tracking-tight leading-none">
                  {current.year}
                </span>
                <span className="text-[14px] font-bold text-slate-500">
                  {current.subtitle}
                </span>
              </div>

              <h3 className="mt-2 text-[22px] sm:text-[26px] font-extrabold text-slate-900 leading-snug">
                {current.title}
              </h3>

              <p className="mt-3 text-[14.5px] sm:text-[15.5px] leading-relaxed text-slate-600">
                {current.desc}
              </p>
            </div>

            {/* Key Accomplishments Checklist */}
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50 p-4 sm:p-5">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-600">
                Key Accomplishments & Scope:
              </span>
              <div className="mt-2.5 space-y-2">
                {current.highlights.map((h: string) => (
                  <div
                    key={h}
                    className="flex items-center gap-2.5 text-[13px] font-medium text-slate-800"
                  >
                    <div className="flex h-5 w-5 flex-none items-center justify-center rounded-md bg-amber-500 text-slate-950">
                      <CheckIcon size={12} />
                    </div>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stepper Navigation Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-5">
              <button
                type="button"
                onClick={handlePrev}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-[13px] font-bold text-slate-700 shadow-2xs transition-all hover:bg-slate-50 hover:text-slate-900"
              >
                <span>← Previous Era</span>
              </button>

              <div className="flex items-center gap-1.5">
                {milestones.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    aria-label={`Jump to Era ${idx + 1}`}
                    onClick={() => handleSelectMilestone(idx)}
                    className={`h-2.5 rounded-full transition-all ${
                      idx === activeIdx
                        ? "w-8 bg-amber-500"
                        : "w-2.5 bg-slate-200 hover:bg-slate-300"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-[13px] font-bold text-white shadow-xs transition-all hover:bg-slate-800"
              >
                <span>Next Era →</span>
              </button>
            </div>
          </div>

          {/* Right Column: Cinematic Photographic Showcase */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 shadow-2xl">
              <div className="relative aspect-16/10 w-full">
                <Image
                  key={current.image}
                  src={current.image}
                  alt={current.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"
                />

                {/* Top-Right Floating Milestone Badge */}
                <div className="absolute top-4 right-4">
                  <span className="rounded-full border border-white/20 bg-slate-950/80 px-3.5 py-1.5 text-[11px] font-extrabold text-amber-400 backdrop-blur-md shadow-md">
                    {current.floatingBadge}
                  </span>
                </div>

                {/* Bottom Overlay Pill with Capability Unlocked */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="rounded-2xl border border-white/15 bg-slate-950/80 p-3.5 backdrop-blur-md">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400">
                      Capability Unlocked:
                    </span>
                    <p className="mt-0.5 text-[13px] font-bold text-white">
                      {current.capability}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
