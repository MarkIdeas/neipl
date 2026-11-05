import React from "react";
import Link from "next/link";
import { services } from "@/content/pages";
import { ButtonLink, Container, Eyebrow, SectionHeading } from "@/components/ui";

export function ServicesExplorer() {
  return (
    <section className="border-t border-line bg-canvas py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Sticky Left Navigator */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 flex flex-col gap-5">
              <Eyebrow>Our Services</Eyebrow>
              <SectionHeading>
                What We
                <br />
                Deliver
              </SectionHeading>
              <p className="text-[15px] leading-relaxed text-text-muted">
                From initial electrical architecture to on-site testing and life-cycle AMC support.
              </p>

              <div className="mt-4 flex flex-col gap-1">
                {services.map((svc) => (
                  <Link
                    key={svc.anchor}
                    href={`#svc-${svc.anchor}`}
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-[14px] font-medium text-text-muted transition-colors hover:bg-white/5 hover:text-accent"
                  >
                    <span className="font-mono text-[12px] font-bold text-accent/70">
                      {svc.n}
                    </span>
                    <span>{svc.title}</span>
                  </Link>
                ))}
              </div>

              <div className="pt-2">
                <ButtonLink href="/services" variant="primary" size="sm">
                  View All Services →
                </ButtonLink>
              </div>
            </div>
          </div>

          {/* Right Services List */}
          <div className="divide-y divide-line lg:col-span-8">
            {services.map((svc, idx) => (
              <div
                key={svc.anchor}
                id={`svc-${svc.anchor}`}
                className={idx === 0 ? "pb-12" : "py-12"}
              >
                <span className="font-mono text-[13px] font-bold text-accent">
                  {svc.n}
                </span>
                <h3 className="mt-2 text-[26px] font-bold text-text-white">
                  {svc.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-text-muted">
                  {svc.desc}
                </p>
                <div className="mt-6">
                  <ButtonLink
                    href={`/services#${svc.anchor}`}
                    variant="outline-accent"
                    size="sm"
                  >
                    Enquire Now →
                  </ButtonLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
