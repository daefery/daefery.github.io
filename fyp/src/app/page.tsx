import Link from 'next/link'
import BASE_PATH from '@/lib/basePath'

export const metadata = {
  title: 'FYP. - Senior Software Engineer',
  description: 'Premium portfolio of Fery Yundara Putera, Senior Software Engineer.',
}

const logos = [
  { src: 'edbot.webp', alt: 'Edbot.ai' },
  { src: 'learnalytics.png', alt: 'Learnalytics' },
  { src: 'se.png', alt: 'Solve Education' },
  { src: 'localizy.png', alt: 'Localizy' },
  { src: 'xtremax.png', alt: 'Xtremax' },
  { src: 'etak.png', alt: 'Elephant Talk' },
  { src: 'suzuki.png', alt: 'Suzuki' },
  { src: 'kuntoem.png', alt: 'Kuntoem' },
  { src: 'content.png', alt: 'Content' },
  { src: 'ymbb.png', alt: 'YMBB' },
  { src: 'plareon.png', alt: 'Plareon' },
  { src: 'qadha.png', alt: 'Qadha' },
  { src: 'lampalampa.png', alt: 'Lampalampa' },
  { src: 'playnology.png', alt: 'Playnology' },
]

export default function Home() {
  return (
    <div className="container bento-container">
      {/* START HEADER */}
      <header className="d-flex justify-content-between align-items-center mb-5 animate__animated animate__fadeInDown">
        <div className="logo-text">FYP.</div>
      </header>
      {/* END HEADER */}

      {/* START HERO SECTION */}
      <div className="bento-card card-hero wow animate__fadeInLeft">
        <span className="card-number">01 / CONCEPT</span>
        <div className="badge-status">
          <i className="fa-solid fa-circle"></i>
          Open to work
        </div>
        <h1 className="hero-title">
          ENGINEERING<br /><span>THE FUTURE</span><br />OF EDTECH.
        </h1>
        <p className="hero-desc">
          I build high-performance digital ecosystems that merge technical
          depth with AI-first engineering — shipping at scale for 10+ countries.
        </p>
      </div>
      {/* END HERO SECTION */}

      {/* START PROFILE SECTION */}
      <div className="bento-card card-profile wow animate__fadeInRight">
        <span className="card-number">02 / IDENTITY</span>
        <div className="avatar-box">
          <img src={`${BASE_PATH}/assets/img/profile.webp`} alt="Fery Yundara Putera" />
        </div>
        <h3 className="mb-1 text-uppercase">Fery Yundara Putera</h3>
        <p className="text-muted small fw-bold text-uppercase">
          Senior Software Engineer
        </p>

        <div className="social-pill">
          <a href="https://linkedin.com/in/feryyp" className="social-btn" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/daefery" className="social-btn" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
      {/* END PROFILE SECTION */}

      {/* START ABOUT SECTION */}
      <div className="bento-card card-about wow animate__fadeInUp">
        <span className="card-number">03 / LOGIC</span>
        <h2 className="text-uppercase">Engineering<br />Philosophy.</h2>
        <p className="text-muted small mb-4">
          Building scalable EdTech systems with AI-first thinking and continuous delivery discipline.
        </p>

        <div className="pillar-grid">
          <div className="pillar-item">
            <div className="pillar-title">Scalable EdTech</div>
            <p className="pill-text">
              Core developer on platform powering 32M+ lessons across 10+ countries.
            </p>
          </div>
          <div className="pillar-item">
            <div className="pillar-title">AI-First Dev</div>
            <p className="pill-text">
              Agentic workflows and AI-assisted engineering at scale.
            </p>
          </div>
          <div className="pillar-item">
            <div className="pillar-title">Full Stack Depth</div>
            <p className="pill-text">12 years across React, Node.js, Django, Laravel, .NET.</p>
          </div>
          <div className="pillar-item">
            <div className="pillar-title">Continuous Delivery</div>
            <p className="pill-text">
              CI/CD pipelines and automated E2E testing.
            </p>
          </div>
        </div>
      </div>
      {/* END ABOUT SECTION */}

      {/* START STATS SECTION */}
      <div
        className="bento-card card-skills wow animate__zoomIn"
        data-wow-delay="0.1s"
      >
        <span className="card-number">04 / STATS</span>
        <div className="stat-item">
          <span className="stat-num">12+</span>
          <span className="stat-label d-block">Years Exp.</span>
        </div>
      </div>
      <div
        className="bento-card card-skills wow animate__zoomIn"
        data-wow-delay="0.2s"
      >
        <span className="card-number">05 / STATS</span>
        <div className="stat-item">
          <span className="stat-num">32M+</span>
          <span className="stat-label d-block">Lessons Delivered</span>
        </div>
      </div>
      {/* END STATS SECTION */}

      {/* START RESUME SECTION */}
      <div className="bento-card card-resume wow animate__fadeInUp">
        <span className="card-number">06 / JOURNEY</span>
        <h3 className="text-uppercase mb-2">My Resume.</h3>
        <p className="small mb-4">
          Explore my technical mastery and professional evolution.
        </p>
        <div className="mt-auto">
          <Link
            href="/resume"
            className="btn btn-light rounded-pill px-4 py-2 fw-bold text-uppercase"
          >
            Explore Resume <i className="fa-solid fa-arrow-right-long ms-2"></i>
          </Link>
        </div>
      </div>
      {/* END RESUME SECTION */}

      {/* START MISSION SECTION */}
      <div className="bento-card card-hub wow animate__fadeInUp">
        <span className="card-number">07 / PHILOSOPHY</span>

        <div className="mission-header mb-4">
          <h3 className="text-uppercase">Engineering Mission.</h3>
          <p className="small opacity-50 fw-bold">
            Defining the future of EdTech and AI-first engineering
          </p>
        </div>

        <div className="value-stack w-100">
          <div className="value-item d-flex align-items-start gap-3 mb-4">
            <div className="value-icon">
              <i className="fa-solid fa-chess-knight"></i>
            </div>
            <div>
              <div className="value-title">FULL STACK DEPTH</div>
              <p className="small opacity-60 mb-0">
                12 years across React, Next.js, Node.js, Django, Laravel, .NET.
              </p>
            </div>
          </div>

          <div className="value-item d-flex align-items-start gap-3 mb-4">
            <div className="value-icon"><i className="fa-solid fa-vial"></i></div>
            <div>
              <div className="value-title">CONTINUOUS DELIVERY</div>
              <p className="small opacity-60 mb-0">
                CI/CD pipelines and Selenium E2E testing that ship with confidence.
              </p>
            </div>
          </div>

          <div className="value-item d-flex align-items-start gap-3">
            <div className="value-icon"><i className="fa-solid fa-infinity"></i></div>
            <div>
              <div className="value-title">AI-FIRST ENGINEERING</div>
              <p className="small opacity-60 mb-0">
                Agentic workflows and AI-assisted development at production scale.
              </p>
            </div>
          </div>
        </div>

        <div className="hub-footer mt-auto w-100">
          <div className="signature-text">FYP × 2026</div>
        </div>
      </div>
      {/* END MISSION SECTION */}

      {/* START SERVICES SECTION */}
      <div className="bento-card card-services wow animate__fadeInUp">
        <span className="card-number">08 / MASTERY</span>
        <h3 className="text-uppercase mb-4">Core Mastery.</h3>
        <div className="expertise-list">
          <div className="expertise-item">
            <i className="fa-solid fa-gem"></i>
            <span className="fw-bold text-uppercase">React / Next.js Engineering</span>
          </div>
          <div className="expertise-item">
            <i className="fa-solid fa-shield-halved"></i>
            <span className="fw-bold text-uppercase">Node.js / Backend Systems</span>
          </div>
          <div className="expertise-item">
            <i className="fa-solid fa-brain"></i>
            <span className="fw-bold text-uppercase">AI-Agentic Workflows</span>
          </div>
          <div className="expertise-item">
            <i className="fa-solid fa-chart-pie"></i>
            <span className="fw-bold text-uppercase">CI/CD & DevOps</span>
          </div>
        </div>
      </div>
      {/* END SERVICES SECTION */}

      {/* START CLIENTS SECTION */}
      <div className="bento-card card-clients wow animate__fadeInUp">
        <span className="card-number">09 / NETWORK</span>
        <p className="small text-uppercase fw-black opacity-30 mb-5">
          Companies & Products
        </p>
        <div className="client-marquee">
          <div className="client-track">
            <div className="client-group">
              {logos.map((logo) => (
                <div className="client-item" key={logo.src}>
                  <img
                    src={`${BASE_PATH}/assets/img/${logo.src}`}
                    className="client-logo client-logo-color"
                    alt={logo.alt}
                  />
                </div>
              ))}
            </div>
            <div className="client-group" aria-hidden="true">
              {logos.map((logo) => (
                <div className="client-item" key={logo.src}>
                  <img
                    src={`${BASE_PATH}/assets/img/${logo.src}`}
                    className="client-logo client-logo-color"
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* END CLIENTS SECTION */}

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
