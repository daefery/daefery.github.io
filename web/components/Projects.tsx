"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeUp from "@/components/motion/FadeUp";

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
    desc: "AI learning platform. Core team developer — delivered 32M+ lessons across 10+ countries.",
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
  },
  {
    name: "Dawn of Civilization",
    desc: "Fullstack educational game platform.",
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
    desc: "Singapore International Commercial Court — public site.",
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

function ProjectCard({ p, large }: { p: Project; large?: boolean }) {
  return (
    <div
      style={{
        background: "var(--bg-card)",
        padding: large ? "1.5rem" : "1.1rem",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "0.4rem",
          gap: "0.5rem",
        }}
      >
        <p
          style={{
            fontSize: large ? "0.95rem" : "0.85rem",
            fontWeight: 700,
            color: "#fff",
            letterSpacing: "-0.01em",
          }}
        >
          {p.name}
        </p>
        {p.link && (
          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flexShrink: 0,
              fontSize: "0.68rem",
              fontWeight: 600,
              color: "var(--accent)",
              border: "1px solid var(--border-accent)",
              borderRadius: "999px",
              padding: "2px 8px",
              whiteSpace: "nowrap",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--accent-bg)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            {p.linkLabel}
          </a>
        )}
      </div>
      <p
        style={{
          fontSize: large ? "0.84rem" : "0.78rem",
          color: "rgba(255,255,255,0.4)",
          lineHeight: 1.65,
          marginBottom: "0.75rem",
          flex: 1,
        }}
      >
        {p.desc}
      </p>
      <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
        {p.tags.map((t) => (
          <span key={t} className="tag" style={{ fontSize: large ? "0.72rem" : "0.65rem" }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

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
                  color: active === f.key ? "#fff" : "rgba(255,255,255,0.35)",
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </FadeUp>

        {/* Featured row */}
        <AnimatePresence mode="wait">
          {featured.length > 0 && (
            <motion.div
              key={`featured-${active}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1px",
                background: "var(--border)",
                border: "1px solid var(--border)",
                borderBottom: grid.length > 0 ? "none" : "1px solid var(--border)",
                borderRadius: grid.length > 0 ? "var(--radius) var(--radius) 0 0" : "var(--radius)",
                overflow: "hidden",
              }}
            >
              {featured.map((p) => (
                <ProjectCard key={p.name} p={p} large />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Grid */}
        <AnimatePresence mode="wait">
          {grid.length > 0 && (
            <motion.div
              key={`grid-${active}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: "1px",
                background: "var(--border)",
                border: "1px solid var(--border)",
                borderRadius:
                  featured.length > 0
                    ? "0 0 var(--radius) var(--radius)"
                    : "var(--radius)",
                overflow: "hidden",
              }}
            >
              {grid.map((p) => (
                <ProjectCard key={p.name} p={p} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
