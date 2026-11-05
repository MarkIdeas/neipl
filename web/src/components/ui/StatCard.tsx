"use client";

import React from "react";
import { useCountUp } from "@/hooks/useCountUp";
import { cn } from "@/lib/brand";

interface StatCardProps {
  target: number;
  suffix?: string;
  label: string;
  sub: string;
  className?: string;
}

export function StatCard({
  target,
  suffix = "",
  label,
  sub,
  className,
}: StatCardProps) {
  const { display, ref } = useCountUp(target, 1500, suffix);

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center p-6 text-center sm:p-8",
        className
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-2xl"
      />
      <span
        ref={ref}
        className="font-mono text-[clamp(2.25rem,4vw,3.25rem)] font-extrabold tracking-tight text-accent"
      >
        {display}
      </span>
      <div className="mt-2 text-[15px] font-bold text-text-white">{label}</div>
      <div className="mt-1 text-[13px] text-text-muted">{sub}</div>
    </div>
  );
}
