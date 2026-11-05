"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";
import {
  CheckIcon,
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

interface ServiceDetail {
  id: string;
  title: string;
  badge: string;
  metric: string;
  desc: string;
  protocols: readonly string[];
  caps: readonly string[];
  image: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const serviceDetails: readonly ServiceDetail[] = [
  {
    id: "automation",
    title: "Industrial Automation",
    badge: "PLC · SCADA · RTU",
    metric: "100+ Turnkey Plants",
    desc: "Comprehensive PLC, SCADA, and RTU turnkey automation solutions that streamline manufacturing plants, boost throughput, and ensure fail-safe continuous operation.",
    protocols: [
      "Siemens S7-1500 / TIA Portal",
      "Rockwell ControlLogix",
      "Schneider Modicon",
      "Profinet & Modbus TCP",
      "Ignition & WinCC SCADA",
    ],
    caps: [
      "Turnkey PLC & RTU control panels",
      "Plant-wide SCADA & historian systems",
      "Custom HMI operator station design",
      "Distributed I/O & fieldbus architectures",
      "Batch recipe & interlock programming",
      "Full on-site FAT/SAT commissioning",
    ],
    image: "/images/service_automation.jpg",
    icon: GearIcon,
  },
  {
    id: "robotics",
    title: "Robotics Integration",
    badge: "Turnkey Workcells",
    metric: "±0.02mm Precision",
    desc: "Turnkey industrial robotic workstations engineered for micron-level repeatability, high-speed material handling, and hazardous process isolation.",
    protocols: [
      "6-Axis Articulated Robots",
      "High-Speed SCARA Arms",
      "Cognex Machine Vision",
      "Robotic MIG & Arc Welding",
      "Safety Light Curtains & Interlocks",
    ],
    caps: [
      "Robotic arc & spot welding cells",
      "High-speed pick & place systems",
      "Automated end-of-line palletization",
      "CNC machine tending workcells",
      "Vision-guided quality inspection",
      "Safety light curtains & perimeter fencing",
    ],
    image: "/images/service_robotics.jpg",
    icon: RobotIcon,
  },
  {
    id: "panels",
    title: "Electrical Panels",
    badge: "CPRI Tested 6000A",
    metric: "6000A Fault Tested",
    desc: "CPRI type-tested low-tension switchboards and motor control centers engineered to withstand 6000A short circuit faults with complete arc-fault containment.",
    protocols: [
      "CPRI 6000A 65kA/1s Verified",
      "Form 4b Internal Separation",
      "Drawout Air Circuit Breakers",
      "AMF & DG Synchronizing",
      "Microprocessor APFC 0.99 PF",
    ],
    caps: [
      "CPRI certified switchboards up to 6000A",
      "Auto Mains Failure (AMF) DG sync panels",
      "Automatic Power Factor Correction (APFC)",
      "Motor Control Centers (MCC) & PCC",
      "Busbar trunking & feeder pillars",
      "A-Grade licensed electrical contracting",
    ],
    image: "/images/service_panels.jpg",
    icon: PlugIcon,
  },
  {
    id: "drives",
    title: "Drive Systems",
    badge: "Yaskawa Authorized",
    metric: "Tier-1 Channel Partner",
    desc: "High-efficiency variable frequency, servo, and DC drive architectures. Authorized Yaskawa channel partner with a certified component-level repair laboratory.",
    protocols: [
      "Yaskawa GA700 & A1000 Inverters",
      "Sigma-7 Precision Servo Packs",
      "Regenerative Units (R1000)",
      "Crane Anti-Sway VVVF Control",
      "Active Harmonic Mitigation",
    ],
    caps: [
      "Yaskawa GA700, A1000 & V1000 AC drives",
      "Sigma-7 rotary & linear servo packs",
      "Siemens AC/DC heavy industrial drives",
      "Overhead crane VVVF anti-sway control",
      "Active & passive harmonic mitigation",
      "Authorized drive repair & testing lab",
    ],
    image: "/images/service_drives.jpg?v=2",
    icon: BoltIcon,
  },
  {
    id: "instrumentation",
    title: "Field Instrumentation",
    badge: "Yokogawa Partner",
    metric: "Certified Calibration",
    desc: "Calibrated field transmitters and measurement networks. Authorized Yokogawa partner for mission-critical flow, level, differential pressure, and temperature loops.",
    protocols: [
      "Yokogawa DPharp EJA & EJX",
      "Electromagnetic & Vortex Flow",
      "Radar & Ultrasonic Level",
      "HART & Foundation Fieldbus",
      "Intrinsically Safe Ex Loops",
    ],
    caps: [
      "Yokogawa differential pressure transmitters",
      "Electromagnetic & vortex flow meters",
      "Radar & ultrasonic level transmitters",
      "RTD, thermocouple & PID controllers",
      "Baumer precision encoders & sensors",
      "Hazardous area intrinsically safe loops",
    ],
    image: "/images/service_instrumentation.jpg",
    icon: ChartIcon,
  },
  {
    id: "embedded",
    title: "Embedded & IoT Systems",
    badge: "Custom Firmware & Edge",
    metric: "Sub-Millisecond Telemetry",
    desc: "Custom electronic controller design, microcontroller firmware engineering, industrial IoT edge gateways, and bespoke telemetry software architectures.",
    protocols: [
      "ARM Cortex Industrial Microcontrollers",
      "Real-Time C/C++ Firmware",
      "Industrial IoT Cloud Gateways",
      "RS485 & Modbus RTU Bridges",
      "Multi-Layer Custom PCB Design",
    ],
    caps: [
      "Custom industrial PCB & controller design",
      "Real-time embedded C/C++ firmware",
      "Industrial IoT (IIoT) cloud gateways",
      "Modbus, Profibus & Ethernet/IP bridges",
      "Energy monitoring & OEE dashboards",
      "Legacy equipment retrofit electronics",
    ],
    image: "/images/service_embedded.jpg",
    icon: CpuChipIcon,
  },
  {
    id: "maintenance",
    title: "Maintenance & AMC",
    badge: "24/7 Rapid Response SLA",
    metric: "99.9% Uptime Guarantee",
    desc: "24/7 emergency breakdown support and preventative annual maintenance contracts (AMC) ensuring 99.9% uptime across heavy manufacturing and municipal utilities.",
    protocols: [
      "24/7 On-Call Emergency Hotline",
      "Infrared Thermography Audits",
      "Power Quality & Harmonic Audits",
      "Certified Yaskawa Repair Lab",
      "Hyderabad & Pune Spares Depot",
    ],
    caps: [
      "Comprehensive Annual Maintenance (AMC)",
      "24/7 emergency field engineer dispatch",
      "Preventative VVVF drive overhaul",
      "Thermography & power quality audits",
      "Dedicated Hyderabad & Pune spares stock",
      "PLC backup & disaster recovery audits",
    ],
    image: "/images/service_maintenance.jpg?v=2",
    icon: WrenchShieldIcon,
  },
];

export function ServicesExplorer() {
  const [activeId, setActiveId] = useState<string>("automation");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    serviceDetails.forEach((service) => {
      const el = document.getElementById(service.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
    }
  };

  return (
    <>
      {/* Mobile Sticky Horizontal Pill Bar */}
      <div className="sticky top-16 z-30 lg:hidden border-b border-slate-200 bg-white/95 backdrop-blur-md py-3 shadow-xs">
        <Container>
          <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
            {serviceDetails.map((s) => {
              const Icon = s.icon;
              const isActive = activeId === s.id;
              return (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={(e) => scrollToSection(e, s.id)}
                  className={`flex shrink-0 items-center gap-2 rounded-full px-3.5 py-1.5 text-[12px] font-bold transition-all ${
                    isActive
                      ? "bg-amber-500 text-slate-950 shadow-xs"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <Icon size={14} />
                  <span>{s.title}</span>
                </a>
              );
            })}
          </div>
        </Container>
      </div>

      {/* Main Services Explorer with Desktop Sticky Navigation */}
      <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-24 text-slate-800">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Desktop Sticky Sidebar Navigation */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <Eyebrow>Core Verticals</Eyebrow>
                <SectionHeading tone="dark" level="h3" className="mt-2 text-slate-900">
                  Engineered For Uptime
                </SectionHeading>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-600">
                  Select any vertical to inspect technical deliverables, hardware protocols, and certification specs.
                </p>

                <nav className="mt-6 flex flex-col gap-1.5" aria-label="Services list">
                  {serviceDetails.map((s) => {
                    const Icon = s.icon;
                    const isActive = activeId === s.id;
                    return (
                      <a
                        key={s.id}
                        href={`#${s.id}`}
                        onClick={(e) => scrollToSection(e, s.id)}
                        className={`group flex items-center justify-between rounded-xl px-3.5 py-2.5 text-[13px] font-semibold transition-all ${
                          isActive
                            ? "bg-amber-50 text-amber-700 border-l-4 border-amber-500 font-bold shadow-xs"
                            : "text-slate-700 hover:bg-slate-50 hover:text-amber-700 border-l-4 border-transparent"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon
                            size={18}
                            className={`transition-colors ${
                              isActive
                                ? "text-amber-600"
                                : "text-slate-400 group-hover:text-amber-600"
                            }`}
                          />
                          <span>{s.title}</span>
                        </div>
                        <span
                          className={`text-[12px] transition-transform ${
                            isActive
                              ? "translate-x-1 text-amber-600 font-bold"
                              : "text-slate-400 group-hover:translate-x-1 group-hover:text-amber-600"
                          }`}
                        >
                          →
                        </span>
                      </a>
                    );
                  })}
                </nav>

                <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-5 py-3 text-[14px] font-extrabold text-slate-950 shadow-xs transition-all hover:bg-amber-400"
                  >
                    <span>Request Technical Proposal</span>
                    <ArrowRightIcon size={15} />
                  </Link>
                  <a
                    href="tel:+919848810889"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-[13px] font-bold text-slate-700 hover:border-amber-400 hover:text-amber-600 transition-colors"
                  >
                    <PhoneIcon size={14} />
                    <span>+91 98488 10889</span>
                  </a>
                </div>
              </div>
            </aside>

            {/* Detailed Service Cards */}
            <main className="space-y-12 lg:col-span-8">
              {serviceDetails.map((s) => {
                const Icon = s.icon;
                return (
                  <article
                    key={s.id}
                    id={s.id}
                    className="scroll-mt-28 group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-amber-400 hover:shadow-xl"
                  >
                    {/* 1. Header Band with Prominent Line Art Icon & Proof Metric */}
                    <div className="p-6 sm:p-7 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        {/* Prominent Free-Standing 38px Line Art Icon */}
                        <div className="flex-none text-amber-500 transition-transform duration-300 group-hover:scale-110">
                          <Icon size={38} />
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2.5">
                            <h2 className="text-[22px] sm:text-[26px] font-extrabold text-slate-900 leading-tight">
                              {s.title}
                            </h2>
                            <span className="rounded-full bg-amber-500/15 border border-amber-500/30 px-3 py-0.5 text-[11px] font-extrabold uppercase tracking-wider text-amber-800">
                              {s.badge}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Quantifiable Impact Metric Badge */}
                      <div className="rounded-xl bg-slate-900 px-3.5 py-1.5 text-[12px] font-bold text-amber-400 shadow-xs">
                        {s.metric}
                      </div>
                    </div>

                    {/* 2. Unmasked 100% Brightness Industrial Photography */}
                    <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-slate-950">
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 66vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>

                    {/* 3. Card Content Body */}
                    <div className="p-6 sm:p-8">
                      <p className="text-[15px] sm:text-[16px] leading-relaxed text-slate-600">
                        {s.desc}
                      </p>

                      {/* Hardware & Protocols Chip Rack */}
                      <div className="mt-6">
                        <span className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mb-2.5">
                          OEM Hardware & Protocol Ecosystem
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {s.protocols.map((protocol) => (
                            <span
                              key={protocol}
                              className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-[12px] font-semibold text-slate-700"
                            >
                              {protocol}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Key Deliverables & Scope Checklist */}
                      <div className="mt-6 border-t border-slate-100 pt-6">
                        <h3 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mb-3.5">
                          Engineering Deliverables & Scope
                        </h3>
                        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                          {s.caps.map((cap) => (
                            <div
                              key={cap}
                              className="flex items-center gap-2.5 rounded-lg bg-slate-50 px-3 py-2 text-[13px] font-semibold text-slate-800 border border-slate-100"
                            >
                              <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-amber-500/15 text-amber-600">
                                <CheckIcon size={12} />
                              </span>
                              <span>{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Card Footer Actions */}
                      <div className="mt-8 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                        <Link
                          href={`/contact?service=${encodeURIComponent(s.title)}`}
                          className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-[13px] font-bold text-white transition-all hover:bg-amber-500 hover:text-slate-950"
                        >
                          <span>Enquire for {s.title}</span>
                          <ArrowRightIcon size={14} />
                        </Link>
                        <Link
                          href="/products"
                          className="inline-flex items-center gap-1.5 text-[13px] font-bold text-amber-600 hover:text-amber-700"
                        >
                          <span>View OEM Products & Hardware</span>
                          <ArrowRightIcon size={14} />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </main>
          </div>
        </Container>
      </section>
    </>
  );
}
