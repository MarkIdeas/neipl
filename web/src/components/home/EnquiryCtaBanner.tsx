import React from "react";
import Link from "next/link";
import { company } from "@/content/site";
import { Container, Eyebrow } from "@/components/ui";
import { PhoneIcon } from "@/components/icons";

export function EnquiryCtaBanner() {
  return (
    <section id="contact-cta" className="relative bg-canvas py-16 sm:py-24 border-b border-slate-800 text-white overflow-hidden">
      <Container>
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/15 bg-slate-900/90 px-8 py-12 text-center shadow-2xl backdrop-blur-xl sm:px-14 sm:py-16">
          <Eyebrow center>Engineering Consultation</Eyebrow>

          <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight text-white">
            Ready to Upgrade or Commission <br />
            <span className="text-amber-400">Your Plant Systems?</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-slate-300">
            Speak directly with our senior applications engineering team in Jeedimetla, Hyderabad for technical sizing, single-line diagrams, and formal bill-of-materials quotations.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-7 py-3.5 text-sm sm:text-[15px] font-extrabold text-slate-950 shadow-md transition-all hover:bg-amber-400 cursor-pointer"
            >
              Request an Engineering Quote →
            </Link>
            <a
              href={`tel:${company.mobile.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm sm:text-[15px] font-bold text-white shadow-xs transition-all hover:bg-white/10 hover:border-amber-400"
            >
              <PhoneIcon size={16} className="text-amber-400" />
              <span>Call {company.mobile}</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
