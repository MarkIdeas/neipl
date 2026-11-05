"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRightIcon } from "@/components/icons";

export function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside or pressing Escape
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setActiveMenu(null);
      }
    }
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (menu: string) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <div
      key={pathname}
      ref={navRef}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center gap-1 sm:gap-2"
    >
      {/* 1. Home */}
      <Link
        href="/"
        className={`px-3 py-2 text-[14px] font-bold transition-colors ${
          pathname === "/"
            ? "text-slate-900 border-b-2 border-amber-500"
            : "text-slate-700 hover:text-slate-900"
        }`}
      >
        Home
      </Link>

      {/* 2. Company (Dropdown) */}
      <div
        className="relative"
        onMouseEnter={() => handleMouseEnter("company")}
      >
        <button
          type="button"
          onClick={() => setActiveMenu(activeMenu === "company" ? null : "company")}
          className={`flex items-center gap-1 px-3 py-2 text-[14px] font-bold transition-colors ${
            pathname.startsWith("/about")
              ? "text-slate-900 border-b-2 border-amber-500"
              : "text-slate-700 hover:text-slate-900"
          }`}
          aria-expanded={activeMenu === "company"}
        >
          <span>Company</span>
          <span className="text-[10px] opacity-60">▼</span>
        </button>

        {activeMenu === "company" && (
          <div className="absolute top-full left-0 z-50 mt-1 w-64 rounded-xl border border-slate-200 bg-white p-2 shadow-2xl transition-all">
            <Link
              href="/about"
              className="block rounded-lg px-3.5 py-2.5 text-[14px] font-semibold text-slate-800 transition-colors hover:bg-slate-100 hover:text-amber-600"
            >
              About Us
              <span className="block text-[12px] font-normal text-slate-500">
                Founded 2006, 20+ years track record
              </span>
            </Link>
            <Link
              href="/about#leadership"
              className="block rounded-lg px-3.5 py-2.5 text-[14px] font-semibold text-slate-800 transition-colors hover:bg-slate-100 hover:text-amber-600"
            >
              Leadership & Team
              <span className="block text-[12px] font-normal text-slate-500">
                Executive engineers & credentials
              </span>
            </Link>
            <Link
              href="/about#certifications"
              className="block rounded-lg px-3.5 py-2.5 text-[14px] font-semibold text-slate-800 transition-colors hover:bg-slate-100 hover:text-amber-600"
            >
              Certifications & Test Scans
              <span className="block text-[12px] font-normal text-slate-500">
                CPRI 6000A & A-Grade License
              </span>
            </Link>
            <Link
              href="/about#partners"
              className="block rounded-lg px-3.5 py-2.5 text-[14px] font-semibold text-slate-800 transition-colors hover:bg-slate-100 hover:text-amber-600"
            >
              Technology Partners
              <span className="block text-[12px] font-normal text-slate-500">
                Yaskawa, Siemens, Yokogawa
              </span>
            </Link>
          </div>
        )}
      </div>

      {/* 3. Solutions (Mega-Menu) */}
      <div
        className="relative"
        onMouseEnter={() => handleMouseEnter("solutions")}
      >
        <button
          type="button"
          onClick={() => setActiveMenu(activeMenu === "solutions" ? null : "solutions")}
          className={`flex items-center gap-1 px-3 py-2 text-[14px] font-bold transition-colors ${
            pathname.startsWith("/services")
              ? "text-slate-900 border-b-2 border-amber-500"
              : "text-slate-700 hover:text-slate-900"
          }`}
          aria-expanded={activeMenu === "solutions"}
        >
          <span>Solutions</span>
          <span className="text-[10px] opacity-60">▼</span>
        </button>

        {activeMenu === "solutions" && (
          <div className="absolute top-full -left-20 z-50 mt-1 w-[720px] rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl transition-all">
            <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h4 className="text-[15px] font-extrabold text-slate-900">
                  Engineering Solutions & Capabilities
                </h4>
                <p className="text-[12px] text-slate-500">
                  Turnkey electrical, robotics, and process automation architectures.
                </p>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-1 text-[13px] font-bold text-amber-600 hover:text-amber-700"
              >
                <span>All Services</span>
                <ArrowRightIcon size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {/* Col 1 */}
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                  Turnkey Automation
                </span>
                <div className="mt-2 space-y-1">
                  <Link
                    href="/services#automation"
                    className="block rounded-lg p-2 text-[13px] font-semibold text-slate-800 hover:bg-slate-50 hover:text-amber-600"
                  >
                    Industrial Automation
                    <span className="block text-[11px] font-normal text-slate-500">
                      PLC, SCADA & RTU control panels
                    </span>
                  </Link>
                  <Link
                    href="/services#robotics"
                    className="block rounded-lg p-2 text-[13px] font-semibold text-slate-800 hover:bg-slate-50 hover:text-amber-600"
                  >
                    Robotics Integration
                    <span className="block text-[11px] font-normal text-slate-500">
                      Arc welding, palletization & cells
                    </span>
                  </Link>
                  <Link
                    href="/services#embedded"
                    className="block rounded-lg p-2 text-[13px] font-semibold text-slate-800 hover:bg-slate-50 hover:text-amber-600"
                  >
                    Embedded & IoT Software
                    <span className="block text-[11px] font-normal text-slate-500">
                      Custom controllers & telemetry
                    </span>
                  </Link>
                </div>
              </div>

              {/* Col 2 */}
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                  Power & Switchboards
                </span>
                <div className="mt-2 space-y-1">
                  <Link
                    href="/services#panels"
                    className="block rounded-lg p-2 text-[13px] font-semibold text-slate-800 hover:bg-slate-50 hover:text-amber-600"
                  >
                    Electrical Panels
                    <span className="block text-[11px] font-normal text-slate-500">
                      CPRI tested short circuit to 6000A
                    </span>
                  </Link>
                  <Link
                    href="/products"
                    className="block rounded-lg p-2 text-[13px] font-semibold text-slate-800 hover:bg-slate-50 hover:text-amber-600"
                  >
                    AMF & APFC Systems
                    <span className="block text-[11px] font-normal text-slate-500">
                      Mains failure & power factor panels
                    </span>
                  </Link>
                  <Link
                    href="/products"
                    className="block rounded-lg p-2 text-[13px] font-semibold text-slate-800 hover:bg-slate-50 hover:text-amber-600"
                  >
                    MCC & PCC Switchboards
                    <span className="block text-[11px] font-normal text-slate-500">
                      Centralized motor control centers
                    </span>
                  </Link>
                </div>
              </div>

              {/* Col 3 */}
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                  Motion & Field Services
                </span>
                <div className="mt-2 space-y-1">
                  <Link
                    href="/services#drives"
                    className="block rounded-lg p-2 text-[13px] font-semibold text-slate-800 hover:bg-slate-50 hover:text-amber-600"
                  >
                    Drive Systems
                    <span className="block text-[11px] font-normal text-slate-500">
                      Yaskawa VFD, servo & DC drives
                    </span>
                  </Link>
                  <Link
                    href="/services#instrumentation"
                    className="block rounded-lg p-2 text-[13px] font-semibold text-slate-800 hover:bg-slate-50 hover:text-amber-600"
                  >
                    Instrumentation
                    <span className="block text-[11px] font-normal text-slate-500">
                      Yokogawa pressure, temp & flow
                    </span>
                  </Link>
                  <Link
                    href="/services#maintenance"
                    className="block rounded-lg p-2 text-[13px] font-semibold text-slate-800 hover:bg-slate-50 hover:text-amber-600"
                  >
                    24/7 AMC & Maintenance
                    <span className="block text-[11px] font-normal text-slate-500">
                      Annual contracts & emergency support
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 4. Industries (Mega-Menu) */}
      <div
        className="relative"
        onMouseEnter={() => handleMouseEnter("industries")}
      >
        <button
          type="button"
          onClick={() => setActiveMenu(activeMenu === "industries" ? null : "industries")}
          className={`flex items-center gap-1 px-3 py-2 text-[14px] font-bold transition-colors ${
            pathname.startsWith("/industries")
              ? "text-slate-900 border-b-2 border-amber-500"
              : "text-slate-700 hover:text-slate-900"
          }`}
          aria-expanded={activeMenu === "industries"}
        >
          <span>Industries</span>
          <span className="text-[10px] opacity-60">▼</span>
        </button>

        {activeMenu === "industries" && (
          <div className="absolute top-full -left-48 z-50 mt-1 w-[680px] rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl transition-all">
            <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h4 className="text-[15px] font-extrabold text-slate-900">
                  13 Major Industrial Sectors
                </h4>
                <p className="text-[12px] text-slate-500">
                  Tailored engineering solutions for continuous and batch manufacturing.
                </p>
              </div>
              <Link
                href="/industries"
                className="inline-flex items-center gap-1 text-[13px] font-bold text-amber-600 hover:text-amber-700"
              >
                <span>View All Sectors</span>
                <ArrowRightIcon size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* Heavy & Process */}
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                  Heavy & Process Plants
                </span>
                <div className="mt-2 space-y-1">
                  {[
                    { name: "Power Generation & Distribution", desc: "Turbines & protection switchgear" },
                    { name: "Cement Manufacturing", desc: "Kiln drives & ESP precipitators" },
                    { name: "Oil & Gas Refineries", desc: "Process safety & SCADA" },
                    { name: "Chemical & Petrochemical", desc: "Batch & continuous reaction loops" },
                    { name: "Pharmaceuticals", desc: "Cleanroom & GMP automation" },
                    { name: "Food & Beverages", desc: "High-speed bottling & mixing" },
                  ].map((ind) => (
                    <Link
                      key={ind.name}
                      href="/industries"
                      className="block rounded-lg p-2 text-[13px] font-semibold text-slate-800 hover:bg-slate-50 hover:text-amber-600"
                    >
                      {ind.name}
                      <span className="block text-[11px] font-normal text-slate-500">
                        {ind.desc}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Transit & Infrastructure */}
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                  Infrastructure & Transit
                </span>
                <div className="mt-2 space-y-1">
                  {[
                    { name: "Railways & Rolling Stock", desc: "Dyno test benches & traversers" },
                    { name: "Material Handling & Cranes", desc: "VVVF drives for overhead cranes" },
                    { name: "Elevators & Escalators", desc: "Commercial vertical transit systems" },
                    { name: "Water & Waste Water", desc: "Aeration, dosing & pumping plants" },
                    { name: "Building Management (BMS)", desc: "Centralized HVAC & power controls" },
                    { name: "Automobile Assembly", desc: "Robotic welding & paint line control" },
                  ].map((ind) => (
                    <Link
                      key={ind.name}
                      href="/industries"
                      className="block rounded-lg p-2 text-[13px] font-semibold text-slate-800 hover:bg-slate-50 hover:text-amber-600"
                    >
                      {ind.name}
                      <span className="block text-[11px] font-normal text-slate-500">
                        {ind.desc}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 5. Products (Mega-Menu) */}
      <div
        className="relative"
        onMouseEnter={() => handleMouseEnter("products")}
      >
        <button
          type="button"
          onClick={() => setActiveMenu(activeMenu === "products" ? null : "products")}
          className={`flex items-center gap-1 px-3 py-2 text-[14px] font-bold transition-colors ${
            pathname.startsWith("/products")
              ? "text-slate-900 border-b-2 border-amber-500"
              : "text-slate-700 hover:text-slate-900"
          }`}
          aria-expanded={activeMenu === "products"}
        >
          <span>Products</span>
          <span className="text-[10px] opacity-60">▼</span>
        </button>

        {activeMenu === "products" && (
          <div className="absolute top-full -left-64 z-50 mt-1 w-[700px] rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl transition-all">
            <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h4 className="text-[15px] font-extrabold text-slate-900">
                  Equipment & Parts Catalogue
                </h4>
                <p className="text-[12px] text-slate-500">
                  CPRI-certified switchboards and authorized OEM distribution lines.
                </p>
              </div>
              <Link
                href="/products"
                className="inline-flex items-center gap-1 text-[13px] font-bold text-amber-600 hover:text-amber-700"
              >
                <span>Full Catalogue</span>
                <ArrowRightIcon size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                  Electrical Panels
                </span>
                <div className="mt-2 space-y-1">
                  <Link
                    href="/products?cat=Electrical%20panel#catalogue"
                    className="block rounded-lg p-2 text-[13px] font-semibold text-slate-800 hover:bg-slate-50 hover:text-amber-600"
                  >
                    AMF Panels
                    <span className="block text-[11px] font-normal text-slate-500">
                      Auto mains failure panels
                    </span>
                  </Link>
                  <Link
                    href="/products?cat=Electrical%20panel#catalogue"
                    className="block rounded-lg p-2 text-[13px] font-semibold text-slate-800 hover:bg-slate-50 hover:text-amber-600"
                  >
                    APFC Panels
                    <span className="block text-[11px] font-normal text-slate-500">
                      Automatic power factor correction
                    </span>
                  </Link>
                  <Link
                    href="/products?cat=Electrical%20panel#catalogue"
                    className="block rounded-lg p-2 text-[13px] font-semibold text-slate-800 hover:bg-slate-50 hover:text-amber-600"
                  >
                    MCC Switchboards
                    <span className="block text-[11px] font-normal text-slate-500">
                      Tested to 6000A
                    </span>
                  </Link>
                </div>
              </div>

              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                  Drives & Motors
                </span>
                <div className="mt-2 space-y-1">
                  <Link
                    href="/products?cat=AC%20drive#catalogue"
                    className="block rounded-lg p-2 text-[13px] font-semibold text-slate-800 hover:bg-slate-50 hover:text-amber-600"
                  >
                    Yaskawa GA 700
                    <span className="block text-[11px] font-normal text-slate-500">
                      High performance AC inverter
                    </span>
                  </Link>
                  <Link
                    href="/products?cat=Servo#catalogue"
                    className="block rounded-lg p-2 text-[13px] font-semibold text-slate-800 hover:bg-slate-50 hover:text-amber-600"
                  >
                    Sigma-7 Servos
                    <span className="block text-[11px] font-normal text-slate-500">
                      Precision rotary & linear servos
                    </span>
                  </Link>
                  <Link
                    href="/products?cat=AC%20drive#catalogue"
                    className="block rounded-lg p-2 text-[13px] font-semibold text-slate-800 hover:bg-slate-50 hover:text-amber-600"
                  >
                    Siemens Drives
                    <span className="block text-[11px] font-normal text-slate-500">
                      Rugged industrial drive units
                    </span>
                  </Link>
                </div>
              </div>

              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                  Instrumentation & Control
                </span>
                <div className="mt-2 space-y-1">
                  <Link
                    href="/products?cat=Field%20instrument#catalogue"
                    className="block rounded-lg p-2 text-[13px] font-semibold text-slate-800 hover:bg-slate-50 hover:text-amber-600"
                  >
                    Yokogawa Transmitters
                    <span className="block text-[11px] font-normal text-slate-500">
                      Pressure, flow & level loops
                    </span>
                  </Link>
                  <Link
                    href="/products?cat=Field%20instrument#catalogue"
                    className="block rounded-lg p-2 text-[13px] font-semibold text-slate-800 hover:bg-slate-50 hover:text-amber-600"
                  >
                    Baumer Encoders
                    <span className="block text-[11px] font-normal text-slate-500">
                      High-precision angular sensors
                    </span>
                  </Link>
                  <Link
                    href="/products?cat=Motion%20control#catalogue"
                    className="block rounded-lg p-2 text-[13px] font-semibold text-slate-800 hover:bg-slate-50 hover:text-amber-600"
                  >
                    GIC Control Components
                    <span className="block text-[11px] font-normal text-slate-500">
                      Timers, SMPS & PLCs
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 6. Projects (Dropdown) */}
      <div
        className="relative"
        onMouseEnter={() => handleMouseEnter("projects")}
      >
        <button
          type="button"
          onClick={() => setActiveMenu(activeMenu === "projects" ? null : "projects")}
          className={`flex items-center gap-1 px-3 py-2 text-[14px] font-bold transition-colors ${
            pathname.startsWith("/gallery")
              ? "text-slate-900 border-b-2 border-amber-500"
              : "text-slate-700 hover:text-slate-900"
          }`}
          aria-expanded={activeMenu === "projects"}
        >
          <span>Projects</span>
          <span className="text-[10px] opacity-60">▼</span>
        </button>

        {activeMenu === "projects" && (
          <div className="absolute top-full left-0 z-50 mt-1 w-60 rounded-xl border border-slate-200 bg-white p-2 shadow-2xl transition-all">
            <Link
              href="/gallery#case-studies"
              className="block rounded-lg px-3.5 py-2.5 text-[14px] font-semibold text-slate-800 transition-colors hover:bg-slate-100 hover:text-amber-600"
            >
              Featured Case Studies
              <span className="block text-[12px] font-normal text-slate-500">
                Turnkey installation breakdowns
              </span>
            </Link>
            <Link
              href="/gallery#installations"
              className="block rounded-lg px-3.5 py-2.5 text-[14px] font-semibold text-slate-800 transition-colors hover:bg-slate-100 hover:text-amber-600"
            >
              Project Gallery
              <span className="block text-[12px] font-normal text-slate-500">
                Site photos & commissioning
              </span>
            </Link>
          </div>
        )}
      </div>

      {/* 7. Contact */}
      <Link
        href="/contact"
        className={`px-3 py-2 text-[14px] font-bold transition-colors ${
          pathname === "/contact"
            ? "text-slate-900 border-b-2 border-amber-500"
            : "text-slate-700 hover:text-slate-900"
        }`}
      >
        Contact
      </Link>
    </div>
  );
}
