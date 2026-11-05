# Nandini Enterprises (Cloudflare Edition)

Marketing & catalogue site for **Nandini Enterprises** — industrial automation, electrical panels, robotics integration, and instrumentation since 2006.
Next.js 16 (App Router) + React 19 + Tailwind CSS v4 + TypeScript. Deployed to Cloudflare Pages.

Visual theme: **Industrial Dark Canvas (`#090e1a`) with Emerald Brand Accent (`#10b981`)**.

```
website-nandini-automation/nandini-automation/
├── docs/rules/             the normative architecture instructions (imported below)
├── nandini-ux/             READ-ONLY design handoff source of truth
├── .github/workflows/      Cloudflare Pages automated CI/CD workflow
├── web/                    the Next.js app — all production code lives here
└── CLAUDE.md               this file — the hub
```

Work in `web/`. Never edit anything under `nandini-ux/` — it is the design source of truth.

---

## The architecture instructions

Five normative rule files, imported below:

@docs/rules/architecture.md
@docs/rules/brand.md
@docs/rules/responsive.md
@docs/rules/components.md
@docs/rules/git.md

| File | Answers |
|---|---|
| `architecture.md` | Which layer does this belong in? What may import what? |
| `brand.md` | What are the Dark & Emerald palette tokens? (No raw hex) |
| `components.md` | Extract or duplicate? Vector SVGs vs raw emojis |
| `responsive.md` | Fluid layout rules (zero dual-DOM duplicates, auto-fit grids) |
| `git.md` | Definition of Done & Cloudflare Pages CI/CD gates |

---

## Non-negotiables

1. **`nandini-ux/` & `docs/rules/brand.md` are the branding authorities:**
   Tokens live in `@theme { ... }` in `web/src/app/globals.css`. Never inline a raw hex value in a component.
2. **Tailwind CSS v4 (CSS-first):**
   There is no `tailwind.config.js`. Tokens are declared in `@theme` in `globals.css`.
3. **One codebase, single fluid DOM tree:**
   No duplicate `.hidden-mobile` / `.show-mobile` trees. Fluid grids and flex-wrap.
4. **Commercial claims in `content/` are factual:**
   Founded in 2006 (20 years experience); 15 checkable CPRI certificate scan links; exact OEM part numbers (`GA 700`, `CIMR-`, `MP3000`). Never invent testimonials or add placeholder text.
5. **Unit & contract tests are mandatory:**
   Vitest + Testing Library. Run from `web/`:
   ```bash
   npm test
   ```
6. **SEO & accessibility:**
   Single `<h1>` per route, absolute canonical tags, JSON-LD `Organization` schema, dynamic `sitemap.ts`.

---

## Commands

Run all commands from `web/`:

```bash
cd web
npm run dev         # start local dev server
npm test            # run vitest test suite
npm run lint        # eslint
npm run build       # build Next.js static export (outputs to web/out/)
```
