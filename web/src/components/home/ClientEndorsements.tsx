"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { certificates } from "@/content/pages";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";
import {
  ArrowRightIcon,
  CheckIcon,
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
      className="bg-canvas py-6 sm:py-8 lg:py-8 text-white border-b border-slate-800"
    >
      <Container>
        {/* Compact Section Heading */}
        <div className="mx-auto max-w-3xl text-center mb-4 sm:mb-5">
          <Eyebrow center>Verified Proof</Eyebrow>
          <SectionHeading className="mt-1.5 text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white">
            Client Performance &amp; Completion Records
          </SectionHeading>
          <p className="mt-1 text-xs sm:text-sm text-slate-300 text-balance">
            Inspect 15 original signed engineering work completion certificates, OEM channel authorizations, and CPRI type test reports.
          </p>
        </div>

        {/* Interactive Category Filter Pills */}
        <div
          role="tablist"
          aria-label="Filter verified completion certificates"
          className="mb-4 sm:mb-5 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2"
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
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-amber-500 text-slate-950 shadow-xs"
                    : "border border-white/15 bg-white/5 text-slate-300 hover:border-amber-400/50 hover:text-white"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 font-mono text-[10px] font-extrabold ${
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

        {/* Compact Viewport-Optimized 2x3 Dossier Cards Grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filteredWithIndex.map(({ cert, originalIndex }) => {
            const certCode = `CERT-${String(originalIndex + 1).padStart(
              2,
              "0"
            )}`;
            return (
              <div
                key={cert.client + cert.doc}
                data-testid="verified-cert-card"
                className="group flex flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-3.5 sm:p-4 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400/60 hover:bg-white/10"
              >
                <div>
                  {/* Card Top Metadata Row */}
                  <div className="flex items-center justify-between gap-2 pb-2 border-b border-white/10">
                    <div className="flex items-center gap-1.5">
                      <span className="rounded-md bg-amber-500/15 px-2 py-0.5 font-mono text-[10px] font-extrabold text-amber-400 border border-amber-500/30">
                        {certCode}
                      </span>
                      {cert.sector && (
                        <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-slate-300">
                          {cert.sector}
                        </span>
                      )}
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold text-emerald-300 border border-emerald-500/25">
                      <CheckIcon size={10} />
                      <span>Signed Scan</span>
                    </span>
                  </div>

                  {/* Client Brand Badge & Title */}
                  <div className="mt-2.5 flex items-start gap-3">
                    {cert.logo ? (
                      <div
                        data-testid="verified-cert-icon"
                        className="flex h-10 w-16 flex-none items-center justify-center rounded-lg bg-white p-1 shadow-2xs transition-transform duration-300 group-hover:scale-105"
                      >
                        <Image
                          src={cert.logo}
                          alt={`${cert.client} logo`}
                          width={60}
                          height={30}
                          className="max-h-7 w-auto object-contain"
                        />
                      </div>
                    ) : (
                      <div
                        data-testid="verified-cert-icon"
                        className="flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-amber-500/30 bg-amber-500/15 font-mono text-xs font-black text-amber-400"
                      >
                        <BuildingIcon size={18} />
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-extrabold text-white leading-tight group-hover:text-amber-400 transition-colors truncate">
                        {cert.client}
                      </h4>
                      <p className="mt-0.5 text-[11px] font-bold uppercase tracking-wider text-amber-400/90 truncate">
                        {cert.doc}
                      </p>
                    </div>
                  </div>

                  {/* Engineering Scope Box */}
                  {cert.scope && (
                    <div className="mt-2 rounded-lg border border-white/5 bg-slate-950/60 p-2 text-xs leading-relaxed text-slate-300 line-clamp-2">
                      {cert.scope}
                    </div>
                  )}
                </div>

                {/* Card Action Footer */}
                <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedCertIndex(originalIndex)}
                    className="inline-flex items-center gap-1 text-xs font-extrabold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
                  >
                    <span>Inspect Signed Scan</span>
                    <ArrowRightIcon size={12} />
                  </button>

                  <a
                    href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open raw scan in new tab"
                    className="text-[10px] font-semibold text-slate-400 hover:text-white transition-colors"
                  >
                    Raw JPG ↗
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* High-Contrast Sleek Bottom Credibility & Gallery Bar */}
        <div className="mt-5 rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-3 text-slate-300">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-bold">
              <CheckIcon size={14} />
              <span>15 Original Signed Certificates on File</span>
            </span>
            <span className="hidden md:inline text-slate-600">·</span>
            <span className="hidden md:inline text-slate-400">
              CPRI 6000A / 50kA Certified Type Test Reports
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/about#certifications"
              className="font-bold text-amber-400 hover:text-amber-300 transition-colors"
            >
              Credentials &amp; Awards →
            </Link>
            <Link
              href="/gallery"
              className="rounded-lg bg-amber-500 px-3 py-1 font-extrabold text-slate-950 hover:bg-amber-400 transition-colors"
            >
              Gallery Overview
            </Link>
          </div>
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
