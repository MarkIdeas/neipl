"use client";

import React, { useState, useEffect, useMemo, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { CatalogueItem } from "@/types";
import { ArrowRightIcon } from "@/components/icons";

interface Props {
  items: readonly CatalogueItem[];
}

function ProductCatalogExplorerInner({ items }: Props) {
  const searchParams = useSearchParams();
  const initialCatParam = searchParams?.get("cat") || "All";

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(items.map((i) => i.cat)))],
    [items]
  );

  const validInitialCat = categories.includes(initialCatParam)
    ? initialCatParam
    : "All";

  const [selectedCat, setSelectedCat] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const activeCat = selectedCat ?? validInitialCat;

  // Listen for custom category selection events triggered from Section 2 cards
  useEffect(() => {
    const handleSelectCat = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      if (detail && categories.includes(detail)) {
        setSelectedCat(detail);
        setSearchQuery("");
      }
    };
    window.addEventListener("select-product-cat", handleSelectCat);
    return () =>
      window.removeEventListener("select-product-cat", handleSelectCat);
  }, [categories]);

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filtered = items.filter((item) => {
    const matchesCat = activeCat === "All" || item.cat === activeCat;
    if (!matchesCat) return false;
    if (!normalizedQuery) return true;
    return (
      item.name.toLowerCase().includes(normalizedQuery) ||
      item.part.toLowerCase().includes(normalizedQuery) ||
      item.cat.toLowerCase().includes(normalizedQuery) ||
      (item.brand && item.brand.toLowerCase().includes(normalizedQuery)) ||
      (item.specs && item.specs.toLowerCase().includes(normalizedQuery))
    );
  });

  const getCategoryCount = (cat: string) =>
    cat === "All"
      ? items.length
      : items.filter((item) => item.cat === cat).length;

  return (
    <div>
      {/* Top Controls Bar: Part/Keyword Search + Category Filter Pills */}
      <div className="flex flex-col gap-5">
        {/* Search Input */}
        <div className="mx-auto w-full max-w-xl">
          <div className="relative flex items-center">
            <input
              type="search"
              aria-label="Search equipment catalogue by part number, model, or brand"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by part number, model, or brand (e.g. GA700, CIMR, 6000A, EJX, Servo)..."
              className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 pr-10 text-[13px] sm:text-[14px] text-white placeholder:text-slate-400 focus:border-amber-400 focus:bg-white/10 focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                aria-label="Clear search query"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 rounded-md px-1.5 py-0.5 text-[12px] font-bold text-slate-400 hover:text-white cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills with Item Count Badges */}
        <div
          role="tablist"
          aria-label="Filter equipment catalogue by category"
          className="flex flex-wrap items-center justify-center gap-2"
        >
          {categories.map((cat) => {
            const isActive = activeCat === cat;
            const count = getCategoryCount(cat);
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCat(cat)}
                className={`inline-flex items-center gap-2 rounded-full px-3.5 sm:px-4 py-2 text-[12px] sm:text-[13px] font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-amber-500 text-slate-950 shadow-md"
                    : "border border-white/15 bg-white/5 text-slate-300 hover:border-amber-400/50 hover:text-white"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`rounded-full px-2 py-0.5 font-mono text-[10px] sm:text-[11px] font-extrabold ${
                    isActive
                      ? "bg-slate-950/20 text-slate-950"
                      : "bg-white/10 text-amber-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Empty Search State */}
      {filtered.length === 0 && (
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-10 text-center">
          <p className="text-[16px] font-bold text-white">
            No matching equipment found for &ldquo;{searchQuery}&rdquo;
          </p>
          <p className="mt-2 text-[13px] text-slate-400">
            Try clearing your search filter or contact our engineering desk for custom part numbers.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCat("All");
              setSearchQuery("");
            }}
            className="mt-4 rounded-xl bg-amber-500 px-4 py-2 text-[13px] font-extrabold text-slate-950 hover:bg-amber-400 cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Responsive Grid of Equipment Cards (2 cols on Mobile, 3 on Tablet, 4 on Desktop) */}
      <div
        data-testid="product-catalogue-grid"
        className="mt-8 sm:mt-10 grid grid-cols-2 gap-3.5 sm:gap-6 md:grid-cols-3 lg:grid-cols-4"
      >
        {filtered.map((item) => (
          <div
            key={item.part}
            data-testid="product-catalogue-card"
            className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3.5 sm:p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/60 hover:bg-white/10"
          >
            <div>
              {/* Crisp White Studio Image Plate so hardware photos look clean and uniform */}
              <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl bg-white p-3 sm:p-4 shadow-inner">
                <Image
                  src={item.img}
                  alt={`${item.name} (${item.part})`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  className="object-contain p-2 sm:p-4 transition-transform duration-300 group-hover:scale-105"
                />
                {item.brand && (
                  <span className="absolute top-2 left-2 rounded-md bg-slate-900/90 px-2 py-0.5 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-amber-400">
                    {item.brand}
                  </span>
                )}
              </div>

              {/* Category Pill & Part Number */}
              <div className="mt-3 sm:mt-4 flex flex-wrap items-center justify-between gap-1.5">
                <span className="rounded-full bg-amber-500/15 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-bold text-amber-400 border border-amber-500/30">
                  {item.cat}
                </span>
                <span className="font-mono text-[10px] sm:text-[11px] font-bold text-slate-300">
                  {item.part}
                </span>
              </div>

              {/* Product Title */}
              <h4 className="mt-2 text-[14px] sm:text-[16px] font-extrabold text-white leading-snug transition-colors group-hover:text-amber-400">
                {item.name}
              </h4>

              {/* 1-Line Technical Spec Summary */}
              {item.specs && (
                <p className="mt-1.5 text-[11px] sm:text-[12px] leading-relaxed text-slate-300 line-clamp-2">
                  {item.specs}
                </p>
              )}
            </div>

            {/* Action Footer */}
            <div className="mt-4 sm:mt-5 pt-3 border-t border-white/10">
              <Link
                href={`/contact?product=${encodeURIComponent(
                  item.name + " (" + item.part + ")"
                )}`}
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-amber-500/15 px-3 py-2 text-[11px] sm:text-[12px] font-extrabold text-amber-400 border border-amber-500/30 transition-all hover:bg-amber-500 hover:text-slate-950"
              >
                <span>Request Quote</span>
                <ArrowRightIcon size={12} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProductCatalogExplorer({ items }: Props) {
  return (
    <Suspense
      fallback={
        <div className="py-12 text-center text-slate-400">
          Loading equipment catalogue...
        </div>
      }
    >
      <ProductCatalogExplorerInner items={items} />
    </Suspense>
  );
}
