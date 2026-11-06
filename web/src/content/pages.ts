import type { CertificateItem, Industry, PlanStepItem, ServiceItem } from "@/types";

export const hero = {
  eyebrow: "Hyderabad & Pune · CPRI Certified · Yaskawa Authorized System Integrator",
  title: "Industrial Automation & Electrical Solutions",
  titleLine1: "Zero-Downtime Automation &",
  titleLine2: "Turnkey Electrical Infrastructure",
  subtitle:
    "We engineer, build, and commission CPRI-tested 6000A electrical panels, Yaskawa motion systems, and turnkey PLC/SCADA automation under one roof — ending multi-vendor finger-pointing so your plant runs at peak capacity.",
  primaryCta: { label: "Schedule Engineering Audit", href: "/contact" },
  secondaryCta: { label: "Explore Turnkey Solutions", href: "/services" },
  badges: [
    "✓ CPRI Tested to 6000A / 50kA",
    "✓ Single-Source Turnkey Accountability",
    "✓ Yaskawa Tier-1 Authorized Partner",
    "✓ Indian Railways & Mahagenco Proven",
  ] as const,
} as const;

export const threeStepPlan = {
  eyebrow: "The Path to Predictable Uptime",
  title: "How We Deliver Frictionless Turnkey Execution",
  subtitle:
    "Industrial plant heads face massive operational penalties when fragmented subcontractors blame each other. Here is our proven 3-step engineering roadmap to certified, first-pass operational reliability.",
  steps: [
    {
      number: "01",
      title: "Engineering Audit & Sizing",
      outcome: "Zero Sizing Risk Before Metal Cutting",
      description:
        "We audit your Single-Line Diagrams (SLDs), duty cycles, fault levels, and harmonic profiles to architect optimal switchgear and drive topologies before fabrication begins.",
      deliverable: "Comprehensive Technical Feasibility & GA Layouts",
    },
    {
      number: "02",
      title: "Certified In-House FAT Simulation",
      outcome: "100% Pre-Commissioned at Works",
      description:
        "Every panel, PLC logic routine, and drive train is fully assembled, wired, and simulated under full load at our Hyderabad & Pune facilities before site dispatch.",
      deliverable: "Witnessed Factory Acceptance Test (FAT) Report",
    },
    {
      number: "03",
      title: "Turnkey Commissioning & 24/7 AMC",
      outcome: "Immediate Production Ramp & Single SLA",
      description:
        "Our specialized field engineers execute on-site erection, loop testing, and statutory CEIG/CEA clearances, backed by rapid-response 24/7 AMC support.",
      deliverable: "Live Commercial Handover & Guaranteed Uptime SLAs",
    },
  ] as readonly PlanStepItem[],
  deliveryComparison: {
    problemTag: "The Conventional Subcontractor Risk",
    problemTitle: "The Multi-Vendor Blame Game",
    problemText:
      "When a critical line trips, panel fabricators blame the drive vendor, who blames the PLC coders. The Plant Head is left absorbing lakhs in stalled production.",
    solutionTag: "The Single-Source Advantage",
    solutionTitle: "The NEIPL Turnkey Guarantee",
    solutionText:
      "One engineering contract, one point of warranty, and complete in-house accountability from design to commissioning.",
  },

} as const;


export const capabilities = [
  {
    iconName: "gear",
    image: "/images/service_automation.jpg",
    title: "Industrial Automation",
    desc: "PLC, SCADA & RTU-based turnkey control systems — design, build, install and commission.",
    href: "/services#automation",
  },
  {
    iconName: "plug",
    image: "/images/service_panels.jpg",
    title: "Electrical Panels",
    desc: "CPRI-certified AMF, APFC & MCC panels — short circuit tested to 6000A.",
    href: "/services#panels",
  },
  {
    iconName: "robot",
    image: "/images/service_robotics.jpg",
    title: "Robotics Integration",
    desc: "Arc welding, palletization, pick & place, machine tending and quality inspection systems.",
    href: "/services#robotics",
  },
] as const;

export const spotlights = [
  {
    eyebrow: "Electrical Panels",
    title: "CPRI-Certified Panel Manufacturing",
    desc: "We design and manufacture LT switchboards, AMF, APFC and MCC panels — all CPRI certified and short circuit tested to 6000A. Every panel is built to the highest Indian safety standards.",
    bullets: ["AMF Panels", "APFC Panels", "MCC Panels", "LT Switchboards"],
    image: "/images/panel_indian.jpg",
    imageAlt: "CPRI certified electrical panel assembly in India",
    imgRight: true,
    link: "/services#panels",
  },
  {
    eyebrow: "Robotics Integration",
    title: "End-to-End Robotics Deployment",
    desc: "From robotic arc welding to precision palletization and quality inspection — we integrate, commission and maintain robotic systems for manufacturing environments across India.",
    bullets: ["Arc Welding (Robotic)", "Pick & Place", "Palletization", "Machine Tending"],
    image: "/images/robotics_indian.jpg",
    imageAlt: "Industrial robotic arm assembly line in India",
    imgRight: false,
    link: "/services#robotics",
  },
] as const;

export const services: readonly ServiceItem[] = [
  {
    n: "01",
    title: "Industrial Automation",
    anchor: "automation",
    desc: "PLC/RTU control panels, SCADA systems, HMI design and turnkey project delivery.",
  },
  {
    n: "02",
    title: "Robotics Integration",
    anchor: "robotics",
    desc: "Arc welding, pick & place, palletization, machine tending and quality inspection.",
  },
  {
    n: "03",
    title: "Electrical Panels",
    anchor: "panels",
    desc: "CPRI-certified AMF, APFC, MCC and custom LT switchboards tested to 6000A.",
  },
  {
    n: "04",
    title: "Drive Systems",
    anchor: "drives",
    desc: "VFD, servo and DC drives — supply, integration, repair (Yaskawa authorized).",
  },
  {
    n: "05",
    title: "Instrumentation",
    anchor: "instrumentation",
    desc: "Pressure, temperature, level and flow transmitters (Yokogawa authorized partner).",
  },
  {
    n: "06",
    title: "Embedded & Software",
    anchor: "embedded",
    desc: "Electronic product design, embedded systems and automation software development.",
  },
  {
    n: "07",
    title: "Maintenance & AMC",
    anchor: "maintenance",
    desc: "Annual maintenance contracts, VVVF drive servicing and 24/7 onsite support.",
  },
] as const;

export const industries: readonly Industry[] = [
  {
    name: "Oil & Gas",
    desc: "Offshore and onshore facilities, pipelines, and terminals. Turnkey process control and safety systems that ensure non-stop operation and zero unplanned shutdowns.",
    img: "/images/industries/oil___gas.jpg",
  },
  {
    name: "Pharmaceuticals",
    desc: "Cleanroom automation, batch recipe execution, and temperature-controlled process environments adhering to strict GMP and regulatory standards.",
    img: "/images/industries/pharmaceuticals.jpg",
  },
  {
    name: "Power Generation & Distribution",
    desc: "Centralized SCADA control, turbine control synchronization, switchgear, and CPRI-certified protection panels engineered for continuous grid reliability.",
    img: "/images/industries/power.jpg",
  },
  {
    name: "Chemical & Petrochemical",
    desc: "Robust control for continuous and exothermic batch reaction loops, hazardous-area instrument loops, and high-reliability safety interlocks.",
    img: "/images/industries/chemical.jpg",
  },
  {
    name: "Water & Waste Water Treatment",
    desc: "Municipal aeration control, automated dosing, clarifiers, and filtration systems cutting energy consumption across the treatment lifecycle.",
    img: "/images/industries/water___waste_water.jpg",
  },
  {
    name: "Food & Beverages",
    desc: "Sanitary drive and motion systems powering high-speed bottle filling, mixing, conveyor lines, and automated palletizing cells.",
    img: "/images/industries/food___beverages.jpg",
  },
  {
    name: "Building Management Systems (BMS)",
    desc: "Integrated computer-based monitoring of HVAC ventilation, power distribution, fire safety, and emergency power changeovers.",
    img: "/images/industries/building_management_system.jpg",
  },
  {
    name: "Automotive Manufacturing",
    desc: "Robotic spot and arc welding cells, chassis assembly conveyance, and computerized end-of-line test benches.",
    img: "/images/industries/automobile.jpg",
  },
  {
    name: "Paper & Pulp Processing",
    desc: "Sectional drive coordination, digester level control, pulper consistency loops, and energy-recovery boiler instrumentation.",
    img: "/images/industries/paper___pulp.jpg",
  },
  {
    name: "Solar Energy Plants",
    desc: "Grid synchronization, multi-string inverter monitoring, weather tracking telemetry, and substation protection panels.",
    img: "/images/industries/solar.jpg",
  },
  {
    name: "Railways & Rolling Stock",
    desc: "Dyno test benches for alternator and traction motors, traverser systems for carriage workshops, and ruggedized relay architectures.",
    img: "/images/industries/railways.jpg",
  },
  {
    name: "Cement Manufacturing",
    desc: "Kiln drives, crusher control, vibrating feeder coordination, and ESP precipitator panel installations from quarry to bagging plant.",
    img: "/images/industries/cement.jpg",
  },
  {
    name: "Civil Infrastructure & Metro",
    desc: "High-power distribution centers, tunnel ventilation systems, automated pumping stations, and public transit escalators.",
    img: "/images/industries/infrastructure.jpg",
  },
] as const;

export const leaders = [
  {
    initials: "MM",
    name: "Maruti Marlapalle",
    role: "Managing Partner & Chief Engineer",
    image: "/images/leader_maruti_marlapalle.jpg",
    credentials: [
      "B.Tech Instrumentation",
      "PGDBA",
      "20+ Yrs Field Execution",
      "CPRI Quality Head",
    ] as const,
    bio: "Instrumentation engineer with over two decades of hands-on field execution. Founded Nandini Enterprises in 2006 with the personal conviction that no industrial switchboard should ever fail under real-world fault stress. Personally directs all CPRI 6000A design calculations, high-voltage dielectric test routines, and major PSU turnkey project commissions.",
  },
  {
    initials: "PM",
    name: "Pratima Maruti Marlapalle",
    role: "Partner & Operations Director",
    image: "/images/leader_pratima_marlapalle.jpg",
    credentials: [
      "Computer Science Eng.",
      "IIM Lucknow Exec. Mgmt",
      "L&T Awardee",
      "Supply Chain & Finance Head",
    ] as const,
    bio: "Computer Science engineer and IIM Lucknow executive management alumna. Conferred the national L&T Best Women Business Partner award. Directs operational governance, tier-1 alliances with global OEMs (Yaskawa, Siemens, Yokogawa), and infrastructure scaling across both Hyderabad and Pune facilities.",
  },
] as const;

export interface CompanyMilestone {
  readonly year: string;
  readonly shortYear: string;
  readonly title: string;
  readonly subtitle: string;
  readonly desc: string;
  readonly badge: string;
  readonly capability: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly floatingBadge: string;
  readonly highlights: readonly string[];
}

export const milestones: readonly CompanyMilestone[] = [
  {
    year: "2006",
    shortYear: "2006",
    title: "Founding in Jeedimetla, Hyderabad",
    subtitle: "Groundbreaking Workshop & L&T Authorization",
    desc: "Established with a dedicated core team of five engineers and an authorized L&T switchgear dealership, fabricating custom motor control centers (MCC) and power distribution panels for regional process plants.",
    badge: "Inception",
    capability: "Custom MCC & Industrial Switchgear Assembly",
    image: "/images/service_panels.jpg",
    imageAlt: "Nandini Enterprises switchgear workshop assembly bay with technicians wiring industrial control panels",
    floatingBadge: "Jeedimetla Works · Est. 2006",
    highlights: [
      "5-Engineer Core Instrumentation Team",
      "Authorized L&T Switchgear Dealership",
      "Early Regional Pharma & Chemical MCCs",
    ],
  },
  {
    year: "2010–2011",
    shortYear: "'10–'11",
    title: "National L&T Innovation Recognition",
    subtitle: "National Innovation & Women Leadership Honors",
    desc: "Conferred the prestigious L&T Best Innovation Award (2010) followed by the L&T Best Women Business Partner Award (2011) for exceptional customer project turnaround and switchboard engineering precision.",
    badge: "Industry Awards",
    capability: "Tier-1 EPC Turnaround & Proven OEM Distribution",
    image: "/images/gallery_trade_iitex_expo.jpg",
    imageAlt: "Industrial automation national technology exhibition showcase and leadership recognition",
    floatingBadge: "L&T National Innovation Award",
    highlights: [
      "L&T Best Innovation Award 2010",
      "L&T Best Women Business Partner 2011",
      "Rapid Turnaround for Tier-1 Infrastructure",
    ],
  },
  {
    year: "2014",
    shortYear: "2014",
    title: "CPRI 6000A Type-Test Certification",
    subtitle: "CPRI 6000A Short-Circuit Withstand Certification",
    desc: "Achieved full short-circuit withstand and temperature rise type-testing at the Central Power Research Institute (CPRI) up to 6000A under IS/IEC 61439 standards, establishing tier-1 utility qualification.",
    badge: "CPRI Certified",
    capability: "Form 4b 6000A Short-Circuit Withstand Certification",
    image: "/images/gallery_panel_lt_switchboard.jpg",
    imageAlt: "CPRI-certified 6000A LT switchboard factory acceptance test with copper busbars",
    floatingBadge: "CPRI Certified · IS/IEC 61439",
    highlights: [
      "Full Short-Circuit Test to 6000A",
      "Form 4b Physical Compartmentalization",
      "A-Grade Government Electrical License",
    ],
  },
  {
    year: "2018",
    shortYear: "2018",
    title: "Yaskawa & Yokogawa OEM Partnerships",
    subtitle: "Robotic Workcells & Authorized Global Partnerships",
    desc: "Expanded into high-speed robotic integration, harmonic-mitigated vector VFDs, and hazardous-area field process instrumentation through authorized channel alliances with Yaskawa and Yokogawa.",
    badge: "Global OEM Alliances",
    capability: "Turnkey 6-Axis Robotic Workcells & Vector Drives",
    image: "/images/gallery_robotics_welding.jpg",
    imageAlt: "6-axis robotic arc welding cell with golden-blue sparks and safety light curtains",
    floatingBadge: "Authorized Yaskawa Partner",
    highlights: [
      "Yaskawa 6-Axis Welding & Palletizing",
      "Yokogawa 4-20mA HART Instrumentation",
      "Yaskawa GA700 Multi-Drive Synchronization",
    ],
  },
  {
    year: "2022",
    shortYear: "2022",
    title: "Western Region Expansion in Pune",
    subtitle: "Pune Bhosari Engineering Center & VFD Repair Lab",
    desc: "Commissioned the MIDC Bhosari, Pune engineering branch, adding a state-of-the-art component-level VFD repair laboratory, motion demonstration cell, and regional robotics spares depot.",
    badge: "Dual-Hub Footprint",
    capability: "Component-Level VFD Diagnostics & Western Hub",
    image: "/images/service_embedded.jpg",
    imageAlt: "Advanced component-level AC vector VFD drive repair laboratory in MIDC Bhosari, Pune with oscilloscopes and diagnostic jigs",
    floatingBadge: "Western Region Technology Hub",
    highlights: [
      "Component-Level VFD Diagnostics Lab",
      "Western India Robotic Spares Depot",
      "24/7 Rapid AMC Onsite Support",
    ],
  },
  {
    year: "2026",
    shortYear: "2026",
    title: "Advancing as NEIPL (Nandini Engineering Infrastructures)",
    subtitle: "Tri-Sector Engineering Medallion & National Scale",
    desc: "Evolving into NEIPL with our Tri-Sector Engineering Medallion — uniting Robotics & Industrial Automation, Electronics & Micro-Telemetry, and Civil Infrastructure across high-speed rail, power generation, and smart factories.",
    badge: "NEIPL Evolution",
    capability: "Tri-Sector Engineering & National Infrastructure",
    image: "/images/hero_indian.jpg",
    imageAlt: "High-tech smart manufacturing facility with autonomous robotics and real-time tablet telemetry",
    floatingBadge: "NEIPL · Tri-Sector Medallion",
    highlights: [
      "Robotics & Automated Workcells",
      "Continuous Cloud Busbar Thermal Sensing",
      "High-Consequence Public Infrastructure",
    ],
  },
] as const;

export interface QualityStage {
  readonly step: string;
  readonly phase: string;
  readonly shortName: string;
  readonly title: string;
  readonly standard: string;
  readonly desc: string;
  readonly instrument: string;
  readonly tolerance: string;
  readonly witness: string;
  readonly checks: readonly string[];
}

export const fatQualityStages: readonly QualityStage[] = [
  {
    step: "01",
    phase: "Stage 1",
    shortName: "Busbar Geometry",
    title: "Busbar Geometry & Torque Verification",
    standard: "IS/IEC 61439 Form 4b",
    desc: "99.9% electrolytic ETP copper busbars with cross-sectional current density under 1.5 A/sq.mm. All joint hardware torqued with calibrated digital torque wrenches and tamper-evident torque lacquer applied.",
    instrument: "Calibrated Digital Torque Wrench & Torque Lacquer",
    tolerance: "<1.5 A/sq.mm Current Density · Form 4b Separation",
    witness: "Nandini Quality Lead & Senior Fabrication Engineer",
    checks: ["ETP Grade Copper >99.9% Purity", "Form 4b Physical Separation", "Calibrated Torque Mark Seal"],
  },
  {
    step: "02",
    phase: "Stage 2",
    shortName: "Dielectric Hipot",
    title: "Dielectric & Insulation Resistance Test",
    standard: "2.5kV HV Withstand · 1000V Megger",
    desc: "Mandatory high-voltage dielectric test applying 2.5kV AC for 60 seconds between phases and ground with zero leakage breakdown, followed by 1000V Megger insulation resistance verification >100 Megaohms.",
    instrument: "Fluke 2.5kV High-Voltage Hipot & 1000V Megger Tester",
    tolerance: "2.5kV AC for 60s · Leakage <5mA · IR >100 MΩ",
    witness: "Chief Electrical Testing Engineer & Client Rep",
    checks: ["2.5kV AC 60s Dielectric", "1000V DC Insulation >100MΩ", "Zero Phase-to-Earth Arcing"],
  },
  {
    step: "03",
    phase: "Stage 3",
    shortName: "Control Simulation",
    title: "Automated Control & Interlock Simulation",
    standard: "100% Sequence Dry-Run",
    desc: "Full automated operational simulation: electrical and mechanical interlocking between main and generator breakers, AMF sub-second transfer timing, shunt trip chains, and PLC safety loops.",
    instrument: "Automated Secondary Injection Relay Rig & PLC Signal Simulator",
    tolerance: "Sub-Second AMF Transfer · 100% Interlock Trip Certainty",
    witness: "Automation Systems Integrator & Plant Operations Lead",
    checks: ["Breaker Mechanical Cast Interlocks", "Sub-Second AMF Transfer Loop", "Safety PLC Emergency Trip"],
  },
  {
    step: "04",
    phase: "Stage 4",
    shortName: "Thermal & Contact",
    title: "Temperature Rise & Contact Resistance Audit",
    standard: "Micro-Ohm Contact Drop",
    desc: "Contact resistance testing across all ACB terminals and main horizontal busbar splices using a 100A micro-ohmmeter to ensure zero thermal hotspots prior to continuous full-load commissioning.",
    instrument: "100A Digital Micro-Ohmmeter & Calibrated Thermal Imager",
    tolerance: "Joint Resistance <25 Micro-Ohms · Zero Hotspots",
    witness: "Senior Switchboard Engineer & Third-Party Auditor",
    checks: ["100A Micro-Ohmmeter Inspection", "Splice Drop <25 Micro-Ohms", "Thermal Hotspot Prevention"],
  },
  {
    step: "05",
    phase: "Stage 5",
    shortName: "Customer Sign-Off",
    title: "VCI Moisture Sealing & Customer Witness FAT",
    standard: "IP54 / IP65 Seal · FAT Dossier",
    desc: "Full visual audit of gasket compression, gland plate earthing, and terminal ferrule markings. Sealed with Volatile Corrosion Inhibitor (VCI) desiccant packs with formal client-witnessed FAT signoff certificate.",
    instrument: "IP Gasket Compression Gauge & VCI Barrier Packaging",
    tolerance: "100% Ferrule Cross-Verification · Sealed FAT Dossier",
    witness: "Customer Witness Engineer & Third-Party Agency (TUV / DNV / SGS / EIL)",
    checks: ["VCI Anti-Corrosion Desiccant Pack", "IP54/IP65 Neoprene Gasket Check", "Customer-Signed FAT Test Sheet"],
  },
] as const;

export const dualFacilities = [
  {
    city: "Hyderabad, Telangana",
    facility: "Central Switchgear Works & HQ",
    address: "Plot No. 128, Phase-II, IDA Jeedimetla, Hyderabad - 500055",
    focus: "Heavy 6000A Switchboard Fabrication, CNC Busbar Bending & 2.5kV FAT Testing Bay",
    specs: ["10,000+ sq.ft Works", "6000A Full-Load FAT Bay", "Hydraulic Copper Benders", "ISO & CPRI Certified"],
    image: "/images/panel_indian.jpg",
  },
  {
    city: "Pune, Maharashtra",
    facility: "Western Region Robotics & VFD Hub",
    address: "Sector 10, PCNTDA, MIDC Bhosari, Pune - 411026",
    focus: "Component-Level AC Drive Repair Lab, Robotics Integration Center & Spares Depot",
    specs: ["Component VFD Diagnostic Benches", "Yaskawa Motion Demo Rig", "Western India Spares Stock", "24/7 Field Response"],
    image: "/images/gallery_drives_ga700.jpg",
  },
] as const;

export const awards = [
  {
    year: "2018",
    title: "Outstanding Achievement Award for Business Excellence",
    by: "International Achievers Conference",
  },
  {
    year: "2017",
    title: "Fastest Growing Indian Company Excellence Award",
    by: "Indian Economic Development & Research Association",
  },
  {
    year: "2011",
    title: "Best Women Business Partner Award",
    by: "L&T",
  },
  {
    year: "2010",
    title: "Best Innovation Award",
    by: "L&T",
  },
] as const;

export const certificates: readonly CertificateItem[] = [
  {
    client: "Visaka Industries Limited",
    doc: "Yaskawa VFD performance certificate",
    href: "https://nandiniautomation.com/wp-content/uploads/photo-gallery/imported_from_media_libray//" + encodeURI("yasakawa-VFDs-performance-certificate_Visaka-1 (1).jpg"),
    category: "industrial-oem",
    sector: "Heavy Manufacturing",
    scope: "Multi-axis Yaskawa AC VFD drive integration & long-term plant performance.",
    logo: "/images/logos/visaka.png",
    featured: true,
  },
  {
    client: "Maharashtra State Power Generation Co. Ltd",
    doc: "Work completion certificate",
    href: "https://nandiniautomation.com/wp-content/uploads/photo-gallery/imported_from_media_libray//" + encodeURI("2.-Mahagenco-Work-completion-1.jpg"),
    category: "psu-railways",
    sector: "State Power PSU",
    scope: "Thermal power station electrical control panels & SCADA telemetry works.",
    logo: "/images/logos/mahagenco.png",
    featured: true,
  },
  {
    client: "Yokogawa India Limited",
    doc: "Authorisation letter",
    href: "https://nandiniautomation.com/wp-content/uploads/photo-gallery/imported_from_media_libray//" + encodeURI("Yokogawa-Authorization-Letter-new-1.jpg"),
    category: "industrial-oem",
    sector: "OEM Authorization",
    scope: "Authorized system integrator & channel partner for field process instruments.",
    logo: "/images/logos/yokogawa.svg",
    featured: true,
  },
  {
    client: "Vasavadatta Cement",
    doc: "Work completion certificate",
    href: "https://nandiniautomation.com/wp-content/uploads/photo-gallery/imported_from_media_libray//" + encodeURI("Vasavadatta-Cement-1.jpg"),
    category: "industrial-oem",
    sector: "Heavy Cement",
    scope: "Kiln, crusher & cement mill LT switchgear and automation panel commissioning.",
    logo: "/images/logos/aditya_birla_cement.png",
    featured: true,
  },
  {
    client: "Kolhapur Municipal Corporation",
    doc: "City water supply division",
    href: "https://nandiniautomation.com/wp-content/uploads/photo-gallery/imported_from_media_libray//" + encodeURI("Nandini_KMC1-1.jpg"),
    category: "psu-railways",
    sector: "Municipal Water PSU",
    scope: "Automated municipal water pumping station & APFC power factor systems.",
    logo: "/images/logos/kmc.png",
    featured: true,
  },
  {
    client: "S.E.C. Railway, Raipur",
    doc: "Dyno test bench, Divl. Electrical Engineer",
    href: "https://nandiniautomation.com/wp-content/uploads/photo-gallery/imported_from_media_libray//" + encodeURI("raipur-test-bench-1.jpg"),
    category: "psu-railways",
    sector: "Indian Railways",
    scope: "Locomotive traction alternator & RRU automated dyno load test bench.",
    logo: "/images/logos/indian_railways.svg",
    featured: true,
  },
  {
    client: "TPTY Traversers",
    doc: "Certificate",
    href: "https://nandiniautomation.com/wp-content/uploads/photo-gallery/imported_from_media_libray//" + encodeURI("TPTY-Traversers-Certificate-1 (1).jpg"),
    category: "industrial-oem",
    sector: "Railway Workshops",
    scope: "Heavy rolling-stock carriage traverser drive & precision positioning control.",
    logo: "/images/logos/indian_railways.svg",
    featured: false,
  },
  {
    client: "Vaishali Agro Soya Products",
    doc: "Work completion certificate",
    href: "https://nandiniautomation.com/wp-content/uploads/photo-gallery/imported_from_media_libray//" + encodeURI("Vaishali-Agro-1.jpg"),
    category: "agro-export",
    sector: "Agro Processing",
    scope: "Solvent extraction & continuous soya processing line PLC/MCC automation.",
    featured: false,
  },
  {
    client: "Narayan Agro Oils Pvt Ltd",
    doc: "Work completion, Udgir",
    href: "https://nandiniautomation.com/wp-content/uploads/photo-gallery/imported_from_media_libray//" + encodeURI("Narayana-Agro-Udgir1-1.jpg"),
    category: "agro-export",
    sector: "Edible Oil Refinery",
    scope: "Turnkey electrical panel & motor control installation at Udgir plant.",
    featured: false,
  },
  {
    client: "DCS Limited",
    doc: "Work completion certificate",
    href: "https://nandiniautomation.com/wp-content/uploads/photo-gallery/imported_from_media_libray//" + encodeURI("DCS-Ltd-1.jpg"),
    category: "agro-export",
    sector: "Turnkey Infrastructure",
    scope: "End-to-end electrical distribution & process control installation.",
    logo: "/images/logos/dcs_ltd.svg",
    featured: false,
  },
  {
    client: "ARM Limited, Kenya",
    doc: "Work completion certificate",
    href: "https://nandiniautomation.com/wp-content/uploads/photo-gallery/imported_from_media_libray//" + encodeURI("20.-ARM-Kenya-1.jpg"),
    category: "agro-export",
    sector: "International Export",
    scope: "Export-grade industrial electrical panels & overseas plant commissioning.",
    logo: "/images/logos/arm_kenya.svg",
    featured: false,
  },
  {
    client: "Vishwa Engineering Excellence",
    doc: "PLC automation panel and harmonic filters",
    href: "https://nandiniautomation.com/wp-content/uploads/photo-gallery/imported_from_media_libray//" + encodeURI("17.-VISHWA-PLC-AUTOMATION-PANEL-1.jpg"),
    category: "industrial-oem",
    sector: "Industrial Engineering",
    scope: "Turnkey PLC automation switchboard & active harmonic filtration panels.",
    logo: "/images/logos/vishwa.svg",
    featured: false,
  },
  {
    client: "Ganesh Agro Industries",
    doc: "Experience letter",
    href: "https://nandiniautomation.com/wp-content/uploads/photo-gallery/imported_from_media_libray//" + encodeURI("8.-GANESH-AGRO-EXPERANCE-LTR-1.jpg"),
    category: "agro-export",
    sector: "Agro Manufacturing",
    scope: "Multi-year plant electrical engineering, VFD drives & automation support.",
    featured: false,
  },
  {
    client: "Sanchalan Bhavan, Secunderabad",
    doc: "Electrical maintenance, RCCB/SCR",
    href: "https://nandiniautomation.com/wp-content/uploads/photo-gallery/imported_from_media_libray//" + encodeURI("5.-RCCB_SCR-1.jpg"),
    category: "psu-railways",
    sector: "South Central Railway",
    scope: "Divisional railway headquarters electrical protection, RCCB & SCR works.",
    logo: "/images/logos/indian_railways.svg",
    featured: false,
  },
  {
    client: "Pune",
    doc: "Work completion certificate",
    href: "https://nandiniautomation.com/wp-content/uploads/photo-gallery/imported_from_media_libray//" + encodeURI("3.-PUNE-WORK-COMPLETION-1.jpg"),
    category: "agro-export",
    sector: "Western Region Works",
    scope: "MIDC industrial electrical distribution & automated control panel delivery.",
    featured: false,
  },
] as const;

export const projects = [
  {
    cat: "Electrical Panels",
    iconName: "plug",
    label: "AMF, APFC & MCC Installations",
    color: "#0d2e22",
  },
  {
    cat: "Robotics",
    iconName: "robot",
    label: "Arc Welding & Palletization",
    color: "#0a1a2e",
  },
  {
    cat: "Drive Systems",
    iconName: "bolt",
    label: "VFD & Servo Drive Integration",
    color: "#1a1a0d",
  },
  {
    cat: "Automation",
    iconName: "gear",
    label: "PLC / SCADA Turnkey Projects",
    color: "#0d2e1a",
  },
  {
    cat: "Instrumentation",
    iconName: "chart",
    label: "Field Instrument Installations",
    color: "#1a0d2e",
  },
  {
    cat: "Trade Events",
    iconName: "building",
    label: "IITEX & Industry Exhibitions",
    color: "#2e0d0d",
  },
] as const;
