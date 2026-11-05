import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { company } from "@/content/site";
import { certificates } from "@/content/pages";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";
import { ArrowRightIcon, CheckIcon, PhoneIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Projects, Case Studies & Installation Gallery",
  description:
    "Explore flagship turnkey case studies for Mahagenco, Indian Railways, Visaka Industries, Vasavadatta Cement, and Kolhapur Municipal Corp alongside our CPRI 6000A panel and robotics installation gallery.",
  alternates: {
    canonical: "/gallery",
  },
};

const FLAGSHIP_CASE_STUDIES = [
  {
    id: "mahagenco-scada",
    title: "Thermal Power Station Control & SCADA Automation",
    client: "Maharashtra State Power Generation (Mahagenco)",
    sector: "State Power Utility PSU",
    logo: "/images/logos/mahagenco.png",
    image: "/images/case_thermal_scada.jpg",
    challenge:
      "Managing boiler water-to-steam ratios, drum level compensation, and feeder protection reliability under severe thermal utility load shifts.",
    solution:
      "Engineered redundant PLC/SCADA telemetry architecture with automated feedwater control loops and CPRI-tested 6000A LT protection switchboards.",
    outcome:
      "Official work completion certificate conferred; zero unplanned electrical outages recorded across continuous generating cycles.",
    hardware: ["CPRI 6000A PCC/MCC", "Redundant SCADA", "Yokogawa Transmitters"],
    certHref: certificates[1].href,
  },
  {
    id: "railways-dyno",
    title: "Locomotive Traction Alternator Dyno Test Bench",
    client: "South East Central Railway, Raipur",
    sector: "Indian Railways & Rolling Stock",
    logo: "/images/logos/indian_railways.svg",
    image: "/images/case_railways_dyno.jpg",
    challenge:
      "High-precision dynamic load testing of locomotive traction alternators, RRUs, and motors under heavy electrical duty before rolling-stock dispatch.",
    solution:
      "Custom-built automated dyno drive test bench with Yaskawa R1000 regenerative braking units and automated parameter logging HMI.",
    outcome:
      "Conferred Divisional Electrical Engineer performance certificate; reduced alternator test turnaround time by 40%.",
    hardware: ["Yaskawa AC Drives", "R1000 Regenerative Unit", "Automated Dyno HMI"],
    certHref: certificates[5].href,
  },
  {
    id: "kmc-water",
    title: "Municipal Water Pumping & 0.99 PF Optimization",
    client: "Kolhapur Municipal Corporation (KMC)",
    sector: "Municipal Water Infrastructure",
    logo: "/images/logos/kmc.png",
    image: "/images/case_water_apfc.jpg",
    challenge:
      "Heavy utility reactive power penalties, voltage dips, and manual pump sequencing across municipal water supply pumping stations.",
    solution:
      "Commissioned microprocessor-switched APFC capacitor banks with detuned reactors and automated multi-pump VFD pressure telemetry.",
    outcome:
      "Maintained 0.99 power factor across all operating cycles, eliminating utility penalties and cutting pump mechanical wear.",
    hardware: ["0.99 PF APFC Panel", "Multi-Pump VFD Cascade", "Pressure Telemetry"],
    certHref: certificates[4].href,
  },
  {
    id: "visaka-drives",
    title: "Multi-Axis VFD Process Line Synchronization",
    client: "Visaka Industries Limited",
    sector: "Heavy Industrial Manufacturing",
    logo: "/images/logos/visaka.png",
    image: "/images/service_drives.jpg",
    challenge:
      "Maintaining continuous multi-motor speed synchronization and high-starting torque across continuous sheet and textile production lines.",
    solution:
      "Integrated coordinated Yaskawa AC vector drives with closed-loop encoder feedback, custom MCC panels, and centralized operator consoles.",
    outcome:
      "Awarded official Yaskawa VFD performance certificate for multi-year zero-downtime plant operation.",
    hardware: ["Yaskawa GA700 / A1000", "Baumer Encoders", "Custom MCC Lineup"],
    certHref: certificates[0].href,
  },
  {
    id: "vasavadatta-cement",
    title: "Kiln, Crusher & Cement Mill Switchboard Automation",
    client: "Vasavadatta Cement (Aditya Birla Group)",
    sector: "Cement & Bulk Processing",
    logo: "/images/logos/aditya_birla_cement.png",
    image: "/images/panel_indian.jpg",
    challenge:
      "High ambient dust, extreme starting currents on crusher/mill motors, and strict arc-fault containment requirements in continuous kiln operations.",
    solution:
      "Delivered dust-tight IP54/IP65 CPRI-tested switchboards, high-horsepower VFD starters, and automated interlock panels.",
    outcome:
      "Verified work completion certificate conferred; improved kiln feeder stability and reduced auxiliary power consumption.",
    hardware: ["IP65 CPRI Switchboard", "A1000 HHP Drives", "ESP & Kiln Interlocks"],
    certHref: certificates[3].href,
  },
  {
    id: "arm-kenya-export",
    title: "Export-Grade Switchboards & Traverser Control",
    client: "ARM Limited, Kenya & TPTY Railway Workshops",
    sector: "International Export & Transit",
    logo: "/images/logos/arm_kenya.svg",
    image: "/images/service_automation.jpg",
    challenge:
      "Engineering tropicalized, export-ready electrical panels for overseas mineral processing and precision multi-ton railway carriage traversers.",
    solution:
      "Pre-tested modular PLC and MCC switchboards at Jeedimetla Works HQ with full 4-stage FAT prior to international and workshop dispatch.",
    outcome:
      "Successful overseas commissioning in Kenya and certified traverser installation for Indian Railways workshops.",
    hardware: ["Export-Grade MCC/PLC", "Traverser VVVF Drive", "100% Pre-Dispatch FAT"],
    certHref: certificates[10].href,
  },
] as const;

const EXECUTION_STEPS = [
  {
    step: "01",
    title: "Site Load Audit & SLD Engineering",
    desc: "Detailed fault-level calculation, single-line diagram (SLD) CAD drafting, and harmonic analysis.",
  },
  {
    step: "02",
    title: "CPRI 6000A Panel Fabrication",
    desc: "In-house CNC sheet-metal enclosure fabrication, electrolytic ETP copper busbar sizing, and PLC coding.",
  },
  {
    step: "03",
    title: "Mandatory 4-Stage Factory Testing",
    desc: "2.5kV high-voltage dielectric test, Megger insulation verification, and full I/O logic simulation.",
  },
  {
    step: "04",
    title: "Turnkey Commissioning & 24/7 AMC",
    desc: "On-site erection, loop calibration, operator training, and lifelong Annual Maintenance Contracts.",
  },
] as const;

export default function GalleryPage() {
  return (
    <>
      {/* 1. Gallery & Projects Hero (Dark Industrial Theme) */}
      <section
        id="hero"
        aria-label="Gallery Hero"
        className="relative flex min-h-[58vh] items-center overflow-hidden bg-canvas py-24 text-white"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-clean-bg.jpg"
            alt="Nandini Automation Projects and Laboratory"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-canvas/85 via-canvas/90 to-canvas"
          />
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[140px]"
          />
        </div>

        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow center>Portfolio of Excellence</Eyebrow>
            <h1 className="mt-4 text-[clamp(2.5rem,5vw,4.25rem)] font-extrabold tracking-tight leading-[1.12] text-white">
              Projects &amp; Engineering <br />
              <span className="text-amber-500">Installations</span>
            </h1>
            <p className="mt-6 text-[17px] leading-relaxed text-slate-300">
              Explore verified turnkey case studies and site deployments of CPRI-certified 6000A switchboards, 6-axis robotic cells, Yaskawa drive lineups, and PLC/SCADA facilities across India and abroad.
            </p>

            {/* Trust Pills */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              {[
                "✓ 6 Flagship PSU & Enterprise Case Studies",
                "✓ 12+ Turnkey System Architectures",
                "✓ CPRI 6000A & A-Grade Execution",
                "✓ Pan-India & International Export",
              ].map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[12px] font-bold text-amber-400 backdrop-blur-sm"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Hero Quick Jump Actions */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#case-studies"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-[14px] font-extrabold text-slate-950 shadow-md transition-all hover:bg-amber-400"
              >
                <span>Explore Flagship Case Studies</span>
                <ArrowRightIcon size={16} />
              </a>
              <a
                href="#installations"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-[14px] font-bold text-white transition-all hover:border-amber-400 hover:bg-white/10"
              >
                <span>Browse Installation Gallery</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Flagship Engineering Case Studies (Bright Theme) */}
      <section
        id="case-studies"
        className="scroll-mt-28 border-y border-slate-200 bg-slate-50 py-20 sm:py-28 text-slate-800"
      >
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-14">
            <Eyebrow center>Proven Turnkey Delivery</Eyebrow>
            <SectionHeading tone="dark" className="mt-2 text-slate-900">
              Flagship Engineering Case Studies
            </SectionHeading>
            <p className="mt-3 text-[15px] text-slate-600">
              Deep-dive breakdowns of complex industrial challenges solved with CPRI-tested switchboards, Yaskawa drives, and Yokogawa instrumentation—backed by signed client completion certificates.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {FLAGSHIP_CASE_STUDIES.map((cs) => (
              <div
                key={cs.id}
                data-testid="flagship-case-study-card"
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-xl"
              >
                <div>
                  {/* Photo Header with Sector Pill & Official Client Logo */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="rounded-md bg-white/95 backdrop-blur-md px-3 py-1 text-[11px] font-extrabold text-slate-900 shadow-xs">
                        {cs.sector}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3 flex h-10 w-18 items-center justify-center rounded-lg bg-white p-1.5 shadow-md">
                      <Image
                        src={cs.logo}
                        alt={`${cs.client} logo`}
                        width={64}
                        height={32}
                        className="max-h-7 w-auto object-contain"
                      />
                    </div>
                  </div>

                  {/* Case Study Body */}
                  <div className="p-6">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-600">
                      {cs.client}
                    </span>
                    <h3 className="mt-1.5 text-[18px] font-extrabold text-slate-900 leading-snug group-hover:text-amber-600 transition-colors">
                      {cs.title}
                    </h3>

                    <div className="mt-4 space-y-2.5 border-t border-slate-100 pt-4 text-[13px] text-slate-600">
                      <div>
                        <strong className="text-slate-900">Challenge:</strong>{" "}
                        {cs.challenge}
                      </div>
                      <div>
                        <strong className="text-slate-900">Solution:</strong>{" "}
                        {cs.solution}
                      </div>
                      <div className="rounded-xl border border-amber-200/70 bg-amber-50/70 p-3 text-[12px] font-medium text-slate-800">
                        <strong className="text-amber-700">
                          Verified Outcome:
                        </strong>{" "}
                        {cs.outcome}
                      </div>
                    </div>

                    {/* Hardware Stack Badges */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {cs.hardware.map((hw) => (
                        <span
                          key={hw}
                          className="rounded-md bg-slate-100 px-2.5 py-1 font-mono text-[10px] font-bold text-slate-700"
                        >
                          {hw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Links */}
                <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <Link
                    href={`/contact?project=${encodeURIComponent(cs.title)}`}
                    className="inline-flex items-center gap-1.5 text-[13px] font-extrabold text-amber-600 hover:text-amber-700"
                  >
                    <span>Request Similar System</span>
                    <ArrowRightIcon size={14} />
                  </Link>
                  <a
                    href={cs.certHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-lg bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700 hover:bg-emerald-100 transition-colors"
                  >
                    <CheckIcon size={11} />
                    <span>Signed Scan ↗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Interactive Installation & Equipment Gallery (Dark Theme) */}
      <section
        id="installations"
        className="scroll-mt-28 bg-navy-dark py-20 sm:py-28 text-white"
      >
        <Container>
          <div className="mx-auto max-w-2xl text-center mb-12">
            <Eyebrow center>Site &amp; Works Portfolio</Eyebrow>
            <SectionHeading className="mt-3 text-white">
              System Installations &amp; Builds
            </SectionHeading>
            <p className="mt-3 text-[15px] text-slate-300">
              Filter by engineering vertical or click any installation card to inspect technical specifications and full-size site photography.
            </p>
          </div>

          <GalleryGrid />
        </Container>
      </section>

      {/* 4. 4-Step Turnkey Execution Methodology (Bright Theme) */}
      <section
        id="execution"
        className="scroll-mt-28 border-y border-slate-200 bg-white py-20 sm:py-24 text-slate-800"
      >
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <Eyebrow center>Turnkey Delivery Standard</Eyebrow>
            <SectionHeading tone="dark" className="mt-2 text-slate-900">
              How We Execute Mission-Critical Projects
            </SectionHeading>
            <p className="mt-3 text-[15px] text-slate-600">
              Every project follows a strict ISO and IS/IEC 61439 engineering workflow from our Jeedimetla (Hyderabad) and MIDC Bhosari (Pune) hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {EXECUTION_STEPS.map((item) => (
              <div
                key={item.step}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/70 p-6 shadow-xs transition-all duration-300 hover:border-amber-400 hover:bg-white hover:shadow-md"
              >
                <div>
                  <span className="inline-flex rounded-lg bg-amber-500 px-3 py-1 font-mono text-[13px] font-extrabold text-slate-950">
                    STEP {item.step}
                  </span>
                  <h3 className="mt-4 text-[17px] font-extrabold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Bottom Consultation CTA (Dark Theme) */}
      <section className="bg-canvas py-20 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow center>Start Your Project</Eyebrow>
            <h2 className="mt-3 text-[28px] sm:text-[34px] font-extrabold text-white">
              Have a Similar Engineering Challenge?
            </h2>
            <p className="mt-3 text-[16px] text-slate-300">
              Our senior electrical and automation engineers can customize any of these proven CPRI-certified architectures for your plant.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-[14px] font-extrabold text-slate-950 shadow-md transition-all hover:bg-amber-400"
              >
                <span>Discuss Your Project</span>
                <ArrowRightIcon size={16} />
              </Link>
              <a
                href={`tel:${company.mobile.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-[14px] font-bold text-white transition-all hover:border-amber-400 hover:bg-white/10"
              >
                <PhoneIcon size={16} className="text-amber-400" />
                <span>Call {company.mobile}</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
