import Link from 'next/link'
import BASE_PATH from '@/lib/basePath'

export const metadata = {
  title: 'Resume — Fery Yundara Putera',
  description:
    '12+ years of full-stack engineering across EdTech, enterprise, and government sectors. React, Next.js, Django, Laravel, .NET, React Native.',
  openGraph: {
    title: 'Resume — Fery Yundara Putera | Senior Software Engineer',
    description:
      '12+ years of full-stack engineering across EdTech, enterprise, and government sectors.',
    url: 'https://daefery.github.io/feryyp/resume',
  },
  alternates: { canonical: 'https://daefery.github.io/feryyp/resume' },
}

export default function ResumePage() {
  return (
    <div className="container bento-container">
      {/* START HEADER */}
      <header className="d-flex justify-content-between align-items-center mb-5 animate__animated animate__fadeInDown">
        <div className="logo-text">
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>FYP.</Link>
        </div>
      </header>
      {/* END HEADER */}

      {/* START HERO SECTION */}
      <div className="bento-card card-hero wow animate__fadeInLeft">
        <span className="card-number">01 / EXPERTISE</span>
        <div className="badge-status">
          <i className="fa-solid fa-circle"></i>
          Senior Software Engineer
        </div>
        <h1 className="hero-title">
          12 YEARS.<br /><span>5 COMPANIES.</span><br />STILL BUILDING.
        </h1>
        <p className="hero-desc">
          From writing .NET for Suzuki dealerships to EdTech platforms running in 10+ countries. Here&apos;s the full story.
        </p>
      </div>
      {/* END HERO SECTION */}

      {/* START STATS SECTION */}
      <div className="bento-card card-profile wow animate__fadeInRight">
        <span className="card-number">02 / IMPACT</span>
        <div className="stat-item mt-4">
          <span className="stat-num">12+</span>
          <span className="stat-label d-block">Years Building</span>
        </div>
        <p className="text-muted small fw-bold text-uppercase mt-4">
          Full Stack &amp; AI-First
        </p>
        <div className="mt-auto w-100">
          <a
            href={`${BASE_PATH}/assets/fery-yundara-putera-cv.pdf`}
            download="Fery-Yundara-Putera-CV.pdf"
            className="btn btn-light rounded-pill w-100 py-3 fw-bold text-uppercase"
          >
            Download CV <i className="fa-solid fa-file-arrow-down ms-2"></i>
          </a>
        </div>
      </div>
      {/* END STATS SECTION */}

      {/* START EXPERIENCE SECTION */}
      <div className="bento-card card-experience wow animate__fadeInUp">
        <span className="card-number">03 / TIMELINE</span>
        <h2 className="text-uppercase mb-4">Experience.</h2>

        <div className="timeline-stack">
          <div className="timeline-item">
            <div className="timeline-meta">
              <span className="time-range">JUN 2018 — PRESENT</span>
              <span className="company">Solve Education!</span>
            </div>
            <div className="timeline-content">
              <h4 className="role">Senior Software Engineer</h4>
              <p className="small text-muted">
                Core developer of edbot.ai. 32M+ lessons, 10+ countries, 100K+ peak MAL. Built CI/CD pipelines and Selenium E2E testing. Products: Learnalytics, Content+, Localizy, Dawn of Civilization, Solve Employment. Indonesia.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-meta">
              <span className="time-range">2016 — 2018</span>
              <span className="company">Xtremax</span>
            </div>
            <div className="timeline-content">
              <h4 className="role">Backend Developer</h4>
              <p className="small text-muted">
                Maintained 3 live client projects. Certified CRM Sitefinity. MVC .NET + JavaScript solutions. Singapore &amp; Indonesia.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-meta">
              <span className="time-range">2015 — 2017</span>
              <span className="company">Elephant Talk (Pareteum)</span>
            </div>
            <div className="timeline-content">
              <h4 className="role">Software Developer</h4>
              <p className="small text-muted">
                C# microservices. 2 Angular JS + C# web apps. Integration &amp; unit testing. Spain &amp; Indonesia.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-meta">
              <span className="time-range">2014 — 2015</span>
              <span className="company">PT. Suzuki Indomobil Motor</span>
            </div>
            <div className="timeline-content">
              <h4 className="role">.NET Developer</h4>
              <p className="small text-muted">
                Dealer Management System for all main branches. Angular JS UI modernisation. Indonesia.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* END EXPERIENCE SECTION */}

      {/* START TECH STACK SECTION */}
      <div
        className="bento-card card-tech wow animate__fadeInUp"
        data-wow-delay="0.1s"
      >
        <span className="card-number">04 / STACK</span>
        <h3 className="text-uppercase mb-4">Tech Stack.</h3>
        <div className="tech-grid">
          {['React / Next.js', 'TypeScript', 'Node.js / Express', 'Django', 'Laravel',
            '.NET / C#', 'MongoDB / MySQL', 'CI/CD / DevOps', 'Selenium / JEST',
            'AI Agentic Workflows', 'Figma', 'React Native / Android',
            'REST API / GraphQL', 'WordPress'].map((tag) => (
            <div key={tag} className="tech-tag">{tag}</div>
          ))}
        </div>
      </div>
      {/* END TECH STACK SECTION */}

      {/* START EDUCATION SECTION */}
      <div
        className="bento-card card-edu wow animate__fadeInUp"
        data-wow-delay="0.2s"
      >
        <span className="card-number">05 / ACADEMIC</span>
        <h3 className="text-uppercase mb-4">Education.</h3>
        <div className="edu-item mb-4">
          <div className="edu-meta">Bina Nusantara University (Binus), Jakarta</div>
          <h5 className="edu-title">S1 Information Systems</h5>
          <p className="small text-muted">
            GPA 3.51/4.0, 2015–2017
          </p>
        </div>
        <div className="edu-item">
          <div className="edu-meta">Telkom University, Bandung</div>
          <h5 className="edu-title">D3 Computer Engineering</h5>
          <p className="small text-muted">
            GPA 3.45/4.0, 2010–2013
          </p>
        </div>
      </div>
      {/* END EDUCATION SECTION */}

      {/* START SKILLS SECTION */}
      <div className="bento-card card-skills-full wow animate__fadeInUp">
        <span className="card-number">06 / MASTERY</span>
        <h3 className="text-uppercase mb-5">Skills.</h3>

        <div className="skill-meter-grid">
          {[
            { name: 'React / Next.js Engineering', pct: 95 },
            { name: 'Node.js / Backend Systems', pct: 88 },
            { name: 'AI-Agentic Workflows', pct: 85 },
            { name: 'CI/CD & DevOps', pct: 82 },
          ].map(({ name, pct }) => (
            <div key={name} className="skill-meter-item">
              <div className="d-flex justify-content-between mb-2">
                <span className="skill-name">{name}</span>
                <span className="skill-percent">{pct}%</span>
              </div>
              <div className="skill-track">
                <div className="skill-fill" style={{ width: `${pct}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* END SKILLS SECTION */}

      {/* START FOOTER */}
      <footer className="card-footer">
        <p className="small opacity-50 fw-bold">
          © 2026 Fery Yundara Putera.
        </p>
      </footer>
      {/* END FOOTER */}
    </div>
  )
}
