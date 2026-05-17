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
  tags: ["React", "Next.js", "Django", "Laravel", "Node.js", "TypeScript", "CI/CD", "AI Agentic", "Selenium"],
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
              borderBottom: "none",
              borderRadius: "var(--radius) var(--radius) 0 0",
              padding: "1.75rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Accent top line */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: "linear-gradient(90deg, var(--accent), transparent 60%)",
              }}
            />

            {/* Header row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "0.4rem",
                flexWrap: "wrap",
                gap: "0.5rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap" }}>
                <span style={{ fontSize: "1rem", fontWeight: 700, color: "#fff", letterSpacing: "-0.01em" }}>
                  {FEATURED.company}
                </span>
                <span
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 600,
                    color: "var(--accent)",
                    background: "var(--accent-bg)",
                    border: "1px solid var(--border-accent)",
                    borderRadius: "999px",
                    padding: "2px 8px",
                    letterSpacing: "0.02em",
                  }}
                >
                  {FEATURED.badge}
                </span>
              </div>
              <span style={{ fontSize: "0.77rem", color: "rgba(255,255,255,0.28)" }}>
                {FEATURED.period} · {FEATURED.location}
              </span>
            </div>

            <p style={{ fontSize: "0.78rem", fontWeight: 600, color: "rgba(255,255,255,0.45)", marginBottom: "1rem", letterSpacing: "0.02em" }}>
              {FEATURED.role}
            </p>

            <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.58)", lineHeight: 1.75, marginBottom: "1rem" }}>
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
                    fontSize: "0.84rem",
                    color: "rgba(255,255,255,0.48)",
                    paddingLeft: "1rem",
                    position: "relative",
                    lineHeight: 1.6,
                  }}
                >
                  <span style={{ position: "absolute", left: 0, color: "var(--accent)", fontWeight: 700 }}>–</span>
                  {b}
                </li>
              ))}
            </ul>

            {/* Inline stats */}
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
                <span key={s} style={{ fontSize: "0.72rem", fontWeight: 600, color: "var(--accent)", letterSpacing: "0.03em" }}>
                  {s}
                </span>
              ))}
            </div>

            {/* Tags */}
            <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
              {FEATURED.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Earlier roles grid */}
        <StaggerGroup
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1px",
            background: "var(--border)",
            border: "1px solid var(--border)",
            borderTop: "none",
            borderRadius: "0 0 var(--radius) var(--radius)",
            overflow: "hidden",
          }}
          delay={0.3}
        >
          {EARLIER.map((role) => (
            <StaggerItem key={role.company}>
              <div style={{ background: "var(--bg-card)", padding: "1.25rem", height: "100%" }}>
                <p style={{ fontSize: "0.88rem", fontWeight: 700, color: "#fff", marginBottom: "0.2rem" }}>
                  {role.company}
                </p>
                <p style={{ fontSize: "0.71rem", color: "rgba(255,255,255,0.26)", marginBottom: "0.2rem" }}>
                  {role.period} · {role.location}
                </p>
                <p style={{ fontSize: "0.74rem", fontWeight: 600, color: "rgba(255,255,255,0.38)", marginBottom: "0.75rem" }}>
                  {role.role}
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                  {role.bullets.map((b) => (
                    <li
                      key={b}
                      style={{
                        fontSize: "0.78rem",
                        color: "rgba(255,255,255,0.38)",
                        paddingLeft: "0.75rem",
                        position: "relative",
                        lineHeight: 1.55,
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
