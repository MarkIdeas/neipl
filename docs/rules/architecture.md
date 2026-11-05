# Module architecture

Normative rules for every agent and developer working in this repository.

## The 4-Tier Dependency DAG

Everything in `web/src/` belongs to exactly one tier in a Directed Acyclic Graph (DAG). Dependencies point **downward only** — a tier may import from tiers below it and never from tiers above. Parallel peers within Tier 2 never import each other.

```
  Tier 4: app/                 Routes, layout, metadata, robots       ← composition root
  Tier 3: components/          UI primitives, layout, page sections
            components/ui/ & icons/   Brand primitives                 ← no copy/page knowledge
            components/layout/        SiteHeader, SiteFooter
            components/<Area>/        Page sections (home, about, ...) ← isolated, no sibling imports
  Tier 2: content/ & lib/      Parallel core peers (neither imports the other)
            content/*.ts       Copy, catalogue, commercial claims     ← data only
            lib/*.ts           Pure styling/color logic               ← no React, no I/O, no copy
  Tier 1: types/               Domain types and contracts             ← imported by all, imports nothing
```

| Tier / Module | May import | Must never |
|---|---|---|
| **Tier 1: `types/`** | nothing | contain logic, JSX, default values, or runtime I/O |
| **Tier 2: `lib/`** | `types/` | import React, JSX, `@/content`, `@/components`, or perform I/O |
| **Tier 2: `content/`** | `types/` | import `@/lib`, `@/components`, `@/app`, JSX, or Tailwind class strings |
| **Tier 3: `components/ui/` & `icons/`** | `types/`, `lib/` | import `@/content` or `@/components/<Area>` — primitives must stay content-agnostic |
| **Tier 3: `components/layout/`** | `types/`, `lib/`, `ui/`, `content/` | import page sections (`components/<Area>`) |
| **Tier 3: `components/<Area>/`** | `types/`, `lib/`, `ui/`, `content/` | import sibling page areas (e.g. `home` importing `products`) |
| **Tier 4: `app/`** | everything | hold raw copy or claims that belong in `content/` |

*Enforced by* `web/src/components/__tests__/architecture.test.ts`.

## There is no server layer, and that is the point

This is a **high-performance, static-exported content and catalog site** (`output: "export"`) deployed to **Cloudflare Pages**. There is no backend database and no runtime user session. Everything renders statically from `content/`.

Nandini's catalogue consists of core equipment lines that change when the company adds a product line or an OEM partnership — an editorial data edit, not a database query.

### Quote Form & Ingestion Boundary
The one interactive user submission is the **RFQ (Request for Quotation) quote form** on `/contact`.
* **Client-Side Generation**: The form validates input on the client and constructs a structured `mailto:` payload for the user's email client, acknowledging receipt instantly with reference details.
* **Direct Fallbacks**: High-visibility direct contact options (`info@nandiniautomation.com`, direct phone numbers) are displayed alongside the form to guarantee lead capture even if a mail handler is unconfigured.
* **Zero Backend Creep (YAGNI)**: Serverless functions, third-party form webhooks, and external database ingestion are deliberately excluded to preserve zero-maintenance static reliability and eliminate security/runtime surface area.

## Alternatives Considered

| Approach | Verdict | Architectural Rationale |
|---|---|---|
| **Node.js / Edge SSR** | Rejected | Static Export delivers sub-millisecond global CDN caching, zero operational maintenance, zero server cost, and zero server-side attack surface for a read-heavy B2B industrial site. |
| **Headless CMS (Sanity, Strapi)** | Rejected | High operational complexity and external dependency. Nandini's catalogue (OEM partners, CPRI certificates) updates infrequently; TypeScript modules provide strict compile-time type checking and zero API latency. |
| **Serverless Form Webhooks / DB** | Rejected | Introduces cold-start latency, spam vulnerabilities, and webhook failure modes. Client-side `mailto:` with explicit direct contact options satisfies B2B engineering RFQ needs with zero runtime infrastructure. |

## What each layer is for

* **`types/`** — Domain TypeScript interfaces: `ProductLine`, `CatalogueItem`, `Industry`, `ServiceGroup`, `CertificateItem`.
* **`lib/`** — Pure logic and design tokens without pixels: brand color tokens (`brandColors` in `brand.ts`), class merging utility (`cn()`). No React, no I/O, no copy.
* **`content/`** — Every string a visitor reads: `site.ts` (navigation, company, partners), `catalogue.ts` (product lines and equipment part numbers), `pages.ts` (page copy, 15 CPRI certificates, services, industries).
* ⚠️ **Much of `content/` is commercial substantiation**, not marketing fluff: named client organisations, 15 CPRI certificate counts, OEM partner authorisations, founding year 2006, and equipment part numbers (`GA 700`, `MP3000`, `Sigma-7`). Treat an edit here as a factual change. `content.test.ts` pins the load-bearing claims.
* **`components/ui/`** — The repeated visual grammar (`Container`, `Eyebrow`, `ButtonLink`, `Badge`, `StatCard`). Takes props and renders; never reaches into `content/`.
* **`components/icons/`** — Hand-crafted SVG icon components representing industrial hardware and interface controls.
* **`components/layout/`** — Global structural shell (`SiteHeader.tsx`, `SiteFooter.tsx`, `MobileNav.tsx`).
* **`components/<Area>/`** — Page area sections (`home/`, `about/`, `products/`, `gallery/`, `industries/`, `services/`, `contact/`). Isolated; never imports sibling areas.
* **`app/`** — The composition root: Routes, layouts, metadata, fonts, sitemap, robots.

## Acronym Glossary

* **CPRI** — **Central Power Research Institute**: Premier autonomous testing laboratory under the Ministry of Power, Government of India. Nandini holds 15 CPRI Type Test Certificates (Short-Circuit, IP55/IP65 Ingress Protection, Temperature Rise) validating switchboard panel engineering.
* **RFQ** — **Request for Quotation**: The structured commercial specification sent by industrial procurement teams detailing automation and panel board requirements.
* **OEM** — **Original Equipment Manufacturer**: Multinational automation technology providers (e.g. Yaskawa Electric, Schneider Electric) for which Nandini operates as an authorized systems integrator and channel partner.

## Server by default

All page routes and layouts are **React Server Components** (`RSC`). Add `"use client"` only for state, effects, or DOM events — and push it to the **smallest leaf island** that needs it (e.g. `NavLinks.tsx`, `useCountUp` hook, `GalleryFilter.tsx`) rather than marking an entire page.

## The routes

| Route | Page |
|---|---|
| `/` | Home — Industrial Automation & Electrical Solutions |
| `/products` | 6 Product Lines & Equipment Catalogue |
| `/industries` | 13 Industry Verticals |
| `/services` | Turnkey Engineering & Automation Services |
| `/about` | Company Background, Leadership & OEM Partnerships (Since 2006) |
| `/gallery` | Filterable Project Installations & Trade Exhibitions |
| `/contact` | Request a Quote & RFQ Specification |
