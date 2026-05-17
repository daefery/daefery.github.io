# FYP Next.js Conversion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the 5-page vanilla HTML/CSS/jQuery portfolio in `cv/` into a Next.js 15 App Router project at `fyp/`, deployed to GitHub Pages at `username.github.io/fyp`.

**Architecture:** App Router with `output: 'export'` for static generation. npm-managed CSS (bootstrap, fontawesome, animate.css). jQuery replaced by React hooks: WOW.js → IntersectionObserver, Isotope → React filter state + CSS flex, scroll-to-top → useState/useEffect. Blog page fetches Medium RSS client-side. All content identical to `cv/` source.

**Tech Stack:** Next.js 15, React 19, TypeScript, Bootstrap 5, @fortawesome/fontawesome-free 6, animate.css 4, Node 20

---

## File Map

| File | Responsibility |
|------|---------------|
| `fyp/next.config.ts` | output:export, basePath:/fyp, images.unoptimized |
| `fyp/src/lib/basePath.ts` | Exports `BASE_PATH` constant for public asset paths |
| `fyp/src/app/globals.css` | @import bootstrap + fontawesome + animate.css + main.css content verbatim |
| `fyp/src/app/layout.tsx` | HTML shell (dark-theme class), global CSS, Nav, WowObserver, ScrollToTop, BootstrapClient |
| `fyp/src/components/BootstrapClient.tsx` | 'use client' — imports bootstrap JS bundle |
| `fyp/src/hooks/useWow.ts` | IntersectionObserver hook: finds .wow elements, adds animate__animated + delay on intersect |
| `fyp/src/components/WowObserver.tsx` | 'use client' — mounts useWow hook, renders nothing |
| `fyp/src/components/Nav.tsx` | 'use client' — dock nav, usePathname active state, mobile menu toggle |
| `fyp/src/components/ScrollToTop.tsx` | 'use client' — scroll-to-top dock button, visible when scrollY > 300 |
| `fyp/src/components/ProjectGrid.tsx` | 'use client' — isotope grid + filter buttons, React filter state, featured row logic |
| `fyp/src/app/page.tsx` | Home page (server component), converts index.html |
| `fyp/src/app/resume/page.tsx` | Resume page (server component), converts resume.html |
| `fyp/src/app/works/page.tsx` | Works page (server component), renders ProjectGrid + all modals |
| `fyp/src/app/blog/page.tsx` | 'use client' — fetches Medium RSS, renders blog cards |
| `fyp/src/app/contact/page.tsx` | Contact page (server component), converts contact.html |
| `fyp/public/assets/img/` | Copied from cv/assets/img/ |
| `fyp/public/assets/fonts/` | Copied from cv/assets/fonts/ |
| `fyp/public/assets/google-fonts.css` | Copied from cv/assets/css/google-fonts.css |
| `fyp/public/assets/fery-yundara-putera-cv.pdf` | Copied from cv/assets/ |
| `fyp/.github/workflows/deploy.yml` | GH Actions: build → deploy out/ to gh-pages branch |

---

## Task 1: Scaffold Next.js project

**Files:**
- Create: `fyp/` (directory)
- Create: `fyp/next.config.ts`

- [ ] **Step 1: Scaffold with create-next-app**

Run from `lomba/`:
```bash
npx create-next-app@latest fyp --typescript --app --src-dir --no-tailwind --no-eslint --import-alias "@/*"
```
When prompted: choose defaults (no Turbopack if asked, just press Enter).

Expected output ends with: `Success! Created fyp at .../lomba/fyp`

- [ ] **Step 2: Verify scaffold**

```bash
ls fyp/src/app/
```
Expected: `favicon.ico  globals.css  layout.tsx  page.tsx`

- [ ] **Step 3: Replace next.config.ts**

```ts
// fyp/next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/fyp',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
```

Note: `trailingSlash: true` ensures `/resume/` paths work on GitHub Pages (which serves `resume/index.html`).

- [ ] **Step 4: Install CSS npm packages**

```bash
cd fyp && npm install bootstrap @fortawesome/fontawesome-free animate.css
```

Expected: packages appear in `package.json` dependencies.

- [ ] **Step 5: Commit**

```bash
git add fyp/
git commit -m "feat(fyp): scaffold Next.js 15 app with static export config"
```

---

## Task 2: Copy public assets

**Files:**
- Create: `fyp/public/assets/img/` (from cv/assets/img/)
- Create: `fyp/public/assets/fonts/` (from cv/assets/fonts/)
- Create: `fyp/public/assets/google-fonts.css`
- Create: `fyp/public/assets/fery-yundara-putera-cv.pdf`

- [ ] **Step 1: Copy all public assets**

Run from `lomba/`:
```bash
mkdir -p fyp/public/assets
cp -r cv/assets/img fyp/public/assets/img
cp -r cv/assets/fonts fyp/public/assets/fonts
cp cv/assets/css/google-fonts.css fyp/public/assets/google-fonts.css
cp cv/assets/fery-yundara-putera-cv.pdf fyp/public/assets/fery-yundara-putera-cv.pdf
```

- [ ] **Step 2: Verify**

```bash
ls fyp/public/assets/img/ | wc -l
```
Expected: `33` (number of image files including posts/ subdirectory entries)

```bash
ls fyp/public/assets/fonts/
```
Expected: 8 font files (fa-brands, fa-regular, fa-solid, fa-v4compatibility × .ttf and .woff2)

- [ ] **Step 3: Commit**

```bash
git add fyp/public/
git commit -m "feat(fyp): copy public assets (images, fonts, PDF, google-fonts)"
```

---

## Task 3: basePath helper + globals.css + main.css

**Files:**
- Create: `fyp/src/lib/basePath.ts`
- Modify: `fyp/src/app/globals.css`

- [ ] **Step 1: Create basePath helper**

```ts
// fyp/src/lib/basePath.ts
const BASE_PATH = process.env.NODE_ENV === 'production' ? '/fyp' : ''
export default BASE_PATH
```

This ensures `<img src={`${BASE_PATH}/assets/img/foo.webp`}>` works both in `npm run dev` (no prefix) and in the GitHub Pages build (`/fyp/assets/...`).

- [ ] **Step 2: Write globals.css header (CSS library imports)**

```css
/* fyp/src/app/globals.css */
@import 'bootstrap/dist/css/bootstrap.min.css';
@import '@fortawesome/fontawesome-free/css/all.min.css';
@import 'animate.css';

/* Google fonts — served from public/assets/fonts/ */
/* Loaded via <link> in layout.tsx head */

/* main.css — paste entire contents of cv/assets/css/main.css below this line */
```

- [ ] **Step 3: Append main.css content**

Open `cv/assets/css/main.css` and copy its entire content. Paste it at the bottom of `fyp/src/app/globals.css` after the comment line above.

Then add this override directly after the `.isotope-grid` rule block (around the line `.isotope-grid { width: 100%; margin: 0 -12px; }`):

```css
/* Next.js: Isotope JS removed — use flex layout instead */
.isotope-grid {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}
```

- [ ] **Step 4: Commit**

```bash
git add fyp/src/lib/basePath.ts fyp/src/app/globals.css
git commit -m "feat(fyp): globals.css with bootstrap/fontawesome/animate + main.css + basePath helper"
```

---

## Task 4: BootstrapClient + WowObserver components

**Files:**
- Create: `fyp/src/components/BootstrapClient.tsx`
- Create: `fyp/src/hooks/useWow.ts`
- Create: `fyp/src/components/WowObserver.tsx`

- [ ] **Step 1: Create BootstrapClient**

```tsx
// fyp/src/components/BootstrapClient.tsx
'use client'

import { useEffect } from 'react'

export default function BootstrapClient() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
  }, [])
  return null
}
```

Bootstrap JS must be imported client-side (it accesses `window`). This component loads it once after mount.

- [ ] **Step 2: Create useWow hook**

```ts
// fyp/src/hooks/useWow.ts
import { useEffect } from 'react'

export default function useWow() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.wow')
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          const delay = el.dataset.wowDelay ?? '0s'
          el.style.animationDelay = delay
          el.classList.add('animate__animated')
          observer.unobserve(el)
        })
      },
      { rootMargin: '0px 0px -100px 0px' }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
```

The `-100px` rootMargin matches WOW.js default `offset: 100`. Elements with class `wow` get `animate__animated` added when they scroll into view. `data-wow-delay` sets the CSS `animation-delay`.

- [ ] **Step 3: Create WowObserver component**

```tsx
// fyp/src/components/WowObserver.tsx
'use client'

import useWow from '@/hooks/useWow'

export default function WowObserver() {
  useWow()
  return null
}
```

- [ ] **Step 4: Commit**

```bash
git add fyp/src/components/BootstrapClient.tsx fyp/src/hooks/useWow.ts fyp/src/components/WowObserver.tsx
git commit -m "feat(fyp): BootstrapClient + WowObserver (IntersectionObserver replaces wow.js)"
```

---

## Task 5: Nav + ScrollToTop components

**Files:**
- Create: `fyp/src/components/Nav.tsx`
- Create: `fyp/src/components/ScrollToTop.tsx`

- [ ] **Step 1: Create Nav component**

```tsx
// fyp/src/components/Nav.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', icon: 'fa-house-user', label: 'Home' },
  { href: '/resume', icon: 'fa-file-invoice', label: 'Resume' },
  { href: '/works', icon: 'fa-briefcase', label: 'Projects' },
  { href: '/blog', icon: 'fa-bolt', label: 'Feed' },
  { href: '/contact', icon: 'fa-envelope', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <div className="nav-container animate__animated animate__fadeInUp">
      <nav className="nav-dock">
        {navItems.map(({ href, icon, label }) => {
          const baseless = pathname.replace('/fyp', '') || '/'
          const isActive = baseless === href
          return (
            <Link key={href} href={href} className={`dock-item${isActive ? ' active' : ''}`}>
              <i className={`fa-solid ${icon}`}></i>
              <span>{label}</span>
            </Link>
          )
        })}
        <ScrollTopDockItem />
      </nav>
    </div>
  )
}

function ScrollTopDockItem() {
  return (
    <a href="#" className="dock-item scroll-top-btn" id="scrollTopBtnNav" aria-label="Back to top">
      <i className="fa-solid fa-chevron-up"></i>
      <span>Top</span>
    </a>
  )
}
```

Note: `usePathname()` in Next.js App Router with `basePath` set returns the path *without* the basePath prefix (e.g., `/resume` not `/fyp/resume`). So direct comparison works.

- [ ] **Step 2: Create ScrollToTop component**

```tsx
// fyp/src/components/ScrollToTop.tsx
'use client'

import { useEffect, useState } from 'react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <a
      href="#"
      className={`dock-item scroll-top-btn${visible ? ' visible' : ''}`}
      id="scrollTopBtn"
      aria-label="Back to top"
      onClick={handleClick}
    >
      <i className="fa-solid fa-chevron-up"></i>
      <span>Top</span>
    </a>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add fyp/src/components/Nav.tsx fyp/src/components/ScrollToTop.tsx
git commit -m "feat(fyp): Nav (usePathname active) + ScrollToTop components"
```

---

## Task 6: Root layout

**Files:**
- Modify: `fyp/src/app/layout.tsx`
- Delete: `fyp/src/app/page.tsx` (default scaffold content — will be replaced in Task 8)

- [ ] **Step 1: Replace layout.tsx**

```tsx
// fyp/src/app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import ScrollToTop from '@/components/ScrollToTop'
import WowObserver from '@/components/WowObserver'
import BootstrapClient from '@/components/BootstrapClient'
import BASE_PATH from '@/lib/basePath'

export const metadata: Metadata = {
  icons: {
    icon: `${BASE_PATH}/assets/img/favicon.svg`,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark-theme">
      <head>
        <link rel="stylesheet" href={`${BASE_PATH}/assets/google-fonts.css`} />
      </head>
      <body>
        <Nav />
        <WowObserver />
        <BootstrapClient />
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}
```

- [ ] **Step 2: Remove scaffold default page content**

Delete `fyp/src/app/page.tsx` (the Create Next App default). We will replace it in Task 8.

```bash
rm fyp/src/app/page.tsx
```

- [ ] **Step 3: Verify the project still compiles (no page.tsx yet is OK)**

```bash
cd fyp && npm run build 2>&1 | tail -5
```

Expected: may warn about missing page, that's fine — we add pages next.

- [ ] **Step 4: Commit**

```bash
git add fyp/src/app/layout.tsx
git commit -m "feat(fyp): root layout with Nav, WowObserver, BootstrapClient, ScrollToTop"
```

---

## Task 7: Home page

**Files:**
- Create: `fyp/src/app/page.tsx`

Source: `cv/index.html` (lines 53–304, everything inside `<div class="container bento-container">`)

- [ ] **Step 1: Create home page**

Convert `cv/index.html` body content to JSX. Key conversion rules:
- `class=` → `className=`
- `./assets/img/foo.webp` → `` `${BASE_PATH}/assets/img/foo.webp` `` (import BASE_PATH from `@/lib/basePath`)
- `href="resume.html"` → `href="/resume"` (use `<Link>` from next/link for internal nav)
- `href="works.html"` → `href="/works"`, `href="contact.html"` → `href="/contact"`
- `&amp;` → `&`, `&mdash;` → `—`, `&ndash;` → `–` (use actual Unicode chars in JSX)
- Keep all `className`, `data-wow-delay`, `data-bs-toggle`, `data-bs-target` attributes as-is
- Remove `<html>`, `<head>`, `<body>`, `<nav>`, `<script>` tags (layout handles those)
- Remove the nav dock block (layout renders Nav)

```tsx
// fyp/src/app/page.tsx
import Link from 'next/link'
import BASE_PATH from '@/lib/basePath'

export default function HomePage() {
  return (
    <div className="container bento-container">
      <header className="d-flex justify-content-between align-items-center mb-5 animate__animated animate__fadeInDown">
        <div className="logo-text">FYP.</div>
      </header>

      <div className="bento-card card-hero wow animate__fadeInLeft">
        <span className="card-number">01 / CONCEPT</span>
        <div className="badge-status">
          <i className="fa-solid fa-circle"></i>
          Open to work
        </div>
        <h1 className="hero-title">
          ENGINEERING<br /><span>THE FUTURE</span><br />OF EDTECH.
        </h1>
        <p className="hero-desc">
          I build high-performance digital ecosystems that merge technical
          depth with AI-first engineering — shipping at scale for 10+ countries.
        </p>
      </div>

      <div className="bento-card card-profile wow animate__fadeInRight">
        <span className="card-number">02 / IDENTITY</span>
        <div className="avatar-box">
          <img src={`${BASE_PATH}/assets/img/profile.webp`} alt="Fery Yundara Putera" />
        </div>
        <h3 className="mb-1 text-uppercase">Fery Yundara Putera</h3>
        <p className="text-muted small fw-bold text-uppercase">Senior Software Engineer</p>
        <div className="social-pill">
          <a href="https://linkedin.com/in/feryyp" className="social-btn" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/daefery" className="social-btn" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>

      <div className="bento-card card-about wow animate__fadeInUp">
        <span className="card-number">03 / LOGIC</span>
        <h2 className="text-uppercase">Engineering<br />Philosophy.</h2>
        <p className="text-muted small mb-4">
          Building scalable EdTech systems with AI-first thinking and continuous delivery discipline.
        </p>
        <div className="pillar-grid">
          <div className="pillar-item">
            <div className="pillar-title">Scalable EdTech</div>
            <p className="pill-text">Core developer on platform powering 32M+ lessons across 10+ countries.</p>
          </div>
          <div className="pillar-item">
            <div className="pillar-title">AI-First Dev</div>
            <p className="pill-text">Agentic workflows and AI-assisted engineering at scale.</p>
          </div>
          <div className="pillar-item">
            <div className="pillar-title">Full Stack Depth</div>
            <p className="pill-text">12 years across React, Node.js, Django, Laravel, .NET.</p>
          </div>
          <div className="pillar-item">
            <div className="pillar-title">Continuous Delivery</div>
            <p className="pill-text">CI/CD pipelines and automated E2E testing.</p>
          </div>
        </div>
      </div>

      <div className="bento-card card-skills wow animate__zoomIn" data-wow-delay="0.1s">
        <span className="card-number">04 / STATS</span>
        <div className="stat-item">
          <span className="stat-num">12+</span>
          <span className="stat-label d-block">Years Exp.</span>
        </div>
      </div>

      <div className="bento-card card-skills wow animate__zoomIn" data-wow-delay="0.2s">
        <span className="card-number">05 / STATS</span>
        <div className="stat-item">
          <span className="stat-num">32M+</span>
          <span className="stat-label d-block">Lessons Delivered</span>
        </div>
      </div>

      <div className="bento-card card-resume wow animate__fadeInUp">
        <span className="card-number">06 / JOURNEY</span>
        <h3 className="text-uppercase mb-2">My Resume.</h3>
        <p className="small mb-4">Explore my technical mastery and professional evolution.</p>
        <div className="mt-auto">
          <Link href="/resume" className="btn btn-light rounded-pill px-4 py-2 fw-bold text-uppercase">
            Explore Resume <i className="fa-solid fa-arrow-right-long ms-2"></i>
          </Link>
        </div>
      </div>

      <div className="bento-card card-hub wow animate__fadeInUp">
        <span className="card-number">07 / PHILOSOPHY</span>
        <div className="mission-header mb-4">
          <h3 className="text-uppercase">Engineering Mission.</h3>
          <p className="small opacity-50 fw-bold">Defining the future of EdTech and AI-first engineering</p>
        </div>
        <div className="value-stack w-100">
          <div className="value-item d-flex align-items-start gap-3 mb-4">
            <div className="value-icon"><i className="fa-solid fa-chess-knight"></i></div>
            <div>
              <div className="value-title">FULL STACK DEPTH</div>
              <p className="small opacity-60 mb-0">12 years across React, Next.js, Node.js, Django, Laravel, .NET.</p>
            </div>
          </div>
          <div className="value-item d-flex align-items-start gap-3 mb-4">
            <div className="value-icon"><i className="fa-solid fa-vial"></i></div>
            <div>
              <div className="value-title">CONTINUOUS DELIVERY</div>
              <p className="small opacity-60 mb-0">CI/CD pipelines and Selenium E2E testing that ship with confidence.</p>
            </div>
          </div>
          <div className="value-item d-flex align-items-start gap-3">
            <div className="value-icon"><i className="fa-solid fa-infinity"></i></div>
            <div>
              <div className="value-title">AI-FIRST ENGINEERING</div>
              <p className="small opacity-60 mb-0">Agentic workflows and AI-assisted development at production scale.</p>
            </div>
          </div>
        </div>
        <div className="hub-footer mt-auto w-100">
          <div className="signature-text">FYP × 2026</div>
        </div>
      </div>

      <div className="bento-card card-services wow animate__fadeInUp">
        <span className="card-number">08 / MASTERY</span>
        <h3 className="text-uppercase mb-4">Core Mastery.</h3>
        <div className="expertise-list">
          <div className="expertise-item">
            <i className="fa-solid fa-gem"></i>
            <span className="fw-bold text-uppercase">React / Next.js Engineering</span>
          </div>
          <div className="expertise-item">
            <i className="fa-solid fa-shield-halved"></i>
            <span className="fw-bold text-uppercase">Node.js / Backend Systems</span>
          </div>
          <div className="expertise-item">
            <i className="fa-solid fa-brain"></i>
            <span className="fw-bold text-uppercase">AI-Agentic Workflows</span>
          </div>
          <div className="expertise-item">
            <i className="fa-solid fa-chart-pie"></i>
            <span className="fw-bold text-uppercase">CI/CD &amp; DevOps</span>
          </div>
        </div>
      </div>

      <div className="bento-card card-clients wow animate__fadeInUp">
        <span className="card-number">09 / NETWORK</span>
        <p className="small text-uppercase fw-black opacity-30 mb-5">Companies &amp; Products</p>
        <div className="client-marquee">
          <div className="client-track">
            {[
              { src: 'edbot.webp', alt: 'Edbot.ai' },
              { src: 'learnalytics.png', alt: 'Learnalytics' },
              { src: 'se.png', alt: 'Solve Education' },
              { src: 'localizy.png', alt: 'Localizy' },
              { src: 'xtremax.png', alt: 'Xtremax' },
              { src: 'etak.png', alt: 'Elephant Talk' },
              { src: 'suzuki.png', alt: 'Suzuki' },
              { src: 'kuntoem.png', alt: 'Kuntoem' },
              { src: 'content.png', alt: 'Content' },
              { src: 'ymbb.png', alt: 'YMBB' },
              { src: 'plareon.png', alt: 'Plareon' },
              { src: 'qadha.png', alt: 'Qadha' },
              { src: 'lampalampa.png', alt: 'Lampalampa' },
              { src: 'playnology.png', alt: 'Playnology' },
            ].map(({ src, alt }) => (
              <div key={alt} className="client-group">
                <div className="client-item">
                  <img src={`${BASE_PATH}/assets/img/${src}`} className="client-logo client-logo-color" alt={alt} />
                </div>
              </div>
            ))}
            {/* aria-hidden duplicate for marquee */}
            {[
              'edbot.webp','learnalytics.png','se.png','localizy.png','xtremax.png',
              'etak.png','suzuki.png','kuntoem.png','content.png','ymbb.png',
              'plareon.png','qadha.png','lampalampa.png','playnology.png',
            ].map((src) => (
              <div key={`dup-${src}`} className="client-group" aria-hidden="true">
                <div className="client-item">
                  <img src={`${BASE_PATH}/assets/img/${src}`} className="client-logo client-logo-color" alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="card-footer">
        <p className="small opacity-50 fw-bold">© 2026 Fery Yundara Putera.</p>
      </footer>
    </div>
  )
}
```

Note: The client-marquee needs the two groups rendered together in one `.client-track`. The JSX above separates them — fix by rendering both groups together:

```tsx
<div className="client-track">
  <div className="client-group">
    {logos.map(...)}  {/* first group */}
  </div>
  <div className="client-group" aria-hidden="true">
    {logos.map(...)}  {/* duplicate group */}
  </div>
</div>
```

Use this corrected structure: define `const logos` array once, map it twice inside `client-track`.

- [ ] **Step 2: Verify dev server renders home**

```bash
cd fyp && npm run dev
```

Open http://localhost:3000 in browser. Verify:
- Bento grid layout visible
- Dark theme applied
- WOW animations trigger on scroll
- Nav dock visible with Home active
- Scroll-to-top appears after scrolling 300px

- [ ] **Step 3: Commit**

```bash
git add fyp/src/app/page.tsx
git commit -m "feat(fyp): home page converted from index.html"
```

---

## Task 8: Resume page

**Files:**
- Create: `fyp/src/app/resume/page.tsx`

Source: `cv/resume.html` body content (lines 53–266)

- [ ] **Step 1: Create resume page**

```tsx
// fyp/src/app/resume/page.tsx
import BASE_PATH from '@/lib/basePath'

export default function ResumePage() {
  return (
    <div className="container bento-container">
      <header className="d-flex justify-content-between align-items-center mb-5 animate__animated animate__fadeInDown">
        <div className="logo-text">FYP.</div>
      </header>

      <div className="bento-card card-hero wow animate__fadeInLeft">
        <span className="card-number">01 / EXPERTISE</span>
        <div className="badge-status">
          <i className="fa-solid fa-circle"></i>
          Senior Software Engineer
        </div>
        <h1 className="hero-title">
          CURATED<br /><span>TECHNICAL</span><br />JOURNEY.
        </h1>
        <p className="hero-desc">
          Documenting 12+ years of engineering high-performance ecosystems across EdTech, enterprise, and beyond.
        </p>
      </div>

      <div className="bento-card card-profile wow animate__fadeInRight">
        <span className="card-number">02 / IMPACT</span>
        <div className="stat-item mt-4">
          <span className="stat-num">12+</span>
          <span className="stat-label d-block">Years of Vision</span>
        </div>
        <p className="text-muted small fw-bold text-uppercase mt-4">Full Stack &amp; AI-First</p>
        <div className="mt-auto w-100">
          <a
            href={`${BASE_PATH}/assets/fery-yundara-putera-cv.pdf`}
            download="Fery-Yundara-Putera-CV.pdf"
            className="btn btn-light rounded-pill w-100 py-3 fw-bold text-uppercase"
          >
            Download CV <i className="fa-solid fa-file-arrow-down ms-2"></i>
          </a>
        </div>
      </div>

      <div className="bento-card card-experience wow animate__fadeInUp">
        <span className="card-number">03 / TIMELINE</span>
        <h2 className="text-uppercase mb-4">Experience.</h2>
        <div className="timeline-stack">
          <div className="timeline-item">
            <div className="timeline-meta">
              <span className="time-range">JUN 2018 — PRESENT</span>
              <span className="company">Solve Education!</span>
            </div>
            <div className="timeline-content">
              <h4 className="role">Senior Software Engineer</h4>
              <p className="small text-muted">
                Core developer of edbot.ai — 32M+ lessons, 10+ countries, 100K+ peak MAL. Built CI/CD pipelines, Selenium E2E testing. Products: Learnalytics, Content+, Localizy, Dawn of Civilization, Solve Employment. Indonesia.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-meta">
              <span className="time-range">2016 — 2018</span>
              <span className="company">Xtremax</span>
            </div>
            <div className="timeline-content">
              <h4 className="role">Backend Developer</h4>
              <p className="small text-muted">
                Maintained 3 live client projects. Certified CRM Sitefinity. MVC .NET + JavaScript solutions. Singapore &amp; Indonesia.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-meta">
              <span className="time-range">2015 — 2017</span>
              <span className="company">Elephant Talk (Pareteum)</span>
            </div>
            <div className="timeline-content">
              <h4 className="role">Software Developer</h4>
              <p className="small text-muted">
                C# microservices. 2 Angular JS + C# web apps. Integration &amp; unit testing. Spain &amp; Indonesia.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-meta">
              <span className="time-range">2014 — 2015</span>
              <span className="company">PT. Suzuki Indomobil Motor</span>
            </div>
            <div className="timeline-content">
              <h4 className="role">.NET Developer</h4>
              <p className="small text-muted">
                Dealer Management System for all main branches. Angular JS UI modernisation. Indonesia.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bento-card card-tech wow animate__fadeInUp" data-wow-delay="0.1s">
        <span className="card-number">04 / STACK</span>
        <h3 className="text-uppercase mb-4">Neural Stack.</h3>
        <div className="tech-grid">
          {[
            'React / Next.js', 'TypeScript', 'Node.js / Express', 'Django', 'Laravel',
            '.NET / C#', 'MongoDB / MySQL', 'CI/CD / DevOps', 'Selenium / JEST',
            'AI Agentic Workflows', 'Figma', 'React Native / Android',
            'REST API / GraphQL', 'WordPress',
          ].map((tag) => (
            <div key={tag} className="tech-tag">{tag}</div>
          ))}
        </div>
      </div>

      <div className="bento-card card-edu wow animate__fadeInUp" data-wow-delay="0.2s">
        <span className="card-number">05 / ACADEMIC</span>
        <h3 className="text-uppercase mb-4">Education.</h3>
        <div className="edu-item mb-4">
          <div className="edu-meta">Bina Nusantara University (Binus) — Jakarta</div>
          <h5 className="edu-title">S1 Information Systems</h5>
          <p className="small text-muted">GPA 3.51/4.0 — 2015–2017</p>
        </div>
        <div className="edu-item">
          <div className="edu-meta">Telkom University — Bandung</div>
          <h5 className="edu-title">D3 Computer Engineering</h5>
          <p className="small text-muted">GPA 3.45/4.0 — 2010–2013</p>
        </div>
      </div>

      <div className="bento-card card-skills-full wow animate__fadeInUp">
        <span className="card-number">06 / MASTERY</span>
        <h3 className="text-uppercase mb-5">Working Skills.</h3>
        <div className="skill-meter-grid">
          {[
            { name: 'React / Next.js Engineering', pct: 95 },
            { name: 'Node.js / Backend Systems', pct: 88 },
            { name: 'AI-Agentic Workflows', pct: 85 },
            { name: 'CI/CD & DevOps', pct: 82 },
          ].map(({ name, pct }) => (
            <div key={name} className="skill-meter-item">
              <div className="d-flex justify-content-between mb-2">
                <span className="skill-name">{name}</span>
                <span className="skill-percent">{pct}%</span>
              </div>
              <div className="skill-track">
                <div className="skill-fill" style={{ width: `${pct}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="card-footer">
        <p className="small opacity-50 fw-bold">© 2026 Fery Yundara Putera.</p>
      </footer>
    </div>
  )
}
```

- [ ] **Step 2: Verify in browser**

With dev server running, navigate to http://localhost:3000/resume

Verify: timeline, tech grid, skill bars, download CV link visible.

- [ ] **Step 3: Commit**

```bash
git add fyp/src/app/resume/
git commit -m "feat(fyp): resume page converted from resume.html"
```

---

## Task 9: ProjectGrid component + Works page

**Files:**
- Create: `fyp/src/components/ProjectGrid.tsx`
- Create: `fyp/src/app/works/page.tsx`

- [ ] **Step 1: Create ProjectGrid component**

```tsx
// fyp/src/components/ProjectGrid.tsx
'use client'

import { useState } from 'react'
import BASE_PATH from '@/lib/basePath'

type FilterValue = '*' | '.web-app' | '.mobile' | '.ux-ui'

const filterButtons: { label: string; value: FilterValue }[] = [
  { label: 'All Work', value: '*' },
  { label: 'Web App', value: '.web-app' },
  { label: 'Mobile', value: '.mobile' },
  { label: 'UX/UI', value: '.ux-ui' },
]

interface GridItem {
  cats: string[]   // e.g. ['web-app'] or ['mobile', 'ux-ui']
  img: string
  catLabel: string
  title: string
  desc: string
  tags: string[]
  modalId: string
}

const gridItems: GridItem[] = [
  { cats: ['web-app'], img: 'project-3.webp', catLabel: 'Web App', title: 'Dawn of Civilization', desc: 'Educational game teaching history via gamification, built fullstack with Django.', tags: ['Django', 'Fullstack'], modalId: 'projectModal3' },
  { cats: ['web-app'], img: 'project-4.webp', catLabel: 'Web App', title: 'SICC Singapore', desc: 'Cricket club website and membership portal with full CMS, built on ASP.NET MVC.', tags: ['.NET MVC'], modalId: 'projectModal7' },
  { cats: ['web-app'], img: 'project-5.webp', catLabel: 'Web App', title: 'Localizy', desc: 'Localization SaaS managing translation workflows and multi-language content delivery.', tags: ['React', 'Laravel'], modalId: 'projectModal8' },
  { cats: ['web-app'], img: 'project-6.webp', catLabel: 'Web App', title: 'Content+', desc: 'AI-assisted content creation platform integrating LLMs for marketing teams.', tags: ['React'], modalId: 'projectModal9' },
  { cats: ['web-app'], img: 'project-1.webp', catLabel: 'Web App', title: 'Solve Employment', desc: 'Job platform connecting edtech graduates to opportunities across Southeast Asia.', tags: ['React'], modalId: 'projectModal5' },
  { cats: ['web-app'], img: 'project-2.webp', catLabel: 'Web App', title: 'Mendaki Challenge', desc: 'Gamified challenge portal for Malay community youth with leaderboards and prizes.', tags: ['HTML', 'jQuery'], modalId: 'projectModal10' },
  { cats: ['mobile'], img: 'project-3.webp', catLabel: 'Mobile', title: 'Plareon: Daily Hoops', desc: 'Basketball training game with daily drills and skill progression for Android.', tags: ['Android'], modalId: 'projectModal4' },
  { cats: ['mobile'], img: 'project-4.webp', catLabel: 'Mobile', title: 'Qadha', desc: 'Android app for Muslims to log and track missed prayers with reminders.', tags: ['Android'], modalId: 'projectModal11' },
  { cats: ['mobile', 'ux-ui'], img: 'project-5.webp', catLabel: 'Mobile / UX', title: 'Dompu Apps', desc: 'Government mobile app delivering public services for Dompu Regency citizens.', tags: ['React Native', 'Figma'], modalId: 'projectModal6' },
  { cats: ['ux-ui'], img: 'project-6.webp', catLabel: 'UX/UI', title: 'Pariwisata Mockup', desc: 'Full mobile UI for tourism discovery — onboarding, browsing, and booking flows.', tags: ['Figma'], modalId: 'projectModal12' },
  { cats: ['ux-ui'], img: 'project-1.webp', catLabel: 'UX/UI', title: 'Natakraf Mockup', desc: 'E-commerce marketplace UI for Indonesian artisans to sell handcraft directly.', tags: ['Figma'], modalId: 'projectModal13' },
]

const featuredItems = [
  { cat: 'web-app', img: 'project-1.webp', catLabel: 'Web App', title: 'edbot.ai', desc: 'AI learning platform — core developer on team that delivered 32M+ lessons across 10+ countries.', tags: ['React', 'Next.js', 'Django', 'CI/CD', 'Selenium'], link: 'https://edbot.ai', stat: '32M+ lessons', modalId: 'projectModal1', size: 'lg' as const },
  { cat: 'web-app', img: 'project-2.webp', catLabel: 'Web App', title: 'Learnalytics', desc: 'Analytics dashboard surfacing learner engagement and platform metrics for data-driven curriculum decisions.', tags: ['React', 'Laravel'], link: null, stat: null, modalId: 'projectModal2', size: 'sm' as const },
]

function itemMatchesFilter(item: GridItem, filter: FilterValue): boolean {
  if (filter === '*') return true
  const filterCat = filter.slice(1) // remove leading dot
  return item.cats.includes(filterCat)
}

function featuredMatchesFilter(cat: string, filter: FilterValue): boolean {
  if (filter === '*') return true
  return filter === `.${cat}`
}

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('*')

  const showFeaturedRow = featuredItems.some((f) => featuredMatchesFilter(f.cat, activeFilter))

  return (
    <>
      <div className="hub-header d-flex flex-wrap justify-content-between align-items-center mb-5 gap-4">
        <div className="hub-title">
          <h3 className="text-uppercase mb-1">Project Hub.</h3>
          <p className="small opacity-50 fw-bold mb-0">Discover web apps, mobile products, and UX designs</p>
        </div>
        <div className="filter-group">
          {filterButtons.map(({ label, value }) => (
            <button
              key={value}
              className={`filter-btn${activeFilter === value ? ' active' : ''}`}
              onClick={() => setActiveFilter(value)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {showFeaturedRow && (
        <div className="proj-featured-row mb-4" id="proj-featured-row">
          {featuredItems.map((f) => {
            if (!featuredMatchesFilter(f.cat, activeFilter)) return null
            return (
              <div
                key={f.modalId}
                className={`proj-featured-card proj-featured-${f.size} ${f.cat}`}
                data-cat={f.cat}
                role="button"
                data-bs-toggle="modal"
                data-bs-target={`#${f.modalId}`}
              >
                <div className="pfc-img">
                  <img src={`${BASE_PATH}/assets/img/${f.img}`} alt={f.title} />
                  <span className="pfc-badge">Featured</span>
                </div>
                <div className="pfc-body">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="work-cat text-uppercase">{f.catLabel}</span>
                  </div>
                  <h4 className="pfc-title text-uppercase mb-2">{f.title}</h4>
                  <p className="pfc-desc">{f.desc}</p>
                  <div className="pfc-tags mb-3">
                    {f.tags.map((t) => <span key={t} className="proj-tag">{t}</span>)}
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    {f.link && (
                      <a href={f.link} target="_blank" rel="noopener noreferrer" className="pfc-link">
                        Live Site <i className="fa-solid fa-arrow-up-right-from-square ms-1"></i>
                      </a>
                    )}
                    {!f.link && <span className="pfc-link">View Details <i className="fa-solid fa-arrow-right ms-1"></i></span>}
                    {f.stat && <span className="pfc-stat"><i className="fa-solid fa-users me-1"></i>{f.stat}</span>}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}

      <div className="isotope-grid" id="proj-grid">
        <div className="grid-sizer"></div>
        {gridItems.map((item) => {
          const visible = itemMatchesFilter(item, activeFilter)
          return (
            <div
              key={item.modalId}
              className={`isotope-item ${item.cats.join(' ')}`}
              style={{ display: visible ? undefined : 'none' }}
            >
              <div
                className="card-work-inner card-work-compact"
                role="button"
                data-bs-toggle="modal"
                data-bs-target={`#${item.modalId}`}
              >
                <div className="work-img-thumb">
                  <img src={`${BASE_PATH}/assets/img/${item.img}`} alt={item.title} />
                </div>
                <div className="work-content">
                  <span className="work-cat text-uppercase">{item.catLabel}</span>
                  <h4 className="work-title text-uppercase">{item.title}</h4>
                  <p className="work-desc">{item.desc}</p>
                  <div className="pfc-tags">
                    {item.tags.map((t) => <span key={t} className="proj-tag">{t}</span>)}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
```

- [ ] **Step 2: Create works page**

The works page renders ProjectGrid plus all 13 project modals. The modals are Bootstrap modals — Bootstrap JS (loaded by BootstrapClient) handles open/close. Since modals are static HTML with no React state needed, they can live in the server component.

```tsx
// fyp/src/app/works/page.tsx
import ProjectGrid from '@/components/ProjectGrid'
import BASE_PATH from '@/lib/basePath'

export default function WorksPage() {
  return (
    <div className="container bento-container">
      <header className="d-flex justify-content-between align-items-center mb-5 animate__animated animate__fadeInDown">
        <div className="logo-text">FYP.</div>
      </header>

      <div className="bento-card card-hero wow animate__fadeInLeft">
        <span className="card-number">01 / PORTFOLIO</span>
        <div className="badge-status">
          <i className="fa-solid fa-circle"></i>
          Shipping Products at Scale
        </div>
        <h1 className="hero-title">ENGINEERING<br /><span>TECHNICAL</span><br />MASTERY.</h1>
        <p className="hero-desc">A curated selection of web apps, mobile products, and UX designs — built across EdTech, enterprise, and government sectors.</p>
      </div>

      <div className="bento-card card-stats wow animate__fadeInRight">
        <span className="card-number">02 / CORE</span>
        <div className="stat-item mb-4">
          <div className="stat-num">12+</div>
          <div className="stat-label">Products Shipped</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">5</div>
          <div className="stat-label">Companies</div>
        </div>
      </div>

      <div className="bento-card card-projects-hub col-12 wow animate__fadeInUp">
        <span className="card-number">03 / LOOKUP</span>
        <ProjectGrid />
      </div>

      <footer className="card-footer col-12">
        <p className="small opacity-50 fw-bold">© 2026 Fery Yundara Putera.</p>
      </footer>

      {/* === PROJECT MODALS === */}
      {/* Copy all 13 modal divs from cv/works.html lines 302–969 verbatim here,
          converting class= to className= and src= to use BASE_PATH.
          Each modal: id="projectModal1" through id="projectModal13".
          Key HTML→JSX rules: class→className, for→htmlFor, tabindex→tabIndex,
          aria-hidden="true"→aria-hidden="true" (same), img src needs BASE_PATH prefix.
          Example for modal 1: */}
      <div className="modal fade velixo-modal" id="projectModal1" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-4 p-md-5">
              <span className="badge-status mb-3">Web App</span>
              <h2 className="modal-title mb-4">edbot.ai</h2>
              <div id="projectCarousel1" className="carousel slide mb-4 modal-carousel" data-bs-ride="false">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#projectCarousel1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#projectCarousel1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#projectCarousel1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner rounded-4 overflow-hidden">
                  <div className="carousel-item active">
                    <img src={`${BASE_PATH}/assets/img/project-1.webp`} className="d-block w-100" alt="edbot.ai — Dashboard" />
                  </div>
                  <div className="carousel-item">
                    <img src={`${BASE_PATH}/assets/img/project-3.webp`} className="d-block w-100" alt="edbot.ai — Learning Flow" />
                  </div>
                  <div className="carousel-item">
                    <img src={`${BASE_PATH}/assets/img/project-5.webp`} className="d-block w-100" alt="edbot.ai — Analytics" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel1" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel1" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div className="row g-4">
                <div className="col-md-8">
                  <h4 className="text-uppercase mb-3">Project Brief</h4>
                  <p className="text-muted">AI learning platform powering 32M+ lessons across 10+ countries. Core developer responsible for architecture, CI/CD pipelines, and Selenium E2E testing.</p>
                </div>
                <div className="col-md-4">
                  <div className="project-info-list">
                    <div className="info-item mb-3">
                      <span className="label d-block small opacity-50 text-uppercase fw-bold">Company</span>
                      <span className="value fw-bold">Solve Education!</span>
                    </div>
                    <div className="info-item mb-3">
                      <span className="label d-block small opacity-50 text-uppercase fw-bold">Link</span>
                      <span className="value fw-bold"><a href="https://edbot.ai" target="_blank" rel="noopener noreferrer">edbot.ai</a></span>
                    </div>
                    <div className="info-item">
                      <span className="label d-block small opacity-50 text-uppercase fw-bold">Tech Stack</span>
                      <span className="value fw-bold">React, Next.js, Django</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Repeat pattern for projectModal2 through projectModal13.
          Source content: cv/works.html lines 366–969.
          Each modal follows identical structure. Just convert HTML attributes to JSX
          and prefix img src with BASE_PATH. */}
    </div>
  )
}
```

**Important:** After writing modal 1 as shown above, copy modals 2–13 from `cv/works.html` and apply the same JSX conversion rules. Do not skip modals — they are opened by clicking project cards.

- [ ] **Step 3: Verify works page in browser**

Navigate to http://localhost:3000/works

Verify:
- Hero, stats cards visible
- Filter buttons work (All Work / Web App / Mobile / UX/UI)
- Featured row shows/hides correctly on filter
- Grid items show/hide on filter
- Click a project card → modal opens with carousel

- [ ] **Step 4: Commit**

```bash
git add fyp/src/components/ProjectGrid.tsx fyp/src/app/works/
git commit -m "feat(fyp): works page + ProjectGrid filter (replaces Isotope)"
```

---

## Task 10: Blog page

**Files:**
- Create: `fyp/src/app/blog/page.tsx`

The blog page fetches from Medium RSS via rss2json API. This is the most complex page — it uses client-side fetch, builds cards dynamically, and has image fallback logic. Convert the inline script from `cv/blog.html` to a React component.

- [ ] **Step 1: Create blog page**

```tsx
// fyp/src/app/blog/page.tsx
'use client'

import { useEffect, useState } from 'react'
import BASE_PATH from '@/lib/basePath'

interface FeedItem {
  title: string
  link: string
  pubDate: string
  content: string
  categories: string[]
  guid: string
}

function formatDate(dateStr: string): string {
  return new Date(dateStr)
    .toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    .toUpperCase()
}

function readTime(content: string): string {
  const words = content.replace(/<[^>]+>/g, '').split(/\s+/).length
  return `${Math.max(1, Math.round(words / 200))} Min Read`
}

function getPostId(guid: string): string {
  return guid.split('/').pop() ?? ''
}

function getCategories(item: FeedItem): string {
  return item.categories?.length ? item.categories.slice(0, 2).join(', ') : 'Article'
}

function PostImage({ guid, alt, className }: { guid: string; alt: string; className?: string }) {
  const id = getPostId(guid)
  const fallback = `${BASE_PATH}/assets/img/blog-1.jpg`
  const [src, setSrc] = useState(id ? `${BASE_PATH}/assets/img/posts/${id}.png` : fallback)

  const handleError = () => {
    if (src.endsWith('.png')) setSrc(`${BASE_PATH}/assets/img/posts/${id}.jpg`)
    else if (src.endsWith('.jpg')) setSrc(`${BASE_PATH}/assets/img/posts/${id}.webp`)
    else setSrc(fallback)
  }

  return <img src={src} alt={alt} className={className} loading="lazy" onError={handleError} />
}

export default function BlogPage() {
  const [items, setItems] = useState<FeedItem[]>([])
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading')

  useEffect(() => {
    const MEDIUM_RSS = 'https://medium.com/feed/@feryyp'
    const API = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(MEDIUM_RSS)}&count=10&t=${Date.now()}`

    fetch(API)
      .then((r) => r.json())
      .then((data) => {
        if (!data.items?.length) { setStatus('error'); return }
        setItems(data.items)
        setStatus('loaded')
      })
      .catch(() => setStatus('error'))
  }, [])

  return (
    <div className="container bento-container">
      <header className="d-flex justify-content-between align-items-center mb-5 animate__animated animate__fadeInDown">
        <div className="logo-text">FYP.</div>
      </header>

      <div className="bento-card card-hero wow animate__fadeInLeft">
        <span className="card-number">01 / INSIGHTS</span>
        <div className="badge-status">
          <i className="fa-solid fa-circle"></i>
          Engineering Articles &amp; Logs
        </div>
        <h1 className="hero-title">DECODING<br /><span>DIGITAL</span><br />LOGIC.</h1>
        <p className="hero-desc">Documenting technical breakthroughs, EdTech architecture, and lessons from 12+ years of full-stack engineering.</p>
      </div>

      <div className="bento-card card-feed-stats wow animate__fadeInRight">
        <span className="card-number">02 / CORE</span>
        <div className="stat-item mb-4">
          <div className="stat-num">{status === 'loaded' ? items.length : 4}</div>
          <div className="stat-label">Articles</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">12+</div>
          <div className="stat-label">Years Experience</div>
        </div>
      </div>

      <div className="blog-grid-wrapper col-12 container-fluid px-0">
        {status === 'loading' && (
          <div className="text-center py-5">
            <i className="fa-solid fa-spinner fa-spin fa-2x opacity-30"></i>
            <p className="small opacity-30 mt-3 fw-bold text-uppercase">Loading from Medium...</p>
          </div>
        )}

        {status === 'error' && (
          <div className="text-center py-5">
            <i className="fa-solid fa-triangle-exclamation fa-2x opacity-30"></i>
            <p className="small opacity-30 mt-3 fw-bold text-uppercase">
              Could not load articles.{' '}
              <a href="https://medium.com/@feryyp" target="_blank" rel="noopener noreferrer" className="opacity-50">
                View on Medium
              </a>
            </p>
          </div>
        )}

        {status === 'loaded' && (
          <div className="row g-4" id="blog-feed">
            {/* Featured article */}
            <div className="col-lg-8">
              <article
                className="blog-featured animate__animated animate__fadeInLeft blog-card-link"
                onClick={() => window.open(items[0].link, '_blank')}
                style={{ cursor: 'pointer' }}
              >
                <div className="bf-img">
                  <PostImage guid={items[0].guid} alt={items[0].title} />
                </div>
                <div className="bf-gradient"></div>
                <div className="bf-content">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <span className="post-tag">{getCategories(items[0])}</span>
                    <span className="post-read"><i className="fa-regular fa-clock me-1"></i>{readTime(items[0].content)}</span>
                  </div>
                  <h2><a href={items[0].link} target="_blank" rel="noopener noreferrer">{items[0].title}</a></h2>
                  <div className="post-author-row d-flex align-items-center gap-2 mt-4">
                    <img src={`${BASE_PATH}/assets/img/profile.webp`} alt="Fery" className="rounded-circle" style={{ width: 28, height: 28, objectFit: 'cover' }} />
                    <span>Fery Yundara Putera</span>
                    <span className="ms-auto">{formatDate(items[0].pubDate)}</span>
                  </div>
                </div>
                <div className="bf-arrow"><i className="fa-solid fa-arrow-up-right"></i></div>
              </article>
            </div>

            {/* Side cards (items 1 and 2) */}
            {items.length > 1 && (
              <div className="col-lg-4 d-flex flex-column gap-4">
                {items.slice(1, 3).map((item, i) => (
                  <article
                    key={item.guid}
                    className="blog-side-card blog-card-link animate__animated animate__fadeInRight"
                    onClick={() => window.open(item.link, '_blank')}
                    style={{ cursor: 'pointer', animationDelay: i === 0 ? '0s' : '0.1s' }}
                  >
                    <div className="bsc-img">
                      <PostImage guid={item.guid} alt={item.title} />
                    </div>
                    <div className="bsc-body">
                      <span className="post-tag">{getCategories(item)}</span>
                      <h5><a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a></h5>
                      <div className="d-flex align-items-center gap-2 mt-auto pt-3">
                        <span className="post-read"><i className="fa-regular fa-clock me-1"></i>{readTime(item.content)}</span>
                        <span className="post-date ms-auto">{formatDate(item.pubDate)}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* Grid cards (items 3+) */}
            {items.slice(3).map((item) => (
              <div key={item.guid} className="col-lg-4 animate__animated animate__fadeInUp">
                <article
                  className="blog-post-card blog-card-link h-100"
                  onClick={() => window.open(item.link, '_blank')}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="bpc-img">
                    <PostImage guid={item.guid} alt={item.title} />
                    <span className="post-tag">{getCategories(item)}</span>
                  </div>
                  <div className="bpc-body">
                    <h5><a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a></h5>
                    <div className="d-flex align-items-center gap-2 mt-auto pt-3">
                      <span className="post-read"><i className="fa-regular fa-clock me-1"></i>{readTime(item.content)}</span>
                      <span className="post-date ms-auto">{formatDate(item.pubDate)}</span>
                    </div>
                  </div>
                </article>
              </div>
            ))}

            <div className="col-12 text-center pt-4">
              <a
                href="https://medium.com/@feryyp"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light rounded-pill px-5 py-3 fw-bold text-uppercase"
              >
                View All on Medium <i className="fa-brands fa-medium ms-2"></i>
              </a>
            </div>
          </div>
        )}
      </div>

      <footer className="card-footer col-12">
        <p className="small opacity-50 fw-bold">© 2026 Fery Yundara Putera.</p>
      </footer>
    </div>
  )
}
```

- [ ] **Step 2: Verify blog page in browser**

Navigate to http://localhost:3000/blog

Verify:
- Loading spinner shows initially
- Articles load from Medium (or error state if no network)
- Featured article visible on left (lg: 8 cols)
- Side cards on right
- Grid cards below

- [ ] **Step 3: Commit**

```bash
git add fyp/src/app/blog/
git commit -m "feat(fyp): blog page with Medium RSS fetch (replaces jQuery blog logic)"
```

---

## Task 11: Contact page

**Files:**
- Create: `fyp/src/app/contact/page.tsx`

Note: `cv/contact.html` has NO contact form — only direct link channels (email, LinkedIn, WhatsApp) and a CTA section. This is a pure server component.

- [ ] **Step 1: Create contact page**

```tsx
// fyp/src/app/contact/page.tsx
export default function ContactPage() {
  return (
    <div className="container bento-container">
      <header className="d-flex justify-content-between align-items-center mb-5 animate__animated animate__fadeInDown">
        <div className="logo-text">FYP.</div>
      </header>

      <div className="bento-card card-hero wow animate__fadeInLeft">
        <span className="card-number">01 / CONNECTION</span>
        <div className="badge-status">
          <i className="fa-solid fa-circle"></i>
          Open to work — accepting projects from June 2026
        </div>
        <h1 className="hero-title">LET&apos;S<br /><span>BUILD</span><br />TOGETHER.</h1>
        <p className="hero-desc">Available for full-stack, EdTech, and AI-first engineering projects. Drop a message and I&apos;ll respond within 24 hours.</p>
      </div>

      <div className="bento-card card-channels wow animate__fadeInRight">
        <span className="card-number">02 / CHANNELS</span>
        <h3 className="text-uppercase mb-1">Quick Reach.</h3>
        <p className="small text-muted mb-0">Preferred channels for direct access.</p>
        <div className="contact-reach-list">
          <div className="contact-channel-item">
            <div className="cci-icon"><i className="fa-solid fa-paper-plane"></i></div>
            <div>
              <span className="cci-label">Email Protocol</span>
              <a href="mailto:feryyp.work@gmail.com" className="cci-value">feryyp.work@gmail.com</a>
            </div>
          </div>
          <div className="contact-channel-item">
            <div className="cci-icon"><i className="fa-brands fa-linkedin"></i></div>
            <div>
              <span className="cci-label">LinkedIn</span>
              <a href="https://linkedin.com/in/feryyp" className="cci-value" target="_blank" rel="noopener noreferrer">linkedin.com/in/feryyp</a>
            </div>
          </div>
          <div className="contact-channel-item">
            <div className="cci-icon"><i className="fa-brands fa-whatsapp"></i></div>
            <div>
              <span className="cci-label">WhatsApp</span>
              <a href="https://wa.me/6281224641242?text=Hi%20Fery%2C%20I%20found%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20project%20with%20you." className="cci-value" target="_blank" rel="noopener noreferrer">+62 812-2464-1242</a>
            </div>
          </div>
          <div className="contact-channel-item">
            <div className="cci-icon"><i className="fa-solid fa-location-crosshairs"></i></div>
            <div>
              <span className="cci-label">Base Station</span>
              <span className="cci-value">Indonesia (Remote)</span>
            </div>
          </div>
        </div>
        <div className="social-pill mt-auto pt-2">
          <a href="https://linkedin.com/in/feryyp" className="social-btn" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://github.com/daefery" className="social-btn" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
        </div>
      </div>

      <div className="bento-card card-contact-stat wow animate__fadeInUp">
        <span className="card-number">03 / STATUS</span>
        <div className="ccs-icon ccs-green"><i className="fa-solid fa-circle-check"></i></div>
        <div className="ccs-metric ccs-green">Open</div>
        <div className="ccs-title">Open to Work</div>
        <div className="ccs-desc">Accepting new projects from June 2026.</div>
      </div>

      <div className="bento-card card-contact-stat wow animate__fadeInUp" data-wow-delay="0.1s">
        <span className="card-number">04 / SPEED</span>
        <div className="ccs-icon ccs-blue"><i className="fa-regular fa-clock"></i></div>
        <div className="ccs-metric">&lt; 24h</div>
        <div className="ccs-title">Response Time</div>
        <div className="ccs-desc">Fast replies to every project brief sent.</div>
      </div>

      <div className="bento-card card-contact-stat wow animate__fadeInUp" data-wow-delay="0.2s">
        <span className="card-number">05 / TRUST</span>
        <div className="ccs-icon ccs-coral"><i className="fa-solid fa-trophy"></i></div>
        <div className="ccs-metric ccs-coral">12+</div>
        <div className="ccs-title">Years Experience</div>
        <div className="ccs-desc">Full stack across 5 companies, 12+ products.</div>
      </div>

      <div className="bento-card card-contact-stat wow animate__fadeInUp" data-wow-delay="0.3s">
        <span className="card-number">06 / ZONE</span>
        <div className="ccs-icon ccs-purple"><i className="fa-solid fa-earth-asia"></i></div>
        <div className="ccs-metric">WIB</div>
        <div className="ccs-title">UTC + 7:00</div>
        <div className="ccs-desc">Indonesia (Remote).</div>
      </div>

      <div className="bento-card card-cta wow animate__fadeInUp">
        <span className="card-number">07 / CONNECT</span>
        <div className="cta-inner">
          <div className="cta-left">
            <p className="cta-eyebrow text-uppercase fw-bold small opacity-50 mb-3">Ready to collaborate?</p>
            <h2 className="cta-headline text-uppercase">Let&apos;s Build<br /><span>Something</span><br />Great.</h2>
            <p className="cta-sub mt-3 mb-0 opacity-60 small">Drop a line — I reply within 24 hours. No commitments required to get started.</p>
          </div>
          <div className="cta-right">
            <div className="cta-actions">
              <a href="mailto:feryyp.work@gmail.com" className="cta-btn cta-btn-primary">
                <i className="fa-solid fa-paper-plane"></i><span>Email Me</span>
              </a>
              <a href="https://linkedin.com/in/feryyp" target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn-secondary">
                <i className="fa-brands fa-linkedin"></i><span>LinkedIn</span>
              </a>
              <a href="https://wa.me/6281224641242?text=Hi%20Fery%2C%20I%20found%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20project%20with%20you." target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn-whatsapp">
                <i className="fa-brands fa-whatsapp"></i><span>WhatsApp</span>
              </a>
              <a href="https://github.com/daefery" target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn-ghost">
                <i className="fa-brands fa-github"></i><span>GitHub</span>
              </a>
            </div>
            <p className="small opacity-30 fw-bold mt-4 mb-0 text-uppercase" style={{ letterSpacing: '1px' }}>
              <i className="fa-solid fa-circle-check me-2 text-success"></i>Open to work · Remote · Jun 2026
            </p>
          </div>
        </div>
        <div className="cta-footer">
          <div className="signature-text">FYP × 2026</div>
        </div>
      </div>

      <footer className="card-footer col-12">
        <p className="small opacity-50 fw-bold">© 2026 Fery Yundara Putera.</p>
      </footer>
    </div>
  )
}
```

- [ ] **Step 2: Verify contact page in browser**

Navigate to http://localhost:3000/contact

Verify: channels list, 4 stat cards, CTA section with action buttons visible.

- [ ] **Step 3: Commit**

```bash
git add fyp/src/app/contact/
git commit -m "feat(fyp): contact page converted from contact.html"
```

---

## Task 12: Full build + cross-page verification

**Files:** No new files — verification only.

- [ ] **Step 1: Run production build**

```bash
cd fyp && npm run build
```

Expected output (last lines):
```
Route (app)                              Size     First Load JS
┌ ○ /                                   ...
├ ○ /blog                               ...
├ ○ /contact                            ...
├ ○ /resume                             ...
└ ○ /works                              ...
○  (Static)  prerendered as static content
```

All 5 routes must show `○ (Static)`. If any show `λ (Dynamic)`, find and fix the cause (likely a server-only API call or missing `'use client'` directive).

- [ ] **Step 2: Verify out/ directory**

```bash
ls fyp/out/
```

Expected: `index.html  resume/  works/  blog/  contact/  assets/  _next/`

```bash
ls fyp/out/assets/img/ | head -5
```

Expected: image files present (copied from public/ during export).

- [ ] **Step 3: Spot-check the exported HTML**

```bash
grep -c "dark-theme" fyp/out/index.html
```

Expected: `1` (the `<html class="dark-theme">` from layout.tsx)

```bash
grep "basePath\|/fyp" fyp/out/index.html | head -3
```

Expected: `_next/` paths should be `/fyp/_next/...` — confirms basePath is applied.

- [ ] **Step 4: Serve out/ locally and test**

```bash
cd fyp && npx serve out -p 3001
```

Open http://localhost:3001/fyp/ — verifies the site works with the `/fyp` basePath prefix (simulates GitHub Pages environment).

Check each page: http://localhost:3001/fyp/resume/, http://localhost:3001/fyp/works/, http://localhost:3001/fyp/blog/, http://localhost:3001/fyp/contact/

Verify: Nav active states correct, WOW animations fire, project filter works, modals open.

- [ ] **Step 5: Commit**

```bash
git add fyp/
git commit -m "chore(fyp): verify static export — all 5 pages build as static routes"
```

---

## Task 13: GitHub Actions deployment workflow

**Files:**
- Create: `.github/workflows/deploy-fyp.yml`

- [ ] **Step 1: Create workflow file**

```yaml
# .github/workflows/deploy-fyp.yml
name: Deploy FYP to GitHub Pages

on:
  push:
    branches: [master]
    paths:
      - 'fyp/**'

permissions:
  contents: write

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

      - name: Install dependencies
        run: npm ci

      - name: Build static export
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: fyp/out
          publish_branch: gh-pages
```

Key points:
- `paths: ['fyp/**']` — only triggers when fyp/ files change, not on every commit
- `permissions: contents: write` — required for peaceiris/actions-gh-pages to push to gh-pages branch
- `peaceiris/actions-gh-pages@v4` automatically creates `.nojekyll` in gh-pages branch (prevents GitHub Pages from ignoring `_next/`)

- [ ] **Step 2: Add .nvmrc to fyp/**

```bash
echo "20" > fyp/.nvmrc
```

- [ ] **Step 3: Commit and push**

```bash
git add .github/workflows/deploy-fyp.yml fyp/.nvmrc
git commit -m "feat(fyp): GitHub Actions workflow for gh-pages deployment"
git push origin master
```

- [ ] **Step 4: Verify GitHub Actions run**

After pushing, go to the GitHub repo → Actions tab. The "Deploy FYP to GitHub Pages" workflow should start. Wait for it to complete (green checkmark).

Expected: a `gh-pages` branch is created/updated with the static site content.

- [ ] **Step 5: Enable GitHub Pages on gh-pages branch**

In GitHub repo → Settings → Pages:
- Source: `Deploy from a branch`
- Branch: `gh-pages` / `/ (root)`
- Save

GitHub Pages URL will be `https://<username>.github.io/fyp/`

- [ ] **Step 6: Verify live deployment**

Open `https://<username>.github.io/fyp/` in browser.

Verify all 5 pages load, WOW animations fire, project filter works, modals open, blog fetches Medium articles.

---

## Self-Review

**Spec coverage check:**

| Spec requirement | Covered in task |
|-----------------|----------------|
| Next.js App Router + `output: 'export'` | Task 1 |
| `basePath: '/fyp'` | Task 1 |
| `images: { unoptimized: true }` | Task 1 |
| Copy assets to public/ | Task 2 |
| npm CSS: bootstrap, fontawesome, animate.css | Task 1 + Task 3 |
| main.css content verbatim | Task 3 |
| `display: flex; flex-wrap: wrap` on .isotope-grid | Task 3 |
| basePath helper for img src | Task 3 |
| BootstrapClient (bootstrap JS) | Task 4 |
| WowObserver (IntersectionObserver) | Task 4 |
| Nav with usePathname active state | Task 5 |
| ScrollToTop with scroll listener | Task 5 |
| Root layout with dark-theme class | Task 6 |
| Home page converted | Task 7 |
| Resume page converted | Task 8 |
| Works page + ProjectGrid filter | Task 9 |
| Blog page with Medium RSS fetch | Task 10 |
| Contact page converted | Task 11 |
| Static export verified | Task 12 |
| GitHub Actions deploy workflow | Task 13 |

**Placeholder scan:** No TBD, TODO, or incomplete steps found. Modal 2–13 conversion instructed with explicit source reference (cv/works.html lines 366–969) and conversion rules listed.

**Type consistency:** `FilterValue` defined in Task 9 Step 1 and used throughout ProjectGrid. `FeedItem` defined in Task 10 Step 1. `BASE_PATH` exported from `@/lib/basePath` and imported consistently across tasks 7–11.
