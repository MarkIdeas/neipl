import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { productLines, catalogue } from "@/content/catalogue";
import { company, partnerBrands } from "@/content/site";
import { ProductCatalogExplorer } from "@/components/products/ProductCatalogExplorer";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";
import { ArrowRightIcon, PhoneIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Products & Equipment Catalogue",
  description:
    "Explore CPRI-certified 6000A electrical panels, Yaskawa VFD & Sigma-7 servo drives, Yokogawa transmitters, and industrial automation equipment supplied by Nandini Enterprises.",
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return (
    <>
      {/* 1. Products Hero (Dark Industrial Theme) */}
      <section
        id="hero"
        aria-label="Products Hero"
        className="relative flex min-h-[58vh] items-center overflow-hidden bg-canvas py-24 text-white"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/app_crane.jpg"
            alt="Heavy Industrial Automation Equipment"
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
            className="absolute top-1/2 right-1/4 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-amber-500/10 blur-[140px]"
          />
        </div>

        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow center>Equipment &amp; Systems</Eyebrow>
            <h1 className="mt-4 text-[clamp(2.5rem,5vw,4.25rem)] font-extrabold tracking-tight leading-[1.12] text-white">
              Industrial Products &amp; <br />
              <span className="text-amber-500">Equipment Catalogue</span>
            </h1>
            <p className="mt-6 text-[17px] leading-relaxed text-slate-300">
              From in-house CPRI-tested 6000A LT switchboards to authorized Yaskawa AC drives, Sigma-7 servo systems, and Yokogawa process transmitters — engineered and stocked across Hyderabad and Pune.
            </p>

            {/* Trust Pills */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              {[
                "✓ 24+ Stocked & Custom Systems",
                "✓ CPRI 6000A Switchboards",
                "✓ Yaskawa & Yokogawa Authorized",
                "✓ Ready Dispatch: Hyderabad & Pune",
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
                href="#catalogue"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-[14px] font-extrabold text-slate-950 shadow-md transition-all hover:bg-amber-400"
              >
                <span>Browse Equipment Catalogue</span>
                <ArrowRightIcon size={16} />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-[14px] font-bold text-white transition-all hover:border-amber-400 hover:bg-white/10"
              >
                <span>Submit BOM / SLD for Quote</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Primary Equipment Lines Overview (Bright Theme) */}
      <section
        id="lines"
        className="scroll-mt-28 border-y border-slate-200 bg-slate-50 py-20 sm:py-28 text-slate-800"
      >
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow center>Core Verticals</Eyebrow>
            <SectionHeading tone="dark" className="mt-2 text-slate-900">
              Primary Equipment Lines
            </SectionHeading>
            <p className="mt-3 text-[15px] text-slate-600">
              Turnkey CPRI panel fabrication coupled with authorized tier-1 global OEM distribution.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {productLines.map((line) => (
              <div
                key={line.name}
                data-testid="product-line-card"
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-xl"
              >
                <div>
                  {/* Crisp White Studio Image Frame */}
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-slate-100 bg-white">
                    <Image
                      src={line.img}
                      alt={line.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={`${
                        line.img.startsWith("/images/")
                          ? "object-cover"
                          : "object-contain p-4"
                      } transition-transform duration-500 group-hover:scale-105`}
                    />
                    {line.badge && (
                      <span className="absolute top-3 left-3 rounded-md bg-slate-900/90 px-2.5 py-1 text-[11px] font-extrabold text-amber-400 shadow-xs">
                        {line.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-5 text-[19px] font-extrabold text-slate-900 transition-colors group-hover:text-amber-600">
                    {line.name}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-slate-600">
                    {line.desc}
                  </p>

                  {/* Sub-item Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {line.items.map((sub) => (
                      <span
                        key={sub}
                        className="rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-700"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-100">
                  <Link
                    href={`/products?cat=${encodeURIComponent(
                      line.filterCat || "All"
                    )}#catalogue`}
                    className="inline-flex items-center gap-1.5 text-[13px] font-extrabold text-amber-600 hover:text-amber-700"
                  >
                    <span>Filter in Catalogue</span>
                    <ArrowRightIcon size={14} />
                  </Link>
                  <Link
                    href={`/contact?product=${encodeURIComponent(line.name)}`}
                    className="rounded-lg bg-slate-100 px-3 py-1.5 text-[12px] font-bold text-slate-800 hover:bg-amber-500 hover:text-slate-950 transition-colors"
                  >
                    Inquire
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Interactive Equipment Catalogue (Dark Theme with Crisp White Product Plates) */}
      <section
        id="catalogue"
        className="scroll-mt-28 bg-navy-dark py-20 sm:py-28 text-white"
      >
        <Container>
          <div className="mx-auto max-w-2xl text-center mb-10">
            <Eyebrow center>Direct Supply &amp; Custom Build</Eyebrow>
            <SectionHeading className="mt-3 text-white">
              Stocked &amp; Custom Equipment Catalogue
            </SectionHeading>
            <p className="mt-3 text-[15px] text-slate-300">
              Search by model or part number, filter by category, and request immediate pricing and technical datasheets.
            </p>
          </div>

          <ProductCatalogExplorer items={catalogue} />
        </Container>
      </section>

      {/* 4. Authorized OEM Partners Showcase (Bright Theme with Official Full-Color Logos) */}
      <section
        id="partners"
        className="scroll-mt-28 border-y border-slate-200 bg-white py-20 sm:py-24 text-slate-800"
      >
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow center>Authorized OEM Partnerships</Eyebrow>
            <SectionHeading tone="dark" className="mt-2 text-slate-900">
              Direct Factory-Backed Hardware Channels
            </SectionHeading>
            <p className="mt-3 text-[15px] text-slate-600">
              Every drive, transmitter, sensor, and PLC supplied by Nandini Enterprises is 100% genuine and backed by official OEM manufacturer warranty.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {partnerBrands.map((brand) => (
              <Link
                key={brand.name}
                href={`/contact?product=${encodeURIComponent(
                  brand.name + " " + brand.type
                )}`}
                data-testid="oem-partner-logo-card"
                className="group flex flex-col items-center justify-between rounded-2xl border border-slate-200 bg-slate-50/60 p-4 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400 hover:bg-white hover:shadow-md"
              >
                <div className="flex h-12 w-full items-center justify-center">
                  {brand.src ? (
                    <Image
                      src={brand.src}
                      alt={`${brand.name} logo`}
                      width={120}
                      height={40}
                      className="max-h-9 w-auto max-w-[115px] object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <span className="text-[16px] font-black text-slate-900">
                      {brand.name}
                    </span>
                  )}
                </div>
                <div className="mt-3 w-full border-t border-slate-200/70 pt-2.5">
                  <p className="text-[13px] font-extrabold text-slate-900 group-hover:text-amber-600">
                    {brand.name}
                  </p>
                  <p className="mt-0.5 truncate text-[11px] font-medium text-slate-500">
                    {brand.type}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Custom Sizing & BOM Quote CTA (Dark Theme) */}
      <section className="bg-canvas py-20 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow center>Technical Sizing &amp; RFQ Desk</Eyebrow>
            <h2 className="mt-3 text-[28px] sm:text-[34px] font-extrabold text-white">
              Need Custom Technical Sizing or a Bill-of-Materials Quote?
            </h2>
            <p className="mt-3 text-[16px] text-slate-300">
              Send us your single-line diagram (SLD), motor kW ratings, or replacement part numbers and our applications engineering team will respond within 24 hours.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-[14px] font-extrabold text-slate-950 shadow-md transition-all hover:bg-amber-400"
              >
                <span>Request Engineering Quote</span>
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
