import type { NavLink, PartnerBrand, StatItem } from "@/types";

/**
 * Site-wide company facts and navigation.
 * ⚠️ Commercial ground truth for Nandini Enterprises.
 */
export const company = {
  legalName: "Nandini Engineering Infrastructures Pvt Ltd",
  shortName: "NEIPL",
  brandName: "Nandini Enterprises",
  tagline: "Industrial Automation & Electrical Solutions",
  slogan: "Edge of changing future",
  email: "info@nandiniautomation.com",
  phone: "+91-40-23190131",
  mobile: "+91 98488 10889",
  secondaryPhone: "+91 97041 23172",
  founded: 2006,
  foundedYear: 2006,
  yearsOfExperience: 20,
  presence: "Hyderabad · Pune · Serving clients worldwide",
  hq: "Plot No. 78/A/2 & 3, Phase VI, Industrial Park, Jeedimetla, Hyderabad 500 055",
  branch: "J135, MIDC Bhosari, Pune 411 026",
  address: {
    line1: "Plot No. 78/A/2 & 3, Phase VI",
    line2: "Industrial Park",
    landmark: "Jeedimetla",
    city: "Hyderabad",
    state: "Telangana",
    pincode: "500055",
  },
} as const;

export const routes: readonly NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

export const nav: readonly NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

export const tickerItems: readonly string[] = [
  "CPRI CERTIFIED",
  "A-GRADE LICENSE",
  "20+ YEARS",
  "YASKAWA AUTHORIZED",
  "YOKOGAWA PARTNER",
  "SIEMENS DRIVES",
  "JEEDIMETLA HQ",
  "TURNKEY DELIVERY",
  "PLC / SCADA",
  "ROBOTICS INTEGRATION",
  "AMF · APFC · MCC PANELS",
] as const;

export const stats: readonly StatItem[] = [
  {
    value: 20,
    suffix: "+",
    label: "Years Experience",
    sub: "Established 2006",
  },
  {
    value: 6000,
    suffix: "A",
    label: "CPRI Panel Rating",
    sub: "Short circuit tested",
  },
  {
    value: 5,
    suffix: "",
    label: "Global Partners",
    sub: "Authorized distributor",
  },
  {
    value: 7,
    suffix: "",
    label: "Service Verticals",
    sub: "End-to-end capability",
  },
] as const;

export const badges: readonly string[] = [
  "✓ CPRI Certified",
  "✓ A-Grade License",
  "✓ 5 Global Partners",
] as const;

export const partnerBrands: readonly PartnerBrand[] = [
  {
    name: "Yaskawa",
    type: "VFD & Servo Drives",
    desc: "High-performance motor control and motion automation solutions.",
    src: "/images/logos/yaskawa.svg",
  },
  {
    name: "Siemens",
    type: "AC/DC Drives",
    desc: "Reliable industrial drive technology and switchgear.",
    src: "/images/logos/siemens.svg",
  },
  {
    name: "Yokogawa",
    type: "Field Instruments",
    desc: "Pressure, temperature, level, and flow transmitters.",
    src: "/images/logos/yokogawa.svg",
  },
  {
    name: "Baumer",
    type: "Encoders & Sensors",
    desc: "Precision sensor technology and encoders for high-speed lines.",
    src: "/images/logos/baumer.svg",
  },
  {
    name: "Honeywell",
    type: "Process Instrumentation",
    desc: "Process control systems and field measurement solutions.",
    src: "/images/logos/honeywell.svg",
  },
  {
    name: "GIC",
    type: "PLCs, Timers & SMPS",
    desc: "Versatile control and automation components.",
    src: "/images/logos/gic.png",
  },
] as const;
