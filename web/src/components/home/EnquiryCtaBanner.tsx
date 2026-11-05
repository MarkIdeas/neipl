import React from "react";
import Link from "next/link";
import { company } from "@/content/site";
import { Container, Eyebrow } from "@/components/ui";
import { PhoneIcon } from "@/components/icons";

export function EnquiryCtaBanner() {
  return (
    <section className="bg-white py-20 sm:py-28 border-b border-slate-200">
      <Container>
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 px-8 py-16 text-center shadow-lg sm:px-14 sm:py-20">
          <Eyebrow center>Engineering Consultation</Eyebrow>

          <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight text-slate-900">
            Ready to Upgrade or Commission <br />
            <span className="text-amber-500">Your Plant Systems?</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-slate-600">
            Speak directly with our senior applications engineering team in Jeedimetla, Hyderabad for technical sizing, single-line diagrams, and formal bill-of-materials quotations.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-7 py-3.5 text-[15px] font-bold text-white shadow-md transition-all hover:bg-amber-600 cursor-pointer"
            >
              Request an Engineering Quote →
            </Link>
            <a
              href={`tel:${company.mobile.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-[15px] font-bold text-slate-800 shadow-xs transition-all hover:bg-slate-100"
            >
              <PhoneIcon size={16} className="text-amber-500" />
              <span>Call {company.mobile}</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
