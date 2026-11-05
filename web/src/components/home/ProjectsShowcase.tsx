import React from "react";
import Link from "next/link";
import { projects } from "@/content/pages";
import { ButtonLink, Container, Eyebrow, SectionHeading } from "@/components/ui";
import {
  PlugIcon,
  RobotIcon,
  BoltIcon,
  GearIcon,
  ChartIcon,
  BuildingIcon,
  ArrowRightIcon,
} from "@/components/icons";

export function ProjectsShowcase() {
  const getIcon = (name: string) => {
    switch (name) {
      case "plug":
        return <PlugIcon size={36} className="text-accent" />;
      case "robot":
        return <RobotIcon size={36} className="text-accent" />;
      case "bolt":
        return <BoltIcon size={36} className="text-accent" />;
      case "gear":
        return <GearIcon size={36} className="text-accent" />;
      case "chart":
        return <ChartIcon size={36} className="text-accent" />;
      case "building":
        return <BuildingIcon size={36} className="text-accent" />;
      default:
        return <GearIcon size={36} className="text-accent" />;
    }
  };

  return (
    <section id="projects" className="border-t border-line bg-surface py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Eyebrow>Our Work</Eyebrow>
            <SectionHeading className="mt-3">Projects & Installations</SectionHeading>
          </div>
          <ButtonLink href="/gallery" variant="ghost" size="sm" id="gallery-link">
            View Gallery →
          </ButtonLink>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <Link
              key={p.label}
              href="/gallery"
              id={`proj-card-${idx + 1}`}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-card-border bg-card shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-2xl"
            >
              {/* Visual Icon Header Box */}
              <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-gradient-to-br from-surface to-canvas transition-colors duration-300 group-hover:from-accent/10 group-hover:to-surface">
                <div className="transform transition-transform duration-300 group-hover:scale-110">
                  {getIcon(p.iconName)}
                </div>

                {/* Hover Reveal Arrow Indicator */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center justify-center bg-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-canvas shadow-lg">
                    <ArrowRightIcon size={20} />
                  </span>
                </div>
              </div>

              {/* Text Area */}
              <div className="p-6">
                <span className="text-[12px] font-bold tracking-wider uppercase text-accent">
                  {p.cat}
                </span>
                <h3 className="mt-1.5 text-[17px] font-semibold text-text-white transition-colors group-hover:text-accent">
                  {p.label}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
