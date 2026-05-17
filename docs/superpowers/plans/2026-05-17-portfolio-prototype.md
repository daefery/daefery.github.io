# Portfolio Website Prototype — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a pixel-close HTML/CSS/JS prototype of Fery Yundara Putera's portfolio website following the approved design spec, ready for review before full React/Next.js implementation.

**Architecture:** Single-page HTML prototype with linked CSS and JS files. Dark theme (#0f1117 bg, #4a9eff accent), 7 sections in order: Hero → About → Experience → Projects → Skills → Education → CTA. Projects section uses vanilla JS filter tabs. No framework — pure HTML/CSS/JS for maximum portability and speed during prototype review phase.

**Tech Stack:** HTML5 · CSS3 (custom properties, grid, flexbox) · Vanilla JS · Google Fonts (Inter) · No build tools required

**Spec reference:** `docs/superpowers/specs/2026-05-17-portfolio-design.md`

**Prototype skills to invoke during execution:** `/ui-ux-pro-max:ui-ux-pro-max` + `/frontend-design:frontend-design`

---

## File Map

| File | Responsibility |
|---|---|
| `prototype/index.html` | Full page structure, all section markup |
| `prototype/style.css` | All styles — CSS variables, reset, layout, components |
| `prototype/main.js` | Project filter tabs, smooth scroll, active nav highlight |

---

## Task 1: Project Setup + Base Styles

**Files:**
- Create: `prototype/index.html`
- Create: `prototype/style.css`
- Create: `prototype/main.js`

- [ ] **Step 1: Create directory**

```bash
mkdir -p /Users/feryyp/Project/sideAPP/lomba/prototype
```

- [ ] **Step 2: Create `prototype/style.css` with CSS variables, reset, and typography**

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

/* ── Variables ── */
:root {
  --bg: #0f1117;
  --bg-card: #161b27;
  --bg-card-hover: #1c2333;
  --border: rgba(255, 255, 255, 0.08);
  --border-accent: rgba(74, 158, 255, 0.3);
  --text: #e2e8f0;
  --text-muted: #8892a4;
  --text-dim: #4a5568;
  --accent: #4a9eff;
  --accent-light: #7ec8ff;
  --accent-bg: rgba(74, 158, 255, 0.08);
  --accent-bg-strong: rgba(74, 158, 255, 0.15);
  --radius: 10px;
  --radius-sm: 6px;
  --max-w: 1100px;
  --transition: 0.2s ease;
}

/* ── Reset ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: 'Inter', sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
}
a { color: var(--accent); text-decoration: none; transition: opacity var(--transition); }
a:hover { opacity: 0.8; }
ul { list-style: none; }
img { max-width: 100%; display: block; }

/* ── Layout ── */
.container { max-width: var(--max-w); margin: 0 auto; padding: 0 2rem; }
section { padding: 5rem 0; }
.section-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--accent);
  margin-bottom: 0.75rem;
  font-weight: 600;
}
.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 3rem;
}

/* ── Typography ── */
h1 { font-size: clamp(2rem, 5vw, 3.25rem); font-weight: 800; line-height: 1.15; }
h2 { font-size: clamp(1.5rem, 3vw, 2rem); font-weight: 700; line-height: 1.25; }
h3 { font-size: 1.1rem; font-weight: 600; }
p { color: var(--text-muted); line-height: 1.75; }

/* ── Buttons ── */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.4rem;
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: all var(--transition);
  border: none;
}
.btn-primary {
  background: var(--accent);
  color: #000;
}
.btn-primary:hover { background: var(--accent-light); opacity: 1; }
.btn-outline {
  background: transparent;
  color: var(--accent);
  border: 1px solid var(--border-accent);
}
.btn-outline:hover { background: var(--accent-bg); opacity: 1; }

/* ── Tags ── */
.tag {
  display: inline-block;
  background: rgba(255, 255, 255, 0.06);
  color: var(--text-muted);
  font-size: 0.75rem;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-weight: 500;
}
.tag-accent {
  background: var(--accent-bg-strong);
  color: var(--accent-light);
}
```

- [ ] **Step 3: Create `prototype/main.js` (empty, add content in later tasks)**

```js
// Portfolio interactions — populated in Tasks 6 and 9
document.addEventListener('DOMContentLoaded', () => {});
```

- [ ] **Step 4: Create `prototype/index.html` skeleton**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Fery Yundara Putera — Senior Software Engineer</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <!-- NAV -->
  <nav id="nav"></nav>

  <!-- HERO -->
  <section id="hero"></section>

  <!-- ABOUT -->
  <section id="about"></section>

  <!-- EXPERIENCE -->
  <section id="experience"></section>

  <!-- PROJECTS -->
  <section id="projects"></section>

  <!-- SKILLS -->
  <section id="skills"></section>

  <!-- EDUCATION -->
  <section id="education"></section>

  <!-- CTA -->
  <section id="cta"></section>

  <script src="main.js"></script>
</body>
</html>
```

- [ ] **Step 5: Open in browser and verify blank dark page loads**

```bash
open /Users/feryyp/Project/sideAPP/lomba/prototype/index.html
```

Expected: Dark (#0f1117) blank page, no console errors.

- [ ] **Step 6: Commit**

```bash
cd /Users/feryyp/Project/sideAPP/lomba
git add prototype/
git commit -m "feat: scaffold portfolio prototype with base styles"
```

---

## Task 2: Navigation

**Files:**
- Modify: `prototype/index.html` — `<nav id="nav">` block
- Modify: `prototype/style.css` — nav styles

- [ ] **Step 1: Add nav markup inside `<nav id="nav">`**

```html
<nav id="nav">
  <div class="container nav-inner">
    <a href="#hero" class="nav-logo">Fery<span>.</span></a>
    <ul class="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#education">Education</a></li>
      <li><a href="#cta" class="btn btn-outline nav-cta">Hire Me</a></li>
    </ul>
  </div>
</nav>
```

- [ ] **Step 2: Add nav styles to `prototype/style.css`**

```css
/* ── Nav ── */
#nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(15, 17, 23, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}
.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}
.nav-logo {
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--text);
}
.nav-logo span { color: var(--accent); }
.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}
.nav-links a {
  color: var(--text-muted);
  font-size: 0.9rem;
  font-weight: 500;
  transition: color var(--transition);
}
.nav-links a:hover { color: var(--text); opacity: 1; }
.nav-links a.nav-cta { color: var(--accent); }
body { padding-top: 64px; }
```

- [ ] **Step 3: Visual check**

Refresh browser. Expected: Fixed dark nav, "Fery." logo on left (dot in blue), links on right, "Hire Me" outlined button.

- [ ] **Step 4: Commit**

```bash
git add prototype/
git commit -m "feat: add sticky nav with logo and section links"
```

---

## Task 3: Hero Section

**Files:**
- Modify: `prototype/index.html` — `<section id="hero">` block
- Modify: `prototype/style.css` — hero styles

- [ ] **Step 1: Add hero markup**

```html
<section id="hero">
  <div class="container hero-inner">
    <p class="hero-label">Hi, I'm Fery Yundara Putera — Senior Software Engineer</p>
    <h1 class="hero-headline">
      32 Million Lessons.<br />
      Part of the Team<br />
      That Built the Stack.
    </h1>
    <p class="hero-sub">
      Full-stack engineer with 12 years building EdTech at scale.<br />
      React · Next.js · Node.js · AI-assisted development · CI/CD
    </p>
    <div class="hero-ctas">
      <a href="#projects" class="btn btn-primary">See Projects</a>
      <a href="#cta" class="btn btn-outline">Let's Talk</a>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add hero styles**

```css
/* ── Hero ── */
#hero {
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  padding: 6rem 0 4rem;
  position: relative;
  overflow: hidden;
}
#hero::before {
  content: '';
  position: absolute;
  top: -200px;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(74, 158, 255, 0.07) 0%, transparent 70%);
  pointer-events: none;
}
.hero-inner { max-width: 780px; }
.hero-label {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--accent);
  margin-bottom: 1.25rem;
  font-weight: 600;
}
.hero-headline {
  margin-bottom: 1.5rem;
  color: var(--text);
}
.hero-sub {
  font-size: 1.05rem;
  color: var(--text-muted);
  margin-bottom: 2.5rem;
  line-height: 1.8;
}
.hero-ctas {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
```

- [ ] **Step 3: Visual check**

Refresh. Expected: Full-viewport hero, large headline "32 Million Lessons. Part of the Team That Built the Stack.", blue label above, subtext below, two CTA buttons. Subtle blue glow radial behind.

- [ ] **Step 4: Commit**

```bash
git add prototype/
git commit -m "feat: add hero section with impact headline and CTAs"
```

---

## Task 4: About Section

**Files:**
- Modify: `prototype/index.html` — `<section id="about">` block
- Modify: `prototype/style.css` — about styles

- [ ] **Step 1: Add about markup**

```html
<section id="about">
  <div class="container">
    <p class="section-label">About</p>
    <div class="about-grid">
      <div class="about-text">
        <p class="about-lead">
          Senior Software Engineer who grew from writing .NET for Suzuki dealerships
          to being a core developer on the EdTech platform that helped 32 million
          lessons reach learners in 10+ countries.
        </p>
        <p>
          Over 12 years and 5 companies — Suzuki, Elephant Talk (Spain), Xtremax (Singapore),
          and Solve Education! — I've gone deep on every layer of the stack: React, Next.js,
          Node.js, TypeScript, Django, Laravel, CI/CD pipelines, and now AI-agentic workflows.
          I don't just build features; I build systems that scale and teams that ship.
        </p>
      </div>
      <div class="about-stats">
        <div class="stat">
          <span class="stat-number">12</span>
          <span class="stat-label">Years Exp</span>
        </div>
        <div class="stat">
          <span class="stat-number">5</span>
          <span class="stat-label">Companies</span>
        </div>
        <div class="stat">
          <span class="stat-number">32M+</span>
          <span class="stat-label">Lessons Powered</span>
        </div>
        <div class="stat">
          <span class="stat-number">12+</span>
          <span class="stat-label">Products Shipped</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add about styles**

```css
/* ── About ── */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}
.about-lead {
  font-size: 1.1rem;
  color: var(--text);
  font-weight: 500;
  line-height: 1.75;
  margin-bottom: 1.25rem;
}
.about-text p:last-child { color: var(--text-muted); }
.about-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}
.stat {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.5rem;
  text-align: center;
}
.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 800;
  color: var(--accent);
  line-height: 1;
  margin-bottom: 0.4rem;
}
.stat-label {
  font-size: 0.75rem;
  color: var(--text-dim);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 500;
}
```

- [ ] **Step 3: Visual check**

Refresh. Expected: Two-column layout — left has arc paragraphs, right has 2×2 stats grid with large blue numbers (12, 5, 32M+, 12+).

- [ ] **Step 4: Commit**

```bash
git add prototype/
git commit -m "feat: add about section with arc copy and stats grid"
```

---

## Task 5: Experience Section

**Files:**
- Modify: `prototype/index.html` — `<section id="experience">` block
- Modify: `prototype/style.css` — experience styles

- [ ] **Step 1: Add experience markup**

```html
<section id="experience">
  <div class="container">
    <p class="section-label">Experience</p>
    <h2 class="section-title">Career Arc</h2>

    <!-- Featured Role -->
    <div class="exp-featured">
      <div class="exp-featured-header">
        <div>
          <span class="exp-badge">⭐ Current Role</span>
          <h3 class="exp-company">Senior Software Engineer · Solve Education!</h3>
          <p class="exp-meta">Jun 2018 – Present · Indonesia</p>
        </div>
      </div>
      <p class="exp-desc">
        Core developer of <strong>edbot.ai</strong> — a cross-functional team that delivered
        32M+ lessons across Indonesia, Malaysia, Africa, and 10+ countries. Grew from Frontend
        Engineer to Senior Software Engineer over 7 years, shipping CI/CD pipelines, E2E
        automation (Selenium), and AI-agentic development workflows.
      </p>
      <div class="exp-metrics">
        <div class="exp-metric"><span>32M+</span><small>Lessons Completed</small></div>
        <div class="exp-metric"><span>100K+</span><small>Peak Active Learners</small></div>
        <div class="exp-metric"><span>10+</span><small>Products Built</small></div>
        <div class="exp-metric"><span>10+</span><small>Countries Reached</small></div>
      </div>
      <div class="exp-tags">
        <span class="tag tag-accent">React</span>
        <span class="tag tag-accent">Next.js</span>
        <span class="tag tag-accent">Node.js</span>
        <span class="tag tag-accent">Django</span>
        <span class="tag tag-accent">Laravel</span>
        <span class="tag tag-accent">CI/CD</span>
        <span class="tag tag-accent">AI Agentic</span>
        <span class="tag tag-accent">Selenium</span>
      </div>
    </div>

    <!-- Earlier Roles Grid -->
    <p class="section-label" style="margin-top: 2.5rem;">Earlier Experience</p>
    <div class="exp-grid">

      <div class="exp-card">
        <p class="exp-period">2016 – 2018 · Singapore & Indonesia</p>
        <h3>Backend Developer</h3>
        <p class="exp-co">Xtremax</p>
        <ul class="exp-bullets">
          <li>Maintained 3 live client projects across SG & ID</li>
          <li>Certified in CRM Sitefinity</li>
          <li>Delivered MVC .NET + JavaScript solutions</li>
        </ul>
      </div>

      <div class="exp-card">
        <p class="exp-period">2015 – 2017 · Spain & Indonesia</p>
        <h3>Software Developer</h3>
        <p class="exp-co">Elephant Talk (Pareteum)</p>
        <ul class="exp-bullets">
          <li>Converted business ops into C# microservices</li>
          <li>Built 2 Angular JS + C# web applications</li>
          <li>Implemented integration & unit testing</li>
        </ul>
      </div>

      <div class="exp-card">
        <p class="exp-period">2014 – 2015 · Indonesia</p>
        <h3>.NET Developer</h3>
        <p class="exp-co">PT. Suzuki Indomobil Motor</p>
        <ul class="exp-bullets">
          <li>Built Dealer Management System for all main branches</li>
          <li>Modernised UI with Angular JS</li>
          <li>Completed full technical documentation</li>
        </ul>
      </div>

    </div>
  </div>
</section>
```

- [ ] **Step 2: Add experience styles**

```css
/* ── Experience ── */
.exp-featured {
  background: var(--accent-bg);
  border: 1px solid var(--border-accent);
  border-radius: var(--radius);
  padding: 2rem;
  margin-bottom: 2.5rem;
}
.exp-badge {
  display: inline-block;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--accent);
  margin-bottom: 0.5rem;
  font-weight: 600;
}
.exp-company {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 0.25rem;
}
.exp-meta {
  font-size: 0.82rem;
  color: var(--text-dim);
  margin-bottom: 1rem;
}
.exp-desc {
  color: var(--text-muted);
  margin-bottom: 1.5rem;
  line-height: 1.75;
}
.exp-desc strong { color: var(--text); }
.exp-metrics {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 1rem 0;
  border-top: 1px solid var(--border-accent);
  border-bottom: 1px solid var(--border-accent);
  margin-bottom: 1.25rem;
}
.exp-metric span {
  display: block;
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--accent);
}
.exp-metric small {
  font-size: 0.7rem;
  color: var(--text-dim);
  text-transform: uppercase;
  letter-spacing: 1px;
}
.exp-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.exp-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}
.exp-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.5rem;
  transition: border-color var(--transition);
}
.exp-card:hover { border-color: var(--border-accent); }
.exp-period {
  font-size: 0.72rem;
  color: var(--text-dim);
  margin-bottom: 0.4rem;
  font-weight: 500;
}
.exp-co {
  font-size: 0.85rem;
  color: var(--accent);
  margin: 0.2rem 0 0.75rem;
  font-weight: 500;
}
.exp-bullets { padding-left: 1rem; }
.exp-bullets li {
  font-size: 0.82rem;
  color: var(--text-muted);
  margin-bottom: 0.4rem;
  line-height: 1.5;
  list-style: disc;
}
```

- [ ] **Step 3: Visual check**

Refresh. Expected: Large featured Solve Education! card (blue tint, badge, metrics row, accent tags), then 3-column grid of earlier roles with hover border effect.

- [ ] **Step 4: Commit**

```bash
git add prototype/
git commit -m "feat: add experience section with featured role and 3-col grid"
```

---

## Task 6: Projects Section + Filter JS

**Files:**
- Modify: `prototype/index.html` — `<section id="projects">` block
- Modify: `prototype/style.css` — projects styles
- Modify: `prototype/main.js` — filter tab logic

- [ ] **Step 1: Add projects markup**

```html
<section id="projects">
  <div class="container">
    <p class="section-label">Projects</p>
    <h2 class="section-title">Selected Work</h2>

    <!-- Filter tabs -->
    <div class="filter-tabs">
      <button class="filter-btn active" data-filter="all">All</button>
      <button class="filter-btn" data-filter="web">Web App</button>
      <button class="filter-btn" data-filter="uxui">UX / UI</button>
      <button class="filter-btn" data-filter="mobile">Mobile</button>
    </div>

    <!-- Featured row -->
    <div class="projects-featured">
      <div class="proj-card proj-featured" data-cat="web">
        <div class="proj-card-body">
          <span class="proj-badge">⭐ Featured</span>
          <h3>edbot.ai</h3>
          <p>AI-powered free learning platform. Core developer on the team that delivered 32M+ lessons across 10+ countries.</p>
          <div class="proj-tags">
            <span class="tag">React</span><span class="tag">Next.js</span>
            <span class="tag">Django</span><span class="tag">Node.js</span>
          </div>
          <a href="https://edbot.ai" target="_blank" class="proj-link">Live Site →</a>
        </div>
      </div>
      <div class="proj-card proj-featured-sm" data-cat="web">
        <div class="proj-card-body">
          <span class="proj-badge">⭐ Featured</span>
          <h3>Learnalytics</h3>
          <p>Internal analytics dashboard for tracking learner progress and platform metrics.</p>
          <div class="proj-tags">
            <span class="tag">React</span><span class="tag">Laravel</span><span class="tag">jQuery</span>
          </div>
          <a href="https://learnalytics.solveeducation.org" target="_blank" class="proj-link">Live Site →</a>
        </div>
      </div>
    </div>

    <!-- Grid -->
    <div class="projects-grid">
      <div class="proj-card" data-cat="web">
        <div class="proj-card-body">
          <h3>Dawn of Civilization</h3>
          <p>Educational game web platform built fullstack.</p>
          <div class="proj-tags"><span class="tag">Django</span><span class="tag">HTML/CSS</span></div>
          <a href="https://dawnofcivilization.net" target="_blank" class="proj-link">Live →</a>
        </div>
      </div>
      <div class="proj-card" data-cat="web">
        <div class="proj-card-body">
          <h3>SICC — Singapore Int'l Commercial Court</h3>
          <p>Government web platform for Singapore's international arbitration court.</p>
          <div class="proj-tags"><span class="tag">.NET MVC</span></div>
        </div>
      </div>
      <div class="proj-card" data-cat="web">
        <div class="proj-card-body">
          <h3>Localizy</h3>
          <p>Localisation management tool for content teams.</p>
          <div class="proj-tags"><span class="tag">React</span><span class="tag">Laravel</span></div>
          <a href="https://localizy.dawnofcivilization.net" target="_blank" class="proj-link">Live →</a>
        </div>
      </div>
      <div class="proj-card" data-cat="web">
        <div class="proj-card-body">
          <h3>Solve Employment</h3>
          <p>Job-matching platform for underserved communities.</p>
          <div class="proj-tags"><span class="tag">React</span><span class="tag">HTML/CSS</span></div>
          <a href="https://solveemployment.com" target="_blank" class="proj-link">Live →</a>
        </div>
      </div>
      <div class="proj-card" data-cat="web">
        <div class="proj-card-body">
          <h3>Mendaki Challenge</h3>
          <p>Gamified learning challenge for Mendaki Singapore.</p>
          <div class="proj-tags"><span class="tag">HTML</span><span class="tag">jQuery</span></div>
          <a href="https://mendaki.dawnofcivilization.net" target="_blank" class="proj-link">Live →</a>
        </div>
      </div>
      <div class="proj-card" data-cat="web">
        <div class="proj-card-body">
          <h3>Suzuki Dealer Management System</h3>
          <p>Internal DMS deployed to all Suzuki Indonesia main branches.</p>
          <div class="proj-tags"><span class="tag">.NET MVC</span><span class="tag">Angular JS</span></div>
        </div>
      </div>
      <div class="proj-card" data-cat="uxui">
        <div class="proj-card-body">
          <h3>Pariwisata Mockup</h3>
          <p>UI/UX design for a tourism web application.</p>
          <div class="proj-tags"><span class="tag">Figma</span></div>
        </div>
      </div>
      <div class="proj-card" data-cat="uxui">
        <div class="proj-card-body">
          <h3>Natakraf Apps Mockup</h3>
          <p>Mobile app UI/UX design and prototype.</p>
          <div class="proj-tags"><span class="tag">Figma</span></div>
        </div>
      </div>
      <div class="proj-card" data-cat="mobile uxui">
        <div class="proj-card-body">
          <h3>Dompu Apps</h3>
          <p>React Native mobile app with Figma design.</p>
          <div class="proj-tags"><span class="tag">React Native</span><span class="tag">Figma</span></div>
        </div>
      </div>
      <div class="proj-card" data-cat="mobile">
        <div class="proj-card-body">
          <h3>Plareon: Daily Hoops Trainer</h3>
          <p>Published Android basketball training game with in-app purchases.</p>
          <div class="proj-tags"><span class="tag tag-accent">Android</span><span class="tag">Lampalampa ID</span></div>
          <a href="https://play.google.com/store/apps/details?id=com.plareon.ball" target="_blank" class="proj-link">Play Store →</a>
        </div>
      </div>
      <div class="proj-card" data-cat="mobile">
        <div class="proj-card-body">
          <h3>Qadha: Build Salah Consistency</h3>
          <p>Published Android app for Islamic prayer habit tracking.</p>
          <div class="proj-tags"><span class="tag tag-accent">Android</span><span class="tag">Lampalampa ID</span></div>
          <a href="https://play.google.com/store/apps/details?id=com.qadha.islam" target="_blank" class="proj-link">Play Store →</a>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add projects styles**

```css
/* ── Projects ── */
.filter-tabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}
.filter-btn {
  padding: 0.4rem 1rem;
  border-radius: 20px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text-muted);
  font-size: 0.82rem;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: all var(--transition);
}
.filter-btn:hover { border-color: var(--border-accent); color: var(--text); }
.filter-btn.active {
  background: var(--accent-bg-strong);
  border-color: var(--border-accent);
  color: var(--accent);
}
.projects-featured {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.25rem;
  margin-bottom: 1.25rem;
}
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}
.proj-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: border-color var(--transition), transform var(--transition);
}
.proj-card:hover {
  border-color: var(--border-accent);
  transform: translateY(-2px);
}
.proj-card-body { padding: 1.5rem; }
.proj-featured .proj-card-body,
.proj-featured-sm .proj-card-body {
  background: var(--accent-bg);
  border-radius: var(--radius);
}
.proj-badge {
  display: inline-block;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--accent);
  margin-bottom: 0.5rem;
  font-weight: 600;
}
.proj-card h3 {
  color: var(--text);
  margin-bottom: 0.5rem;
}
.proj-card p {
  font-size: 0.85rem;
  margin-bottom: 0.75rem;
  line-height: 1.6;
}
.proj-tags { display: flex; flex-wrap: wrap; gap: 0.35rem; margin-bottom: 0.75rem; }
.proj-link {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--accent);
}
.proj-card.hidden { display: none; }
```

- [ ] **Step 3: Add filter logic to `prototype/main.js`**

```js
document.addEventListener('DOMContentLoaded', () => {
  // ── Project filter ──
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projCards = document.querySelectorAll('.projects-grid .proj-card');
  const featuredCards = document.querySelectorAll('.projects-featured .proj-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const allCards = [...projCards, ...featuredCards];
      allCards.forEach(card => {
        const cats = card.dataset.cat || '';
        if (filter === 'all' || cats.includes(filter)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
});
```

- [ ] **Step 4: Visual check**

Refresh. Expected: Filter tabs (All/Web App/UX/UI/Mobile), featured 2-column row (edbot.ai wide, Learnalytics narrow), 3-column grid below. Click "Mobile" — only Plareon, Qadha, Dompu visible. Click "All" — everything shows.

- [ ] **Step 5: Commit**

```bash
git add prototype/
git commit -m "feat: add projects section with filter tabs and 11 projects"
```

---

## Task 7: Skills Section

**Files:**
- Modify: `prototype/index.html` — `<section id="skills">` block
- Modify: `prototype/style.css` — skills styles

- [ ] **Step 1: Add skills markup**

```html
<section id="skills">
  <div class="container">
    <p class="section-label">Skills</p>
    <h2 class="section-title">Technical Expertise</h2>

    <div class="skills-pillars">

      <div class="pillar">
        <div class="pillar-icon">⚡</div>
        <h3>Web Engineering</h3>
        <div class="skill-group">
          <p class="skill-group-label">Frontend</p>
          <div class="skill-tags">
            <span class="tag">React</span>
            <span class="tag">Next.js</span>
            <span class="tag">TypeScript</span>
            <span class="tag">Angular JS</span>
            <span class="tag">HTML / CSS</span>
          </div>
        </div>
        <div class="skill-group">
          <p class="skill-group-label">Backend</p>
          <div class="skill-tags">
            <span class="tag tag-accent">Node.js ✦</span>
            <span class="tag tag-accent">Express ✦</span>
            <span class="tag">Django</span>
            <span class="tag">Laravel</span>
            <span class="tag">.NET / C#</span>
            <span class="tag">REST API</span>
          </div>
        </div>
        <div class="skill-group">
          <p class="skill-group-label">Database</p>
          <div class="skill-tags">
            <span class="tag tag-accent">MongoDB ✦</span>
            <span class="tag tag-accent">MySQL ✦</span>
          </div>
        </div>
      </div>

      <div class="pillar">
        <div class="pillar-icon">🤖</div>
        <h3>AI-Assisted Dev</h3>
        <div class="skill-tags" style="margin-top: 1rem;">
          <span class="tag tag-accent">Agentic workflows</span>
          <span class="tag tag-accent">AI productivity</span>
          <span class="tag">CI/CD</span>
          <span class="tag">Selenium</span>
          <span class="tag">JEST</span>
          <span class="tag">Unit Testing</span>
          <span class="tag">Agile / Scrum</span>
        </div>
      </div>

      <div class="pillar">
        <div class="pillar-icon">🎨</div>
        <h3>UX / Product &amp; Mobile</h3>
        <div class="skill-tags" style="margin-top: 1rem;">
          <span class="tag">Figma</span>
          <span class="tag">React Native</span>
          <span class="tag">Android (Play Store)</span>
          <span class="tag">UI Design</span>
          <span class="tag">WordPress</span>
          <span class="tag">Agile delivery</span>
        </div>
      </div>

    </div>

    <div class="skills-also">
      <p class="section-label">Also proficient in</p>
      <div class="skill-tags">
        <span class="tag">GraphQL</span>
        <span class="tag">Apollo</span>
        <span class="tag">jQuery</span>
        <span class="tag">PHP</span>
        <span class="tag">Lumen</span>
        <span class="tag">emotion (CSS-in-JS)</span>
      </div>
    </div>
    <p class="skills-note">✦ = current focus</p>
  </div>
</section>
```

- [ ] **Step 2: Add skills styles**

```css
/* ── Skills ── */
.skills-pillars {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}
.pillar {
  background: var(--accent-bg);
  border: 1px solid var(--border-accent);
  border-radius: var(--radius);
  padding: 1.75rem;
}
.pillar-icon { font-size: 1.75rem; margin-bottom: 0.75rem; }
.pillar h3 { margin-bottom: 1rem; color: var(--text); }
.skill-group { margin-bottom: 1rem; }
.skill-group-label {
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--accent);
  opacity: 0.8;
  margin-bottom: 0.4rem;
  font-weight: 600;
}
.skill-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.skills-also { margin-bottom: 1rem; }
.skills-also .section-label { margin-bottom: 0.75rem; }
.skills-note {
  font-size: 0.75rem;
  color: var(--text-dim);
}
```

- [ ] **Step 3: Visual check**

Refresh. Expected: 3-column pillar cards (blue tinted). Pillar 1 has Frontend/Backend/Database sub-groups with current focus tags in blue. Pillars 2 & 3 flat tag lists. "Also proficient in" row below. "✦ = current focus" note.

- [ ] **Step 4: Commit**

```bash
git add prototype/
git commit -m "feat: add skills section with 3 pillars and current-focus tags"
```

---

## Task 8: Education + CTA Sections

**Files:**
- Modify: `prototype/index.html` — `<section id="education">` + `<section id="cta">` blocks
- Modify: `prototype/style.css` — education + CTA styles

- [ ] **Step 1: Add education markup**

```html
<section id="education">
  <div class="container">
    <p class="section-label">Education</p>
    <h2 class="section-title">Academic Background</h2>
    <div class="edu-grid">
      <div class="edu-card edu-primary">
        <p class="edu-period">2015 – 2017 · Jakarta</p>
        <h3>Bina Nusantara University</h3>
        <p class="edu-degree">S1 Information Systems</p>
        <span class="edu-gpa">GPA 3.51 / 4.0</span>
      </div>
      <div class="edu-card">
        <p class="edu-period">2010 – 2013 · Bandung</p>
        <h3>Telkom University</h3>
        <p class="edu-degree">D3 Computer Engineering</p>
        <span class="edu-gpa">GPA 3.45 / 4.0</span>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add CTA markup**

```html
<section id="cta">
  <div class="container">
    <div class="cta-box">
      <h2>Ready to work together?</h2>
      <p>12 years. 5 companies. Part of the team behind 32M+ lessons.<br />Let's build something great together.</p>
      <a href="mailto:feryyp.work@gmail.com" class="cta-email">feryyp.work@gmail.com</a>
      <div class="cta-btns">
        <a href="mailto:feryyp.work@gmail.com" class="btn btn-primary">Hire Me</a>
        <a href="https://github.com/feryyp" target="_blank" class="btn btn-outline">GitHub</a>
        <a href="https://linkedin.com/in/feryyp" target="_blank" class="btn btn-outline">LinkedIn</a>
      </div>
    </div>
  </div>
  <footer class="footer">
    <div class="container">
      <p>© 2026 Fery Yundara Putera · Built with ❤️</p>
    </div>
  </footer>
</section>
```

- [ ] **Step 3: Add education + CTA styles**

```css
/* ── Education ── */
.edu-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  max-width: 680px;
}
.edu-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.5rem;
}
.edu-card.edu-primary {
  background: var(--accent-bg);
  border-color: var(--border-accent);
}
.edu-period {
  font-size: 0.72rem;
  color: var(--text-dim);
  margin-bottom: 0.4rem;
  font-weight: 500;
}
.edu-card h3 { color: var(--text); margin-bottom: 0.2rem; }
.edu-degree {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 0.6rem;
}
.edu-gpa {
  display: inline-block;
  background: var(--accent-bg-strong);
  color: var(--accent-light);
  font-size: 0.75rem;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-weight: 600;
}

/* ── CTA ── */
#cta {
  padding-bottom: 0;
  background: linear-gradient(to bottom, var(--bg) 0%, #0a0d15 100%);
}
.cta-box {
  text-align: center;
  padding: 5rem 2rem;
  max-width: 600px;
  margin: 0 auto;
}
.cta-box h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--text);
}
.cta-box > p {
  font-size: 1rem;
  margin-bottom: 1.25rem;
  line-height: 1.8;
}
.cta-email {
  display: block;
  color: var(--text-dim);
  font-size: 0.9rem;
  margin-bottom: 2rem;
  font-weight: 500;
}
.cta-email:hover { color: var(--accent); opacity: 1; }
.cta-btns {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
.footer {
  border-top: 1px solid var(--border);
  padding: 1.5rem 0;
  margin-top: 3rem;
}
.footer p {
  font-size: 0.82rem;
  text-align: center;
  color: var(--text-dim);
}
```

- [ ] **Step 4: Visual check**

Refresh + scroll to bottom. Expected: Education — 2 side-by-side cards (Binus with blue tint, Telkom plain), GPA badge visible. CTA — centered, large "Ready to work together?", echoes 32M line, 3 buttons (Hire Me primary, GitHub + LinkedIn outline). Footer below.

- [ ] **Step 5: Commit**

```bash
git add prototype/
git commit -m "feat: add education and CTA sections with footer"
```

---

## Task 9: Responsive + Polish

**Files:**
- Modify: `prototype/style.css` — responsive breakpoints, scroll polish
- Modify: `prototype/main.js` — active nav highlight on scroll

- [ ] **Step 1: Add responsive breakpoints to end of `style.css`**

```css
/* ── Responsive ── */
@media (max-width: 900px) {
  .about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
  .exp-grid { grid-template-columns: 1fr 1fr; }
  .skills-pillars { grid-template-columns: 1fr; }
  .projects-featured { grid-template-columns: 1fr; }
  .projects-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 600px) {
  h1 { font-size: 2rem; }
  .nav-links { gap: 1rem; }
  .nav-links a:not(.nav-cta) { display: none; }
  .exp-grid { grid-template-columns: 1fr; }
  .projects-grid { grid-template-columns: 1fr; }
  .edu-grid { grid-template-columns: 1fr; }
  .about-stats { grid-template-columns: 1fr 1fr; }
  .hero-ctas { flex-direction: column; align-items: flex-start; }
}
```

- [ ] **Step 2: Add active nav highlight on scroll to `main.js`**

```js
document.addEventListener('DOMContentLoaded', () => {
  // ── Project filter ──
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projCards = document.querySelectorAll('.projects-grid .proj-card');
  const featuredCards = document.querySelectorAll('.projects-featured .proj-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const allCards = [...projCards, ...featuredCards];
      allCards.forEach(card => {
        const cats = card.dataset.cat || '';
        if (filter === 'all' || cats.includes(filter)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // ── Active nav on scroll ──
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle(
            'nav-active',
            link.getAttribute('href') === `#${id}`
          );
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
});
```

- [ ] **Step 3: Add nav-active style to `style.css`**

```css
.nav-links a.nav-active { color: var(--text); }
```

- [ ] **Step 4: Visual check — desktop**

Refresh at full width. Scroll through all sections. Expected: Nav link highlights as you scroll. All sections properly spaced. Cards hover-lift.

- [ ] **Step 5: Visual check — mobile**

Open DevTools, set to 375px width. Expected: Single-column layout throughout, nav collapses to logo + "Hire Me" only, hero readable, stats 2-col, no horizontal overflow.

- [ ] **Step 6: Commit**

```bash
git add prototype/
git commit -m "feat: add responsive breakpoints and scroll-active nav"
```

---

## Task 10: Final Review + Prototype Handoff

**Files:** Read-only review, no changes unless issues found.

- [ ] **Step 1: Full scroll-through check against spec**

Open `prototype/index.html`. Verify each spec requirement:

| Spec requirement | Check |
|---|---|
| Hero: "32 Million Lessons. Part of the Team That Built the Stack." | ☐ |
| Hero label: "Hi, I'm Fery Yundara Putera — Senior Software Engineer" | ☐ |
| About: arc copy + 4 stats (12 yrs, 5 co, 32M+, 12+ products) | ☐ |
| Experience: Solve Education! featured with metrics + tags | ☐ |
| Experience: Xtremax, Elephant Talk, Suzuki in 3-col grid with bullets | ☐ |
| Projects: filter tabs (All/Web App/UX/UI/Mobile) working | ☐ |
| Projects: edbot.ai + Learnalytics as featured | ☐ |
| Projects: Plareon + Qadha in Mobile tab | ☐ |
| Skills: 3 pillars (Web Eng / AI Dev / UX+Mobile) | ☐ |
| Skills: Node.js, Express, TypeScript, MongoDB, MySQL marked ✦ | ☐ |
| Education: Binus + Telkom side-by-side with GPA | ☐ |
| CTA: echoes 32M line, email feryyp.work@gmail.com, 3 buttons | ☐ |

- [ ] **Step 2: Fix any spec mismatches found above**

- [ ] **Step 3: Final commit**

```bash
git add prototype/
git commit -m "feat: complete portfolio prototype — all 7 sections, responsive, ready for review"
```

- [ ] **Step 4: Invoke prototype review skills**

When executing, invoke these skills in order:
1. `/ui-ux-pro-max:ui-ux-pro-max` — UX/UI quality review of the prototype
2. `/frontend-design:frontend-design` — Frontend design polish pass

---

## Self-Review Notes

**Spec coverage:** All 7 sections covered (Hero ✓, About ✓, Experience ✓, Projects ✓, Skills ✓, Education ✓, CTA ✓). Lampalampa Indonesia apps in Mobile filter ✓. 12 years exp ✓. Name + email correct ✓. Team framing on edbot.ai ✓.

**No placeholders:** All tasks contain complete HTML/CSS/JS code. No TBD entries.

**Type consistency:** CSS class names consistent across all tasks (`.exp-featured`, `.proj-card`, `.pillar`, `.edu-card`, `.stat` used uniformly). JS uses `data-cat` attribute on all project cards, `data-filter` on all filter buttons — consistent in both markup and JS logic.
