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
          }}
          delay={0.1}
        >
          {SCHOOLS.map((s) => (
            <StaggerItem key={s.name}>
              <div style={{ background: "var(--bg-card)", padding: "1.5rem" }}>
                <p
                  style={{
                    fontSize: "0.67rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                  }}
                >
                  {s.short}
                </p>
                <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "#fff", marginBottom: "0.2rem", letterSpacing: "-0.01em" }}>
                  {s.degree}
                </p>
                <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.33)", marginBottom: "1rem" }}>
                  {s.name}
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.22)" }}>{s.period}</span>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: "var(--accent)",
                      background: "var(--accent-bg)",
                      border: "1px solid var(--border-accent)",
                      borderRadius: "999px",
                      padding: "2px 9px",
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
