# Fery's portfolio

Next.js static export for https://daefery.github.io/. The production source is **`master/fyp`**. The repository's `main` branch contains an older site.

## Local development

```sh
npm ci
npm run dev
```

Open http://localhost:7007. Node 20.9+ is required; CI uses Node 20.

## Validate the production export

```sh
npm run build
npm run typecheck
npx playwright install chromium
npm test
```

Tests start a local Python 3 static server on port 7008 and exercise the exported `out/` files. They cover mobile navigation and layouts, no-JavaScript readability, the verification illustration, page metadata, structured data, internal links, crawler policy, sitemap URLs, the CV and product downloads.

To use an existing Chrome installation:

```sh
PLAYWRIGHT_CHROMIUM_EXECUTABLE=/usr/bin/google-chrome npm test
```

## Content and design

- `src/app/page.tsx`: approved design-first homepage, selected work, research and products.
- `src/app/portfolio.css`: dark purple/cyan design, scoped to `.portfolio` so existing routes retain their styles.
- `src/components/PortfolioNav.tsx`: desktop and native, keyboard-accessible mobile navigation.
- `src/components/VerificationConsole.tsx`: illustrative task verification, with pause/replay and reduced-motion support. This is not a live execution log.
- `src/app/case-studies/marketing-agent/page.tsx`: public design overview without internal prompts, code or operational metrics.
- `src/lib/site.ts`: shared canonical, Open Graph and Twitter metadata, plus Person/WebSite structured data.
- `src/components/StructuredData.tsx`: safely serializes JSON-LD.
- `public/assets/fery-yundara-putera-cv.pdf`: current one-page CV, retaining the existing public URL.
- `public/assets/og-portfolio.png`: 1200 × 630 social preview.

The accepted research entry is a non-archival Agenthon workshop poster at NeurIPS 2026. Do not describe it as a NeurIPS main-track publication or publish the paper/code without separate approval.

## Crawlers and existing URLs

Keep `public/robots.txt`, `public/sitemap.xml`, `public/llms.txt` and the Google verification HTML file. Existing crawler permissions are retained. Update sitemap modification dates only when the relevant page changes; do not stamp all URLs on every build.

Vacua and Qadha have standalone landing pages under `public/products/`. Preserve their URLs, assets and downloads. Plareon and Zokuu use generated Next.js routes. Dynamic route parameters must be awaited on Next.js 16.

Content remains visible without animation JavaScript. Existing archive pages and their links remain available. The blog still uses its existing external Medium RSS service.

## Deployment

`.github/workflows/deploy-fyp.yml` builds and runs browser checks before deployment. Pull requests targeting `master` run checks without publishing. A push to `master` affecting `fyp/` or the workflow publishes `fyp/out` to `gh-pages`; GitHub Pages then serves that branch. Manual runs publish only when run on `master`.

Do not edit generated `gh-pages` content directly. Check both the export workflow and the subsequent GitHub Pages deployment, then verify the live homepage and crawler files. To roll back, revert the source commit on `master` and let the same workflow publish the previous version.
