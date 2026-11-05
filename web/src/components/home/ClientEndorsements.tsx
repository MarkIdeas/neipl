"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { certificates, awards } from "@/content/pages";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";
import {
  ArrowRightIcon,
  CheckIcon,
  WrenchShieldIcon,
  BuildingIcon,
} from "@/components/icons";

type FilterCategory =
  | "featured"
  | "psu-railways"
  | "industrial-oem"
  | "agro-export"
  | "all";

const FILTER_TABS: readonly {
  id: FilterCategory;
  label: string;
  count: number;
}[] = [
  {
    id: "featured",
    label: "Featured Flagships",
    count: certificates.filter((c) => c.featured).length,
  },
  {
    id: "psu-railways",
    label: "PSU & Railways",
    count: certificates.filter((c) => c.category === "psu-railways").length,
  },
  {
    id: "industrial-oem",
    label: "Industrial & OEM",
    count: certificates.filter((c) => c.category === "industrial-oem").length,
  },
  {
    id: "agro-export",
    label: "Agro & Export",
    count: certificates.filter((c) => c.category === "agro-export").length,
  },
  {
    id: "all",
    label: "All Verified Scans",
    count: certificates.length,
  },
];

function getInitials(name: string): string {
  return name
    .split(/[\s,.]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

export function CertificateLightboxModal({
  activeIndex,
  onClose,
  onSelectIndex,
}: {
  activeIndex: number | null;
  onClose: () => void;
  onSelectIndex: (idx: number) => void;
}) {
  const total = certificates.length;

  const handlePrev = useCallback(() => {
    if (activeIndex === null) return;
    onSelectIndex((activeIndex - 1 + total) % total);
  }, [activeIndex, onSelectIndex, total]);

  const handleNext = useCallback(() => {
    if (activeIndex === null) return;
    onSelectIndex((activeIndex + 1) % total);
  }, [activeIndex, onSelectIndex, total]);

  useEffect(() => {
    if (activeIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, onClose, handlePrev, handleNext]);

  if (activeIndex === null) return null;
  const cert = certificates[activeIndex];
  if (!cert) return null;

  const certNumber = `CERT-${String(activeIndex + 1).padStart(2, "0")}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${cert.client} - ${cert.doc}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 sm:p-6 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-slate-900 text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-slate-950/80 px-6 py-4">
          <div className="flex items-center gap-3.5">
            {cert.logo ? (
              <div className="flex h-11 w-20 items-center justify-center rounded-lg bg-white p-1.5 shadow-xs">
                <Image
                  src={cert.logo}
                  alt={`${cert.client} logo`}
                  width={72}
                  height={36}
                  className="max-h-8 w-auto object-contain"
                />
              </div>
            ) : (
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-amber-500/30 bg-amber-500/15 font-mono text-[14px] font-black text-amber-400">
                {getInitials(cert.client)}
              </div>
            )}
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[11px] font-extrabold text-amber-400">
                  {certNumber} OF {String(total).padStart(2, "0")}
                </span>
                {cert.sector && (
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-bold text-slate-300">
                    {cert.sector}
                  </span>
                )}
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[10px] font-bold text-emerald-300">
                  <CheckIcon size={10} />
                  <span>Verified Original Scan</span>
                </span>
              </div>
              <h3 className="mt-1 text-[17px] font-extrabold text-white">
                {cert.client}
              </h3>
              <p className="text-[12px] text-slate-400">{cert.doc}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close certificate preview"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-[16px] font-bold text-slate-300 transition-colors hover:border-amber-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* Center Document Viewer */}
        <div className="relative flex flex-1 flex-col items-center justify-center overflow-y-auto bg-slate-950 p-4 sm:p-6">
          {cert.scope && (
            <div className="mb-4 w-full max-w-2xl rounded-xl border border-amber-500/20 bg-amber-500/10 px-4 py-2.5 text-center text-[12px] text-amber-200">
              <strong className="text-amber-400">Engineering Scope:</strong>{" "}
              {cert.scope}
            </div>
          )}
          <div className="relative flex min-h-[340px] w-full max-w-2xl items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white p-2 shadow-inner">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cert.href}
              alt={`${cert.client} - ${cert.doc}`}
              className="max-h-[58vh] w-auto object-contain"
              loading="eager"
            />
          </div>
        </div>

        {/* Bottom Navigation & Action Footer */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 bg-slate-950/90 px-6 py-4">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3.5 py-2 text-[12px] font-bold text-slate-200 transition-colors hover:border-amber-400 hover:text-amber-400"
            >
              <span>‹ Prev Scan</span>
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3.5 py-2 text-[12px] font-bold text-slate-200 transition-colors hover:border-amber-400 hover:text-amber-400"
            >
              <span>Next Scan ›</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={cert.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-[12px] font-bold text-slate-200 transition-colors hover:border-amber-400 hover:text-white"
            >
              <span>Open Raw Scan in New Tab</span>
              <ArrowRightIcon size={13} />
            </a>
            <Link
              href="/contact"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 rounded-lg bg-amber-500 px-4 py-2 text-[12px] font-extrabold text-slate-950 transition-colors hover:bg-amber-400"
            >
              <span>Request Similar Turnkey Project</span>
              <ArrowRightIcon size={13} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ClientEndorsements() {
  const [activeTab, setActiveTab] = useState<FilterCategory>("featured");
  const [selectedCertIndex, setSelectedCertIndex] = useState<number | null>(
    null
  );

  const filteredWithIndex = certificates
    .map((cert, originalIndex) => ({ cert, originalIndex }))
    .filter(({ cert }) => {
      if (activeTab === "featured") return Boolean(cert.featured);
      if (activeTab === "all") return true;
      return cert.category === activeTab;
    });

  return (
    <section
      id="verified-proof"
      className="bg-canvas py-24 sm:py-32 text-white border-b border-slate-800"
    >
      <Container>
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center mb-10">
          <Eyebrow center>Verified Proof</Eyebrow>
          <SectionHeading className="mt-3 text-white">
            Client Performance &amp; Completion Records
          </SectionHeading>
          <p className="mt-4 text-[16px] text-slate-300">
            Inspect 15 original, signed engineering work completion certificates, OEM channel authorizations, and national industry awards conferred by Indian PSUs, Railways, and enterprise leaders.
          </p>
        </div>

        {/* Step 2: Interactive Category Filter Pills */}
        <div
          role="tablist"
          aria-label="Filter verified completion certificates"
          className="mb-10 flex flex-wrap items-center justify-center gap-2.5"
        >
          {FILTER_TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-amber-500 text-slate-950 shadow-md"
                    : "border border-white/15 bg-white/5 text-slate-300 hover:border-amber-400/50 hover:text-white"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`rounded-full px-2 py-0.5 font-mono text-[11px] font-extrabold ${
                    isActive
                      ? "bg-slate-950/20 text-slate-950"
                      : "bg-white/10 text-amber-400"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Step 1: Enriched Visual Dossier Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredWithIndex.map(({ cert, originalIndex }) => {
            const certCode = `CERT-${String(originalIndex + 1).padStart(
              2,
              "0"
            )}`;
            return (
              <div
                key={cert.client + cert.doc}
                data-testid="verified-cert-card"
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/60 hover:bg-white/10"
              >
                <div>
                  {/* Card Top Metadata Row */}
                  <div className="flex items-center justify-between gap-2 pb-4 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="rounded-md bg-amber-500/15 px-2.5 py-1 font-mono text-[11px] font-extrabold text-amber-400 border border-amber-500/30">
                        {certCode}
                      </span>
                      {cert.sector && (
                        <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-semibold text-slate-300">
                          {cert.sector}
                        </span>
                      )}
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[10px] font-bold text-emerald-300 border border-emerald-500/25">
                      <CheckIcon size={10} />
                      <span>Signed Scan</span>
                    </span>
                  </div>

                  {/* Client Brand Badge & Title */}
                  <div className="mt-5 flex items-start gap-3.5">
                    {cert.logo ? (
                      <div
                        data-testid="verified-cert-icon"
                        className="flex h-12 w-20 flex-none items-center justify-center rounded-xl bg-white p-1.5 shadow-sm transition-transform duration-300 group-hover:scale-105"
                      >
                        <Image
                          src={cert.logo}
                          alt={`${cert.client} logo`}
                          width={72}
                          height={36}
                          className="max-h-9 w-auto object-contain"
                        />
                      </div>
                    ) : (
                      <div
                        data-testid="verified-cert-icon"
                        className="flex h-12 w-12 flex-none items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/15 font-mono text-[15px] font-black text-amber-400"
                      >
                        <BuildingIcon size={20} />
                      </div>
                    )}
                    <div>
                      <h4 className="text-[16px] font-extrabold text-white leading-snug group-hover:text-amber-400 transition-colors">
                        {cert.client}
                      </h4>
                      <p className="mt-1 text-[12px] font-bold uppercase tracking-wider text-amber-400/90">
                        {cert.doc}
                      </p>
                    </div>
                  </div>

                  {/* Engineering Scope Box */}
                  {cert.scope && (
                    <div className="mt-4 rounded-xl border border-white/5 bg-slate-950/60 p-3.5 text-[13px] leading-relaxed text-slate-300">
                      {cert.scope}
                    </div>
                  )}
                </div>

                {/* Card Action Footer */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedCertIndex(originalIndex)}
                    className="inline-flex items-center gap-1.5 text-[13px] font-extrabold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
                  >
                    <span>Inspect Signed Scan</span>
                    <ArrowRightIcon size={14} />
                  </button>

                  <a
                    href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open raw scan in new tab"
                    className="text-[11px] font-semibold text-slate-400 hover:text-white transition-colors"
                  >
                    Raw JPG ↗
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Step 4: National & OEM Recognition / Accredited Awards Strip */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-slate-950/70 p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-amber-500 text-slate-950 shadow-md">
                <WrenchShieldIcon size={22} />
              </div>
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-400">
                  National &amp; OEM Recognition
                </span>
                <h3 className="text-[19px] font-extrabold text-white">
                  Accredited Industry &amp; L&amp;T Excellence Awards
                </h3>
              </div>
            </div>
            <Link
              href="/about#awards"
              className="inline-flex items-center gap-1.5 text-[13px] font-bold text-amber-400 hover:text-amber-300"
            >
              <span>View Recognition Timeline</span>
              <ArrowRightIcon size={14} />
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {awards.map((award) => (
              <div
                key={award.title}
                className="flex flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-amber-400/40"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-md bg-amber-500/20 px-2.5 py-0.5 font-mono text-[12px] font-extrabold text-amber-400">
                      {award.year}
                    </span>
                    <span className="text-[11px] font-bold text-slate-400">
                      {award.by}
                    </span>
                  </div>
                  <h4 className="mt-3 text-[14px] font-bold text-white leading-snug">
                    {award.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* High-Contrast Bottom Action Bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/about#certifications"
            className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-[14px] font-extrabold text-slate-950 shadow-md transition-all hover:bg-amber-400"
          >
            <span>Explore Full Credentials &amp; Dossier</span>
            <ArrowRightIcon size={16} />
          </Link>

          {activeTab !== "all" ? (
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-[14px] font-bold text-white transition-all hover:border-amber-400 hover:bg-white/10 cursor-pointer"
            >
              <span>Show All 15 Verified Certificates Here</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setActiveTab("featured")}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-[14px] font-bold text-white transition-all hover:border-amber-400 hover:bg-white/10 cursor-pointer"
            >
              <span>Show Featured 6 Flagships</span>
            </button>
          )}
        </div>
      </Container>

      {/* Step 3: In-Page Certificate Inspection Lightbox Modal */}
      <CertificateLightboxModal
        activeIndex={selectedCertIndex}
        onClose={() => setSelectedCertIndex(null)}
        onSelectIndex={(idx) => setSelectedCertIndex(idx)}
      />
    </section>
  );
}

export function CertificatesInteractiveGrid() {
  const [selectedCertIndex, setSelectedCertIndex] = useState<number | null>(
    null
  );

  return (
    <>
      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, idx) => {
          const certCode = `CERT-${String(idx + 1).padStart(2, "0")}`;
          return (
            <div
              key={cert.client + cert.doc}
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400 hover:bg-white/10"
            >
              <div>
                <div className="flex items-center justify-between gap-2 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] font-bold text-amber-400">
                      {certCode}
                    </span>
                    {cert.sector && (
                      <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-slate-300">
                        {cert.sector}
                      </span>
                    )}
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[10px] font-bold text-emerald-300">
                    <CheckIcon size={10} />
                    <span>Verified Scan</span>
                  </span>
                </div>

                <div className="mt-4 flex items-start gap-3">
                  {cert.logo ? (
                    <div className="flex h-10 w-16 flex-none items-center justify-center rounded-lg bg-white p-1 shadow-xs">
                      <Image
                        src={cert.logo}
                        alt={`${cert.client} logo`}
                        width={56}
                        height={28}
                        className="max-h-7 w-auto object-contain"
                      />
                    </div>
                  ) : (
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-amber-500/30 bg-amber-500/15 text-amber-400">
                      <BuildingIcon size={18} />
                    </div>
                  )}
                  <div>
                    <h4 className="text-[15px] font-bold text-white transition-colors group-hover:text-amber-400">
                      {cert.client}
                    </h4>
                    <p className="mt-0.5 text-[12px] font-semibold text-amber-400/90">
                      {cert.doc}
                    </p>
                  </div>
                </div>

                {cert.scope && (
                  <p className="mt-3 text-[12px] leading-relaxed text-slate-300">
                    {cert.scope}
                  </p>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[12px] font-bold text-amber-400">
                <button
                  type="button"
                  onClick={() => setSelectedCertIndex(idx)}
                  className="inline-flex items-center gap-1.5 hover:text-amber-300 cursor-pointer"
                >
                  <span>Inspect Signed Scan</span>
                  <ArrowRightIcon size={14} />
                </button>
                <a
                  href={cert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-semibold text-slate-400 hover:text-white"
                >
                  Raw JPG ↗
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <CertificateLightboxModal
        activeIndex={selectedCertIndex}
        onClose={() => setSelectedCertIndex(null)}
        onSelectIndex={(idx) => setSelectedCertIndex(idx)}
      />
    </>
  );
}
