import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { company } from "@/content/site";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact Us & Engineering Inquiries",
  description:
    "Get in touch with Nandini Enterprises in Jeedimetla, Hyderabad for CPRI-certified electrical panels, automation systems, Yaskawa drives, and AMC contracts.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* 1. Contact Hero */}
      <section
        id="hero"
        aria-label="Contact Hero"
        className="relative flex min-h-[50vh] items-center overflow-hidden py-24"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/panel_indian.jpg"
            alt="Nandini Enterprises Industrial Control Systems Engineering"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-canvas/80 via-canvas/95 to-canvas"
          />
          <div
            aria-hidden="true"
            className="absolute top-1/2 right-1/3 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-accent/10 blur-[140px]"
          />
        </div>

        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow center>Direct Communication</Eyebrow>
            <h1 className="mt-4 text-[clamp(2.5rem,5vw,4.25rem)] font-extrabold tracking-tight leading-[1.15] text-text-white">
              Connect with Our <br />
              <span className="text-accent">Engineering Team</span>
            </h1>
            <p className="mt-6 text-[18px] leading-relaxed text-text-muted">
              Whether you require a formal RFQ quotation for CPRI-certified switchboards or emergency
              automation support, our senior engineers respond within 24 hours.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Contact Details & Form */}
      <section className="border-t border-line bg-surface py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left: Contact Info & Map */}
            <div className="flex flex-col gap-8 lg:col-span-5">
              <div className="rounded-2xl border border-card-border bg-card p-8 shadow-xl">
                <h2 className="text-[20px] font-bold text-text-white">Headquarters & Works</h2>
                <div className="mt-6 space-y-5 text-[14px]">
                  <div className="flex items-start gap-3.5">
                    <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <MapPinIcon size={18} />
                    </span>
                    <span className="text-text-muted leading-relaxed">
                      {company.address.line1}, {company.address.line2},{" "}
                      {company.address.landmark}, {company.address.city},{" "}
                      {company.address.state} — {company.address.pincode}
                    </span>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <PhoneIcon size={18} />
                    </span>
                    <div className="flex flex-col gap-1">
                      <a
                        href={`tel:${company.mobile.replace(/\s+/g, "")}`}
                        className="font-bold text-accent hover:text-accent-light"
                      >
                        {company.mobile} (Direct Sales)
                      </a>
                      <a
                        href={`tel:${company.secondaryPhone.replace(/\s+/g, "")}`}
                        className="text-text-muted hover:text-text-white"
                      >
                        {company.secondaryPhone} (Support Desk)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <MailIcon size={18} />
                    </span>
                    <a
                      href={`mailto:${company.email}`}
                      className="text-text-muted hover:text-accent"
                    >
                      {company.email}
                    </a>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <ClockIcon size={18} />
                    </span>
                    <span className="text-text-muted">
                      Monday – Saturday: 9:00 AM – 6:00 PM IST
                    </span>
                  </div>
                </div>

                {/* Google Maps Embed */}
                <div className="mt-8 overflow-hidden rounded-xl border border-card-border">
                  <iframe
                    title="Nandini Enterprises Jeedimetla Hyderabad Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.3!2d78.4167!3d17.5167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8e0a0a0a0a0a%3A0x0!2sJeedimetla+Industrial+Park!5e0!3m2!1sen!2sin!4v1600000000000"
                    width="100%"
                    height="240"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            {/* Right: Interactive Inquiry Form */}
            <div className="rounded-2xl border border-card-border bg-card p-8 shadow-xl sm:p-10 lg:col-span-7">
              <Eyebrow>RFQ Specification Form</Eyebrow>
              <SectionHeading className="mt-2 text-[26px]">
                Request Technical Proposal
              </SectionHeading>
              <p className="mt-2 text-[14px] text-text-muted mb-8">
                Provide preliminary project details and our design engineers will prepare a technical
                datasheet and formal quotation.
              </p>

              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Assurance Pillars */}
      <section className="border-t border-line bg-canvas py-20">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col rounded-2xl border border-card-border bg-card p-8 shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <ClockIcon size={24} />
              </div>
              <h3 className="mt-5 text-[18px] font-bold text-text-white">24-Hour Quotation Turnaround</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-text-muted">
                Our estimation team analyzes single-line diagrams (SLD) and bill-of-materials promptly.
              </p>
            </div>

            <div className="flex flex-col rounded-2xl border border-card-border bg-card p-8 shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <CheckIcon size={24} />
              </div>
              <h3 className="mt-5 text-[18px] font-bold text-text-white">CPRI & A-Grade Engineers</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-text-muted">
                Every project is directed by certified electrical engineers with over two decades of field experience.
              </p>
            </div>

            <div className="flex flex-col rounded-2xl border border-card-border bg-card p-8 shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <MapPinIcon size={24} />
              </div>
              <h3 className="mt-5 text-[18px] font-bold text-text-white">Hyderabad Central Hub</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-text-muted">
                Strategically located in Jeedimetla Industrial Park with rapid dispatch across Telangana, AP, and nationwide.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
