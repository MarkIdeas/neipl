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

  return (
    <div
      className="relative w-full px-2 sm:px-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Navigation Controls Header */}
      <div className="mb-3 flex items-center justify-between px-2">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
          <span className="text-[12px] font-bold uppercase tracking-wider text-slate-500">
            {type === "client" ? "Verified Client Deployments" : "Authorized OEM Global Network"}
          </span>
          <span className="text-[11px] font-semibold text-slate-400">
            ({currentIndex + 1} / {total})
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous logos"
            className="flex h-7 w-7 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-600 shadow-xs hover:border-amber-400 hover:text-amber-600 transition-colors"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next logos"
            className="flex h-7 w-7 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-600 shadow-xs hover:border-amber-400 hover:text-amber-600 transition-colors"
          >
            ›
          </button>
        </div>
      </div>

      {/* Viewport with subtle edge gradient fades */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white py-4 shadow-xs">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white via-white/80 to-transparent" />

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
              className="flex-none w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 px-2.5"
            >
              <div className="group flex h-28 flex-col items-center justify-center rounded-xl border border-slate-100 bg-slate-50/50 p-3 text-center transition-all duration-300 hover:border-amber-400 hover:bg-white hover:shadow-md">
                {/* Logo Image (Full authentic brand colors) */}
                <div className="relative flex h-11 w-full items-center justify-center transition-all duration-300 group-hover:scale-105">
                  <Image
                    src={item.logo}
                    alt={`${item.name} logo`}
                    width={140}
                    height={44}
                    className="max-h-10 w-auto max-w-[130px] object-contain drop-shadow-xs"
                  />
                </div>

                {/* Subtitle / Role Badge */}
                <div className="mt-2 w-full truncate">
                  <p className="truncate text-[12px] font-bold text-slate-800 group-hover:text-amber-600 transition-colors">
                    {item.name}
                  </p>
                  <p className="truncate text-[10px] font-medium text-slate-500">
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
    <section className="border-y border-slate-200 bg-slate-50/70 py-16 text-slate-800">
      <Container>
        <div className="mx-auto max-w-3xl text-center mb-10">
          <Eyebrow center>Credibility & OEM Network</Eyebrow>
          <SectionHeading tone="dark" className="mt-2 text-slate-900">
            Trusted by Enterprises & Backed by Global OEMs
          </SectionHeading>
          <p className="mt-2 text-[15px] text-slate-600">
            Over two decades of verified industrial deployments across Indian PSUs, private infrastructure, and global partner channels.
          </p>
        </div>

        {/* Slider 1: Verified Client Credibility Strip (Cotmac-style paced advance every 2.5s) */}
        <div className="mb-8">
          <PacedLogoSlider items={CLIENTS} delayMs={2500} type="client" />
        </div>

        {/* Slider 2: Authorized OEM Partner Brands (Cotmac-style paced advance every 3.5s) */}
        <div>
          <PacedLogoSlider items={PARTNERS} delayMs={3500} type="partner" />
        </div>
      </Container>
    </section>
  );
}
