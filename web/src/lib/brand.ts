/**
 * Canonical brand color tokens matching the Emerald & Dark Midnight theme.
 * Enforced against globals.css by brand.test.ts.
 */
export const brandColors = {
  canvas: "#090e1a",
  surface: "#0f1624",
  card: "#141c2e",
  accent: "#10b981",
  accentDark: "#059669",
  accentLight: "#34d399",
  textWhite: "#ffffff",
  textMuted: "#94a3b8",
} as const;

/** Simple className joiner for clean conditional utility merging */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
