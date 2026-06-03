import Link from 'next/link'
import BASE_PATH from '@/lib/basePath'
import PageFooter from '@/components/PageFooter'

export const metadata = {
  title: 'Resume — Fery Yundara Putera',
  description:
    '12+ years of full-stack engineering. Frontend architecture at scale, AI content tools, and solo-shipped products. React, Next.js, Node, Django, React Native, SwiftUI.',
  openGraph: {
    title: 'Resume — Fery Yundara Putera | Senior Full-Stack Engineer',
    description:
      '12+ years of full-stack engineering. Frontend architecture at scale, AI content tools, and solo-shipped products.',
    url: 'https://daefery.github.io/resume',
  },
  alternates: { canonical: 'https://daefery.github.io/resume' },
}

export default function ResumePage() {
  return (
    <div className="container bento-container">
      {/* START HEADER */}
      <header className="d-flex justify-content-between align-items-center mb-5 animate__animated animate__fadeInDown">
        <div className="logo-text">
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>FYP.</Link>
        </div>
        <Link
          href="/products"
          className="btn btn-light rounded-pill px-4 py-2 fw-bold text-uppercase"
          style={{ fontSize: 12, letterSpacing: 1 }}
        >
          Products <i className="fa-solid fa-arrow-right-long ms-2"></i>
        </Link>
      </header>
      {/* END HEADER */}

      {/* START HERO SECTION */}
      <div className="bento-card card-hero wow animate__fadeInLeft">
        <span className="card-number">01 / EXPERTISE</span>
        <div className="badge-status">
          <i className="fa-solid fa-circle"></i>
          Senior Full-Stack Engineer
        </div>
        <h1 className="hero-title">
          12 YEARS.<br /><span>5 COMPANIES.</span><br />STILL BUILDING.
        </h1>
        <p className="hero-desc">
          From .NET for Suzuki dealerships to owning the frontend architecture of an EdTech platform running in 10+ countries. Here&apos;s the full story.
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
          Frontend Architecture · Ships Products Solo
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
              <h4 className="role">Senior Full-Stack Engineer</h4>
              <p className="small text-muted">
                Core engineer on edbot.ai (32M+ lessons, 100K+ peak monthly users, 10+ countries). Owned the frontend architecture — framework choice, folder structure, state management, analytics, localization — behind Learning, Profile, Mission, Store, and Settings. Built the team&apos;s first CI/CD + Selenium E2E suite, replacing manual deploys. Built two AI content tools: Content+ (with one other engineer) and DCS (solo). Mentored 3–5 interns. Now setting up the frontend foundation for the in-development edbot.ai v2. Indonesia.
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
          {[
            'React / Next.js', 'TypeScript', 'Node.js / Express', 'Django',
            'React Native / Expo', 'SwiftUI / macOS', 'Kotlin',
            'PostgreSQL / Supabase', 'MongoDB / MySQL', 'CI/CD / DevOps',
            'Selenium / Jest', 'LLM Integration', 'Figma', 'REST API / GraphQL',
          ].map((tag) => (
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

        <div className="skill-tier-grid">
          {[
            {
              tier: 'Core',
              skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Django'],
            },
            {
              tier: 'Mobile & Native',
              skills: ['React Native', 'Expo', 'SwiftUI (macOS)', 'Kotlin'],
            },
            {
              tier: 'Data & Infra',
              skills: ['PostgreSQL', 'Supabase', 'MongoDB', 'CI/CD', 'Selenium', 'Jest'],
            },
            {
              tier: 'AI',
              skills: ['LLM Integration', 'Prompt Engineering'],
            },
          ].map(({ tier, skills }) => (
            <div key={tier} className="skill-tier-item">
              <div className="skill-tier-label">{tier}</div>
              <div className="skill-tier-tags">
                {skills.map((s) => (
                  <span key={s} className="tech-tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* END SKILLS SECTION */}

      {/* START FOOTER */}
      <PageFooter />
      {/* END FOOTER */}
    </div>
  )
}
