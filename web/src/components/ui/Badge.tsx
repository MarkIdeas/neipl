import React from "react";
import { cn } from "@/lib/brand";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-[13px] font-semibold text-accent backdrop-blur-md",
        className
      )}
    >
      {children}
    </span>
  );
}
