import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { company } from "@/content/site";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://website-nandiniautomation.pages.dev"),
  title: {
    default: "Nandini Enterprises | Industrial Automation & Electrical Solutions",
    template: "%s | Nandini Enterprises",
  },
  description:
    "20+ years of CPRI-certified industrial automation, electrical panels, robotics integration, and instrumentation solutions from Jeedimetla, Hyderabad.",
  keywords: [
    "industrial automation Hyderabad",
    "CPRI certified panels",
    "PLC SCADA systems",
    "electrical panels Jeedimetla",
    "robotics integration",
    "Yaskawa drives",
    "Yokogawa instruments",
    "Nandini Enterprises",
    "NEIPL",
    "Nandini Engineering Infrastructures Pvt Ltd",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://website-nandiniautomation.pages.dev",
    siteName: "NEIPL - Nandini Engineering Infrastructures Pvt Ltd",
    title: "Nandini Enterprises | Industrial Automation & Electrical Solutions",
    description:
      "20+ years of CPRI-certified industrial automation, electrical panels, robotics integration, and instrumentation solutions from Jeedimetla, Hyderabad.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.legalName,
  url: "https://website-nandiniautomation.pages.dev",
  logo: "https://website-nandiniautomation.pages.dev/images/NEIPL_logo_white.png",
  foundingDate: "2006",
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.line1,
    addressLocality: company.address.city,
    addressRegion: company.address.state,
    postalCode: company.address.pincode,
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: company.mobile,
    contactType: "sales & technical support",
    areaServed: "IN",
    availableLanguage: ["en", "te", "hi"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-canvas font-sans text-text-white antialiased selection:bg-accent selection:text-canvas">
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
