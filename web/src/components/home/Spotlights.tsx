import React from "react";
import Image from "next/image";
import { spotlights } from "@/content/pages";
import { ButtonLink, Container, Eyebrow, SectionHeading } from "@/components/ui";
import { cn } from "@/lib/brand";

export function Spotlights() {
  return (
    <div className="flex flex-col border-t border-line">
      {spotlights.map((s, idx) => (
        <section
          key={s.title}
          className={cn(
            "py-20 sm:py-28",
            idx % 2 === 0 ? "bg-canvas" : "bg-surface border-t border-line"
          )}
        >
          <Container>
            <div
              className={cn(
                "grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16",
                !s.imgRight && "lg:[&>*:first-child]:order-2"
              )}
            >
              {/* Text Block */}
              <div>
                <Eyebrow>{s.eyebrow}</Eyebrow>
                <SectionHeading className="mt-3 mb-5">
                  {s.title}
                </SectionHeading>
                <p className="text-[16px] leading-relaxed text-text-muted">
                  {s.desc}
                </p>

                <ul className="my-8 flex flex-col gap-3">
                  {s.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-center gap-3 text-[15px] font-medium text-text-white/90"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)]" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <ButtonLink href={s.link} variant="primary">
                  Learn More →
                </ButtonLink>
              </div>

              {/* Visual Showcase Card */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-accent/20 bg-card shadow-[0_0_60px_rgba(16,185,129,0.08)]">
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-canvas/60 via-transparent to-transparent"
                />
              </div>
            </div>
          </Container>
        </section>
      ))}
    </div>
  );
}
