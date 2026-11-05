import React from "react";
import { hero } from "@/content/pages";
import { Badge, ButtonLink, Container, Eyebrow } from "@/components/ui";

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-20 pb-16"
    >
      {/* Cinematic 5-Image Crossfading Background with Slow-Mo Zoom */}
      <div className="cinematic-wrapper" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero-img hero-img-1"
          alt="Robotics and Automation Facility"
          src="/images/hero_indian.jpg?v=2"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero-img hero-img-2"
          alt="Automated Precision Conveyor Assembly Line with Laser Telemetry"
          src="/images/hero_assembly_line.jpg?v=3"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero-img hero-img-3"
          alt="Vertical Mobility Elevators"
          src="/images/app_elevator.jpg?v=8"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero-img hero-img-4"
          alt="Commercial Escalators"
          src="/images/app_escalator.jpg?v=8"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero-img hero-img-5"
          alt="CPRI Certified Electrical Panels"
          src="/images/hero_cpri_panel.jpg"
        />
        <div className="cinematic-overlay" />
        <div className="cinematic-hud" />
      </div>

      <Container className="relative z-10 text-center">
        <div className="mx-auto max-w-[860px]">
          <Eyebrow center>{hero.eyebrow}</Eyebrow>

          <h1 className="mt-6 text-[clamp(2.5rem,5.5vw,5rem)] font-extrabold tracking-[-0.03em] leading-[1.1] text-text-white text-balance drop-shadow-xl">
            {hero.titleLine1}
            <br />
            <span className="text-accent">{hero.titleLine2}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-[640px] text-[clamp(1rem,1.8vw,1.25rem)] leading-relaxed text-text-white/90 text-balance drop-shadow-md">
            {hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink href={hero.primaryCta.href} size="lg" variant="primary">
              {hero.primaryCta.label} →
            </ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} size="lg" variant="ghost">
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {hero.badges.map((badge) => (
              <Badge key={badge}>{badge}</Badge>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
