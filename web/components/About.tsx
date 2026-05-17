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
              fontSize: "1.1rem",
              fontWeight: 600,
              lineHeight: 1.7,
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
              color: "rgba(255,255,255,0.42)",
              lineHeight: 1.8,
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
                    fontSize: "0.68rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.25)",
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
