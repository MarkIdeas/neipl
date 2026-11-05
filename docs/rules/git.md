# Git workflow, quality gates, and Definition of Done

Normative rules for branching, commits, and quality assurance.

## Branching Model

* **`main`**: Production branch deployed to Cloudflare Pages.
* Feature branches cut from `main` and merged via PR.

## Definition of Done (DoD)

A change or feature is **not done** until all of the following hold:

1. **`cd web && npm test`** passes completely (zero test failures across all test suites).
2. **`cd web && npm run lint`** is clean (zero ESLint errors or warnings).
3. **`cd web && npm run build`** succeeds cleanly (generates static export in `web/out/`).
4. Brand values trace to `docs/rules/brand.md` — no raw inline hex codes or inline styles.
5. All 7 public routes maintain their SEO contract: exactly one stable `<h1>`, absolute canonical tag, and registration in `sitemap.ts`.
6. Commercial claims in `content/` match reality (Founded 2006 = 20 years; 15 valid CPRI test certificate links).

## CI/CD Pipeline (Cloudflare Pages)

The `.github/workflows/deploy.yml` pipeline automatically triggers on push to `main`:
1. Checks out repository.
2. Installs dependencies in `web/`.
3. Runs the full test suite (`npm test`).
4. Runs the linter (`npm run lint`).
5. Builds the production static export (`npm run build`).
6. Deploys the static `web/out` directory to Cloudflare Pages via `cloudflare/wrangler-action@v3`.
