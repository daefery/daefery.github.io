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
          }}
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
                    marginBottom: "0.15rem",
                  }}
                >
                  {pillar.label}
                </p>
                <p
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 600,
                    color: "var(--accent)",
                    letterSpacing: "0.07em",
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
          <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.18)", marginTop: "0.6rem" }}>
            * current focus
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
