# Design: cv/ → Next.js Static Export (`fyp/`)

**Date:** 2026-05-17  
**Goal:** Convert the existing 5-page vanilla HTML/CSS/jQuery portfolio (`cv/`) into a Next.js App Router project under `fyp/`, deployed to GitHub Pages at `username.github.io/fyp`.  
**Constraint:** Zero visual, color, animation, or behavior changes.  
**Approach:** npm-managed CSS libraries + React hooks replace jQuery (no jQuery runtime).

---

## 1. Project Structure

```
fyp/
├── next.config.ts
├── package.json
├── tsconfig.json
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   └── assets/
│       ├── img/                   (copied from cv/assets/img/)
│       ├── fonts/                 (copied from cv/assets/fonts/)
│       ├── google-fonts.css       (copied from cv/assets/css/google-fonts.css)
│       └── fery-yundara-putera-cv.pdf
├── src/
│   ├── app/
│   │   ├── layout.tsx             root layout: html shell, Nav, ScrollToTop, WowObserver
│   │   ├── globals.css            bootstrap + fontawesome + animate.css + main.css content
│   │   ├── page.tsx               home (index.html)
│   │   ├── resume/page.tsx
│   │   ├── works/page.tsx
│   │   ├── blog/page.tsx
│   │   └── contact/page.tsx
│   ├── components/
│   │   ├── Nav.tsx                dock nav, usePathname active state, mobile toggle
│   │   ├── ScrollToTop.tsx        scroll-to-top button, scroll listener
│   │   ├── WowObserver.tsx        IntersectionObserver → adds animate__animated to .wow
│   │   └── ProjectGrid.tsx        filter state + isotope-grid flex layout
│   └── hooks/
│       └── useWow.ts              reusable IntersectionObserver hook (used by WowObserver)
```

---

## 2. Next.js Config

```ts
// next.config.ts
const nextConfig = {
  output: 'export',
  basePath: '/fyp',
  images: { unoptimized: true },
}
export default nextConfig
```

- `output: 'export'` → generates static `out/` directory
- `basePath: '/fyp'` → all internal links and `_next/` assets prefixed automatically
- `images: { unoptimized: true }` → required for static export (no Next.js image optimization server)

---

## 3. Dependencies

```json
{
  "dependencies": {
    "next": "^15",
    "react": "^19",
    "react-dom": "^19"
  },
  "devDependencies": {
    "bootstrap": "^5",
    "@fortawesome/fontawesome-free": "^6",
    "animate.css": "^4",
    "typescript": "^5",
    "@types/react": "^19",
    "@types/node": "^22"
  }
}
```

Bootstrap JS (`bootstrap/dist/js/bootstrap.bundle.min.js`) imported in a `'use client'` component for any dropdown/collapse behavior.

---

## 4. CSS Setup

`src/app/globals.css`:
```css
@import 'bootstrap/dist/css/bootstrap.min.css';
@import '@fortawesome/fontawesome-free/css/all.min.css';
@import 'animate.css';

/* main.css content pasted here verbatim */
```

Google Fonts: served locally via `public/assets/google-fonts.css` + `public/assets/fonts/`. Referenced via `<link>` in `layout.tsx` metadata `links` array (or `<link>` tag in the HTML head).

The `.isotope-grid` gets one addition in globals.css:
```css
.isotope-grid {
  display: flex;
  flex-wrap: wrap;
}
```
This replaces Isotope's JS-driven layout (Isotope sets inline `position: absolute` — with `display: flex` the existing `width: 33.333%` item sizing works identically).

---

## 5. Root Layout (`layout.tsx`)

Server component. Responsibilities:
- Sets `<html lang="en" className="dark-theme">` — replaces the inline `<script>` in current HTML heads
- Imports `globals.css`
- Renders `<Nav />`, `<WowObserver />`, `<ScrollToTop />`, then `{children}`
- Includes `<link rel="stylesheet" href="/fyp/assets/google-fonts.css" />` via metadata or direct JSX

---

## 6. Components

### `Nav.tsx` (`'use client'`)
- Dock nav HTML → JSX, exact same markup
- `usePathname()` from `next/navigation` determines active dock item
- `useState<boolean>` for mobile menu open/closed (replaces jQuery `.menu-toggle` click)
- `<Link>` from `next/link` for all dock items (auto-prefixes basePath)

### `ScrollToTop.tsx` (`'use client'`)
- Same HTML/classes as current scroll-top dock item
- `useState<boolean> visible` — `useEffect` adds scroll listener, sets visible when `scrollY > 300`
- Click: `window.scrollTo({ top: 0, behavior: 'smooth' })`

### `WowObserver.tsx` (`'use client'`)
- `useEffect` after mount: `querySelectorAll('.wow')` → creates `IntersectionObserver`
- On intersect entry: adds `animate__animated` class, reads `data-wow-delay` → sets inline `animationDelay`
- Unobserves element after first trigger
- Handles `data-wow-offset` if present (rootMargin on observer)
- Replaces `wow.min.js` entirely

### `ProjectGrid.tsx` (`'use client'`)
- Renders the full isotope grid + filter buttons from `works/page.tsx`
- `useState<string>('*')` for `activeFilter`
- Item visibility: `activeFilter === '*'` or item's className includes the filter value (without `.` prefix)
- Featured row state: mirrored logic from `main.js` — show all on `*`, show matching on category filter, hide if no match
- CSS: `opacity: 0; pointer-events: none` for hidden items (smooth transition), or `display: none`
- Filter button active class set via state

---

## 7. Page Conversions

| Page | Interactivity | Client? |
|------|--------------|---------|
| `page.tsx` (home) | WOW only (handled globally) | Server |
| `resume/page.tsx` | WOW only | Server |
| `works/page.tsx` | ProjectGrid component | Server (ProjectGrid is client) |
| `blog/page.tsx` | Load-more button | `'use client'` |
| `contact/page.tsx` | Form submit simulation | `'use client'` |

**blog/page.tsx** load-more logic:
- `useState<boolean> moreLoaded`
- Hidden items rendered in DOM but `className` includes `d-none` until button clicked
- On click: staggered `setTimeout` loop removes `d-none` + adds `animate__animated animate__fadeInUp` per item (matches current jQuery behavior)
- Button fades out after all items revealed

**contact/page.tsx** form logic:
- `useState<'idle'|'submitting'|'submitted'>` state machine
- `submitting`: button shows "Transmitting..." + spinner, disabled
- After 2s: `submitted` — button shows "Data Received" + check icon
- After 3s more: back to `idle`, form reset

---

## 8. Asset Paths

All `<img src>` in JSX use paths starting with `/fyp/assets/img/...` (hardcoded basePath prefix for static assets in `public/`).

Alternatively, define:
```ts
// src/lib/basePath.ts
export const BASE_PATH = process.env.NODE_ENV === 'production' ? '/fyp' : ''
```
Use `${BASE_PATH}/assets/img/...` in all img src attributes.

PDF link: `href={`${BASE_PATH}/assets/fery-yundara-putera-cv.pdf`}`

---

## 9. GitHub Pages Deployment

`.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [master]
jobs:
  deploy:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: fyp
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          cache-dependency-path: fyp/package-lock.json
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: fyp/out
```

`peaceiris/actions-gh-pages` automatically creates `.nojekyll` in the published dir, preventing GitHub Pages from ignoring `_next/` folder.

---

## 10. Out of Scope

- No content changes (all text, images, copy stays identical)
- No new pages or sections
- No SEO improvements beyond what already exists
- No TypeScript strict mode enforcement (basic types only)
- `cv/` folder stays untouched
