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
              color: "rgba(255,255,255,0.38)",
              lineHeight: 1.75,
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
                color: "rgba(255,255,255,0.5)",
                fontSize: "0.82rem",
                fontWeight: 600,
                borderRadius: "var(--radius-sm)",
                transition: "border-color 0.2s, color 0.2s",
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
                color: "rgba(255,255,255,0.5)",
                fontSize: "0.82rem",
                fontWeight: 600,
                borderRadius: "var(--radius-sm)",
                transition: "border-color 0.2s, color 0.2s",
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
              fontSize: "0.7rem",
              color: "rgba(255,255,255,0.16)",
              letterSpacing: "0.04em",
            }}
          >
            Fery Yundara Putera &nbsp;&middot;&nbsp; Senior Software Engineer &nbsp;&middot;&nbsp; Indonesia
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
