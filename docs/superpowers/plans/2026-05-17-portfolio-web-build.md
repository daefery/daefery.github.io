# Portfolio Web Build — Next.js + Framer Motion

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build production-quality portfolio site for Fery Yundara Putera, modeled after Apex Framer template aesthetic, using Next.js 14 + Framer Motion.

**Architecture:** Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion. Single-page scrolling layout with fixed nav. All content hardcoded (no CMS). Direction B design system: dark navy `#080c14` bg, green `#63c988` accent, fading text hierarchy.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, Framer Motion, Albert Sans (Google Fonts), No external UI library.

**Design reference:** https://apex-template.framer.website/ — clean single-column CV layout, spring animations, fade+slide entrance, hover lift, Albert Sans typography.

**Copy source:** `docs/superpowers/specs/2026-05-17-portfolio-design.md`

---

## File Structure

```
web/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Single page, all sections
│   └── globals.css         # CSS variables, resets, base styles
├── components/
│   ├── Nav.tsx             # Fixed nav with scroll-active state
│   ├── Hero.tsx            # Hero: badge + fading headline + stats
│   ├── About.tsx           # About: arc paragraph + stats row
│   ├── Experience.tsx      # Experience: featured card + 3-col grid
│   ├── Projects.tsx        # Projects: filter tabs + cards
│   ├── Skills.tsx          # Skills: 3 pillars + tag rows
│   ├── Education.tsx       # Education: 2 side-by-side cards
│   ├── CTA.tsx             # Footer CTA with email + buttons
│   └── motion/
│       ├── FadeUp.tsx      # Reusable fade+slide-up wrapper
│       └── StaggerGroup.tsx # Staggered children wrapper
├── tailwind.config.ts      # Custom colors, fonts
└── package.json
```

---

## Task 1: Project Scaffolding

**Files:**
- Create: `web/` directory via create-next-app
- Modify: `web/package.json` (add framer-motion)
- Modify: `web/tailwind.config.ts` (add custom tokens)

- [ ] **Step 1: Scaffold Next.js app**

```bash
cd /Users/feryyp/Project/sideAPP/lomba
npx create-next-app@latest web --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*" --yes
```

Expected: `web/` directory created with Next.js 14.

- [ ] **Step 2: Install Framer Motion**

```bash
cd /Users/feryyp/Project/sideAPP/lomba/web
npm install framer-motion
```

Expected: `framer-motion` in package.json dependencies.

- [ ] **Step 3: Configure Tailwind with design tokens**

Replace `web/tailwind.config.ts` content:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#080c14",
        "bg-subtle": "#0d1220",
        "bg-card": "#0f1520",
        "bg-card-hover": "#131a28",
        accent: "#63c988",
        "accent-light": "#8edba8",
      },
      fontFamily: {
        sans: ["Albert Sans", "Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "800px",
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 4: Remove boilerplate**

Delete: `web/app/page.tsx` content (replace with empty export), delete `web/public/next.svg`, `web/public/vercel.svg`.

Replace `web/app/page.tsx` with:
```tsx
export default function Home() {
  return <main>scaffold</main>;
}
```

- [ ] **Step 5: Commit**

```bash
cd /Users/feryyp/Project/sideAPP/lomba
git add web/
git commit -m "feat: scaffold Next.js app with Framer Motion and design tokens"
```

---

## Task 2: Global Styles + Layout

**Files:**
- Modify: `web/app/globals.css`
- Modify: `web/app/layout.tsx`

- [ ] **Step 1: Write globals.css**

Replace entire `web/app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;500;600;700;900&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg: #080c14;
  --bg-subtle: #0d1220;
  --bg-card: #0f1520;
  --bg-card-hover: #131a28;
  --border: rgba(255, 255, 255, 0.06);
  --border-accent: rgba(99, 201, 136, 0.25);
  --text: #ffffff;
  --text-muted: rgba(255, 255, 255, 0.45);
  --text-dim: rgba(255, 255, 255, 0.2);
  --accent: #63c988;
  --accent-light: #8edba8;
  --accent-bg: rgba(99, 201, 136, 0.07);
  --radius: 8px;
  --radius-sm: 4px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: "Albert Sans", "Inter", system-ui, sans-serif;
  font-size: 15px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

::selection {
  background: rgba(99, 201, 136, 0.2);
  color: #fff;
}

a {
  color: inherit;
  text-decoration: none;
}

/* Scrollbar */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }

/* Section spacing */
section {
  padding: 80px 0;
  border-top: 1px solid var(--border);
}

section:first-of-type {
  border-top: none;
}

/* Tag pill */
.tag {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: var(--text-muted);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 3px 10px;
}

.tag.accent {
  color: var(--accent);
  background: var(--accent-bg);
  border-color: var(--border-accent);
}

/* Section label */
.section-label {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-dim);
  margin-bottom: 2rem;
}

/* Container */
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 24px;
}
```

- [ ] **Step 2: Write layout.tsx**

Replace `web/app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fery Yundara Putera — Senior Software Engineer",
  description:
    "Senior Software Engineer with 12 years building EdTech at scale. React, Next.js, Node.js, AI-assisted development.",
  openGraph: {
    title: "Fery Yundara Putera — Senior Software Engineer",
    description:
      "Core developer on the team that powered 32M+ lessons. 12 years. 5 companies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 3: Verify dev server starts**

```bash
cd /Users/feryyp/Project/sideAPP/lomba/web
npm run dev &
sleep 3
curl -s http://localhost:3000 | grep -o '<main[^>]*>' | head -1
```

Expected: `<main>` tag found. Kill dev server after verify.

- [ ] **Step 4: Commit**

```bash
cd /Users/feryyp/Project/sideAPP/lomba
git add web/
git commit -m "feat: global styles, CSS variables, layout metadata"
```

---

## Task 3: Motion Primitives + Nav

**Files:**
- Create: `web/components/motion/FadeUp.tsx`
- Create: `web/components/motion/StaggerGroup.tsx`
- Create: `web/components/Nav.tsx`

- [ ] **Step 1: Create FadeUp component**

Create `web/components/motion/FadeUp.tsx`:

```tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeUp({ children, delay = 0, className }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 2: Create StaggerGroup component**

Create `web/components/motion/StaggerGroup.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

interface StaggerGroupProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function StaggerGroup({ children, className, delay = 0 }: StaggerGroupProps) {
  return (
    <motion.div
      variants={{ ...container, show: { ...container.show, transition: { staggerChildren: 0.1, delayChildren: delay } } }}
      initial="hidden"
      animate="show"
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 3: Create Nav component**

Create `web/components/Nav.tsx`:

```tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        background: scrolled ? "rgba(8,12,20,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        transition: "background 0.3s, border-color 0.3s, backdrop-filter 0.3s",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "56px",
        }}
      >
        <a
          href="#"
          style={{
            fontSize: "0.82rem",
            fontWeight: 700,
            letterSpacing: "0.05em",
            color: "#fff",
          }}
        >
          FYP
        </a>
        <div style={{ display: "flex", gap: "1.75rem", alignItems: "center" }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: "0.8rem",
                fontWeight: 500,
                color:
                  activeSection === link.href.slice(1)
                    ? "#fff"
                    : "rgba(255,255,255,0.35)",
                transition: "color 0.2s",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
```

- [ ] **Step 4: Commit**

```bash
cd /Users/feryyp/Project/sideAPP/lomba
git add web/
git commit -m "feat: motion primitives (FadeUp, StaggerGroup) and Nav component"
```

---

## Task 4: Hero Section

**Files:**
- Create: `web/components/Hero.tsx`
- Modify: `web/app/page.tsx`

- [ ] **Step 1: Create Hero component**

Create `web/components/Hero.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "32M+", label: "Lessons", accent: true },
  { value: "12", label: "Years" },
  { value: "5", label: "Companies" },
  { value: "12+", label: "Products" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "80px",
        paddingBottom: "80px",
        borderTop: "none",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid-line background */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 20%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 20%, black 40%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative" }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ marginBottom: "1.5rem" }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--accent)",
              border: "1px solid var(--border-accent)",
              borderRadius: "999px",
              padding: "0.3rem 0.8rem",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--accent)",
                animation: "pulse 2s ease-in-out infinite",
              }}
            />
            Open to work
          </span>
          <style>{`
            @keyframes pulse {
              0%, 100% { opacity: 1; transform: scale(1); }
              50% { opacity: 0.4; transform: scale(0.85); }
            }
          `}</style>
        </motion.div>

        {/* Headline */}
        <div style={{ marginBottom: "1.5rem" }}>
          {[
            { text: "Senior Engineer.", opacity: 1, delay: 0.2 },
            { text: "EdTech builder.", opacity: 0.28, delay: 0.3 },
            { text: "AI-driven.", opacity: 0.14, delay: 0.4 },
          ].map((line) => (
            <motion.div
              key={line.text}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: line.opacity, y: 0 }}
              transition={{ duration: 0.7, delay: line.delay, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: `rgba(255,255,255,${line.opacity})`,
              }}
            >
              {line.text}
            </motion.div>
          ))}
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontSize: "0.95rem",
            color: "rgba(255,255,255,0.45)",
            marginBottom: "2rem",
            maxWidth: "480px",
            lineHeight: 1.7,
          }}
        >
          Full-stack engineer with 12 years building EdTech at scale. React · Next.js · Node.js · AI-assisted development · CI/CD
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ display: "flex", gap: "0.75rem", marginBottom: "3.5rem" }}
        >
          <a
            href="#projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              height: "38px",
              padding: "0 1.25rem",
              background: "var(--accent)",
              color: "#000",
              fontSize: "0.8rem",
              fontWeight: 700,
              borderRadius: "var(--radius-sm)",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            See Projects
          </a>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              height: "38px",
              padding: "0 1.25rem",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.55)",
              fontSize: "0.8rem",
              fontWeight: 600,
              borderRadius: "var(--radius-sm)",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
              e.currentTarget.style.color = "rgba(255,255,255,0.85)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
              e.currentTarget.style.color = "rgba(255,255,255,0.55)";
            }}
          >
            Let&apos;s Talk
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            display: "flex",
            gap: "2rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  color: stat.accent ? "var(--accent)" : "#fff",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "0.62rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.25)",
                  marginTop: "2px",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Update page.tsx**

Replace `web/app/page.tsx`:

```tsx
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
      </main>
    </>
  );
}
```

- [ ] **Step 3: Verify dev server renders hero**

```bash
cd /Users/feryyp/Project/sideAPP/lomba/web
npm run build 2>&1 | tail -20
```

Expected: Build succeeds with no errors.

- [ ] **Step 4: Commit**

```bash
cd /Users/feryyp/Project/sideAPP/lomba
git add web/
git commit -m "feat: Hero section with Framer Motion entrance animations"
```

---

## Task 5: About Section

**Files:**
- Create: `web/components/About.tsx`
- Modify: `web/app/page.tsx`

- [ ] **Step 1: Create About component**

Create `web/components/About.tsx`:

```tsx
import FadeUp from "@/components/motion/FadeUp";

const STATS = [
  { value: "12", label: "Years Exp" },
  { value: "5", label: "Companies" },
  { value: "32M+", label: "Lessons Powered", accent: true },
  { value: "12+", label: "Products Shipped" },
];

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <FadeUp>
          <p className="section-label">About</p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p
            style={{
              fontSize: "1.15rem",
              fontWeight: 600,
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.9)",
              marginBottom: "1.25rem",
              maxWidth: "660px",
              letterSpacing: "-0.01em",
            }}
          >
            Senior Software Engineer who grew from writing .NET for Suzuki dealerships to being a core developer on the EdTech platform that helped 32 million lessons reach learners in 10+ countries.
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p
            style={{
              fontSize: "0.92rem",
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.75,
              maxWidth: "620px",
              marginBottom: "2.5rem",
            }}
          >
            Over 12 years and 5 companies — Suzuki, Elephant Talk (Spain), Xtremax (Singapore), and Solve Education! — I&apos;ve gone deep on every layer of the stack: React, Next.js, Node.js, TypeScript, Django, Laravel, CI/CD pipelines, and now AI-agentic workflows. I don&apos;t just build features; I build systems that scale and teams that ship.
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div
            style={{
              display: "flex",
              gap: "2.5rem",
              flexWrap: "wrap",
              paddingTop: "1.5rem",
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontSize: "1.6rem",
                    fontWeight: 900,
                    letterSpacing: "-0.03em",
                    color: stat.accent ? "var(--accent)" : "#fff",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.28)",
                    marginTop: "3px",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add About to page.tsx**

```tsx
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}
```

- [ ] **Step 3: Commit**

```bash
cd /Users/feryyp/Project/sideAPP/lomba
git add web/
git commit -m "feat: About section with arc copy and stats"
```

---

## Task 6: Experience Section

**Files:**
- Create: `web/components/Experience.tsx`
- Modify: `web/app/page.tsx`

- [ ] **Step 1: Create Experience component**

Create `web/components/Experience.tsx`:

```tsx
import FadeUp from "@/components/motion/FadeUp";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";

const FEATURED = {
  company: "Solve Education!",
  period: "Jun 2018 – Present",
  location: "Indonesia",
  role: "Senior Software Engineer",
  badge: "Current Role",
  description:
    "Core developer of edbot.ai — cross-functional team that delivered 32M+ lessons across 10+ countries. Led fullstack evolution from React/Next.js to AI-agentic development workflows.",
  bullets: [
    "Reduced deployment failures via CI/CD pipelines and automated E2E testing (Selenium)",
    "Built 10+ internal tools: Learnalytics, Content+, Localizy, Dawn of Civilization",
    "Evolved from Lead Frontend to Senior Fullstack with AI-agentic productivity systems",
  ],
  stats: ["32M+ Lessons", "100K+ Peak MAL", "10+ Products", "10+ Countries"],
  tags: ["React", "Next.js", "Django", "Laravel", "Node.js", "CI/CD", "AI Agentic", "Selenium"],
};

const EARLIER = [
  {
    company: "Xtremax",
    period: "2016–2018",
    location: "Singapore & Indonesia",
    role: "Backend Developer",
    bullets: [
      "Maintained 3 live client projects across SG & ID",
      "Delivered MVC .NET + JavaScript solutions",
      "Certified in CRM Sitefinity",
    ],
  },
  {
    company: "Elephant Talk (Pareteum)",
    period: "2015–2017",
    location: "Spain & Indonesia",
    role: "Software Developer",
    bullets: [
      "Converted business ops into C# microservices",
      "Built 2 AngularJS + C# web applications",
      "Implemented integration & unit testing",
    ],
  },
  {
    company: "PT. Suzuki Indomobil Motor",
    period: "2014–2015",
    location: "Indonesia",
    role: ".NET Developer",
    bullets: [
      "Built Dealer Management System for all main branch offices",
      "Modernised UI with AngularJS",
      "Completed full technical documentation",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <FadeUp>
          <p className="section-label">Experience</p>
        </FadeUp>

        {/* Featured card */}
        <FadeUp delay={0.1}>
          <div
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              padding: "1.75rem",
              marginBottom: "1px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Top accent line */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: "linear-gradient(90deg, var(--accent), transparent)",
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "0.5rem",
                flexWrap: "wrap",
                gap: "0.5rem",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#fff",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {FEATURED.company}
                </span>
                <span
                  style={{
                    marginLeft: "0.6rem",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    color: "var(--accent)",
                    background: "var(--accent-bg)",
                    border: "1px solid var(--border-accent)",
                    borderRadius: "999px",
                    padding: "2px 8px",
                  }}
                >
                  {FEATURED.badge}
                </span>
              </div>
              <span
                style={{
                  fontSize: "0.78rem",
                  color: "rgba(255,255,255,0.3)",
                }}
              >
                {FEATURED.period} · {FEATURED.location}
              </span>
            </div>
            <p
              style={{
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "rgba(255,255,255,0.5)",
                marginBottom: "1rem",
                letterSpacing: "0.02em",
              }}
            >
              {FEATURED.role}
            </p>
            <p
              style={{
                fontSize: "0.88rem",
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.7,
                marginBottom: "1rem",
              }}
            >
              {FEATURED.description}
            </p>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
                marginBottom: "1.25rem",
              }}
            >
              {FEATURED.bullets.map((b) => (
                <li
                  key={b}
                  style={{
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.5)",
                    paddingLeft: "1rem",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      color: "var(--accent)",
                      fontWeight: 700,
                    }}
                  >
                    –
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                paddingTop: "1rem",
                borderTop: "1px solid rgba(255,255,255,0.05)",
                marginBottom: "1rem",
                flexWrap: "wrap",
              }}
            >
              {FEATURED.stats.map((s) => (
                <span
                  key={s}
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    color: "var(--accent)",
                    letterSpacing: "0.03em",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
            <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
              {FEATURED.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Earlier roles */}
        <StaggerGroup
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1px",
            background: "var(--border)",
            marginTop: "1px",
            borderRadius: "0 0 var(--radius) var(--radius)",
            overflow: "hidden",
          } as React.CSSProperties}
          delay={0.3}
        >
          {EARLIER.map((role) => (
            <StaggerItem key={role.company}>
              <div
                style={{
                  background: "var(--bg-card)",
                  padding: "1.25rem",
                  height: "100%",
                }}
              >
                <p
                  style={{
                    fontSize: "0.88rem",
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: "0.2rem",
                  }}
                >
                  {role.company}
                </p>
                <p
                  style={{
                    fontSize: "0.72rem",
                    color: "rgba(255,255,255,0.28)",
                    marginBottom: "0.2rem",
                  }}
                >
                  {role.period} · {role.location}
                </p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.4)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {role.role}
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                  {role.bullets.map((b) => (
                    <li
                      key={b}
                      style={{
                        fontSize: "0.78rem",
                        color: "rgba(255,255,255,0.4)",
                        paddingLeft: "0.75rem",
                        position: "relative",
                      }}
                    >
                      <span style={{ position: "absolute", left: 0, color: "rgba(255,255,255,0.2)" }}>–</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to page.tsx**

```tsx
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
      </main>
    </>
  );
}
```

- [ ] **Step 3: Build check**

```bash
cd /Users/feryyp/Project/sideAPP/lomba/web && npm run build 2>&1 | tail -10
```

Expected: No TypeScript or build errors.

- [ ] **Step 4: Commit**

```bash
cd /Users/feryyp/Project/sideAPP/lomba
git add web/
git commit -m "feat: Experience section with featured card and earlier roles grid"
```

---

## Task 7: Projects Section

**Files:**
- Create: `web/components/Projects.tsx`
- Modify: `web/app/page.tsx`

- [ ] **Step 1: Create Projects component**

Create `web/components/Projects.tsx`:

```tsx
"use client";

import { useState } from "react";
import FadeUp from "@/components/motion/FadeUp";
import { motion, AnimatePresence } from "framer-motion";

type Filter = "all" | "web" | "ui" | "mobile";

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "web", label: "Web App" },
  { key: "ui", label: "UX/UI" },
  { key: "mobile", label: "Mobile" },
];

interface Project {
  name: string;
  desc: string;
  tags: string[];
  cats: Filter[];
  featured?: boolean;
  link?: string;
  linkLabel?: string;
}

const PROJECTS: Project[] = [
  {
    name: "edbot.ai",
    desc: "AI learning platform that delivered 32M+ lessons across 10+ countries. Core team developer.",
    tags: ["React", "Next.js", "Django"],
    cats: ["all", "web"],
    featured: true,
    link: "https://edbot.ai",
    linkLabel: "Live Site",
  },
  {
    name: "Learnalytics",
    desc: "Analytics dashboard for tracking learner engagement and platform metrics.",
    tags: ["React", "Laravel"],
    cats: ["all", "web"],
    featured: true,
    linkLabel: "Internal",
  },
  {
    name: "Dawn of Civilization",
    desc: "Fullstack educational game platform built with Django.",
    tags: ["Django", "Fullstack"],
    cats: ["all", "web"],
  },
  {
    name: "Localizy",
    desc: "Localisation management tool for multilingual content workflows.",
    tags: ["React", "Laravel"],
    cats: ["all", "web"],
  },
  {
    name: "Content+",
    desc: "Internal content management system for curriculum teams.",
    tags: ["React"],
    cats: ["all", "web"],
  },
  {
    name: "Solve Employment",
    desc: "Job platform connecting edbot.ai graduates with employers.",
    tags: ["React"],
    cats: ["all", "web"],
  },
  {
    name: "SICC",
    desc: "Singapore International Commercial Court — public site built with .NET MVC.",
    tags: [".NET MVC"],
    cats: ["all", "web"],
  },
  {
    name: "Mendaki Challenge",
    desc: "Web challenge platform for Singapore community engagement.",
    tags: ["HTML", "CSS", "JS"],
    cats: ["all", "web"],
  },
  {
    name: "Plareon: Daily Hoops Trainer",
    desc: "Basketball training game with in-app purchases. Published on Play Store.",
    tags: ["Android"],
    cats: ["all", "mobile"],
    link: "https://play.google.com/store/apps/details?id=com.plareon.ball",
    linkLabel: "Play Store",
  },
  {
    name: "Qadha: Build Salah Consistency",
    desc: "Islamic prayer habit tracker. Published on Play Store.",
    tags: ["Android"],
    cats: ["all", "mobile"],
    link: "https://play.google.com/store/apps/details?id=com.qadha.islam",
    linkLabel: "Play Store",
  },
  {
    name: "Dompu Apps",
    desc: "Local government app — React Native + Figma design system.",
    tags: ["React Native", "Figma"],
    cats: ["all", "mobile", "ui"],
  },
  {
    name: "Pariwisata Mockup",
    desc: "Tourism app UI/UX design mockup.",
    tags: ["Figma"],
    cats: ["all", "ui"],
  },
  {
    name: "Natakraf Apps Mockup",
    desc: "Handcraft marketplace app UI/UX design.",
    tags: ["Figma"],
    cats: ["all", "ui"],
  },
];

export default function Projects() {
  const [active, setActive] = useState<Filter>("all");

  const visible = PROJECTS.filter((p) => p.cats.includes(active));
  const featured = visible.filter((p) => p.featured);
  const grid = visible.filter((p) => !p.featured);

  return (
    <section id="projects">
      <div className="container">
        <FadeUp>
          <p className="section-label">Projects</p>
        </FadeUp>

        {/* Filter tabs */}
        <FadeUp delay={0.1}>
          <div
            style={{
              display: "flex",
              gap: "0.25rem",
              marginBottom: "2rem",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-sm)",
              padding: "3px",
              width: "fit-content",
            }}
          >
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  padding: "0.35rem 0.85rem",
                  borderRadius: "3px",
                  border: "none",
                  cursor: "pointer",
                  transition: "background 0.2s, color 0.2s",
                  background: active === f.key ? "var(--bg-card)" : "transparent",
                  color:
                    active === f.key
                      ? "#fff"
                      : "rgba(255,255,255,0.35)",
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </FadeUp>

        {/* Featured */}
        <AnimatePresence>
          {featured.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "1px",
                background: "var(--border)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                overflow: "hidden",
                marginBottom: "1px",
              }}
            >
              {featured.map((p) => (
                <div
                  key={p.name}
                  style={{ background: "var(--bg-card)", padding: "1.5rem" }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "#fff" }}>
                      {p.name}
                    </p>
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          color: "var(--accent)",
                          border: "1px solid var(--border-accent)",
                          borderRadius: "999px",
                          padding: "2px 8px",
                          transition: "background 0.2s",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.background = "var(--accent-bg)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.background = "transparent")
                        }
                      >
                        {p.linkLabel}
                      </a>
                    )}
                  </div>
                  <p
                    style={{
                      fontSize: "0.83rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.65,
                      marginBottom: "1rem",
                    }}
                  >
                    {p.desc}
                  </p>
                  <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                    {p.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "1px",
            background: "var(--border)",
            border: "1px solid var(--border)",
            borderRadius: featured.length > 0 ? "0 0 var(--radius) var(--radius)" : "var(--radius)",
            overflow: "hidden",
          }}
        >
          <AnimatePresence>
            {grid.map((p) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                style={{ background: "var(--bg-card)", padding: "1.1rem" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "0.35rem",
                  }}
                >
                  <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "#fff" }}>
                    {p.name}
                  </p>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "0.65rem",
                        fontWeight: 600,
                        color: "var(--accent)",
                        border: "1px solid var(--border-accent)",
                        borderRadius: "999px",
                        padding: "1px 7px",
                      }}
                    >
                      {p.linkLabel}
                    </a>
                  )}
                </div>
                <p
                  style={{
                    fontSize: "0.78rem",
                    color: "rgba(255,255,255,0.38)",
                    lineHeight: 1.6,
                    marginBottom: "0.75rem",
                  }}
                >
                  {p.desc}
                </p>
                <div style={{ display: "flex", gap: "0.3rem", flexWrap: "wrap" }}>
                  {p.tags.map((t) => (
                    <span key={t} className="tag" style={{ fontSize: "0.65rem" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to page.tsx**

```tsx
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
    </>
  );
}
```

- [ ] **Step 3: Commit**

```bash
cd /Users/feryyp/Project/sideAPP/lomba
git add web/
git commit -m "feat: Projects section with filter tabs and AnimatePresence"
```

---

## Task 8: Skills Section

**Files:**
- Create: `web/components/Skills.tsx`
- Modify: `web/app/page.tsx`

- [ ] **Step 1: Create Skills component**

Create `web/components/Skills.tsx`:

```tsx
import FadeUp from "@/components/motion/FadeUp";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";

const PILLARS = [
  {
    label: "Engineering",
    sub: "Web & Backend",
    items: [
      { label: "React", current: true },
      { label: "Next.js", current: true },
      { label: "TypeScript", current: true },
      { label: "Node.js", current: true },
      { label: "Express", current: true },
      { label: "MongoDB", current: true },
      { label: "MySQL", current: true },
      { label: "Django" },
      { label: "Laravel" },
      { label: ".NET / C#" },
      { label: "Angular JS" },
      { label: "REST API" },
      { label: "GraphQL" },
      { label: "PHP" },
    ],
  },
  {
    label: "Automation",
    sub: "AI & DevOps",
    items: [
      { label: "AI Agentic Workflows", current: true },
      { label: "CI/CD", current: true },
      { label: "Selenium" },
      { label: "JEST" },
      { label: "Unit Testing" },
      { label: "Agile / Scrum" },
      { label: "AI-Assisted Dev" },
    ],
  },
  {
    label: "Design",
    sub: "UX & Mobile",
    items: [
      { label: "Figma" },
      { label: "React Native" },
      { label: "Android (Play Store)" },
      { label: "UI Design" },
      { label: "WordPress" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <FadeUp>
          <p className="section-label">Skills</p>
        </FadeUp>

        <StaggerGroup
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1px",
            background: "var(--border)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
            overflow: "hidden",
          } as React.CSSProperties}
          delay={0.1}
        >
          {PILLARS.map((pillar) => (
            <StaggerItem key={pillar.label}>
              <div style={{ background: "var(--bg-card)", padding: "1.5rem", height: "100%" }}>
                <p
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 800,
                    color: "#fff",
                    letterSpacing: "-0.01em",
                    marginBottom: "0.2rem",
                  }}
                >
                  {pillar.label}
                </p>
                <p
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    color: "var(--accent)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginBottom: "1rem",
                  }}
                >
                  {pillar.sub}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {pillar.items.map((item) => (
                    <span
                      key={item.label}
                      className={`tag${item.current ? " accent" : ""}`}
                    >
                      {item.current ? `${item.label} *` : item.label}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <FadeUp delay={0.4}>
          <p
            style={{
              fontSize: "0.72rem",
              color: "rgba(255,255,255,0.2)",
              marginTop: "0.75rem",
            }}
          >
            * current focus
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to page.tsx**

```tsx
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
      </main>
    </>
  );
}
```

- [ ] **Step 3: Commit**

```bash
cd /Users/feryyp/Project/sideAPP/lomba
git add web/
git commit -m "feat: Skills section with 3 pillars and current-focus tags"
```

---

## Task 9: Education + CTA Sections

**Files:**
- Create: `web/components/Education.tsx`
- Create: `web/components/CTA.tsx`
- Modify: `web/app/page.tsx`

- [ ] **Step 1: Create Education component**

Create `web/components/Education.tsx`:

```tsx
import FadeUp from "@/components/motion/FadeUp";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";

const SCHOOLS = [
  {
    name: "Bina Nusantara University",
    short: "Binus",
    degree: "S1 Information Systems",
    period: "2015–2017 · Jakarta",
    gpa: "3.51 / 4.0",
  },
  {
    name: "Telkom University",
    short: "Telkom",
    degree: "D3 Computer Engineering",
    period: "2010–2013 · Bandung",
    gpa: "3.45 / 4.0",
  },
];

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <FadeUp>
          <p className="section-label">Education</p>
        </FadeUp>

        <StaggerGroup
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1px",
            background: "var(--border)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
            overflow: "hidden",
          } as React.CSSProperties}
          delay={0.1}
        >
          {SCHOOLS.map((s) => (
            <StaggerItem key={s.name}>
              <div style={{ background: "var(--bg-card)", padding: "1.5rem" }}>
                <p
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                  }}
                >
                  {s.short}
                </p>
                <p
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: "0.25rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {s.degree}
                </p>
                <p
                  style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.35)", marginBottom: "0.75rem" }}
                >
                  {s.name}
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.25)" }}>{s.period}</span>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: "var(--accent)",
                      background: "var(--accent-bg)",
                      border: "1px solid var(--border-accent)",
                      borderRadius: "999px",
                      padding: "2px 8px",
                    }}
                  >
                    GPA {s.gpa}
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create CTA component**

Create `web/components/CTA.tsx`:

```tsx
import FadeUp from "@/components/motion/FadeUp";

export default function CTA() {
  return (
    <section id="contact" style={{ borderBottom: "none" }}>
      <div className="container">
        <FadeUp>
          <p className="section-label">Contact</p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: "0.75rem",
            }}
          >
            Ready to work together?
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p
            style={{
              fontSize: "0.9rem",
              color: "rgba(255,255,255,0.4)",
              lineHeight: 1.7,
              maxWidth: "500px",
              marginBottom: "2rem",
            }}
          >
            12 years. 5 companies. Part of the team behind 32M+ lessons. Let&apos;s build something great together.
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <a
            href="mailto:feryyp.work@gmail.com"
            style={{
              display: "block",
              fontSize: "1rem",
              fontWeight: 700,
              color: "var(--accent)",
              letterSpacing: "-0.01em",
              marginBottom: "2rem",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            feryyp.work@gmail.com
          </a>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a
              href="mailto:feryyp.work@gmail.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                height: "40px",
                padding: "0 1.4rem",
                background: "var(--accent)",
                color: "#000",
                fontSize: "0.82rem",
                fontWeight: 700,
                borderRadius: "var(--radius-sm)",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Hire Me
            </a>
            <a
              href="https://github.com/feryyp"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                height: "40px",
                padding: "0 1.2rem",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.55)",
                fontSize: "0.82rem",
                fontWeight: 600,
                borderRadius: "var(--radius-sm)",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                e.currentTarget.style.color = "rgba(255,255,255,0.85)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                e.currentTarget.style.color = "rgba(255,255,255,0.55)";
              }}
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/feryyp"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                height: "40px",
                padding: "0 1.2rem",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.55)",
                fontSize: "0.82rem",
                fontWeight: 600,
                borderRadius: "var(--radius-sm)",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                e.currentTarget.style.color = "rgba(255,255,255,0.85)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                e.currentTarget.style.color = "rgba(255,255,255,0.55)";
              }}
            >
              LinkedIn
            </a>
          </div>
        </FadeUp>

        <FadeUp delay={0.5}>
          <p
            style={{
              marginTop: "4rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              fontSize: "0.72rem",
              color: "rgba(255,255,255,0.18)",
              letterSpacing: "0.03em",
            }}
          >
            Fery Yundara Putera &nbsp;&middot;&nbsp; Senior Software Engineer &nbsp;&middot;&nbsp; Indonesia
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Complete page.tsx**

Replace `web/app/page.tsx` with final version:

```tsx
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <CTA />
      </main>
    </>
  );
}
```

- [ ] **Step 4: Final build check**

```bash
cd /Users/feryyp/Project/sideAPP/lomba/web && npm run build 2>&1 | tail -20
```

Expected: Build completes with no errors.

- [ ] **Step 5: Commit**

```bash
cd /Users/feryyp/Project/sideAPP/lomba
git add web/
git commit -m "feat: Education + CTA sections, complete page assembly"
```

---

## Task 10: Responsive + Polish

**Files:**
- Modify: `web/app/globals.css` (responsive rules)
- Modify: `web/components/Nav.tsx` (mobile collapse)

- [ ] **Step 1: Add responsive CSS to globals.css**

Append to end of `web/app/globals.css`:

```css
/* Responsive */
@media (max-width: 640px) {
  section {
    padding: 56px 0;
  }

  .container {
    padding: 0 16px;
  }
}

/* Mobile nav: hide links on small screens */
@media (max-width: 540px) {
  .nav-links {
    display: none;
  }
}
```

- [ ] **Step 2: Add className to nav links div in Nav.tsx**

In `web/components/Nav.tsx`, find the links container div and add `className="nav-links"`:

```tsx
<div className="nav-links" style={{ display: "flex", gap: "1.75rem", alignItems: "center" }}>
```

- [ ] **Step 3: Final build + verify no errors**

```bash
cd /Users/feryyp/Project/sideAPP/lomba/web && npm run build 2>&1
```

Expected: `Route (app) Size` table visible, no TypeScript errors, no lint errors.

- [ ] **Step 4: Final commit**

```bash
cd /Users/feryyp/Project/sideAPP/lomba
git add web/
git commit -m "feat: responsive styles and mobile nav polish — portfolio complete"
```
