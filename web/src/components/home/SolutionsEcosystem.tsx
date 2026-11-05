import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";
import {
  GearIcon,
  RobotIcon,
  PlugIcon,
  BoltIcon,
  ChartIcon,
  CpuChipIcon,
  WrenchShieldIcon,
  ArrowRightIcon,
  PhoneIcon,
} from "@/components/icons";

const CORE_SOLUTIONS = [
  {
    num: "01",
    title: "Industrial Automation",
    anchor: "automation",
    badge: "PLC · SCADA · RTU",
    image: "/images/service_automation.jpg",
    desc: "Turnkey control system architecture: PLC, SCADA, RTU panels, HMI design, and fail-safe plant commissioning.",
    bullets: [
      "Turnkey PLC/RTU control panels",
      "Plant-wide SCADA & telemetry",
      "Distributed I/O architectures",
    ],
    icon: GearIcon,
  },
  {
    num: "02",
    title: "Robotics Integration",
    anchor: "robotics",
    badge: "Turnkey Workcells",
    image: "/images/service_robotics.jpg",
    desc: "Complete robotic workcells engineered for micron-level repeatability, arc welding, palletizing, and hazardous tasks.",
    bullets: [
      "Robotic arc welding cells",
      "High-speed palletization & packing",
      "Automated machine tending",
    ],
    icon: RobotIcon,
  },
  {
    num: "03",
    title: "Electrical Panels",
    anchor: "panels",
    badge: "CPRI Tested 6000A",
    image: "/images/service_panels.jpg",
    desc: "CPRI type-tested low-tension switchboards and motor control centers engineered to withstand 6000A short circuits.",
    bullets: [
      "CPRI certified tested to 6000A",
      "AMF & APFC automatic banks",
      "Heavy-duty MCC switchboards",
    ],
    icon: PlugIcon,
  },
  {
    num: "04",
    title: "Drive Systems",
    anchor: "drives",
    badge: "Yaskawa Authorized",
    image: "/images/service_drives.jpg?v=2",
    desc: "Variable frequency, servo, and DC drive engineering. Authorized tier-1 Yaskawa partner with certified lab support.",
    bullets: [
      "Yaskawa GA700 & A1000 inverters",
      "Sigma-7 high-precision servos",
      "Crane VVVF anti-sway drives",
    ],
    icon: BoltIcon,
  },
  {
    num: "05",
    title: "Field Instrumentation",
    anchor: "instrumentation",
    badge: "Yokogawa Partner",
    image: "/images/service_instrumentation.jpg",
    desc: "Precision process transmitters and measurement networks. Authorized Yokogawa channel partner for critical loops.",
    bullets: [
      "Differential pressure & flow loops",
      "Temperature & level transmitters",
      "Yokogawa certified calibration",
    ],
    icon: ChartIcon,
  },
  {
    num: "06",
    title: "Embedded & IoT Systems",
    anchor: "embedded",
    badge: "Custom Firmware & Edge",
    image: "/images/service_embedded.jpg",
    desc: "Bespoke industrial electronics, microcontroller hardware design, edge telemetry gateways, and SCADA firmware.",
    bullets: [
      "Custom controller hardware & PCB",
      "Industrial edge IoT gateways",
      "Telemetry & remote diagnostics",
    ],
    icon: CpuChipIcon,
  },
] as const;

const FLAGSHIP_AMC = {
  num: "07",
  title: "24/7 Maintenance & Annual Maintenance Contracts (AMC)",
  anchor: "maintenance",
  badge: "24/7 Rapid Response SLA",
  image: "/images/service_maintenance.jpg?v=2",
  desc: "Preventative and emergency annual maintenance contracts (AMC) backed by 24/7 on-site field engineers, genuine OEM spares inventory in Hyderabad & Pune, and certified drive repair laboratories.",
  bullets: [
    "24/7 emergency breakdown hotline",
    "Preventative VVVF & servo drive servicing",
    "Scheduled thermal & harmonic audits",
    "Dedicated Hyderabad & Pune spares depot",
  ],
  icon: WrenchShieldIcon,
} as const;

export function SolutionsEcosystem() {
  const FlagshipIcon = FLAGSHIP_AMC.icon;

  return (
    <section id="solutions" className="bg-white py-24 sm:py-32 text-slate-800">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <Eyebrow>Solutions Ecosystem</Eyebrow>
            <SectionHeading tone="dark" className="mt-2 text-slate-900">
              End-to-End Industrial Capabilities
            </SectionHeading>
            <p className="mt-3 text-[16px] text-slate-600 max-w-2xl">
              From preliminary single-line engineering and CPRI 6000A panel fabrication to robotics commissioning and round-the-clock AMC lifecycle support.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-slate-50 px-5 py-2.5 text-[14px] font-bold text-slate-800 transition-all hover:border-amber-500 hover:bg-amber-500 hover:text-white shadow-xs"
          >
            <span>Browse All 7 Verticals</span>
            <ArrowRightIcon size={16} />
          </Link>
        </div>

        {/* 01–06: Balanced 3x2 Split-Media Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_SOLUTIONS.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.num}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/70 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-400 hover:bg-white hover:shadow-xl"
              >
                <div>
                  {/* Top Industrial Photography Header */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent"
                    />

                    {/* Top Floating Number & Authority Spec Badge */}
                    <div className="absolute top-3.5 inset-x-4 flex items-center justify-between gap-2">
                      <span className="rounded-lg bg-slate-950/80 backdrop-blur-md px-2.5 py-1 font-mono text-[12px] font-extrabold text-amber-400 border border-white/10">
                        {s.num}
                      </span>
                      <span className="rounded-full bg-amber-500 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-950 shadow-sm">
                        {s.badge}
                      </span>
                    </div>

                    {/* Bottom-Left Floating Technical Icon Pill */}
                    <div className="absolute bottom-3.5 left-4 flex items-center gap-2.5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 text-amber-600 shadow-md transition-colors group-hover:bg-amber-500 group-hover:text-white">
                        <Icon size={20} />
                      </div>
                      <h3 className="text-[19px] font-extrabold text-white drop-shadow-xs">
                        {s.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 pb-4">
                    <p className="text-[14px] leading-relaxed text-slate-600">
                      {s.desc}
                    </p>

                    <ul className="mt-5 space-y-2 border-t border-slate-200/80 pt-4">
                      {s.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-[13px] font-medium text-slate-700"
                        >
                          <span className="text-amber-500 font-extrabold">✓</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-100">
                  <Link
                    href={`/services#${s.anchor}`}
                    className="inline-flex items-center gap-1.5 text-[13px] font-bold text-amber-600 group-hover:text-amber-700 transition-colors"
                  >
                    <span>Explore {s.title}</span>
                    <ArrowRightIcon size={14} />
                  </Link>
                  <Link
                    href={`/contact?service=${encodeURIComponent(s.title)}`}
                    className="rounded-lg bg-slate-100 px-3 py-1.5 text-[11px] font-bold text-slate-700 hover:bg-amber-500 hover:text-white transition-colors"
                  >
                    Inquire
                  </Link>
                </div>
              </div>
            );
          })}

          {/* 07: Full-Width Flagship Horizontal Lifecycle & AMC Banner (Eliminates Orphan Card) */}
          <div className="group md:col-span-2 lg:col-span-3 overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 text-white shadow-lg transition-all duration-300 hover:border-amber-400 hover:shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Left Photography Column */}
              <div className="relative min-h-[260px] lg:col-span-5 overflow-hidden bg-slate-950">
                <Image
                  src={FLAGSHIP_AMC.image}
                  alt={FLAGSHIP_AMC.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-85"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-transparent to-slate-900 hidden lg:block"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent lg:hidden"
                />

                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="rounded-lg bg-slate-950/85 backdrop-blur-md px-2.5 py-1 font-mono text-[12px] font-extrabold text-amber-400 border border-white/15">
                    {FLAGSHIP_AMC.num}
                  </span>
                  <span className="rounded-full bg-amber-500 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-950 shadow-sm">
                    {FLAGSHIP_AMC.badge}
                  </span>
                </div>
              </div>

              {/* Right Content Column */}
              <div className="p-8 sm:p-10 lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/30">
                      <FlagshipIcon size={22} />
                    </div>
                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-400">
                        Plant Uptime & Lifecycle Assurance
                      </span>
                      <h3 className="text-[22px] sm:text-[24px] font-extrabold text-white leading-snug">
                        {FLAGSHIP_AMC.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-4 text-[14px] sm:text-[15px] leading-relaxed text-slate-300">
                    {FLAGSHIP_AMC.desc}
                  </p>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-white/10 pt-5">
                    {FLAGSHIP_AMC.bullets.map((b) => (
                      <div
                        key={b}
                        className="flex items-center gap-2.5 text-[13px] font-medium text-slate-200"
                      >
                        <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-amber-500/20 text-amber-400 font-bold text-[11px]">
                          ✓
                        </span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      href={`/services#${FLAGSHIP_AMC.anchor}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-2.5 text-[13px] font-extrabold text-slate-950 shadow-sm transition-all hover:bg-amber-400"
                    >
                      <span>Explore AMC Plans</span>
                      <ArrowRightIcon size={15} />
                    </Link>
                    <Link
                      href="/contact?service=Maintenance%20%26%20AMC"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-[13px] font-bold text-white transition-all hover:bg-white/15"
                    >
                      <span>Schedule Audit</span>
                    </Link>
                  </div>

                  <a
                    href="tel:+919848810889"
                    className="inline-flex items-center gap-2 text-[13px] font-bold text-amber-400 hover:text-amber-300"
                  >
                    <PhoneIcon size={15} />
                    <span>24/7 Support: +91 98488 10889</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

