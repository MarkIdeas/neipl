import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";
import { ArrowRightIcon } from "@/components/icons";

const CASE_STUDIES = [
  {
    title: "Thermal Power Station Control & SCADA Automation",
    client: "Maharashtra State Power Generation (Mahagenco)",
    sector: "Power Generation",
    image: "/images/case_thermal_scada.jpg",
    impactBadge: "Zero Unplanned Outages",
    challenge: "Managing boiler water-to-steam ratios, drum level compensation, and protection panel reliability under high-load shifts.",
    solution: "Engineered SCADA telemetry architecture with automated feed control and CPRI-tested switchboards up to 6000A.",
    outcome: "Official work completion certificate conferred; zero unplanned outages sustained across operational cycle.",
    link: "/gallery#case-studies",
  },
  {
    title: "Locomotive Traction Alternator Dyno Test Bench",
    client: "South East Central Railway, Raipur",
    sector: "Railways & Rolling Stock",
    image: "/images/case_railways_dyno.jpg",
    impactBadge: "Cut Turnaround by 40%",
    challenge: "High-precision dyno load testing of rolling stock alternators, RRUs, and traction motors under severe electrical duty.",
    solution: "Custom-built automated dyno drive bench with regenerative braking units and automated parameter logging.",
    outcome: "Conferred official Divisional Electrical Engineer performance certificate; accelerated locomotive return-to-track by 40%.",
    link: "/gallery#case-studies",
  },
  {
    title: "Municipal Water Pumping & Power Factor Optimization",
    client: "Kolhapur Municipal Corporation (KMC)",
    sector: "Water Treatment",
    image: "/images/case_water_apfc.jpg",
    impactBadge: "0.99 Power Factor",
    challenge: "Excessive electrical reactive power penalties and manual pump sequencing across municipal pumping stations.",
    solution: "Microprocessor-switched APFC capacitor banks and automated VFD multi-pump pressure telemetry.",
    outcome: "Maintained 0.99 power factor across all operating cycles, eliminating utility penalties and securing uninterrupted civic water.",
    link: "/gallery#case-studies",
  },
] as const;

export function FeaturedCaseStudies() {
  return (
    <section className="bg-slate-50 py-24 sm:py-32 text-slate-800 border-b border-slate-200">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <Eyebrow>Proven Delivery</Eyebrow>
            <SectionHeading tone="dark" className="mt-2 text-slate-900">
              Featured Engineering Case Studies
            </SectionHeading>
            <p className="mt-3 text-[16px] text-slate-600 max-w-2xl">
              Real-world automation challenges solved with custom switchboards, Yaskawa drives, and certified PLC logic.
            </p>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-[14px] font-bold text-slate-800 transition-all hover:border-amber-500 hover:text-amber-600 shadow-xs"
          >
            <span>View All Projects</span>
            <ArrowRightIcon size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((c) => (
            <div
              key={c.title}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-xl"
            >
              <div>
                {/* Photo Frame */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="rounded-md bg-white/95 backdrop-blur-md px-2.5 py-1 text-[11px] font-bold text-slate-900 shadow-xs">
                      {c.sector}
                    </span>
                    <span className="rounded-md bg-emerald-600 px-2.5 py-1 text-[11px] font-extrabold text-white shadow-xs">
                      {c.impactBadge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <span className="text-[12px] font-bold text-amber-600 uppercase tracking-wider">
                    {c.client}
                  </span>
                  <h3 className="mt-2 text-[18px] font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                    {c.title}
                  </h3>

                  <div className="mt-4 space-y-3 text-[13px] text-slate-600 border-t border-slate-100 pt-4">
                    <div>
                      <strong className="text-slate-900 font-semibold">The Stake:</strong> {c.challenge}
                    </div>
                    <div>
                      <strong className="text-slate-900 font-semibold">Engineering Innovation:</strong> {c.solution}
                    </div>
                    <div className="rounded-lg bg-emerald-50/80 p-3 text-[12px] font-medium text-slate-800 border border-emerald-200/60">
                      <strong className="text-emerald-800 font-bold">Verified Impact:</strong> {c.outcome}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-7 pt-0 border-t border-slate-100 mt-2">
                <Link
                  href={c.link}
                  className="inline-flex items-center gap-1.5 text-[13px] font-bold text-amber-600 hover:text-amber-700"
                >
                  <span>Explore Project Details</span>
                  <ArrowRightIcon size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
