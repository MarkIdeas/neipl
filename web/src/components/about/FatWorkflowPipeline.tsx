"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { fatQualityStages, type QualityStage } from "@/content/pages";
import { ArrowRightIcon, CheckIcon, WrenchShieldIcon } from "@/components/icons";

export function FatWorkflowPipeline() {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Auto-transition every 4 seconds unless paused by user selection or hovered
  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;

    const interval = setInterval(() => {
      setActiveStageIndex((prev) => (prev + 1) % fatQualityStages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered]);

  const activeStage: QualityStage = fatQualityStages[activeStageIndex];

  // Manual selection handler: locks on clicked station and pauses autoplay
  const handleSelectStage = (idx: number) => {
    setActiveStageIndex(idx);
    setIsAutoPlaying(false);
  };

  const handlePrev = () => {
    setActiveStageIndex((prev) =>
      prev === 0 ? fatQualityStages.length - 1 : prev - 1
    );
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setActiveStageIndex((prev) => (prev + 1) % fatQualityStages.length);
    setIsAutoPlaying(false);
  };

  return (
    <div
      role="region"
      aria-label="5-Stage Factory Acceptance Testing Pipeline"
      className="space-y-6"
    >
      {/* 1. Auto-Play Status Header & Control Bar */}
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
              ? "Auto-Advancing Pipeline (4s)"
              : "Manual Hold (Click Any Station to Inspect)"}
          </span>
        </div>

        <button
          type="button"
          data-testid="fat-autoplay-toggle"
          onClick={() => setIsAutoPlaying((prev) => !prev)}
          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1 font-mono text-[11px] font-bold text-slate-700 shadow-2xs transition-all hover:border-amber-400 hover:text-slate-900"
        >
          <span>{isAutoPlaying ? "⏸ Pause Auto-Cycle" : "▶ Resume Auto-Cycle"}</span>
        </button>
      </div>

      {/* 2. Desktop & Tablet Horizontal Busbar Rail (Visible md and up) */}
      <div className="hidden md:block">
        <div className="relative">
          {/* Connecting Industrial Copper Busbar Trace Line */}
          <div
            aria-hidden="true"
            className="absolute top-7 left-12 right-12 h-1 bg-slate-200"
          >
            <div
              className="h-full bg-amber-500 transition-all duration-500 ease-out"
              style={{
                width: `${(activeStageIndex / (fatQualityStages.length - 1)) * 100}%`,
              }}
            />
          </div>

          {/* 5 Sequential Station Nodes */}
          <div className="relative z-10 grid grid-cols-5 gap-4">
            {fatQualityStages.map((stage, idx) => {
              const isCurrent = idx === activeStageIndex;
              const isPassed = idx < activeStageIndex;

              return (
                <button
                  key={stage.step}
                  type="button"
                  data-testid="fat-workflow-node"
                  aria-current={isCurrent ? "step" : undefined}
                  onClick={() => handleSelectStage(idx)}
                  className="group flex flex-col items-center text-center focus:outline-none"
                >
                  {/* Station Node Badge */}
                  <div
                    className={`relative flex h-14 w-14 items-center justify-center rounded-2xl font-mono text-[16px] font-black transition-all duration-300 ${
                      isCurrent
                        ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 ring-4 ring-amber-500/20 scale-110"
                        : isPassed
                        ? "bg-slate-900 text-amber-400"
                        : "border-2 border-slate-200 bg-white text-slate-600 group-hover:border-amber-400 group-hover:text-slate-900"
                    }`}
                  >
                    {isPassed ? "✓" : stage.step}
                  </div>

                  {/* Station Label & Standard Tag */}
                  <div className="mt-3 space-y-1">
                    <span
                      className={`block text-[11px] font-extrabold uppercase tracking-wider transition-colors ${
                        isCurrent ? "text-amber-600" : "text-slate-500"
                      }`}
                    >
                      {stage.phase}
                    </span>
                    <h4
                      className={`text-[13px] font-extrabold leading-tight transition-colors ${
                        isCurrent
                          ? "text-slate-900"
                          : "text-slate-700 group-hover:text-slate-900"
                      }`}
                    >
                      {stage.shortName}
                    </h4>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. Mobile Step Pills (Visible below md) */}
      <div className="flex md:hidden overflow-x-auto pb-2 gap-2.5 no-scrollbar">
        {fatQualityStages.map((stage, idx) => {
          const isCurrent = idx === activeStageIndex;
          const isPassed = idx < activeStageIndex;

          return (
            <button
              key={stage.step}
              type="button"
              data-testid="fat-workflow-mobile-pill"
              onClick={() => handleSelectStage(idx)}
              className={`flex-none flex items-center gap-2 rounded-xl border px-3.5 py-2 text-[12px] font-bold transition-all ${
                isCurrent
                  ? "border-amber-500 bg-amber-50 text-amber-950 shadow-xs"
                  : "border-slate-200 bg-white text-slate-700"
              }`}
            >
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-md font-mono text-[10px] font-black ${
                  isCurrent
                    ? "bg-amber-500 text-slate-950"
                    : isPassed
                    ? "bg-slate-900 text-amber-400"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {isPassed ? "✓" : stage.step}
              </span>
              <span>{stage.shortName}</span>
            </button>
          );
        })}
      </div>

      {/* 4. Active FAT Station Inspection Console Plate */}
      <div
        data-testid="fat-active-station-console"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-lg transition-all duration-300"
      >
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <span className="rounded-full bg-amber-500/15 px-3 py-1 font-mono text-[12px] font-extrabold text-amber-800">
                {activeStage.phase} of 05
              </span>
              <span className="text-[12px] font-semibold text-slate-500">
                Pre-Dispatch Quality Protocol
              </span>
            </div>
            <h3 className="text-[22px] sm:text-[26px] font-extrabold text-slate-900">
              {activeStage.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <span className="rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-1.5 font-mono text-[12px] font-bold text-slate-800">
              {activeStage.standard}
            </span>
          </div>
        </div>

        {/* Technical Procedure Summary */}
        <p className="mt-6 text-[15px] sm:text-[16px] leading-relaxed text-slate-600">
          {activeStage.desc}
        </p>

        {/* 3-Column Engineering Verification Parameters */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50 p-4">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
              Calibrated Test Instrument
            </span>
            <p className="mt-1 text-[13px] font-bold text-slate-900">
              {activeStage.instrument}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-slate-50 p-4">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
              Acceptance Threshold
            </span>
            <p className="mt-1 text-[13px] font-bold text-slate-900">
              {activeStage.tolerance}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-slate-50 p-4">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
              Authorized Sign-Off Witness
            </span>
            <p className="mt-1 text-[13px] font-bold text-slate-900">
              {activeStage.witness}
            </p>
          </div>
        </div>

        {/* Pass/Fail Acceptance Checklist */}
        <div className="mt-6 rounded-2xl border border-slate-200/80 bg-slate-50/60 p-5">
          <span className="text-[12px] font-extrabold uppercase tracking-wider text-slate-700">
            Mandatory Acceptance Verification Gates:
          </span>
          <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
            {activeStage.checks.map((chk) => (
              <div
                key={chk}
                className="flex items-center gap-2 rounded-xl bg-white border border-slate-200/80 px-3 py-2 text-[12px] font-medium text-slate-800 shadow-2xs"
              >
                <div className="flex h-5 w-5 flex-none items-center justify-center rounded-md bg-emerald-500 text-white">
                  <CheckIcon size={12} />
                </div>
                <span>{chk}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Station Stepper Controls */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-6">
          <button
            type="button"
            onClick={handlePrev}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-[13px] font-bold text-slate-700 shadow-2xs transition-all hover:bg-slate-50 hover:text-slate-900"
          >
            <span>← Previous Test Station</span>
          </button>

          <div className="flex items-center gap-1.5">
            {fatQualityStages.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Go to Stage ${idx + 1}`}
                onClick={() => handleSelectStage(idx)}
                className={`h-2.5 rounded-full transition-all ${
                  idx === activeStageIndex
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
            <span>Next Test Station →</span>
          </button>
        </div>
      </div>

      {/* 4. Full-Width Witnessed FAT Commitment Banner (Clean Bright Accent) */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-2xl border border-amber-500/30 bg-amber-50/60 p-6 sm:p-8">
        <div className="space-y-1.5 max-w-2xl">
          <div className="flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-wider text-amber-700">
            <WrenchShieldIcon size={16} />
            <span>Zero Failure Commitment</span>
          </div>
          <h4 className="text-[18px] sm:text-[20px] font-extrabold text-slate-900">
            Client & Third-Party Witnessed FAT Available
          </h4>
          <p className="text-[14px] leading-relaxed text-slate-700">
            We welcome clients and third-party inspection agencies (TUV, DNV, SGS, Engineers India Limited) to witness any stage of testing in our 6000A Hyderabad test bay before dispatch.
          </p>
        </div>

        <Link
          href="/contact"
          className="flex-none inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-3 text-[13px] font-extrabold text-slate-950 shadow-md transition-all hover:bg-amber-400"
        >
          <span>Schedule Witness Inspection</span>
          <ArrowRightIcon size={14} />
        </Link>
      </div>
    </div>
  );
}
