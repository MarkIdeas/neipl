"use client";

import React, { useState } from "react";
import Link from "next/link";
import { company } from "@/content/site";
import { PhoneIcon } from "@/components/icons";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenSection(null);
  };

  return (
    <div className="lg:hidden">
      {/* Hamburger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 shadow-sm transition-colors hover:bg-slate-50"
      >
        {isOpen ? (
          <span className="text-xl font-bold">✕</span>
        ) : (
          <span className="text-xl font-bold">☰</span>
        )}
      </button>

      {/* Slide-out Backdrop & Panel */}
      {isOpen && (
        <div className="fixed inset-0 top-[72px] z-50 flex flex-col bg-white">
          <div className="flex-1 overflow-y-auto px-6 py-6 divide-y divide-slate-100">
            {/* 1. Home */}
            <div className="py-3">
              <Link
                href="/"
                onClick={closeMenu}
                className="block text-[16px] font-bold text-slate-900"
              >
                Home
              </Link>
            </div>

            {/* 2. Company Accordion */}
            <div className="py-3">
              <button
                type="button"
                onClick={() => toggleSection("company")}
                className="flex w-full items-center justify-between text-[16px] font-bold text-slate-900"
              >
                <span>Company</span>
                <span className="text-sm text-slate-400">
                  {openSection === "company" ? "▲" : "▼"}
                </span>
              </button>
              {openSection === "company" && (
                <div className="mt-3 space-y-2.5 pl-3 border-l-2 border-amber-500">
                  <Link href="/about" onClick={closeMenu} className="block text-[14px] font-medium text-slate-600">
                    About Us
                  </Link>
                  <Link href="/about#leadership" onClick={closeMenu} className="block text-[14px] font-medium text-slate-600">
                    Leadership & Team
                  </Link>
                  <Link href="/about#certifications" onClick={closeMenu} className="block text-[14px] font-medium text-slate-600">
                    Certifications & CPRI Scans
                  </Link>
                  <Link href="/about#partners" onClick={closeMenu} className="block text-[14px] font-medium text-slate-600">
                    Technology Partners
                  </Link>
                </div>
              )}
            </div>

            {/* 3. Solutions Accordion */}
            <div className="py-3">
              <button
                type="button"
                onClick={() => toggleSection("solutions")}
                className="flex w-full items-center justify-between text-[16px] font-bold text-slate-900"
              >
                <span>Solutions</span>
                <span className="text-sm text-slate-400">
                  {openSection === "solutions" ? "▲" : "▼"}
                </span>
              </button>
              {openSection === "solutions" && (
                <div className="mt-3 space-y-2.5 pl-3 border-l-2 border-amber-500">
                  <Link href="/services#automation" onClick={closeMenu} className="block text-[14px] font-medium text-slate-600">
                    Industrial Automation (PLC/SCADA)
                  </Link>
                  <Link href="/services#robotics" onClick={closeMenu} className="block text-[14px] font-medium text-slate-600">
                    Robotics Integration & Arc Welding
                  </Link>
                  <Link href="/services#panels" onClick={closeMenu} className="block text-[14px] font-medium text-slate-600">
                    CPRI Electrical Panels (6000A)
                  </Link>
                  <Link href="/services#drives" onClick={closeMenu} className="block text-[14px] font-medium text-slate-600">
                    Drive Systems & Servos (Yaskawa)
                  </Link>
                  <Link href="/services#instrumentation" onClick={closeMenu} className="block text-[14px] font-medium text-slate-600">
                    Field Instrumentation (Yokogawa)
                  </Link>
                  <Link href="/services#embedded" onClick={closeMenu} className="block text-[14px] font-medium text-slate-600">
                    Embedded Systems & Software
                  </Link>
                  <Link href="/services#maintenance" onClick={closeMenu} className="block text-[14px] font-medium text-slate-600">
                    24/7 Maintenance & AMC
                  </Link>
                </div>
              )}
            </div>

            {/* 4. Industries Accordion */}
            <div className="py-3">
              <button
                type="button"
                onClick={() => toggleSection("industries")}
                className="flex w-full items-center justify-between text-[16px] font-bold text-slate-900"
              >
                <span>Industries</span>
                <span className="text-sm text-slate-400">
                  {openSection === "industries" ? "▲" : "▼"}
                </span>
              </button>
              {openSection === "industries" && (
                <div className="mt-3 space-y-2.5 pl-3 border-l-2 border-amber-500">
                  <Link href="/industries" onClick={closeMenu} className="block text-[14px] font-medium text-slate-600">
                    Manufacturing & Cement
                  </Link>
                  <Link href="/industries" onClick={closeMenu} className="block text-[14px] font-medium text-slate-600">
                    Power Generation & Distribution
                  </Link>
                  <Link href="/industries" onClick={closeMenu} className="block text-[14px] font-medium text-slate-600">
                    Railways & Rolling Stock
                  </Link>
                  <Link href="/industries" onClick={closeMenu} className="block text-[14px] font-medium text-slate-600">
                    Material Handling & Overhead Cranes
                  </Link>
                  <Link href="/industries" onClick={closeMenu} className="block text-[14px] font-medium text-slate-600">
                    Commercial Elevators & Escalators
                  </Link>
                  <Link href="/industries" onClick={closeMenu} className="block text-[14px] font-medium text-slate-600">
                    Water & Waste Water Treatment
                  </Link>
                  <Link href="/industries" onClick={closeMenu} className="block text-[14px] font-medium text-slate-600">
                    Pharmaceuticals & Cleanrooms
                  </Link>
                </div>
              )}
            </div>

            {/* 5. Products Accordion */}
            <div className="py-3">
              <button
                type="button"
                onClick={() => toggleSection("products")}
                className="flex w-full items-center justify-between text-[16px] font-bold text-slate-900"
              >
                <span>Products</span>
                <span className="text-sm text-slate-400">
                  {openSection === "products" ? "▲" : "▼"}
                </span>
              </button>
              {openSection === "products" && (
                <div className="mt-3 space-y-2.5 pl-3 border-l-2 border-amber-500">
                  <Link href="/products?cat=Electrical%20panel#catalogue" onClick={closeMenu} className="block text-[14px] font-medium text-slate-600">
                    CPRI Panels (AMF / APFC / MCC)
                  </Link>
                  <Link href="/products?cat=AC%20drive#catalogue" onClick={closeMenu} className="block text-[14px] font-medium text-slate-600">
                    Yaskawa Inverters (GA 700 / A1000)
                  </Link>
                  <Link href="/products?cat=Servo#catalogue" onClick={closeMenu} className="block text-[14px] font-medium text-slate-600">
                    Sigma-7 Servo Motors
                  </Link>
                  <Link href="/products?cat=Field%20instrument#catalogue" onClick={closeMenu} className="block text-[14px] font-medium text-slate-600">
                    Yokogawa Process Transmitters
                  </Link>
                  <Link href="/products#catalogue" onClick={closeMenu} className="block text-[14px] font-medium text-slate-600">
                    Full Equipment Catalogue
                  </Link>
                </div>
              )}
            </div>

            {/* 6. Projects */}
            <div className="py-3">
              <Link
                href="/gallery"
                onClick={closeMenu}
                className="block text-[16px] font-bold text-slate-900"
              >
                Projects & Case Studies
              </Link>
            </div>

            {/* 7. Contact */}
            <div className="py-3">
              <Link
                href="/contact"
                onClick={closeMenu}
                className="block text-[16px] font-bold text-slate-900"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Bottom Actions Drawer */}
          <div className="border-t border-slate-100 bg-slate-50 p-6 space-y-4">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="block w-full rounded-xl bg-amber-500 py-3 text-center text-[15px] font-bold text-white shadow-md hover:bg-amber-600"
            >
              Request a Quote
            </Link>
            <a
              href={`tel:${company.mobile.replace(/\s+/g, "")}`}
              className="flex items-center justify-center gap-2 text-[14px] font-semibold text-slate-700"
            >
              <PhoneIcon size={16} className="text-amber-500" />
              <span>{company.mobile}</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
