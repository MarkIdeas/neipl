"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui";
import { sectorMetadata } from "@/content/pages";
import {
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

export interface IndustryItem {
  name: string;
  desc: string;
  img: string;
}

interface Props {
  industries: readonly IndustryItem[];
}

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

export function IndustryViewer({ industries }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndustry = industries[activeIndex] || industries[0];
  const activeSectorNum = String(activeIndex + 1).padStart(2, "0");

  const ActiveIcon =
    INDUSTRY_LINE_ICONS[activeIndustry.name] || OilGasLineIcon;
  const activeMeta = sectorMetadata[activeIndustry.name];

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 items-start">
      {/* Right Column on Desktop, FIRST on Mobile: Bright Hero Display Card */}
      <div
        data-testid="industry-viewer-card"
        className="order-first lg:order-last lg:col-span-8"
      >
        <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-xl transition-all duration-300">
          {/* Sector Photography (Vivid, Bright & Crystal Clear - Zero Dark Tint) */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 sm:aspect-[21/9] border-b border-slate-200/80">
            <Image
              src={activeIndustry.img}
              alt={`${activeIndustry.name} Industry automation solutions`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover transition-transform duration-700 ease-out hover:scale-105"
            />

            {/* Top-Left Sector Counter Badge */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="rounded-full bg-amber-500 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-950 shadow-md">
                Sector {activeSectorNum} of {industries.length}
              </span>
            </div>

            {/* Top-Right Free-Standing Line Icon Badge */}
            <div className="absolute top-4 right-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/95 border border-slate-200/90 text-amber-500 backdrop-blur-md shadow-md">
                <ActiveIcon size={24} />
              </div>
            </div>
          </div>

          {/* Details Content (Clean Bright Theme) */}
          <div className="p-6 sm:p-10 space-y-5 bg-white">
            <div>
              <div className="flex items-center gap-3">
                <ActiveIcon size={28} className="text-amber-500 flex-none" />
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 leading-tight">
                  {activeIndustry.name}
                </h2>
              </div>

              {activeMeta?.subtitle && (
                <p className="mt-1 text-sm font-semibold text-amber-600">
                  {activeMeta.subtitle}
                </p>
              )}

              <p className="mt-3 text-[15px] sm:text-[16px] leading-relaxed text-slate-600">
                {activeIndustry.desc}
              </p>
            </div>

            {/* Key Engineered Systems List (Bright Slate Panel) */}
            {activeMeta?.systems && (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5 space-y-2.5">
                <span className="block font-mono text-[11px] font-extrabold uppercase tracking-wider text-slate-800">
                  Turnkey Automation &amp; Panel Engineering Scope:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeMeta.systems.map((sys) => (
                    <div
                      key={sys}
                      className="flex items-center gap-2 text-[13px] font-medium text-slate-700"
                    >
                      <span className="h-2 w-2 rounded-full bg-amber-500 flex-none" />
                      <span>{sys}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Actions Bar */}
            <div className="pt-3 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100">
              <ButtonLink
                href={`/contact?industry=${encodeURIComponent(activeIndustry.name)}`}
                variant="primary"
                size="md"
                className="bg-amber-500 text-slate-950 hover:bg-amber-400 font-extrabold shadow-sm"
              >
                Consult on {activeIndustry.name} →
              </ButtonLink>
              <ButtonLink
                href="/services"
                variant="ghost"
                size="md"
                className="border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-950 font-bold"
              >
                Explore Related Services
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>

      {/* Left Column on Desktop, SECOND on Mobile: Sector Index Selector */}
      <div
        data-testid="industry-viewer-list"
        className="order-last lg:order-first lg:col-span-4"
      >
        <div className="lg:sticky lg:top-28 flex flex-col gap-2 rounded-2xl border border-slate-200/90 bg-white p-3.5 shadow-lg">
          <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100">
            <h3 className="text-xs font-bold tracking-wider uppercase text-slate-500">
              Select Sector ({industries.length})
            </h3>
            <span className="text-[11px] font-medium text-slate-400">
              Click to inspect
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 max-h-[620px] gap-1.5 overflow-y-auto pr-1">
            {industries.map((ind, idx) => {
              const isActive = activeIndex === idx;
              const numStr = String(idx + 1).padStart(2, "0");
              const IconComp =
                INDUSTRY_LINE_ICONS[ind.name] || OilGasLineIcon;

              return (
                <button
                  key={ind.name}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-[13.5px] font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-amber-500 text-slate-950 shadow-md font-bold"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <IconComp
                      size={18}
                      className={isActive ? "text-slate-950" : "text-amber-500"}
                    />
                    <span className="truncate">{ind.name}</span>
                  </div>
                  <span
                    className={`font-mono text-xs flex-none ml-2 ${
                      isActive ? "text-slate-950/80 font-bold" : "text-slate-400"
                    }`}
                  >
                    {numStr}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
