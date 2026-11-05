import React from "react";
import Link from "next/link";
import { cn } from "@/lib/brand";

interface ButtonLinkProps {
  href: string;
  id?: string;
  target?: string;
  rel?: string;
  variant?: "primary" | "ghost" | "outline-accent";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
}

export function ButtonLink({
  href,
  id,
  target,
  rel,
  variant = "primary",
  size = "md",
  className,
  children,
}: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-bold transition-all duration-200 cursor-pointer text-center select-none";

  const variants = {
    primary:
      "bg-accent text-canvas hover:bg-accent-dark hover:shadow-[0_0_24px_var(--color-accent-glow)] border border-accent",
    ghost:
      "bg-white/5 text-text-white hover:bg-white/10 hover:text-white border border-white/15",
    "outline-accent":
      "bg-transparent text-accent border border-accent/40 hover:bg-accent/10 hover:border-accent",
  }[variant];

  const sizes = {
    sm: "h-9 px-3.5 text-[13px]",
    md: "h-11 px-5 text-[14px]",
    lg: "h-13 px-7 text-[16px]",
  }[size];

  return (
    <Link
      href={href}
      id={id}
      target={target}
      rel={rel}
      className={cn(base, variants, sizes, className)}
    >
      {children}
    </Link>
  );
}
