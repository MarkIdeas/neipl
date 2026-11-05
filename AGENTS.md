# Agent Instructions — Nandini Enterprises (Cloudflare Edition)

1. **Monorepo Directory Isolation:**
   All web application code lives exclusively in `web/`. Never create source files at the repository root.
   `docs/rules/` contains the normative rules.
   `nandini-ux/` is the read-only design source of truth.

2. **Run All Commands in `web/`:**
   Always `cd web` before running `npm test`, `npm run dev`, `npm run lint`, or `npm run build`.

3. **Adhere to the Rulebooks:**
   Read and obey the 5 files in `docs/rules/`:
   - `docs/rules/architecture.md`
   - `docs/rules/brand.md`
   - `docs/rules/components.md`
   - `docs/rules/responsive.md`
   - `docs/rules/git.md`

4. **Definition of Done:**
   Before considering any task done, ensure:
   `cd web && npm test && npm run lint && npm run build` all pass cleanly.
