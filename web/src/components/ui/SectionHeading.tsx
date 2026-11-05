import React from "react";
import { cn } from "@/lib/brand";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  level?: "h1" | "h2" | "h3";
  tone?: "light" | "dark";
}

export function SectionHeading({
  children,
  className,
  level = "h2",
  tone,
  ...props
}: SectionHeadingProps) {
  const Component = level;
  const isDarkText =
    tone === "dark" ||
    Boolean(
      className &&
        (className.includes("text-slate-") ||
          className.includes("text-gray-") ||
          className.includes("text-black"))
    );

  const colorClass = isDarkText ? "text-slate-900" : "text-text-white";

  const styles = {
    h1: `text-[clamp(2.5rem,5.5vw,5rem)] font-bold tracking-[-0.03em] leading-[1.1] ${colorClass}`,
    h2: `text-[clamp(1.85rem,3.5vw,2.75rem)] font-bold tracking-[-0.02em] leading-[1.2] ${colorClass}`,
    h3: `text-[clamp(1.25rem,2vw,1.65rem)] font-bold tracking-[-0.01em] leading-[1.3] ${colorClass}`,
  }[level];

  return (
    <Component className={cn(styles, className)} {...props}>
      {children}
    </Component>
  );
}
