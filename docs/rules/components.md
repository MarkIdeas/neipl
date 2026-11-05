# Reusable modules & Component Architecture

Normative rules for component design, reuse, and boundaries.

## Extract on the second use, not the first

Repeated visual patterns live in `web/src/components/ui/` and are **imported, never re-typed**, exported from `ui/index.ts`.
The recurring visual grammar:
* `<Container>`: 1320px responsive container with 2rem lateral padding.
* `<Eyebrow>`: Section category indicator with pulsing emerald dot (`<span className="dot" />`).
* `<SectionHeading>`: Semantic `<h2>` with dark-theme styling.
* `<ButtonLink>`: Primary emerald button and ghost button variants.
* `<Badge>`: Verified pill badge (`✓ CPRI Certified`, `✓ A-Grade License`).
* `<StatCard>`: Metric counter with animated client number transition.

## Share the behaviour, not the markup

Two things that look similar are not one component if their purpose diverges:
* **Capabilities Card (Home):** Interactive hover-revealing card with background image and gradient overlay.
* **Catalogue Card (Products):** Engineering tile displaying part numbers, specifications, and manufacturer details.

Share behavior through React hooks (e.g. `useCountUp`, `useScrollReveal`) rather than wrapping fundamentally different UI treatments behind fragile conditional `variant` props.

## Vector SVG Icons (No Emojis)

All icons live in `web/src/components/icons/`.
* One export per icon, clean vector SVG, using `currentColor` for strokes and fills.
* **Never use raw emojis** (`⚡`, `🤖`, `⚙️`, `🏭`, `📊`, `🎪`) in production B2B procurement elements. Emojis render inconsistently across Windows, Linux, Android, and macOS. Use bespoke, crisp SVG icons.

## Third-party widgets & Interactive Leaves

* All forms and interactive elements must push `"use client"` down to the smallest possible leaf component.
* The quote form on `/contact` is the primary conversion path; it must remain fully functional without external tracker bloat.
