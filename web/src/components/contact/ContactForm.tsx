"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const prefillService = searchParams.get("service") || "";
  const prefillProduct = searchParams.get("product") || "";
  const prefillIndustry = searchParams.get("industry") || "";
  const prefillProject = searchParams.get("project") || "";

  const initialSubject =
    prefillProduct || prefillService || prefillIndustry || prefillProject || "";

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: initialSubject,
    message: initialSubject
      ? `Hello Nandini Team,\n\nI would like to inquire regarding ${initialSubject}. Please share technical specifications, pricing, and availability.`
      : "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:info@nandiniautomation.com?subject=${encodeURIComponent(
      formData.subject || "Website Technical Inquiry"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-accent/30 bg-card p-10 text-center shadow-xl">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/20 text-accent">
          ✓
        </div>
        <h3 className="mt-4 text-[22px] font-bold text-text-white">Inquiry Prepared</h3>
        <p className="mt-2 text-[14px] text-text-muted">
          Your email client has been opened with your inquiry details. If it did not launch automatically, you can email us directly at{" "}
          <a href="mailto:info@nandiniautomation.com" className="text-accent underline">
            info@nandiniautomation.com
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label htmlFor="name" className="block text-[13px] font-semibold text-text-white">
          Full Name <span className="text-accent">*</span>
        </label>
        <input
          id="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="e.g. Maruti Sharma"
          className="mt-1.5 w-full rounded-xl border border-card-border bg-surface px-4 py-3 text-[14px] text-text-white placeholder:text-text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-[13px] font-semibold text-text-white">
            Work Email <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="name@company.com"
            className="mt-1.5 w-full rounded-xl border border-card-border bg-surface px-4 py-3 text-[14px] text-text-white placeholder:text-text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-[13px] font-semibold text-text-white">
            Phone Number <span className="text-accent">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 98488 12345"
            className="mt-1.5 w-full rounded-xl border border-card-border bg-surface px-4 py-3 text-[14px] text-text-white placeholder:text-text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-[13px] font-semibold text-text-white">
          Company Name & Location
        </label>
        <input
          id="company"
          type="text"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          placeholder="e.g. Visaka Industries, Hyderabad"
          className="mt-1.5 w-full rounded-xl border border-card-border bg-surface px-4 py-3 text-[14px] text-text-white placeholder:text-text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-[13px] font-semibold text-text-white">
          Project or Equipment Scope <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Describe your panel amperage, motor ratings, PLC requirements, or installation timeline..."
          className="mt-1.5 w-full rounded-xl border border-card-border bg-surface px-4 py-3 text-[14px] text-text-white placeholder:text-text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        />
      </div>

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3.5 text-[14px] font-bold text-canvas shadow-[0_4px_16px_var(--color-accent-glow)] transition-all hover:bg-accent-light"
      >
        Submit Engineering Inquiry →
      </button>
    </form>
  );
}

export function ContactForm() {
  return (
    <Suspense
      fallback={
        <div className="flex h-64 items-center justify-center text-text-muted">
          Loading contact form...
        </div>
      }
    >
      <ContactFormInner />
    </Suspense>
  );
}
