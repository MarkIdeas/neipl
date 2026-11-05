# Brand authority & Design System

Normative rules for the visual theme and design system.

`nandini-ux/` is the branding authority. Never invent an arbitrary color value or inline raw hex codes.

Nandini Enterprises supplies electrical panels, robotics integration, drives, and field instrumentation to heavy manufacturing and process plants — operating since 2006. The visual system pairs a modern, authoritative **Dark Midnight Canvas** with an **Industrial Emerald Green** identity.

---

## 1. Palette Specification

The palette is CSS-first, declared in `web/src/app/globals.css` within `@theme { ... }`:

### Canvas & Surfaces (Dark Theme)
* `--color-canvas`: `#090e1a` (deepest canvas background)
* `--color-surface`: `#0f1624` (elevated sections and sticky header background)
* `--color-card`: `#141c2e` (card and tile backgrounds)
* `--color-card-border`: `rgba(255, 255, 255, 0.07)` (subtle hairline borders)
* `--color-line`: `rgba(255, 255, 255, 0.08)` (section dividers)

### Brand Accent (Industrial Emerald)
* `--color-accent`: `#10b981` (primary CTA buttons, active indicators, eyebrow dots)
* `--color-accent-dark`: `#059669` (hover state for buttons and interactive cards)
* `--color-accent-light`: `#34d399` (light emerald highlights)
* `--color-accent-glow`: `rgba(16, 185, 129, 0.15)` (ambient glow on cards and hero badges)
* `--color-accent-glow-strong`: `rgba(16, 185, 129, 0.25)` (hover glow)

### Typography & Neutrals
* `--color-text-white`: `#ffffff` (primary headlines and high-contrast labels)
* `--color-text-muted`: `#94a3b8` (secondary copy and technical descriptions)
* `--color-text-subtle`: `rgba(255, 255, 255, 0.45)` (footer notes and micro-copy)

---

## 2. Zero Raw Hex Code Policy

**Never inline raw hex values in JSX/TSX components.**
* **Forbidden:** `style={{ color: '#10b981' }}` or `className="text-[#10b981]"`
* **Required:** Use semantic Tailwind v4 classes: `text-accent`, `bg-canvas`, `bg-card`, `border-line`, `text-text-muted`.

*Enforced by* `web/src/content/__tests__/brand.test.ts`.

---

## 3. Typography

* **Headlines & Interface:** **Plus Jakarta Sans** (`--font-sans`), loaded via `next/font/google`.
* **Technical Codes & Part Numbers:** **JetBrains Mono** or monospace font (`--font-mono`), used specifically for part numbers (e.g. `GA 700`, `CIMR-`, `MP3000`) and numeric metrics.

---

## 4. Visual Flourishes & Polish

* **Interactive Cards:** Hover states gently scale images (`scale-105`) and smoothly slide up descriptions over dark emerald gradient overlays.
* **Marquee Ticker:** Continuous seamless horizontal marquee track presenting certifications and partner authorisations.
* **Badges:** Pill-shaped (`rounded-full`) tags with 1px border `rgba(16, 185, 129, 0.3)` and backdrop blur.
