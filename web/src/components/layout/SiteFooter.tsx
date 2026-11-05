import React from "react";
import Link from "next/link";
import Image from "next/image";
import { company, partnerBrands } from "@/content/site";
import { Container } from "@/components/ui";
import { PhoneIcon, MailIcon, MapPinIcon } from "@/components/icons";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <Container>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Col 1: Brand & Credentials */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3.5 group">
              <div className="relative flex h-12 w-12 sm:h-[52px] sm:w-[52px] flex-none items-center justify-center rounded-xl bg-white p-1.5 shadow-md transition-transform group-hover:scale-105">
                <Image
                  src="/images/NEIPL_logo_transparent.png?v=5"
                  alt="NEIPL - Nandini Engineering Infrastructures Pvt Ltd"
                  width={52}
                  height={52}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-[16px] sm:text-[18px] font-black tracking-tight text-white leading-tight">
                  Nandini Engineering
                </span>
                <span className="text-[11px] sm:text-[12px] font-bold tracking-wider uppercase text-emerald-400 leading-tight mt-0.5">
                  Infrastructures Pvt Ltd
                </span>
              </div>
            </Link>
            <p className="max-w-[340px] text-[14px] leading-relaxed text-slate-300">
              20+ years of CPRI-certified excellence in industrial automation, electrical switchboards, robotics integration, and precision instrumentation from Jeedimetla, Hyderabad.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="rounded-md bg-white/10 px-2.5 py-1 text-[11px] font-bold text-amber-400">
                ✓ CPRI Certified 6000A
              </span>
              <span className="rounded-md bg-white/10 px-2.5 py-1 text-[11px] font-bold text-amber-400">
                ✓ A-Grade License
              </span>
              <span className="rounded-md bg-white/10 px-2.5 py-1 text-[11px] font-bold text-amber-400">
                ✓ Est. 2006
              </span>
            </div>
          </div>

          {/* Col 2: Solutions */}
          <div>
            <h4 className="text-[13px] font-extrabold uppercase tracking-wider text-white">
              Solutions
            </h4>
            <ul className="mt-4 space-y-2.5 text-[13px]">
              <li>
                <Link href="/services#automation" className="hover:text-amber-400 transition-colors">
                  Industrial Automation
                </Link>
              </li>
              <li>
                <Link href="/services#robotics" className="hover:text-amber-400 transition-colors">
                  Robotics Integration
                </Link>
              </li>
              <li>
                <Link href="/services#panels" className="hover:text-amber-400 transition-colors">
                  Electrical Panels
                </Link>
              </li>
              <li>
                <Link href="/services#drives" className="hover:text-amber-400 transition-colors">
                  Drive Systems (VFD)
                </Link>
              </li>
              <li>
                <Link href="/services#instrumentation" className="hover:text-amber-400 transition-colors">
                  Field Instrumentation
                </Link>
              </li>
              <li>
                <Link href="/services#embedded" className="hover:text-amber-400 transition-colors">
                  Embedded Software
                </Link>
              </li>
              <li>
                <Link href="/services#maintenance" className="hover:text-amber-400 transition-colors">
                  24/7 AMC & Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Industries */}
          <div>
            <h4 className="text-[13px] font-extrabold uppercase tracking-wider text-white">
              Industries
            </h4>
            <ul className="mt-4 space-y-2.5 text-[13px]">
              <li>
                <Link href="/industries" className="hover:text-amber-400 transition-colors">
                  Power Generation
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-amber-400 transition-colors">
                  Cement Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-amber-400 transition-colors">
                  Railways & Rolling Stock
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-amber-400 transition-colors">
                  Material Handling & Cranes
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-amber-400 transition-colors">
                  Water & Waste Water
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-amber-400 transition-colors">
                  Automobile Assembly
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-amber-400 transition-colors">
                  Pharmaceuticals
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate & Works */}
          <div>
            <h4 className="text-[13px] font-extrabold uppercase tracking-wider text-white">
              Headquarters
            </h4>
            <div className="mt-4 space-y-3 text-[13px]">
              <div className="flex items-start gap-2">
                <MapPinIcon size={16} className="text-amber-400 flex-none mt-0.5" />
                <span className="text-slate-300 leading-snug">
                  {company.hq}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon size={16} className="text-amber-400 flex-none" />
                <a href={`tel:${company.mobile.replace(/\s+/g, "")}`} className="hover:text-amber-400 text-white font-semibold">
                  {company.mobile}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon size={16} className="text-amber-400 flex-none" />
                <a href={`mailto:${company.email}`} className="hover:text-amber-400 text-slate-300">
                  {company.email}
                </a>
              </div>
              <div className="pt-2 text-[12px] text-slate-400">
                Branch Works: {company.branch}
              </div>
            </div>
          </div>
        </div>

        {/* OEM Partners Strip */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800 pt-8 text-[12px]">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-bold uppercase tracking-wider text-slate-400">
              Authorized Tier-1 OEM Partners:
            </span>
            <div className="flex flex-wrap gap-3 font-semibold text-white">
              {partnerBrands.map((b) => (
                <span key={b.name} className="hover:text-amber-400 transition-colors">
                  {b.name}
                </span>
              ))}
            </div>
          </div>
          <p className="text-slate-400">
            © {currentYear} {company.legalName}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
