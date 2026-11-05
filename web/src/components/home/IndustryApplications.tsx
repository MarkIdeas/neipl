import React from "react";
import Image from "next/image";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";

const applications = [
  {
    title: "Vertical Mobility",
    desc: "Advanced drive systems and control panels powering high-speed transparent elevators in premium commercial complexes.",
    image: "/images/app_elevator.jpg",
    alt: "Commercial Elevators powered by Nandini automation",
  },
  {
    title: "Public Transit",
    desc: "Reliable automation components driving heavy-duty escalators in transit hubs and luxury malls with maximum uptime.",
    image: "/images/app_escalator.jpg",
    alt: "Transit Escalators automation systems",
  },
  {
    title: "Heavy Lifting",
    desc: "VVVF drives and rugged control panels engineered to handle the extreme loads of massive industrial overhead cranes.",
    image: "/images/app_crane.jpg",
    alt: "Industrial Overhead Cranes automation",
  },
] as const;

export function IndustryApplications() {
  return (
    <section id="applications" className="border-t border-line bg-canvas py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow center>Industry Applications</Eyebrow>
          <SectionHeading className="mt-3">
            Powered by <span className="text-accent">Nandini</span>
          </SectionHeading>
          <p className="mt-4 text-[16px] leading-relaxed text-text-muted">
            Our CPRI-certified panels, PLCs, and VFD drive systems provide the critical automation infrastructure for heavy-duty applications across the country.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {applications.map((app) => (
            <div
              key={app.title}
              className="group overflow-hidden rounded-2xl border border-card-border bg-card shadow-xl transition-all duration-300 hover:border-accent/30 hover:shadow-2xl"
            >
              <div className="relative h-[250px] w-full overflow-hidden bg-surface">
                <Image
                  src={app.image}
                  alt={app.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60"
                />
              </div>

              <div className="p-7">
                <h3 className="text-[20px] font-bold text-text-white transition-colors group-hover:text-accent">
                  {app.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-text-muted">
                  {app.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
