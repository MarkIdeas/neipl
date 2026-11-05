import React from "react";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";
import { PhoneIcon } from "@/components/icons";

export function CtaBanner() {
  return (
    <section id="cta-banner" className="border-t border-line bg-surface py-20 sm:py-28">
      <Container>
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-accent/20 bg-card px-8 py-16 text-center shadow-2xl sm:px-14 sm:py-20">
          {/* Subtle Ambient Radial Glow */}
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[100px]"
          />

          <div className="relative z-10">
            <Eyebrow center>Ready to Start?</Eyebrow>

            <h2 className="mt-4 text-[clamp(2rem,4vw,3.25rem)] font-extrabold tracking-tight text-text-white">
              Let&apos;s Automate <br />
              <span className="text-accent">Your Future</span>
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-[16px] leading-relaxed text-text-muted">
              Get in touch with our team for project consultations, product pricing and technical support.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <ButtonLink href="/contact" size="lg" variant="primary" id="cta-contact">
                Get in Touch →
              </ButtonLink>
              <ButtonLink
                href="tel:+919848810889"
                size="lg"
                variant="ghost"
                className="inline-flex items-center gap-2"
              >
                <PhoneIcon size={18} />
                <span>+91 98488 10889</span>
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
