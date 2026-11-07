"use client";

import React from "react";
import Image from "next/image";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";

interface ClientBrand {
  name: string;
  role: string;
  logo: string;
}

interface PartnerBrand {
  name: string;
  desc: string;
  logo: string;
}

const CLIENTS: readonly ClientBrand[] = [
  {
    name: "Visaka Industries Ltd",
    role: "VFD Drive Systems",
    logo: "/images/logos/visaka.png",
  },
  {
    name: "Maharashtra State Power Gen (Mahagenco)",
    role: "Power Plant Works",
    logo: "/images/logos/mahagenco.png",
  },
  {
    name: "Kolhapur Municipal Corp (KMC)",
    role: "City Water Works",
    logo: "/images/logos/kmc.png",
  },
  {
    name: "S.E.C. Railway (Indian Railways)",
    role: "Dyno Test Benches",
    logo: "/images/logos/indian_railways.svg",
  },
  {
    name: "Vasavadatta Cement (Aditya Birla)",
    role: "Kiln & Mill Automation",
    logo: "/images/logos/aditya_birla_cement.png",
  },
  {
    name: "Tata Group",
    role: "Industrial Automation",
    logo: "/images/logos/tata.png",
  },
  {
    name: "Bosch",
    role: "Drives & Control Systems",
    logo: "/images/logos/bosch.png",
  },
  {
    name: "Jindal Steel & Power",
    role: "Power & Automation",
    logo: "/images/logos/jindal.png",
  },
  {
    name: "Vishwa Engineering",
    role: "PLC Control Panels",
    logo: "/images/logos/vishwa.svg",
  },
  {
    name: "ARM Limited, Kenya",
    role: "International Commissioning",
    logo: "/images/logos/arm_kenya.svg",
  },
  {
    name: "DCS Limited",
    role: "Turnkey Installations",
    logo: "/images/logos/dcs_ltd.svg",
  },
];

const PARTNERS: readonly PartnerBrand[] = [
  {
    name: "Yaskawa",
    desc: "Authorized Inverters & Servo Drives",
    logo: "/images/logos/yaskawa.svg",
  },
  {
    name: "Siemens",
    desc: "Industrial AC/DC Drives & Switchgear",
    logo: "/images/logos/siemens.svg",
  },
  {
    name: "Yokogawa",
    desc: "Authorized Field Instrumentation Partner",
    logo: "/images/logos/yokogawa.svg",
  },
  {
    name: "Baumer",
    desc: "High-Precision Encoders & Sensors",
    logo: "/images/logos/baumer.svg",
  },
  {
    name: "Honeywell",
    desc: "Process Control Systems",
    logo: "/images/logos/honeywell.svg",
  },
  {
    name: "GIC India",
    desc: "Industrial Timers, SMPS & PLCs",
    logo: "/images/logos/gic.png",
  },
];

export function ClientsPartnersMarquee() {
  // Duplicated for seamless infinite loop (translateX(-50%))
  const clientLoop = [...CLIENTS, ...CLIENTS];
  const partnerLoop = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section className="relative border-y border-slate-200/80 bg-white py-14 sm:py-18 overflow-hidden">
      {/* Header — Streamlined & Zero Repetition */}
      <Container>
        <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-12">
          <Eyebrow center>Clients &amp; Authorized Partners</Eyebrow>
          <SectionHeading tone="dark" className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            Trusted by India&apos;s Core Industries, Backed by Global Automation Leaders
          </SectionHeading>
        </div>
      </Container>

      {/* Edge-to-Edge Seamless Dual Marquee Tracks */}
      <div className="relative w-full space-y-6 sm:space-y-8">
        {/* Soft edge gradient fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-20 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-20 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent" />

        {/* Track 1: Enterprise Client Deployments */}
        <div className="relative overflow-hidden">
          <div className="mb-2.5 flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-500">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>Verified Enterprise Deployments</span>
          </div>

          <div
            data-testid="logo-slider-track-client"
            className="marquee-track-left flex items-center gap-6 sm:gap-10 py-2 [--visible-cols:2] sm:[--visible-cols:3] md:[--visible-cols:4] lg:[--visible-cols:5]"
          >
            {clientLoop.map((item, idx) => (
              <div
                key={`client-${item.name}-${idx}`}
                className="group flex flex-none flex-col items-center justify-center rounded-xl px-4 py-2.5 transition-all duration-300 hover:bg-slate-50"
              >
                <div className="relative flex h-14 sm:h-16 w-36 sm:w-44 items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={item.logo}
                    alt={`${item.name} logo`}
                    width={160}
                    height={56}
                    style={{ width: "auto", height: "auto" }}
                    className="max-h-11 sm:max-h-13 w-auto max-w-[130px] sm:max-w-[150px] object-contain drop-shadow-xs"
                  />
                </div>
                <span className="mt-1 text-[11px] font-semibold text-slate-600 transition-colors group-hover:text-slate-900 whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Track 2: Authorized OEM Global Network */}
        <div className="relative overflow-hidden">
          <div className="mb-2.5 flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-500">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            <span>Authorized Global OEM Network</span>
          </div>

          <div
            data-testid="logo-slider-track-partner"
            className="marquee-track-right flex items-center gap-6 sm:gap-10 py-2 [--visible-cols:2] sm:[--visible-cols:3] md:[--visible-cols:4] lg:[--visible-cols:5]"
          >
            {partnerLoop.map((item, idx) => (
              <div
                key={`partner-${item.name}-${idx}`}
                className="group flex flex-none flex-col items-center justify-center rounded-xl px-4 py-2.5 transition-all duration-300 hover:bg-slate-50"
              >
                <div className="relative flex h-14 sm:h-16 w-36 sm:w-44 items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={item.logo}
                    alt={`${item.name} logo`}
                    width={160}
                    height={56}
                    style={{ width: "auto", height: "auto" }}
                    className="max-h-11 sm:max-h-13 w-auto max-w-[130px] sm:max-w-[150px] object-contain drop-shadow-xs"
                  />
                </div>
                <div className="mt-1 flex items-center gap-1.5 whitespace-nowrap">
                  <span className="text-[11px] font-bold text-amber-700">
                    {item.name}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">
                    · Partner
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
