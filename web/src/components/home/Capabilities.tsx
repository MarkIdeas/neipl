import React from "react";
import Link from "next/link";
import { capabilities } from "@/content/pages";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";
import { GearIcon, PlugIcon, RobotIcon, ArrowRightIcon } from "@/components/icons";

export function Capabilities() {
  const getIcon = (name: string) => {
    switch (name) {
      case "gear":
        return <GearIcon size={24} className="text-canvas" />;
      case "plug":
        return <PlugIcon size={24} className="text-canvas" />;
      case "robot":
        return <RobotIcon size={24} className="text-canvas" />;
      default:
        return <GearIcon size={24} className="text-canvas" />;
    }
  };

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="mb-14 text-center">
          <Eyebrow center>What We Do</Eyebrow>
          <SectionHeading className="mt-3">Core Capabilities</SectionHeading>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {capabilities.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="cap-interactive-card group"
            >
              {/* Background Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.image}
                alt={c.title}
                className="cap-card-img"
              />

              {/* Dynamic Gradient Overlay */}
              <div
                aria-hidden="true"
                className="cap-card-gradient"
              />

              {/* Card Content */}
              <div className="cap-card-content">
                {/* Icon Pill */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent shadow-[0_4px_16px_var(--color-accent-glow)]">
                  {getIcon(c.iconName)}
                </div>

                {/* Pan-out Text Container */}
                <div className="cap-card-text-container">
                  <h3 className="cap-card-title text-[22px] font-bold">
                    {c.title}
                  </h3>
                  <div className="cap-card-desc-wrapper">
                    <p className="cap-card-desc">
                      {c.desc}
                    </p>
                    <div className="cap-card-link">
                      <span>Learn more</span>
                      <ArrowRightIcon size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
