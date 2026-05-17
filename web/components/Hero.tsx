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
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 20%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 20%, black 40%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative" }}>
        {/* Open to work badge */}
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
                flexShrink: 0,
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

        {/* Fading headline */}
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
              transition={{
                duration: 0.7,
                delay: line.delay,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 900,
                lineHeight: 1.0,
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
            color: "rgba(255,255,255,0.4)",
            marginBottom: "2rem",
            maxWidth: "480px",
            lineHeight: 1.75,
          }}
        >
          Full-stack engineer with 12 years building EdTech at scale. React · Next.js · Node.js · AI-assisted development · CI/CD
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ display: "flex", gap: "0.75rem", marginBottom: "3.5rem", flexWrap: "wrap" }}
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
              color: "rgba(255,255,255,0.5)",
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
              e.currentTarget.style.color = "rgba(255,255,255,0.5)";
            }}
          >
            Let&apos;s Talk
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            display: "flex",
            gap: "2rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            flexWrap: "wrap",
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
                  color: "rgba(255,255,255,0.22)",
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
