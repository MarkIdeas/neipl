import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MegaMenu } from "./MegaMenu";
import { MobileNav } from "./MobileNav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md transition-all duration-300 shadow-xs">
      <div className="mx-auto flex min-h-[72px] max-w-[1360px] items-center justify-between px-4 sm:px-8">
        {/* Logo Lockup */}
        <Link
          href="/"
          className="group flex flex-none items-center gap-3.5 py-1 transition-all"
        >
          {/* Logo Badge Container */}
          <div className="relative flex h-12 w-12 sm:h-[52px] sm:w-[52px] flex-none items-center justify-center rounded-xl bg-slate-50 p-1.5 ring-1 ring-slate-900/10 shadow-xs transition-transform group-hover:scale-105">
            <Image
              src="/images/NEIPL_logo_transparent.png?v=5"
              alt="NEIPL - Nandini Engineering Infrastructures Pvt Ltd"
              width={52}
              height={52}
              priority
              className="h-full w-full object-contain"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-[15px] sm:text-[17px] font-black tracking-tight text-slate-900 leading-tight transition-colors group-hover:text-emerald-600">
              Nandini Engineering
            </span>
            <span className="text-[10.5px] sm:text-[11.5px] font-bold tracking-wider uppercase text-emerald-600 leading-tight mt-0.5">
              Infrastructures Pvt Ltd
            </span>
          </div>
        </Link>

        {/* Desktop Mega-Menu Navigation */}
        <div className="hidden lg:flex items-center">
          <MegaMenu />
        </div>

        {/* Right CTA Block */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center rounded-xl bg-amber-500 px-4 py-2.5 text-[13px] font-bold text-white shadow-sm transition-all hover:bg-amber-600 hover:shadow-md cursor-pointer"
          >
            Request a Quote
          </Link>

          {/* Mobile Navigation Trigger */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
