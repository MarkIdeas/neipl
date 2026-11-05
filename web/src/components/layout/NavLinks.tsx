"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/content/site";
import { cn } from "@/lib/brand";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main navigation"
      className="flex flex-wrap items-center justify-center gap-1 sm:gap-1.5"
    >
      {nav.map((link) => {
        const isActive =
          link.href === "/"
            ? pathname === "/"
            : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "rounded-full px-3.5 py-1.5 text-[14px] font-semibold transition-all duration-200 whitespace-nowrap",
              isActive
                ? "bg-accent/15 text-accent shadow-[0_0_12px_var(--color-accent-glow)]"
                : "text-text-muted hover:bg-white/5 hover:text-text-white"
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
