"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ButtonLink, Badge } from "@/components/ui";

export interface IndustryItem {
  name: string;
  desc: string;
  img: string;
}

interface Props {
  industries: readonly IndustryItem[];
}

export function IndustryViewer({ industries }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndustry = industries[activeIndex] || industries[0];
  const activeSectorNum = String(activeIndex + 1).padStart(2, "0");

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-14 items-start">
      {/* Right Column on Desktop, FIRST on Mobile: Hero Display Card */}
      <div
        data-testid="industry-viewer-card"
        className="order-first lg:order-last lg:col-span-8"
      >
        <div className="overflow-hidden rounded-3xl border border-card-border bg-card shadow-2xl transition-all duration-300">
          {/* Industry Image */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface sm:aspect-[21/9]">
            <Image
              src={activeIndustry.img}
              alt={`${activeIndustry.name} Industry automation solutions`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover transition-transform duration-700 ease-out hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"
            />
            <div className="absolute top-4 left-4">
              <Badge className="bg-canvas/80 backdrop-blur-md">
                Sector {activeSectorNum} of {industries.length}
              </Badge>
            </div>
          </div>

          {/* Details Content */}
          <div className="p-6 sm:p-12">
            <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-extrabold text-text-white">
              {activeIndustry.name}
            </h2>

            <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-text-muted">
              {activeIndustry.desc}
            </p>

            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 pt-6 border-t border-line">
              <ButtonLink
                href={`/contact?industry=${encodeURIComponent(activeIndustry.name)}`}
                variant="primary"
                size="md"
              >
                Consult on {activeIndustry.name} →
              </ButtonLink>
              <ButtonLink href="/services" variant="ghost" size="md">
                Related Services
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
        <div className="lg:sticky lg:top-28 flex flex-col gap-1.5 rounded-2xl border border-card-border bg-card p-3 shadow-xl">
          <h3 className="px-3 py-2 text-[13px] font-bold tracking-wider uppercase text-text-muted">
            Select Sector ({industries.length})
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 max-h-[580px] gap-1 overflow-y-auto pr-1">
            {industries.map((ind, idx) => {
              const isActive = activeIndex === idx;
              const numStr = String(idx + 1).padStart(2, "0");
              return (
                <button
                  key={ind.name}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-left text-[13px] sm:text-[14px] font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-accent text-canvas shadow-[0_4px_16px_var(--color-accent-glow)]"
                      : "text-text-muted hover:bg-white/5 hover:text-text-white"
                  }`}
                >
                  <span>{ind.name}</span>
                  <span
                    className={`font-mono text-[11px] ${
                      isActive ? "text-canvas/80 font-bold" : "text-text-muted/60"
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
