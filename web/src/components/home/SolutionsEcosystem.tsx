"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { certificates } from "@/content/pages";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";
import { CertificateLightboxModal } from "./ClientEndorsements";
import {
  GearIcon,
  RobotIcon,
  PlugIcon,
  BoltIcon,
  ChartIcon,
  CpuChipIcon,
  WrenchShieldIcon,
  ArrowRightIcon,
  CheckIcon,
  BuildingIcon,
} from "@/components/icons";

interface ProofEnrichment {
  detailedScope: string;
  impact: string;
  signatory: string;
  audit: string;
}

const PROOF_ENRICHMENTS: Record<number, ProofEnrichment> = {
  0: {
    detailedScope:
      "Turnkey engineering, panel fabrication, cabling, and field commissioning of multi-axis Yaskawa GA700/A1000 AC variable frequency drives for high-capacity continuous fiber cement lines.",
    impact: "Multi-axis 375kW drive synchronization achieved ~18% net energy reduction with zero line tension trips.",
    signatory: "General Manager (Works) · Visaka Industries Ltd",
    audit: "Witnessed Multi-Axis FAT",
  },
  1: {
    detailedScope:
      "Erection, cabling, termination, and live statutory commissioning of thermal power station boiler electrical control panels, RTUs, and distributed SCADA telemetry networks.",
    impact: "24/7 continuous boiler telemetry maintained with zero unplanned trips under peak 500MW thermal duty.",
    signatory: "Superintending Engineer (Generation) · Koradi Thermal Station",
    audit: "State Power PSU Clearance",
  },
  2: {
    detailedScope:
      "Official OEM channel authorization and certified system integration agreement covering sales, calibration, loop engineering, and commissioning of Yokogawa field process instrumentation.",
    impact: "Factory-certified partner status authorizing precision calibration for mission-critical hazardous loops.",
    signatory: "Head of Commercial & Strategic Alliances · Yokogawa India",
    audit: "Tier-1 OEM Channel Authorization",
  },
  3: {
    detailedScope:
      "Turnkey delivery, testing, and commissioning of heavy-duty LT switchboards, clinker crusher motor control centers (MCC), and automated kiln automation panels.",
    impact: "Surpassed Form 4b 6000A short-circuit withstand in continuous clinker dust with zero thermal hotspots.",
    signatory: "Vice President (Technical) · Vasavadatta Cement (Aditya Birla)",
    audit: "Continuous Process Witnessed FAT",
  },
  4: {
    detailedScope:
      "Execution of automated municipal raw water intake pumping station electricals, APFC capacitor bank panels, multi-pump cascade controllers, and optical fiber telemetry.",
    impact: "Maintained sustained 0.99 power factor across all civic pumping shifts, eliminating lakhs in utility penalty surcharges.",
    signatory: "Executive Engineer · City Water Supply Division, KMC",
    audit: "Civic Infrastructure Site Clearance",
  },
  5: {
    detailedScope:
      "Turnkey design, fabrication, and PLC automation of locomotive traction alternator and rectifier regulator dynamic load testing dynamometer bench rig for electric loco sheds.",
    impact: "Automated high-load dynamic dyno testing for 25kV diesel and electric locomotive traction units.",
    signatory: "Divisional Electrical Engineer (General) · S.E.C. Railway Raipur",
    audit: "Indian Railways RDSO Standard",
  },
  6: {
    detailedScope:
      "Precision variable frequency motion control, VVVF drives, and synchronized multi-motor positioning panels for 50-tonne heavy rolling-stock carriage traversers.",
    impact: "Micro-millimeter rail track alignment under full 50-tonne carriage load with zero transfer backlash.",
    signatory: "Senior Divisional Mechanical Engineer · Carriage Repair Works",
    audit: "Heavy Rolling Stock Precision Test",
  },
  7: {
    detailedScope:
      "Continuous solvent extraction plant automation, explosion-proof hazardous area field transmitter networks, and central motor control center (MCC) switchboards.",
    impact: "Precision vapor flow telemetry and closed-loop temperature control preventing flammable hexane loss.",
    signatory: "Senior Plant Manager & Technical Controller · Vaishali Agro Soya",
    audit: "Hazardous Zone 1 & 2 Safety Clearance",
  },
  8: {
    detailedScope:
      "Turnkey electrical infrastructure, high-viscosity fluid pumping motor control centers, APFC banks, and automated boiler feed water pumping panels at Udgir refinery.",
    impact: "Continuous 24/7 fluid transfer pumping with automatic pressure compensation and zero cavitation.",
    signatory: "Director of Plant Operations · Narayan Agro Oils Udgir Complex",
    audit: "Turnkey Industrial Handover Sign-Off",
  },
  9: {
    detailedScope:
      "End-to-end electrical distribution, automated conveyance lines, motor control centers, and synchronized packaging workcell control infrastructure.",
    impact: "100% automated conveyance synchronization with zero line jam downtime during continuous packaging.",
    signatory: "Chief Project Engineer · Turnkey Projects Infrastructure Division",
    audit: "Multi-Station Commissioning Audit",
  },
  10: {
    detailedScope:
      "Export-grade custom LT power switchboards, 415V motor control centers, and tropicalized electrical distribution assemblies for overseas cement and mineral operations.",
    impact: "Export-grade tropicalized CPRI switchgear fully compliant with international East African utility codes.",
    signatory: "Director of Engineering Works · Athi River Mining Limited, Kenya",
    audit: "Overseas Export Clearance",
  },
  11: {
    detailedScope:
      "Turnkey design, manufacturing, and FAT simulation of PLC automation control panels, harmonic suppression active filter banks, and secondary distribution switchboards.",
    impact: "Mitigated plant-wide total harmonic distortion (THD-I) to <3% with automated multi-zone correction.",
    signatory: "Managing Director & Chief Engineer · Vishwa Engineering Excellence",
    audit: "Class-A Licensed Electrical Installation",
  },
  12: {
    detailedScope:
      "Turnkey supply, high-torque vector VFD integration, dynamic motor control panels, and multi-year preventive electrical maintenance engineering.",
    impact: "Over 5 consecutive years of continuous, zero-breakdown vector drive duty on severe cyclic expeller loads.",
    signatory: "Managing Partner · Ganesh Agro Industries",
    audit: "Multi-Year Commercial Operational Sign-Off",
  },
  13: {
    detailedScope:
      "Comprehensive divisional headquarters electrical system maintenance, residual current circuit breaker (RCCB) modernization, and emergency switchgear operations.",
    impact: "Zero-blackout electrical continuity and 100% statutory RCCB trip safety across divisional headquarters.",
    signatory: "Senior Divisional Electrical Engineer · South Central Railway, Secunderabad",
    audit: "Divisional Railway Safety Audit",
  },
};

interface SolutionPairItem {
  num: string;
  title: string;
  shortLabel: string;
  anchor: string;
  badge: string;
  image: string;
  desc: string;
  specMatrix: readonly { label: string; value: string }[];
  bullets: readonly string[];
  icon: React.ComponentType<{ size?: number; className?: string }>;
  photoMetadata: { location: string; status: string; facility: string };
  proof1Index: number;
  proof2Index: number;
}

const ALL_SOLUTIONS: readonly SolutionPairItem[] = [
  {
    num: "01",
    title: "Industrial Automation",
    shortLabel: "Automation",
    anchor: "automation",
    badge: "PLC · SCADA · RTU",
    image: "/images/service_automation.jpg",
    desc: "Turnkey control system architecture: PLC, SCADA, RTU panels, HMI design, and fail-safe plant commissioning across continuous-process industries.",
    specMatrix: [
      { label: "Platforms", value: "Siemens S7 · Rockwell · Schneider" },
      { label: "Protocols", value: "Modbus · Profinet · EtherNet/IP" },
      { label: "Safety Rating", value: "Fail-Safe SIL-2 / SIL-3 Redundancy" },
    ],
    bullets: [
      "Turnkey PLC & RTU control panels with witnessed FAT simulation",
      "Plant-wide SCADA telemetry with real-time historical event logging",
      "Distributed fail-safe I/O architectures with optical fiber loops",
      "Field sensor instrumentation loops and automated ESD emergency shutoff",
    ],
    icon: GearIcon,
    photoMetadata: {
      location: "Mahagenco Koradi Thermal Station",
      status: "Active Commercial Duty",
      facility: "Engineered at Jeedimetla Works",
    },
    proof1Index: 1, // Mahagenco Work Completion Certificate (CERT-02)
    proof2Index: 11, // Vishwa Engineering Excellence (CERT-12)
  },
  {
    num: "02",
    title: "Robotics Integration",
    shortLabel: "Robotics",
    anchor: "robotics",
    badge: "Turnkey Workcells",
    image: "/images/service_robotics.jpg",
    desc: "Complete robotic workcells engineered for micron-level repeatability, arc welding, palletizing, and hazardous industrial material handling.",
    specMatrix: [
      { label: "Kinematics", value: "6-Axis Articulated (20kg–500kg)" },
      { label: "Precision", value: "±0.03mm Path Repeatability" },
      { label: "Protection", value: "Cat 4 Safety PLC & Light Fencing" },
    ],
    bullets: [
      "Robotic arc welding cells with dual synchronized servo positioners",
      "High-speed carton palletization, depalletizing & stretch wrapping",
      "Automated CNC machine tending with vision-guided part infeed",
      "Turnkey end-of-arm tooling (EOAT) design and offline path simulation",
    ],
    icon: RobotIcon,
    photoMetadata: {
      location: "Heavy Rolling Stock Carriage Works",
      status: "Automated Workcell Active",
      facility: "Integrated at Bhosari, Pune Hub",
    },
    proof1Index: 6, // TPTY Traversers / Railway Workshops (CERT-07)
    proof2Index: 9, // DCS Limited (CERT-10)
  },
  {
    num: "03",
    title: "Electrical Panels (CPRI 6000A)",
    shortLabel: "CPRI Panels",
    anchor: "panels",
    badge: "CPRI Tested 6000A / 50kA",
    image: "/images/service_panels.jpg",
    desc: "CPRI type-tested low-tension switchboards and motor control centers engineered to withstand severe 6000A short circuit faults under IS/IEC 61439.",
    specMatrix: [
      { label: "Fault Rating", value: "CPRI 6000A / 50kA for 1s Withstand" },
      { label: "Form Factor", value: "Form 4b Separation · IP54/IP55" },
      { label: "Busbar Copper", value: "99.9% Electrolytic ETP Grade" },
    ],
    bullets: [
      "Form 4b Drawout Motor Control Centers (MCC) with isolated tiers",
      "High-capacity 6000A Power Control Centers (PCC) with ACB couplers",
      "Microprocessor APFC capacitor banks maintaining sustained 0.99 PF",
      "A-Grade licensed fabrication with full-load 2.5kV FAT dielectric testing",
    ],
    icon: PlugIcon,
    photoMetadata: {
      location: "Central Switchgear Testing Bay",
      status: "CPRI Tested & Certified",
      facility: "Central Switchgear Works, Hyderabad",
    },
    proof1Index: 3, // Vasavadatta Cement / Aditya Birla (CERT-04)
    proof2Index: 10, // ARM Limited, Kenya (CERT-11)
  },
  {
    num: "04",
    title: "Drive Systems (Yaskawa Tier-1)",
    shortLabel: "Drives & Motion",
    anchor: "drives",
    badge: "Yaskawa Authorized Partner",
    image: "/images/service_drives.jpg?v=2",
    desc: "Variable frequency, servo, and DC drive engineering. Authorized tier-1 Yaskawa channel partner with factory-certified drive testing lab support.",
    specMatrix: [
      { label: "Hardware", value: "Yaskawa GA700 · A1000 · Sigma-7" },
      { label: "Power Range", value: "0.75kW to 630kW (415V / 690V)" },
      { label: "Harmonics", value: "Active Filters (<5% IEEE 519 THD)" },
    ],
    bullets: [
      "Multi-drive speed synchronization for rolling mills & conveyors",
      "Overhead crane VVVF anti-sway motion control panels",
      "Component-level VFD diagnostic & repair lab support in Pune",
      "Comprehensive harmonic distortion audits and active line filtering",
    ],
    icon: BoltIcon,
    photoMetadata: {
      location: "Continuous Manufacturing Drive Bay",
      status: "Tier-1 Channel Integration",
      facility: "Bhosari Drive Testing Lab, Pune",
    },
    proof1Index: 0, // Visaka Industries VFD Performance Certificate (CERT-01)
    proof2Index: 12, // Ganesh Agro Industries (CERT-13)
  },
  {
    num: "05",
    title: "Field Instrumentation (Yokogawa)",
    shortLabel: "Instrumentation",
    anchor: "instrumentation",
    badge: "Yokogawa Channel Partner",
    image: "/images/service_instrumentation.jpg",
    desc: "Precision process transmitters and measurement networks. Authorized Yokogawa channel partner for mission-critical industrial loops.",
    specMatrix: [
      { label: "Transmitters", value: "Yokogawa EJX/EJA · Flow · Radar" },
      { label: "Fieldbus", value: "4–20mA HART · Foundation Fieldbus" },
      { label: "Hazardous Area", value: "ATEX / PESO Flameproof Zone 1 & 2" },
    ],
    bullets: [
      "Differential pressure, mass flow & level transmitter loops",
      "Electromagnetic and vortex utility process pipeline metering",
      "Pre-commissioning loop calibration with NABL-traceable certificates",
      "Explosion-proof hazardous area barrier wiring and intrinsic safety",
    ],
    icon: ChartIcon,
    photoMetadata: {
      location: "Continuous Petrochemical & Chemical Process",
      status: "Authorized Channel Support",
      facility: "Jeedimetla Works, Hyderabad",
    },
    proof1Index: 2, // Yokogawa India Authorization Letter (CERT-03)
    proof2Index: 7, // Vaishali Agro Soya Products (CERT-08)
  },
  {
    num: "06",
    title: "Municipal & Heavy Pumping Systems",
    shortLabel: "Pumping SCADA",
    anchor: "embedded",
    badge: "Municipal Water PSU",
    image: "/images/service_embedded.jpg",
    desc: "Automated municipal water pumping station control, APFC energy mitigation banks, and distributed reservoir SCADA networks.",
    specMatrix: [
      { label: "Topologies", value: "Cascade Multi-Pump · VVVF Regulated" },
      { label: "Power Factor", value: "Automatic APFC Sustained 0.99 PF" },
      { label: "Telemetry", value: "GSM / Optical Fiber Reservoir RTUs" },
    ],
    bullets: [
      "Automated multi-pump VVVF panels with soft-start bypass",
      "APFC power factor correction banks (zero reactive utility penalty)",
      "Reservoir level, water pressure & cavitation anti-trip safety interlocks",
      "Remote booster pump station telemetry over GSM and optical backbones",
    ],
    icon: CpuChipIcon,
    photoMetadata: {
      location: "Civic Water Intake Station / KMC",
      status: "Uninterrupted Civic Duty",
      facility: "Hyderabad & Regional Site Engineering",
    },
    proof1Index: 4, // Kolhapur Municipal Corporation (CERT-05)
    proof2Index: 8, // Narayan Agro Oils (CERT-09)
  },
  {
    num: "07",
    title: "24/7 AMC & Railway Test Benches",
    shortLabel: "Railways & AMC",
    anchor: "maintenance",
    badge: "Indian Railways Proven",
    image: "/images/service_maintenance.jpg?v=2",
    desc: "Locomotive alternator test bench automation and round-the-clock emergency AMC contracts backed by dedicated spares depots in Hyderabad & Pune.",
    specMatrix: [
      { label: "Rail Capability", value: "Traction Alternator Dyno Test Benches" },
      { label: "Response SLA", value: "24/7 Breakdown Dispatch (<4h Regional)" },
      { label: "Spares Depots", value: "Dual Facilities: Hyderabad & Pune" },
    ],
    bullets: [
      "Locomotive dyno test bench rigs for 25kV traction alternators",
      "Panel thermography, busbar torqueing & Megger insulation resistance audits",
      "24/7 emergency dispatch team with mobile diagnostic test sets",
      "Dedicated spare VFD and switchgear inventory reserves in Pune & Hyderabad",
    ],
    icon: WrenchShieldIcon,
    photoMetadata: {
      location: "Electric Locomotive Shed & Dyno Bay",
      status: "Critical Railway Duty",
      facility: "Hyderabad Central Works & Raipur Site",
    },
    proof1Index: 5, // S.E.C. Railway Raipur Dyno Test Bench (CERT-06)
    proof2Index: 13, // Sanchalan Bhavan / South Central Railway (CERT-14)
  },
];

function ProofCard({
  certIndex,
  onInspect,
}: {
  certIndex: number;
  onInspect: (idx: number) => void;
}) {
  const cert = certificates[certIndex];
  if (!cert) return null;
  const certCode = `CERT-${String(certIndex + 1).padStart(2, "0")}`;
  const enrichment = PROOF_ENRICHMENTS[certIndex];

  return (
    <div className="flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-xs transition-all hover:border-slate-300">
      <div>
        {/* Certificate Top Metadata Row */}
        <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-slate-200/80">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="rounded-md bg-amber-100 border border-amber-300 px-2 py-0.5 font-mono text-[10px] font-extrabold text-amber-900 flex-none">
              {certCode}
            </span>
            {cert.sector && (
              <span className="rounded-full bg-slate-100 border border-slate-200 px-2.5 py-0.5 text-[10px] font-semibold text-slate-700 truncate">
                {cert.sector}
              </span>
            )}
            {enrichment?.audit && (
              <span className="hidden sm:inline-block rounded-full bg-slate-50 border border-slate-200 px-2 py-0.5 font-mono text-[9.5px] font-medium text-slate-600 truncate">
                {enrichment.audit}
              </span>
            )}
          </div>
          <span className="flex-none inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[10px] font-bold text-emerald-800">
            <CheckIcon size={11} />
            <span>Signed Record</span>
          </span>
        </div>

        {/* Client Brand & Handover Document */}
        <div className="mt-3 flex items-center gap-3">
          {cert.logo ? (
            <div className="flex h-12 w-20 flex-none items-center justify-center rounded-lg border border-slate-200 bg-white p-1.5 shadow-2xs">
              <Image
                src={cert.logo}
                alt={`${cert.client} logo`}
                width={70}
                height={35}
                className="max-h-9 w-auto object-contain"
              />
            </div>
          ) : (
            <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg border border-amber-300 bg-amber-50 font-mono text-xs font-black text-amber-800">
              <BuildingIcon size={20} />
            </div>
          )}
          <div className="min-w-0 flex-1">
            <h4 className="text-sm font-extrabold text-slate-900 leading-tight truncate">
              {cert.client}
            </h4>
            <p className="mt-0.5 text-[10.5px] font-bold uppercase tracking-wider text-amber-700 truncate">
              {cert.doc}
            </p>
          </div>
        </div>

        {/* Full Turnkey Handover Scope */}
        <div className="mt-2.5 rounded-lg border border-slate-200/80 bg-slate-50 p-2.5 text-xs leading-relaxed text-slate-700">
          <span className="font-mono text-[9.5px] font-extrabold uppercase tracking-wider text-slate-500 block mb-0.5">
            Verified Handover Scope:
          </span>
          <p className="font-medium text-slate-800 leading-normal">
            {enrichment?.detailedScope || cert.scope}
          </p>
        </div>

        {/* Verified Impact Callout */}
        {enrichment && (
          <div className="mt-2 rounded-lg border border-emerald-200/70 bg-emerald-50/70 p-2.5 text-xs leading-snug text-emerald-900 flex items-start gap-2">
            <span className="text-emerald-700 flex-none mt-0.5 font-bold">✓</span>
            <div>
              <span className="font-bold text-emerald-950">Engineering Outcome: </span>
              <span className="text-emerald-800 font-medium">{enrichment.impact}</span>
            </div>
          </div>
        )}

        {/* Handover Specifications Strip */}
        <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[10px] text-slate-500">
          <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-0.5 font-medium text-slate-700">
            ● 100% Commercial Handover
          </span>
          <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-0.5 font-medium text-slate-700">
            ● Class-A Licensed Works
          </span>
        </div>
      </div>

      {/* Signatory Authority & Action Footer */}
      <div className="mt-3 pt-2.5 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-2 text-xs">
        {enrichment ? (
          <span className="font-mono text-[9.5px] text-slate-500 truncate max-w-[200px] sm:max-w-[240px]">
            {enrichment.signatory}
          </span>
        ) : (
          <span className="font-mono text-[9.5px] text-slate-500">
            Authorized Signatory on File
          </span>
        )}

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onInspect(certIndex)}
            className="inline-flex items-center gap-1 rounded-lg bg-amber-500 px-2.5 py-1 text-[11px] font-extrabold text-slate-950 shadow-2xs transition-all hover:bg-amber-400 cursor-pointer"
          >
            <span>Inspect Signed Scan</span>
            <ArrowRightIcon size={11} />
          </button>
          <a
            href={cert.href}
            target="_blank"
            rel="noopener noreferrer"
            title="Open original scan in new tab"
            className="text-[10px] font-semibold text-slate-500 hover:text-slate-800 transition-colors"
          >
            Raw Scan ↗
          </a>
        </div>
      </div>
    </div>
  );
}

export function SolutionsEcosystem() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxCertIndex, setLightboxCertIndex] = useState<number | null>(null);

  const nextSlide = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % ALL_SOLUTIONS.length);
  }, []);

  useEffect(() => {
    if (isPaused || lightboxCertIndex !== null) return;
    const interval = setInterval(nextSlide, 4200);
    return () => clearInterval(interval);
  }, [isPaused, lightboxCertIndex, nextSlide]);

  const active = ALL_SOLUTIONS[activeIdx];
  const ActiveIcon = active.icon;

  return (
    <section
      id="solutions"
      aria-label="Solutions Ecosystem and Verified Completion Records"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative min-h-[calc(100vh-4.5rem)] flex flex-col justify-between bg-white py-6 sm:py-8 text-slate-800 border-b border-slate-200/90 overflow-hidden"
    >
      <Container className="flex-1 flex flex-col justify-between gap-3.5 sm:gap-4">
        {/* Compact Executive Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <Eyebrow>Capabilities &amp; Verified Proof</Eyebrow>
            <SectionHeading tone="dark" className="mt-1 text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-slate-900">
              End-to-End Capabilities Backed by Signed Completion Records
            </SectionHeading>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-2xl">
              Explore our core engineering disciplines, each paired directly with verified PSU and enterprise work completion certificates.
            </p>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-1.5 text-xs font-bold text-slate-800 transition-all hover:border-amber-500 hover:bg-amber-500 hover:text-white shadow-2xs self-start md:self-auto"
          >
            <span>Inspect All 15 Records in Gallery</span>
            <ArrowRightIcon size={14} />
          </Link>
        </div>

        {/* Top Horizontal Segmented Switcher Ribbon */}
        <div
          role="tablist"
          aria-label="Industrial Solutions Selector"
          className="flex overflow-x-auto no-scrollbar gap-1.5 sm:gap-2 pb-1"
        >
          {ALL_SOLUTIONS.map((s, idx) => {
            const isActive = idx === activeIdx;
            const Icon = s.icon;
            return (
              <button
                key={s.num}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  setActiveIdx(idx);
                  setIsPaused(true);
                }}
                onMouseEnter={() => {
                  setActiveIdx(idx);
                  setIsPaused(true);
                }}
                className={`flex-none sm:flex-1 relative overflow-hidden inline-flex items-center justify-center gap-1.5 rounded-lg px-2.5 sm:px-3 py-2 text-xs font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-amber-500 text-slate-950 shadow-xs ring-1 ring-amber-600/30"
                    : "border border-slate-200 bg-slate-50/90 text-slate-700 hover:border-slate-300 hover:bg-slate-100"
                }`}
              >
                <Icon size={14} className={isActive ? "text-slate-950" : "text-slate-500"} />
                <span className="whitespace-nowrap">{s.shortLabel}</span>
                {isActive && !isPaused && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-950/40 animate-pulse"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* 2x2 Matrix Feature Stage: Row 1 (Specs + Industrial Photo) | Row 2 (Verified Proof 1 + Verified Proof 2) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch flex-1">
          {/* Quadrant 1 (Top-Left): Capability Brief & Engineered Specs Matrix */}
          <div className="flex flex-col justify-between rounded-xl border border-slate-200/90 bg-slate-50/70 p-4 sm:p-5 shadow-xs">
            <div>
              {/* Badge & Number */}
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-amber-800 border border-amber-300 bg-amber-100/90 px-2 py-0.5 rounded-md">
                  {active.badge}
                </span>
                <span className="font-mono text-[10px] font-extrabold text-slate-400">
                  DISCIPLINE {active.num} OF 07
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-2 text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                <ActiveIcon size={20} className="text-amber-500 flex-none" />
                <span>{active.title}</span>
              </h3>

              {/* Description */}
              <p className="mt-1.5 text-xs sm:text-[13px] leading-relaxed text-slate-600">
                {active.desc}
              </p>

              {/* Technical Operating Parameters Matrix */}
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2 border-t border-slate-200/80 pt-2.5">
                {active.specMatrix.map((spec) => (
                  <div
                    key={spec.label}
                    className="rounded-lg border border-slate-200/80 bg-white p-2 text-left shadow-2xs"
                  >
                    <span className="font-mono text-[9px] font-extrabold uppercase tracking-wider text-slate-400 block mb-0.5">
                      {spec.label}
                    </span>
                    <span className="text-[11px] font-bold text-slate-800 leading-tight block">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Engineered Deliverables Checklist (4 Inclusions) */}
              <div className="mt-2.5 pt-2 border-t border-slate-200/70">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 block mb-1">
                  Engineered Deliverables &amp; Inclusions
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {active.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="flex items-center gap-1.5 rounded-md border border-slate-200/60 bg-white/80 px-2 py-1 text-[11px] font-medium text-slate-800"
                    >
                      <span className="text-emerald-600 flex-none">
                        <CheckIcon size={12} />
                      </span>
                      <span className="leading-tight truncate">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Action Links */}
            <div className="mt-3.5 pt-2.5 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
              <Link
                href={`/services#${active.anchor}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-amber-700 transition-colors"
              >
                <span>Explore Technical Specs</span>
                <ArrowRightIcon size={14} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-1.5 text-xs font-bold text-white transition-all hover:bg-slate-800 shadow-2xs"
              >
                <span>Request Quotation →</span>
              </Link>
            </div>
          </div>

          {/* Quadrant 2 (Top-Right): High-Definition Industrial Photo & Telemetry HUD */}
          <div className="relative min-h-[280px] sm:min-h-[300px] lg:min-h-[320px] rounded-xl border border-slate-200/90 overflow-hidden shadow-xs group bg-slate-900 flex flex-col justify-between">
            <Image
              src={active.image}
              alt={active.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              priority
            />
            {/* Ambient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-slate-950/40" />

            {/* Top HUD Badge Bar */}
            <div className="relative z-10 p-3 sm:p-4 flex items-center justify-between gap-2">
              <span className="rounded-md bg-slate-900/85 backdrop-blur-xs border border-white/20 px-2.5 py-1 font-mono text-[10px] font-bold text-white shadow-xs">
                {active.photoMetadata.facility}
              </span>
              <span className="rounded-md bg-amber-500/95 backdrop-blur-xs px-2.5 py-1 font-mono text-[10px] font-extrabold text-slate-950 shadow-xs">
                {active.badge}
              </span>
            </div>

            {/* Bottom HUD Bar */}
            <div className="relative z-10 p-3 sm:p-4 border-t border-white/10 bg-gradient-to-t from-slate-950/95 to-slate-950/60 backdrop-blur-xs flex items-end justify-between gap-3 text-white">
              <div className="min-w-0">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-0.5">
                  Factory &amp; Field Reference
                </span>
                <p className="text-xs sm:text-sm font-extrabold text-white tracking-tight truncate">
                  {active.photoMetadata.location}
                </p>
              </div>
              <span className="flex-none rounded-full bg-emerald-500/20 border border-emerald-400/40 px-2.5 py-0.5 font-mono text-[10px] font-bold text-emerald-300">
                ● {active.photoMetadata.status}
              </span>
            </div>
          </div>

          {/* Quadrant 3 (Bottom-Left): Verified Proof #1 Card */}
          <ProofCard
            certIndex={active.proof1Index}
            onInspect={setLightboxCertIndex}
          />

          {/* Quadrant 4 (Bottom-Right): Verified Proof #2 Card */}
          <ProofCard
            certIndex={active.proof2Index}
            onInspect={setLightboxCertIndex}
          />
        </div>

        {/* Sleek Bottom Credibility Bar */}
        <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 px-4 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <div className="flex flex-wrap items-center gap-2.5 text-slate-600">
            <span className="inline-flex items-center gap-1.5 text-emerald-700 font-bold">
              <CheckIcon size={14} />
              <span>15 Original Signed Certificates on File</span>
            </span>
            <span className="hidden md:inline text-slate-400">·</span>
            <span className="hidden md:inline text-slate-600">
              CPRI 6000A / 50kA Certified Type Test Reports
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/about#certifications"
              className="font-bold text-amber-700 hover:text-amber-800 transition-colors"
            >
              Credentials &amp; Awards →
            </Link>
            <Link
              href="/gallery"
              className="rounded-lg bg-slate-900 px-2.5 py-1 font-bold text-white hover:bg-slate-800 transition-colors"
            >
              Gallery Overview
            </Link>
          </div>
        </div>
      </Container>

      {/* Lightbox Modal for Full Signed Scan Preview */}
      <CertificateLightboxModal
        activeIndex={lightboxCertIndex}
        onClose={() => setLightboxCertIndex(null)}
        onSelectIndex={(idx) => setLightboxCertIndex(idx)}
      />
    </section>
  );
}
