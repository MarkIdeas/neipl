import React from "react";
import { threeStepPlan } from "@/content/pages";
import { ButtonLink, Container, Eyebrow, SectionHeading } from "@/components/ui";

export function ThreeStepPlan() {
  return (
    <div
      id="how-it-works"
      aria-label="How It Works - The 3-Step Plan"
      className="relative pt-3 sm:pt-4 pb-6 sm:pb-8 text-slate-900"
    >
      <Container>
        {/* Compact Process Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow center>{threeStepPlan.eyebrow}</Eyebrow>
          <SectionHeading tone="dark" className="mt-1.5 text-center text-slate-900 text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight">
            {threeStepPlan.title}
          </SectionHeading>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-600 text-balance text-center">
            {threeStepPlan.subtitle}
          </p>
        </div>

        {/* 3-Step Process Grid (High-Density Viewport-Optimized Cards) */}
        <div className="mt-5 sm:mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {threeStepPlan.steps.map((step) => (
            <div
              key={step.number}
              className="group relative flex flex-col justify-between rounded-xl border border-slate-200/90 bg-slate-50/70 p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500 hover:bg-white hover:shadow-lg shadow-xs overflow-hidden"
            >
              {/* Top Accent Line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Luminous Step Watermark */}
              <span className="pointer-events-none absolute -bottom-2 -right-1 font-mono text-6xl font-black text-slate-200/60 select-none group-hover:text-amber-100/60 transition-colors">
                {step.number}
              </span>

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-amber-800 border border-amber-300 bg-amber-100/90 px-2.5 py-0.5 rounded-full shadow-2xs">
                    Step {step.number}
                  </span>
                  <span className="font-mono text-[10px] font-extrabold tracking-wider text-slate-400 group-hover:text-amber-600 transition-colors">
                    PHASE {step.number}
                  </span>
                </div>

                <h3 className="mt-3 text-base sm:text-lg font-extrabold text-slate-900 tracking-tight group-hover:text-amber-600 transition-colors">
                  {step.title}
                </h3>

                <div className="mt-1.5 inline-block rounded-md bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 text-[11px] font-bold text-emerald-800">
                  {step.outcome}
                </div>

                <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/80 relative z-10 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500">
                  Deliverable
                </span>
                <span className="text-[11px] font-bold text-slate-900">
                  {step.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Turnkey Guarantee Bar: Sleek Horizontal Split Bar */}
        <div className="mt-5 rounded-xl border border-slate-200/90 bg-slate-50/80 p-3 sm:p-4 shadow-xs">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 flex-1 min-w-0">
              {/* Problem Pill */}
              <div className="flex items-center gap-2 rounded-lg border border-rose-200 bg-rose-50/90 px-2.5 py-1 text-xs text-rose-900">
                <span className="font-mono text-[10px] font-extrabold uppercase text-rose-700 bg-rose-100 border border-rose-200 px-1.5 py-0.5 rounded">
                  {threeStepPlan.deliveryComparison.problemTag}
                </span>
                <span className="truncate text-[11px] font-medium text-rose-800">
                  {threeStepPlan.deliveryComparison.problemTitle}
                </span>
              </div>

              {/* Guarantee Pill */}
              <div className="flex items-center gap-2 rounded-lg border border-emerald-300 bg-emerald-50/90 px-2.5 py-1 text-xs text-emerald-950 flex-1 min-w-0">
                <span className="font-mono text-[10px] font-extrabold uppercase text-emerald-800 bg-emerald-100 border border-emerald-200 px-1.5 py-0.5 rounded flex-none">
                  {threeStepPlan.deliveryComparison.solutionTag}
                </span>
                <span className="truncate text-[11px] font-bold text-emerald-900">
                  {threeStepPlan.deliveryComparison.solutionTitle}
                </span>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="flex items-center justify-end flex-none">
              <ButtonLink href="/contact" size="sm" variant="primary">
                Schedule Technical Audit →
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
