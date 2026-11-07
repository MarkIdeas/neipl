import React from "react";
import { threeStepPlan } from "@/content/pages";
import { ButtonLink, Container, Eyebrow, SectionHeading } from "@/components/ui";

export function ThreeStepPlan() {
  return (
    <div
      id="how-it-works"
      aria-label="How It Works - The 3-Step Plan"
      className="relative pt-6 sm:pt-10 pb-20 sm:pb-28 text-slate-900"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow center>{threeStepPlan.eyebrow}</Eyebrow>
          <SectionHeading tone="dark" className="mt-3 text-center text-slate-900 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            {threeStepPlan.title}
          </SectionHeading>
          <p className="mt-4 text-sm md:text-base leading-relaxed text-slate-600 text-balance text-center">
            {threeStepPlan.subtitle}
          </p>
        </div>

        {/* 3-Step Process Grid (Elevated Executive Cards with Amber Hover Lift) */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {threeStepPlan.steps.map((step) => (
            <div
              key={step.number}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-slate-50/60 p-7 lg:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-amber-500 hover:bg-white hover:shadow-xl shadow-xs overflow-hidden"
            >
              {/* Top Accent Line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Luminous Step Watermark */}
              <span className="pointer-events-none absolute -bottom-3 -right-2 font-mono text-8xl font-black text-slate-200/70 select-none group-hover:text-amber-100/70 transition-colors">
                {step.number}
              </span>

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-800 border border-amber-300 bg-amber-100/90 px-3 py-1 rounded-full shadow-2xs">
                    Step {step.number}
                  </span>
                  <span className="font-mono text-xs font-extrabold tracking-wider text-slate-400 group-hover:text-amber-600 transition-colors">
                    PHASE {step.number}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-extrabold text-slate-900 tracking-tight group-hover:text-amber-600 transition-colors">
                  {step.title}
                </h3>

                <div className="mt-2.5 inline-block rounded-md bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 text-xs font-bold text-emerald-800">
                  {step.outcome}
                </div>

                <p className="mt-4 text-[13.5px] sm:text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 relative z-10">
                <span className="text-[11px] uppercase tracking-wider font-bold text-slate-500 block">
                  Key Deliverable
                </span>
                <span className="text-xs font-bold text-slate-900 mt-1 block">
                  {step.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Turnkey Comparison Box: High-Contrast Executive Basement Section */}
        <div className="mt-14 rounded-2xl border border-slate-200/90 bg-slate-50/60 p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            <div className="rounded-xl border border-red-200/90 bg-white p-5 sm:p-6 flex flex-col justify-between shadow-2xs">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-red-700 bg-red-100 border border-red-200 px-3 py-1 rounded-full inline-block">
                  {threeStepPlan.deliveryComparison.problemTag}
                </span>
                <h4 className="mt-3 text-base sm:text-lg font-bold text-red-950">
                  {threeStepPlan.deliveryComparison.problemTitle}
                </h4>
                <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-red-900/80">
                  {threeStepPlan.deliveryComparison.problemText}
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-emerald-300 bg-white p-5 sm:p-6 flex flex-col justify-between shadow-xs ring-1 ring-emerald-500/10">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 border border-emerald-200 px-3 py-1 rounded-full inline-block">
                  {threeStepPlan.deliveryComparison.solutionTag}
                </span>
                <h4 className="mt-3 text-base sm:text-lg font-extrabold text-emerald-950">
                  {threeStepPlan.deliveryComparison.solutionTitle}
                </h4>
                <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-emerald-900">
                  {threeStepPlan.deliveryComparison.solutionText}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/80 pt-6">
            <div>
              <p className="text-sm font-bold text-slate-900">
                Ready to review your single-line diagram with our engineering team?
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                Get a comprehensive feasibility review within 48 business hours.
              </p>
            </div>
            <ButtonLink href="/contact" size="md" variant="primary">
              Schedule Technical Audit →
            </ButtonLink>
          </div>
        </div>
      </Container>
    </div>
  );
}
