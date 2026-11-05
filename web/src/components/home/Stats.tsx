import React from "react";
import { stats } from "@/content/site";
import { Container, Eyebrow, SectionHeading, StatCard } from "@/components/ui";

export function Stats() {
  return (
    <section className="border-t border-line bg-surface py-20 sm:py-28">
      <Container>
        <div className="mb-14 text-center">
          <Eyebrow center>By the Numbers</Eyebrow>
          <SectionHeading className="mt-3">Proven Track Record</SectionHeading>
        </div>

        <div className="grid grid-cols-1 divide-y divide-white/5 overflow-hidden rounded-2xl border border-accent/15 bg-card sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
          {stats.map((s) => (
            <StatCard
              key={s.label}
              target={s.value}
              suffix={s.suffix}
              label={s.label}
              sub={s.sub}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
