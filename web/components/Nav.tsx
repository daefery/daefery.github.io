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
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
        background: scrolled ? "rgba(8,12,20,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        transition: "background 0.3s, border-color 0.3s",
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
        <div
          className="nav-links"
          style={{ display: "flex", gap: "1.75rem", alignItems: "center" }}
        >
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
