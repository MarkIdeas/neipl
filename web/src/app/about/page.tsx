import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { partnerBrands } from "@/content/site";
import {
  leaders,
  awards,
  dualFacilities,
} from "@/content/pages";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";
import { CertificatesInteractiveGrid } from "@/components/home/ClientEndorsements";
import { FatWorkflowPipeline } from "@/components/about/FatWorkflowPipeline";
import { EvolutionTimeline } from "@/components/about/EvolutionTimeline";
import {
  ArrowRightIcon,
  WrenchShieldIcon,
  MapPinIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "About Us & Engineering Standards",
  description:
    "Founded in 2006, Nandini Enterprises brings 20+ years of CPRI-certified 6000A electrical panel manufacturing, industrial robotics, and automation excellence from Hyderabad and Pune.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* 1. Subpage Split Hero (Dark Industrial Theme) */}
      <section
        id="hero"
        aria-label="About Hero"
        className="relative overflow-hidden bg-canvas py-20 sm:py-28 text-white"
      >
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[150px] pointer-events-none"
        />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14 items-center">
            {/* Left: Headline, Value Proposition & Live Impact Metrics */}
            <div className="lg:col-span-7">
              <Eyebrow>Company & Engineering Standards</Eyebrow>
              <h1 className="mt-4 text-[clamp(2.35rem,4.5vw,3.75rem)] font-extrabold tracking-tight leading-[1.12] text-white">
                20+ Years of Engineering <br />
                <span className="text-amber-500">Integrity & CPRI Rigor</span>
              </h1>
              <p className="mt-6 text-[16px] sm:text-[17px] leading-relaxed text-slate-300">
                Founded in 2006 in Jeedimetla, Hyderabad, with our Western Region technology hub in MIDC Bhosari, Pune, Nandini Enterprises delivers turnkey automation, CPRI-certified 6000A switchboards, high-speed robotics integration, and 24/7 AMC plant support.
              </p>

              {/* Live Impact Metric Badges */}
              <div className="mt-8 grid grid-cols-2 gap-3.5 sm:grid-cols-4">
                <div className="rounded-xl border border-white/15 bg-white/5 p-3.5 backdrop-blur-sm">
                  <span className="text-[20px] font-black text-amber-400">2006</span>
                  <p className="mt-0.5 text-[11px] font-bold text-slate-300">Est. in Hyderabad</p>
                  <p className="text-[10px] text-slate-400">20+ Yrs Service</p>
                </div>
                <div className="rounded-xl border border-white/15 bg-white/5 p-3.5 backdrop-blur-sm">
                  <span className="text-[20px] font-black text-amber-400">6000A</span>
                  <p className="mt-0.5 text-[11px] font-bold text-slate-300">CPRI Certified</p>
                  <p className="text-[10px] text-slate-400">IS/IEC 61439</p>
                </div>
                <div className="rounded-xl border border-white/15 bg-white/5 p-3.5 backdrop-blur-sm">
                  <span className="text-[20px] font-black text-amber-400">15+</span>
                  <p className="mt-0.5 text-[11px] font-bold text-slate-300">Signed PSU Scans</p>
                  <p className="text-[10px] text-slate-400">Audited Proof</p>
                </div>
                <div className="rounded-xl border border-white/15 bg-white/5 p-3.5 backdrop-blur-sm">
                  <span className="text-[20px] font-black text-amber-400">2 Hubs</span>
                  <p className="mt-0.5 text-[11px] font-bold text-slate-300">Hyd & Pune</p>
                  <p className="text-[10px] text-slate-400">Works & Lab</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-[14px] font-extrabold text-slate-950 shadow-md transition-all hover:bg-amber-400"
                >
                  <span>Schedule Factory Audit</span>
                  <ArrowRightIcon size={16} />
                </Link>
                <a
                  href="#timeline"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-[14px] font-bold text-white transition-all hover:bg-white/15"
                >
                  <span>20-Year Milestones</span>
                </a>
              </div>
            </div>

            {/* Right: Engineering Team Showcase Card */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-slate-900 shadow-2xl">
                <div className="relative aspect-4/3 w-full">
                  <Image
                    src="/images/about_indian.jpg"
                    alt="Nandini Enterprises Senior Automation & Panel Engineering Team"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    priority
                    className="object-cover"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest text-amber-400">
                    <WrenchShieldIcon size={14} />
                    <span>Central Operations · Jeedimetla</span>
                  </div>
                  <h3 className="mt-1 text-[17px] font-bold text-white">
                    Direct Partner Oversight on Every Project
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-300">
                    Every CPRI 6000A LT switchboard, robotic cell, and drive panel is personally reviewed by our founding partners from schematic approval to factory acceptance testing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. 20-Year Evolution Milestone Timeline (Bright Theme) */}
      <section
        id="timeline"
        className="scroll-mt-28 border-y border-slate-200 bg-white py-20 sm:py-28 text-slate-800"
      >
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow center>Historical Evolution</Eyebrow>
            <SectionHeading tone="dark" className="mt-2 text-slate-900">
              Two Decades of Continuous Engineering Milestones
            </SectionHeading>
            <p className="mt-3 text-[16px] text-slate-600 leading-relaxed">
              From our origins as an authorized L&T switchgear dealership in Hyderabad to becoming an authorized Yaskawa and Yokogawa channel partner with dual-state manufacturing and service hubs.
            </p>
          </div>

          <div className="mt-14">
            <EvolutionTimeline />
          </div>
        </Container>
      </section>

      {/* 3. Executive Leadership Team (Dark Theme with HD Executive Portraits) */}
      <section
        id="leadership"
        className="scroll-mt-28 bg-canvas py-20 sm:py-28 text-white"
      >
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow center>Leadership</Eyebrow>
            <SectionHeading className="mt-3 text-white">
              Executive Leadership
            </SectionHeading>
            <p className="mt-4 text-[15px] sm:text-[16px] text-slate-300">
              Decades of hands-on instrumentation, electrical engineering, and corporate management driving turnkey project execution across India.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
            {leaders.map((leader) => (
              <div
                key={leader.name}
                data-testid="executive-leader-card"
                className="group flex flex-col rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl transition-all duration-300 hover:border-amber-400/50 hover:bg-white/10"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <div className="relative h-24 w-24 sm:h-28 sm:w-28 flex-none overflow-hidden rounded-2xl border-2 border-amber-500/50 shadow-md">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      sizes="112px"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <span className="text-[12px] font-extrabold uppercase tracking-wider text-amber-400">
                      {leader.role}
                    </span>
                    <h3 className="mt-1 text-[22px] font-extrabold text-white">
                      {leader.name}
                    </h3>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {leader.credentials.map((cred) => (
                        <span
                          key={cred}
                          className="rounded-md border border-white/15 bg-white/5 px-2.5 py-0.5 text-[11px] font-semibold text-slate-300"
                        >
                          {cred}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-[14px] leading-relaxed text-slate-300 border-t border-white/10 pt-5">
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>

          {/* Founder's Engineering Creed */}
          <div className="mt-12 rounded-3xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-900 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-400">
                Founder&apos;s Engineering Creed
              </span>
              <blockquote className="mt-3 text-[16px] sm:text-[18px] font-medium italic text-slate-100 leading-relaxed">
                &ldquo;In a thermal power station or a 4000HP locomotive, an electrical fault isn&apos;t an inconvenience—it is catastrophic. We founded this company in 2006 on one non-negotiable rule: every switchboard, drive system, and robotic cell leaving our shop floor must withstand the harshest real-world electrical stress. That is why we test to 6000A at CPRI, and why India&apos;s critical industries trust us with their uptime.&rdquo;
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <span className="text-[14px] font-extrabold text-white">Maruti Marlapalle</span>
                <span className="text-[12px] text-amber-400/90 font-medium">· Founder &amp; Chief Engineer</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. 5-Stage Factory Acceptance Testing (FAT) Workflow Pipeline (Bright Theme) */}
      <section
        id="quality"
        className="scroll-mt-28 border-y border-slate-200 bg-slate-50 py-20 sm:py-28 text-slate-800"
      >
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow center>Engineering Standards</Eyebrow>
            <SectionHeading tone="dark" className="mt-2 text-slate-900">
              5-Stage Factory Acceptance Testing (FAT) Pipeline
            </SectionHeading>
            <p className="mt-3 text-[16px] text-slate-600 leading-relaxed">
              Every switchboard and automation panel built in our Hyderabad works undergoes a mandatory 5-phase sequential quality pipeline before customer-witnessed dispatch.
            </p>
          </div>

          <div className="mt-14">
            <FatWorkflowPipeline />
          </div>
        </Container>
      </section>

      {/* 5. Dual-Hub Manufacturing & Technology Infrastructure (Bright Theme) */}
      <section
        id="infrastructure"
        className="scroll-mt-28 border-b border-slate-200 bg-white py-20 sm:py-28 text-slate-800"
      >
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow center>Manufacturing & Service Footprint</Eyebrow>
            <SectionHeading tone="dark" className="mt-2 text-slate-900">
              Dual-Hub Facilities: Hyderabad & Pune
            </SectionHeading>
            <p className="mt-3 text-[16px] text-slate-600 leading-relaxed">
              Fully equipped switchboard manufacturing works in Telangana alongside our specialized AC drive repair laboratory and robotics support center in Maharashtra.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
            {dualFacilities.map((fac) => (
              <div
                key={fac.city}
                data-testid="dual-facility-card"
                className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/70 shadow-xs transition-all duration-300 hover:border-amber-400 hover:shadow-lg"
              >
                <div className="relative aspect-16/9 w-full">
                  <Image
                    src={fac.image}
                    alt={`${fac.facility} in ${fac.city}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"
                  />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="rounded-md bg-amber-500 px-2.5 py-1 text-[11px] font-extrabold text-slate-950">
                      {fac.city}
                    </span>
                    <h3 className="mt-1 text-[18px] font-extrabold text-white">
                      {fac.facility}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start gap-2 text-[13px] text-slate-600">
                    <MapPinIcon size={16} className="text-amber-600 flex-none mt-0.5" />
                    <span>{fac.address}</span>
                  </div>
                  <p className="mt-3 text-[13px] font-semibold text-slate-800 leading-relaxed">
                    Focus: {fac.focus}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2 border-t border-slate-200/80 pt-3">
                    {fac.specs.map((sp) => (
                      <span
                        key={sp}
                        className="rounded-full bg-white border border-slate-200 px-3 py-1 text-[11px] font-bold text-slate-700"
                      >
                        ✓ {sp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Honors & Awards (Bright Theme) */}
      <section
        id="awards"
        className="scroll-mt-28 border-b border-slate-200 bg-slate-50 py-20 sm:py-28 text-slate-800"
      >
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow center>Recognition</Eyebrow>
            <SectionHeading tone="dark" className="mt-2 text-slate-900">
              Awards & Industry Accolades
            </SectionHeading>
            <p className="mt-3 text-[15px] text-slate-600">
              Recognized by national industry bodies and tier-1 engineering conglomerates for innovation and business excellence.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {awards.map((a) => (
              <div
                key={a.title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg"
              >
                <span className="inline-flex w-fit rounded-lg bg-amber-500/15 px-3 py-1 font-mono text-[13px] font-extrabold text-amber-700">
                  {a.year}
                </span>
                <h3 className="mt-4 text-[16px] font-extrabold text-slate-900 leading-snug">
                  {a.title}
                </h3>
                <p className="mt-auto pt-4 text-[12px] font-semibold text-slate-500 border-t border-slate-100">
                  Conferred by: {a.by}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. Verified Client Scans / Completion Certificates (Dark Theme) */}
      <section
        id="certifications"
        className="scroll-mt-28 bg-navy-dark py-20 sm:py-28 text-white"
      >
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow center>Proof of Delivery</Eyebrow>
            <SectionHeading className="mt-3 text-white">
              Verified Performance & Completion Certificates
            </SectionHeading>
            <p className="mt-4 text-[15px] text-slate-300">
              Inspect 15 original, signed work completion certificates and OEM authorization letters from Indian Public Sector Undertakings (PSUs), Railways, and major industrial enterprises.
            </p>
          </div>

          <CertificatesInteractiveGrid />
        </Container>
      </section>

      {/* 8. Authorized OEM Partner Brands Grid (Bright Theme) */}
      <section
        id="partners"
        className="scroll-mt-28 border-y border-slate-200 bg-white py-20 sm:py-28 text-slate-800"
      >
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow center>Global Technology Network</Eyebrow>
            <SectionHeading tone="dark" className="mt-2 text-slate-900">
              Authorized OEM Channel Partners
            </SectionHeading>
            <p className="mt-3 text-[15px] text-slate-600">
              We partner directly with world-leading drive, switchgear, and process instrumentation manufacturers to guarantee authentic hardware and factory-backed warranty support.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {partnerBrands.map((brand) => (
              <div
                key={brand.name}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/60 p-6 transition-all duration-300 hover:border-amber-400 hover:bg-white hover:shadow-lg"
              >
                <div>
                  <div className="flex h-16 items-center justify-between border-b border-slate-200/80 pb-4">
                    {brand.src ? (
                      <Image
                        src={brand.src}
                        alt={`${brand.name} logo`}
                        width={140}
                        height={48}
                        className="max-h-10 w-auto max-w-[140px] object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <span className="text-[20px] font-black text-slate-900">
                        {brand.name}
                      </span>
                    )}
                    <span className="rounded-full bg-amber-500/15 px-3 py-1 text-[11px] font-extrabold text-amber-700">
                      Authorized
                    </span>
                  </div>

                  <h3 className="mt-4 text-[17px] font-extrabold text-slate-900">
                    {brand.name} — {brand.type}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                    {brand.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100">
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-1.5 text-[12px] font-bold text-amber-600 group-hover:text-amber-700"
                  >
                    <span>Browse {brand.name} Catalogue</span>
                    <ArrowRightIcon size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 9. Bottom CTA (Dark Theme) */}
      <section className="bg-canvas py-20 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow center>Work With Us</Eyebrow>
            <h2 className="mt-3 text-[28px] sm:text-[34px] font-extrabold text-white">
              Partner with Hyderabad & Pune&apos;s Proven Automation Team
            </h2>
            <p className="mt-3 text-[16px] text-slate-300">
              Connect with our senior engineering team to schedule a factory audit or discuss your panel and plant automation requirements.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-[14px] font-extrabold text-slate-950 shadow-md transition-all hover:bg-amber-400"
              >
                <span>Schedule Engineering Consultation</span>
                <ArrowRightIcon size={16} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-[14px] font-bold text-white transition-all hover:bg-white/15"
              >
                <span>Explore Solutions Ecosystem</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
