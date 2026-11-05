import React from "react";
import { cn } from "@/lib/brand";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  center?: boolean;
}

export function Eyebrow({ children, className, center = false }: EyebrowProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.14em] uppercase text-accent",
        center && "justify-center",
        className
      )}
    >
      <span
        className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)]"
        aria-hidden="true"
      />
      {children}
    </div>
  );
}
