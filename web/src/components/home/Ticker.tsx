import React from "react";
import { tickerItems } from "@/content/site";

export function Ticker() {
  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border-y border-line bg-surface py-3.5"
    >
      <div className="marquee-track flex items-center">
        {/* Double the list to create a seamless infinite loop */}
        {[...tickerItems, ...tickerItems].map((item, idx) => (
          <span
            key={`${item}-${idx}`}
            className="inline-flex items-center gap-6 px-6 text-[12px] font-bold tracking-[0.15em] uppercase text-accent whitespace-nowrap"
          >
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-accent/40" />
          </span>
        ))}
      </div>
    </div>
  );
}
