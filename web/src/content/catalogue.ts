import type { ProductLine, CatalogueItem } from "@/types";

/**
 * Pinned equipment catalogue.
 * Part numbers (GA 700, CIMR-…) identify equipment a customer will order.
 */
export const productLines: readonly ProductLine[] = [
  {
    img: "/images/panel_indian.jpg",
    name: "MCC / PCC / LT panels",
    desc: "CPRI-certified AMF, APFC, MCC and custom LT switchboards short-circuit tested to 6000A (IS/IEC 61439).",
    items: ["AMF Panels", "APFC Panels", "MCC Panels", "LT Switchboards"],
    filterCat: "Electrical panel",
    badge: "CPRI 6000A",
  },
  {
    img: "https://nandiniautomation.com/wp-content/uploads/2018/01/GA-700.png",
    name: "AC drives & motion control",
    desc: "Variable frequency drives, servo drives and motion controllers for pumps, fans, conveyors and machine axes.",
    items: ["AC drives", "Servo drives", "Regenerative units"],
    filterCat: "AC drive",
    badge: "Yaskawa & Siemens",
  },
  {
    img: "https://nandiniautomation.com/wp-content/uploads/2018/02/MP3000.png",
    name: "Process control (PLC, SCADA & HMI)",
    desc: "Programmable logic controllers with HMI and SCADA software for real-time monitoring, trends and alarms.",
    items: ["PLC", "SCADA", "HMI", "Motion Controllers"],
    filterCat: "Motion control",
    badge: "Yaskawa & GIC",
  },
  {
    img: "https://nandiniautomation.com/wp-content/uploads/2018/02/f1-1.png",
    name: "Field instruments",
    desc: "Differential pressure, electromagnetic flow, radar level and temperature transmitters for process lines.",
    items: ["Transmitters", "Flow Meters", "Level Gauges"],
    filterCat: "Field instrument",
    badge: "Yokogawa & Honeywell",
  },
  {
    img: "https://nandiniautomation.com/wp-content/uploads/2018/03/a500eb0801e37537d23559ecfff4ec66abb698c3.jpg",
    name: "Sensors & transducers",
    desc: "High-precision optical encoders, proximity sensors, photoelectric switches and wireless field modules.",
    items: ["Encoders", "Proximity", "Load cells"],
    filterCat: "Field instrument",
    badge: "Baumer & Yokogawa",
  },
  {
    img: "/images/robotics_indian.jpg",
    name: "Robotics Integration",
    desc: "Industrial 6-axis robot supply, cell integration, MIG/TIG arc welding, and high-speed palletization.",
    items: ["Arc Welding", "Palletization", "Machine Tending"],
    filterCat: "Servo",
    badge: "Turnkey Cells",
  },
] as const;

export const catalogue: readonly CatalogueItem[] = [
  // CPRI 6000A Electrical Panels (Manufactured in Hyderabad & Pune)
  {
    name: "PCC / LT Main Switchboard (6000A)",
    cat: "Electrical panel",
    part: "NE-PCC-6000A",
    img: "/images/hero_cpri_panel.jpg",
    brand: "Nandini CPRI",
    specs: "CPRI Type-Tested to 6000A · IS/IEC 61439 · ETP Copper Busbar · IP54/IP65",
  },
  {
    name: "Modular Motor Control Center (MCC)",
    cat: "Electrical panel",
    part: "NE-MCC-3200A",
    img: "/images/panel_indian.jpg",
    brand: "Nandini CPRI",
    specs: "Fixed & Drawout DOL/Star-Delta/VFD Feeders · Form 3b/4b Compartmentalized",
  },
  {
    name: "Automatic Power Factor Correction (APFC)",
    cat: "Electrical panel",
    part: "NE-APFC-099",
    img: "/images/service_panels.jpg",
    brand: "Nandini CPRI",
    specs: "Microprocessor / Thyristor Switched · Detuned Harmonic Reactor · 0.99 PF",
  },
  {
    name: "Auto Mains Failure (AMF) DG Sync Panel",
    cat: "Electrical panel",
    part: "NE-AMF-SYNC",
    img: "/images/service_automation.jpg",
    brand: "Nandini CPRI",
    specs: "Seamless Utility-to-DG Changeover · Auto Load Sharing & Protection Relays",
  },

  // AC Drives (Yaskawa Authorized)
  {
    name: "GA 700",
    cat: "AC drive",
    part: "GA700-4T",
    img: "https://nandiniautomation.com/wp-content/uploads/2018/01/GA-700.png",
    brand: "Yaskawa",
    specs: "0.75–630 kW · 400V 3-Phase · Induction, PM & SynRM Motor Control",
  },
  {
    name: "AC Drive A1000",
    cat: "AC drive",
    part: "CIMR-AT4A",
    img: "https://nandiniautomation.com/wp-content/uploads/2018/01/AC-Drive-A1000-_1.jpg",
    brand: "Yaskawa",
    specs: "Heavy-Duty Vector Inverter · Closed/Open Loop Torque Control for Cranes & Hoists",
  },
  {
    name: "AC Drive J1000",
    cat: "AC drive",
    part: "CIMR-JT4A",
    img: "https://nandiniautomation.com/wp-content/uploads/2018/01/AC-Drive-J1000.png",
    brand: "Yaskawa",
    specs: "Compact V/f Micro Drive · 0.1–5.5 kW · Conveyors, Fans & Packaging Lines",
  },
  {
    name: "AC Drive V1000",
    cat: "AC drive",
    part: "CIMR-VT4A",
    img: "https://nandiniautomation.com/wp-content/uploads/2018/01/AC-Drive-V1000_1.jpg",
    brand: "Yaskawa",
    specs: "Current Vector Compact Drive · 0.1–18.5 kW · STO SIL2 Functional Safety",
  },
  {
    name: "Matrix Regenerative U1000",
    cat: "AC drive",
    part: "CIMR-UT4A",
    img: "https://nandiniautomation.com/wp-content/uploads/2018/01/u-1000.jpg",
    brand: "Yaskawa",
    specs: "AC-to-AC Matrix Converter · <5% iTHD Ultra-Low Harmonics & Full Regeneration",
  },
  {
    name: "Regenerative Brake Unit R1000",
    cat: "AC drive",
    part: "CIMR-RT4A",
    img: "https://nandiniautomation.com/wp-content/uploads/2018/01/Regenerative-Brake-Unit-R1000.jpg",
    brand: "Yaskawa",
    specs: "Braking Energy Recovery Unit · Ideal for Cranes, Lifts, Centrifuges & Dyno Rigs",
  },
  {
    name: "Common DC Bus D1000",
    cat: "AC drive",
    part: "CIMR-DT4A",
    img: "https://nandiniautomation.com/wp-content/uploads/2018/01/Common-DC-Bus-D1000.jpg",
    brand: "Yaskawa",
    specs: "ISO-Compliant Regenerative Converter for Multi-Drive Common DC Bus Systems",
  },
  {
    name: "A1000 HHP 400/595/690 V",
    cat: "AC drive",
    part: "A1000-HHP",
    img: "https://nandiniautomation.com/wp-content/uploads/2018/01/A1000-HHP-–-High-Horse-Power-400v-595v-690v.png",
    brand: "Yaskawa",
    specs: "High-Horsepower Industrial Drive · 400V / 595V / 690V for Kilns, Crushers & Pumps",
  },

  // Servo Drives & Motors (Yaskawa Sigma Series)
  {
    name: "Sigma 7 servo pack",
    cat: "Servo",
    part: "SGD7S",
    img: "https://nandiniautomation.com/wp-content/uploads/2018/02/servopack7.jpg",
    brand: "Yaskawa",
    specs: "3.1 kHz Bandwidth Servo Amplifier · EtherCAT & MECHATROLINK-III · Auto-Tuning",
  },
  {
    name: "Sigma 7 servo motor",
    cat: "Servo",
    part: "SGM7J / SGM7A",
    img: "https://nandiniautomation.com/wp-content/uploads/2018/02/Sigma-7-servo-Motor.png",
    brand: "Yaskawa",
    specs: "24-Bit High-Resolution Absolute Encoder · IP67 Compact Rotary Servo Motor",
  },
  {
    name: "Sigma 5 servo drive",
    cat: "Servo",
    part: "SGDV",
    img: "https://nandiniautomation.com/wp-content/uploads/2018/02/SGDV-R90A15A_Feedback_Option_angled_IMG_1992.jpg",
    brand: "Yaskawa",
    specs: "Proven Industrial Servo Amplifier · Vibration Suppression & High-Response Positioning",
  },
  {
    name: "Sigma 5 servo / linear motor",
    cat: "Servo",
    part: "SGLG / SGLF",
    img: "https://nandiniautomation.com/wp-content/uploads/2018/02/Sigma5_servo-Motor.png",
    brand: "Yaskawa",
    specs: "Coreless & Iron-Core Direct-Drive Linear Servo Motors for High-Speed Gantries",
  },

  // Motion Controllers (Yaskawa MP Series)
  {
    name: "MP3000 controller",
    cat: "Motion control",
    part: "MP3300",
    img: "https://nandiniautomation.com/wp-content/uploads/2018/02/MP3000.png",
    brand: "Yaskawa",
    specs: "IEC 61131-3 Multi-Axis Machine Controller · Synchronizes up to 256 Servo Axes",
  },
  {
    name: "MP2000 controller",
    cat: "Motion control",
    part: "MP2300",
    img: "https://nandiniautomation.com/wp-content/uploads/2018/02/MP2000.png",
    brand: "Yaskawa",
    specs: "Compact All-in-One PLC & Motion Controller for Synchronized Production Lines",
  },

  // Field Instruments (Yokogawa Authorized)
  {
    name: "Pressure transmitters",
    cat: "Field instrument",
    part: "EJX / EJA-E",
    img: "https://nandiniautomation.com/wp-content/uploads/2018/02/f1-1.png",
    brand: "Yokogawa",
    specs: "DPharp Silicon Resonant Sensor · ±0.04% Accuracy · SIL2 Certified HART/BRAIN",
  },
  {
    name: "Flow meters",
    cat: "Field instrument",
    part: "AXG / AXW",
    img: "https://nandiniautomation.com/wp-content/uploads/2018/03/9c082330201fa1eadc1cca04d4040b4e43b50f54-1.png",
    brand: "Yokogawa",
    specs: "ADMAG Total Insight Dual-Frequency Magnetic Flowmeter for Slurries & Water",
  },
  {
    name: "Temperature transmitters",
    cat: "Field instrument",
    part: "YTA610 / YTA710",
    img: "https://nandiniautomation.com/wp-content/uploads/2018/03/7eb5e4da3d9404d1043f5bbe806666d8762d9c93-1.jpg",
    brand: "Yokogawa",
    specs: "Dual-Sensor RTD/Thermocouple Input · Dual-Compartment Field Housing",
  },
  {
    name: "Level meters",
    cat: "Field instrument",
    part: "EJX210B",
    img: "https://nandiniautomation.com/wp-content/uploads/2018/03/c04bd1a456673d233bab2c52a831177c00e46cf3.jpg",
    brand: "Yokogawa",
    specs: "Flange-Mounted Differential Pressure Level Transmitter for Tanks & Reactors",
  },
  {
    name: "Field wireless",
    cat: "Field instrument",
    part: "FN110 / YFGW410",
    img: "https://nandiniautomation.com/wp-content/uploads/2018/03/a500eb0801e37537d23559ecfff4ec66abb698c3.jpg",
    brand: "Yokogawa",
    specs: "ISA100.11a Industrial Field Wireless Communication Module & Gateway",
  },
  {
    name: "Device smart communicators",
    cat: "Field instrument",
    part: "YHC5150X",
    img: "https://nandiniautomation.com/wp-content/uploads/2018/03/tn_category_YHC5150x.png",
    brand: "Yokogawa",
    specs: "FieldMate Handheld HART & FOUNDATION Fieldbus Instrument Configurator",
  },
] as const;

export const catalogueCategories = [
  "All",
  "Electrical panel",
  "AC drive",
  "Servo",
  "Motion control",
  "Field instrument",
] as const;
