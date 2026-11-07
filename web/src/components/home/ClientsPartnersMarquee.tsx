"use client";

import React, { useState, useEffect, useCallback } from "react";
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

/**
 * Cotmac-style Indexed "Assembly Line" Paced Slider
 * Halts on each station for delayMs, then executes a smooth deceleration glide (700ms)
 * to the next station. Perfectly seamless infinite loop with zero rewind snap.
 */
function AssemblyLineSlider<T extends { name: string; logo: string; role?: string; desc?: string }>({
  items,
  delayMs,
  type,
  label,
  indicatorColor,
}: {
  items: readonly T[];
  delayMs: number;
  type: "client" | "partner";
  label: string;
  indicatorColor: "emerald" | "amber";
}) {
  const total = items.length;
  // Repeat items 3 times for seamless wrapping: [0..total-1, total..2*total-1, 2*total..3*total-1]
  const displayItems = [...items, ...items, ...items];

  const [index, setIndex] = useState(total);
  const [animate, setAnimate] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const stepForward = useCallback(() => {
    setAnimate(true);
    setIndex((prev) => prev + 1);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(stepForward, delayMs);
    return () => clearInterval(timer);
  }, [isPaused, delayMs, stepForward]);

  // Seamless jump without animation once we hit 2 * total
  const handleTransitionEnd = () => {
    if (index >= 2 * total) {
      setAnimate(false);
      setIndex(total);
    }
  };

  const isPartner = type === "partner";

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Category Kicker */}
      <div className="mb-2.5 flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-500">
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            indicatorColor === "emerald" ? "bg-emerald-500" : "bg-amber-500"
          } animate-pulse`}
        />
        <span>{label}</span>
      </div>

      {/* Viewport with wide feather edge masks */}
      <div className="relative overflow-hidden py-1">
        <div
          ref={undefined}
          data-testid={`logo-slider-track-${type}`}
          onTransitionEnd={handleTransitionEnd}
          className={`flex ${
            animate
              ? "transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              : ""
          } [--visible-cols:2] sm:[--visible-cols:3] md:[--visible-cols:4] lg:[--visible-cols:5]`}
          style={{
            transform: `translateX(calc(-${index} * (100% / var(--visible-cols, 5))))`,
          }}
        >
          {displayItems.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="flex-none w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 px-2.5 sm:px-3.5"
            >
              <div className="group flex h-28 sm:h-32 flex-col items-center justify-center rounded-2xl border border-slate-200/90 bg-white p-3 text-center shadow-xs transition-all duration-300 hover:border-amber-400 hover:shadow-md">
                {/* Logo Image — Large & Prominent */}
                <div className="relative flex h-12 sm:h-14 w-full items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={item.logo}
                    alt={`${item.name} logo`}
                    width={160}
                    height={56}
                    style={{ width: "auto", height: "auto" }}
                    className="max-h-10 sm:max-h-12 w-auto max-w-[125px] sm:max-w-[145px] object-contain drop-shadow-xs"
                  />
                </div>

                {/* Subtitle / Role Badge */}
                <div className="mt-2 w-full truncate">
                  <p className="truncate text-xs sm:text-[13px] font-bold text-slate-800 transition-colors group-hover:text-amber-600">
                    {item.name}
                  </p>
                  <p className="truncate text-[10px] sm:text-[11px] font-medium text-slate-500">
                    {isPartner ? `${item.desc} · Authorized` : item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ClientsPartnersMarquee() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Header — Streamlined & Elegant */}
      <Container>
        <div className="mx-auto max-w-3xl text-center mb-6 sm:mb-8">
          <Eyebrow center>Clients &amp; Authorized Partners</Eyebrow>
          <SectionHeading tone="dark" className="mt-2 text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-slate-900">
            Trusted by India&apos;s Core Industries, Backed by Global Automation Leaders
          </SectionHeading>
        </div>
      </Container>

      {/* Edge-to-Edge Seamless Dual Assembly-Line Sliders */}
      <div className="relative w-full space-y-4 sm:space-y-6">
        {/* Soft edge gradient fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent" />

        {/* Track 1: Enterprise Client Deployments (Paced station-by-station assembly line glide) */}
        <AssemblyLineSlider
          items={CLIENTS}
          delayMs={2800}
          type="client"
          label="Verified Enterprise Deployments"
          indicatorColor="emerald"
        />

        {/* Track 2: Authorized OEM Global Network (Offset timing for organic factory rhythm) */}
        <AssemblyLineSlider
          items={PARTNERS}
          delayMs={3500}
          type="partner"
          label="Authorized Global OEM Network"
          indicatorColor="amber"
        />
      </div>
    </div>
  );
}
