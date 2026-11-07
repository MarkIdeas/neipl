"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
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
 * Cotmac-style discrete, paced slider carousel
 * Pauses on each slide for delayMs, then step-slides to next set smoothly.
 */
function PacedLogoSlider<T extends { name: string; logo: string; role?: string; desc?: string }>({
  items,
  delayMs,
  type,
}: {
  items: readonly T[];
  delayMs: number;
  type: "client" | "partner";
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Visible items count per breakpoint: 2 on mobile, 4 on tablet, 5 on desktop
  const total = items.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, delayMs);
    return () => clearInterval(timer);
  }, [isPaused, delayMs, nextSlide]);

  // Triple items for seamless circular wrapping
  const loopedItems = [...items, ...items, ...items];
  const offset = currentIndex + total;

  const isPartner = type === "partner";

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Navigation Controls Header */}
      <div className="mb-3.5 flex items-center justify-between px-2 sm:px-3">
        <div className="flex items-center gap-2.5">
          <span
            className={`h-2.5 w-2.5 rounded-full ${
              isPartner ? "bg-amber-500" : "bg-emerald-500"
            } animate-pulse`}
          />
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">
            {isPartner ? "Authorized OEM Global Network" : "Verified Client Deployments"}
          </span>
          <span
            className={`hidden sm:inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
              isPartner
                ? "bg-amber-50 text-amber-800 border border-amber-200"
                : "bg-emerald-50 text-emerald-800 border border-emerald-200"
            }`}
          >
            {isPartner ? "Tier-1 OEM Channel" : "Heavy Industry Deployments"}
          </span>
          <span className="text-[12px] font-semibold text-slate-400">
            ({currentIndex + 1} / {total})
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous logos"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-xs hover:border-amber-500 hover:text-amber-600 hover:shadow-sm transition-all"
          >
            <span className="text-base font-bold leading-none">‹</span>
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next logos"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-xs hover:border-amber-500 hover:text-amber-600 hover:shadow-sm transition-all"
          >
            <span className="text-base font-bold leading-none">›</span>
          </button>
        </div>
      </div>

      {/* Viewport with subtle edge gradient fades */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/70 p-3 sm:p-4 shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-20 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-20 bg-gradient-to-l from-white via-white/80 to-transparent" />

        <div
          ref={containerRef}
          data-testid={`logo-slider-track-${type}`}
          className="flex transition-transform duration-500 ease-in-out [--visible-cols:2] sm:[--visible-cols:3] md:[--visible-cols:4] lg:[--visible-cols:5]"
          style={{
            transform: `translateX(calc(-${offset} * (100% / var(--visible-cols, 5))))`,
          }}
        >
          {loopedItems.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="flex-none w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 px-2 sm:px-2.5"
            >
              <div className="group relative flex h-36 sm:h-40 flex-col items-center justify-between rounded-xl border border-slate-200/90 bg-white p-3 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-amber-500 hover:shadow-lg">
                {/* Top Badge: Partner Authorization or Deployment Category */}
                <div className="w-full flex items-center justify-center">
                  {isPartner ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-700 border border-amber-200/70">
                      <span className="h-1 w-1 rounded-full bg-amber-500" />
                      Authorized
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-600 border border-slate-200/70">
                      <span className="h-1 w-1 rounded-full bg-emerald-500" />
                      Client
                    </span>
                  )}
                </div>

                {/* Logo Image (Elevated scale & sharp authentic colors) */}
                <div className="relative flex h-14 sm:h-16 w-full items-center justify-center px-2 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={item.logo}
                    alt={`${item.name} logo`}
                    width={160}
                    height={56}
                    style={{ width: "auto", height: "auto" }}
                    className="max-h-12 sm:max-h-14 w-auto max-w-[140px] object-contain drop-shadow-xs"
                  />
                </div>

                {/* Subtitle / Role Badge */}
                <div className="w-full border-t border-slate-100 pt-1.5 truncate">
                  <p className="truncate text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                    {item.name}
                  </p>
                  <p className="truncate text-[10px] sm:text-[11px] font-medium text-slate-500">
                    {item.role || item.desc}
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
    <section className="relative border-y border-slate-200/90 bg-white py-16 sm:py-20 text-slate-900 overflow-hidden">
      {/* Radiant ambient glow accent at top */}
      <div className="pointer-events-none absolute top-0 left-1/2 -z-10 -translate-x-1/2 w-3/4 h-64 bg-gradient-to-b from-amber-500/10 via-amber-500/0 to-transparent blur-3xl" />

      <Container>
        <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-12">
          <Eyebrow center>Credibility & OEM Network</Eyebrow>
          <SectionHeading tone="dark" className="mt-3 text-slate-900 text-3xl sm:text-4xl font-extrabold tracking-tight">
            Trusted by Enterprises & Backed by Global OEMs
          </SectionHeading>
          <p className="mt-3 text-[15px] sm:text-base text-slate-600 leading-relaxed">
            Over two decades of verified industrial deployments across Indian PSUs, private infrastructure, and authorized global OEM channels.
          </p>

          {/* Authority trust metrics row */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-semibold text-slate-700">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50/90 px-3.5 py-1 text-slate-800 shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              CPRI Tested up to 6000A / 50kA
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50/90 px-3.5 py-1 text-slate-800 shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              ISO 9001:2015 Certified
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50/90 px-3.5 py-1 text-slate-800 shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              Authorized Yaskawa Partner
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50/90 px-3.5 py-1 text-slate-800 shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
              50+ Heavy Industry Plants
            </span>
          </div>
        </div>

        {/* Slider 1: Verified Client Credibility Strip */}
        <div className="mb-10 sm:mb-12">
          <PacedLogoSlider items={CLIENTS} delayMs={2500} type="client" />
        </div>

        {/* Slider 2: Authorized OEM Partner Brands */}
        <div>
          <PacedLogoSlider items={PARTNERS} delayMs={3500} type="partner" />
        </div>
      </Container>
    </section>
  );
}
