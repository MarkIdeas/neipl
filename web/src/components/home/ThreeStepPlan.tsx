import React from "react";
import { threeStepPlan } from "@/content/pages";
import { ButtonLink, Container, Eyebrow, SectionHeading } from "@/components/ui";

export function ThreeStepPlan() {
  return (
    <section
      id="how-it-works"
      aria-label="How It Works - The 3-Step Plan"
      className="relative bg-surface py-20 lg:py-28 overflow-hidden border-t border-line"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow center>{threeStepPlan.eyebrow}</Eyebrow>
          <SectionHeading className="mt-4 text-center">
            {threeStepPlan.title}
          </SectionHeading>
          <p className="mt-4 text-sm md:text-base leading-relaxed text-text-muted text-balance">
            {threeStepPlan.subtitle}
          </p>
        </div>

        {/* 3-Step Process Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {threeStepPlan.steps.map((step) => (
            <div
              key={step.number}
              className="relative flex flex-col justify-between rounded-xl border border-line bg-card p-6 lg:p-8 transition-all duration-300 hover:border-accent/40 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent border border-accent/30 bg-accent/10 px-2.5 py-1 rounded-full">
                    Step {step.number}
                  </span>
                  <span className="font-mono text-2xl font-bold text-text-muted/40">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-text-white tracking-tight">
                  {step.title}
                </h3>

                <div className="mt-2 inline-block rounded-md bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                  {step.outcome}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-text-muted">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-line/60">
                <span className="text-xs uppercase tracking-wider font-semibold text-text-muted/80 block">
                  Key Deliverable
                </span>
                <span className="text-xs font-medium text-text-white mt-1 block">
                  {step.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* The Villain Contrast Box: Multi-Vendor Finger-Pointing vs NEIPL Turnkey Guarantee */}
        <div className="mt-12 rounded-xl border border-line bg-canvas p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            <div className="rounded-lg border border-red-500/20 bg-red-950/20 p-5">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-red-400">
                The Status Quo Villain
              </span>
              <h4 className="mt-1 text-base font-bold text-text-white">
                {threeStepPlan.villainContrast.problemTitle}
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-text-muted">
                {threeStepPlan.villainContrast.problemText}
              </p>
            </div>

            <div className="rounded-lg border border-accent/30 bg-accent/10 p-5">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent">
                The Guide&#39;s Commitment
              </span>
              <h4 className="mt-1 text-base font-bold text-text-white">
                {threeStepPlan.villainContrast.solutionTitle}
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-text-white/90">
                {threeStepPlan.villainContrast.solutionText}
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line/60 pt-6">
            <div>
              <p className="text-sm font-semibold text-text-white">
                Ready to review your single-line diagram with our engineering team?
              </p>
              <p className="text-xs text-text-muted mt-0.5">
                Get a comprehensive feasibility review within 48 business hours.
              </p>
            </div>
            <ButtonLink href="/contact" size="md" variant="primary">
              Schedule Technical Audit →
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
