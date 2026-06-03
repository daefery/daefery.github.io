import Link from 'next/link'
import BASE_PATH from '@/lib/basePath'
import PageFooter from '@/components/PageFooter'

export const metadata = {
  title: 'FYP. — Fery Yundara Putera | Senior Full-Stack Engineer',
  description:
    'Senior Full-Stack Engineer. Frontend architect on edbot.ai (32M+ lessons, 100K+ peak monthly users). Ships products solo — 4 apps live across macOS, iOS, and Android.',
  openGraph: {
    title: 'FYP. — Fery Yundara Putera | Senior Full-Stack Engineer',
    description:
      'Senior Full-Stack Engineer. Frontend architect on edbot.ai (32M+ lessons, 100K+ peak monthly users). Ships products solo — 4 apps live across macOS, iOS, and Android.',
    url: 'https://daefery.github.io',
  },
  alternates: { canonical: 'https://daefery.github.io' },
}

const logos = [
  { src: 'edbot.webp', alt: 'Edbot.ai' },
  { src: 'learnalytics.webp', alt: 'Learnalytics' },
  { src: 'se.webp', alt: 'Solve Education' },
  { src: 'localizy.webp', alt: 'Localizy' },
  { src: 'xtremax.png', alt: 'Xtremax' },
  { src: 'etak.webp', alt: 'Elephant Talk' },
  { src: 'suzuki.webp', alt: 'Suzuki' },
  { src: 'kuntoem.webp', alt: 'Kuntoem' },
  { src: 'content.webp', alt: 'Content' },
  { src: 'ymbb.webp', alt: 'YMBB' },
  { src: 'plareon.webp', alt: 'Plareon' },
  { src: 'qadha.webp', alt: 'Qadha' },
  { src: 'lampalampa.webp', alt: 'Lampalampa' },
  { src: 'playnology.webp', alt: 'Playnology' },
]

export default function Home() {
  return (
    <div className="container bento-container">
      {/* START HEADER */}
      <header className="d-flex justify-content-between align-items-center mb-5 animate__animated animate__fadeInDown">
        <div className="logo-text">FYP.</div>
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
        <span className="card-number">01 / CONCEPT</span>
        <div className="badge-status">
          <i className="fa-solid fa-circle"></i>
          Open to work
        </div>
        <h1 className="hero-title">
          FRONTEND<br /><span>ARCHITECT.</span><br />PRODUCT BUILDER.
        </h1>
        <p className="hero-desc">
          12 years building software, the last 8 on the core team behind edbot.ai (32M+ lessons, 100K+ peak monthly users). I owned the frontend architecture there. On the side I design and ship my own apps — four live now across macOS, iOS, and Android.
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
          Senior Full-Stack Engineer
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
        <span className="card-number">03 / ABOUT</span>
        <h2 className="text-uppercase">How I<br />work.</h2>
        <p className="text-muted small mb-4">
          I care about systems that hold up in production. Not just demos that work once.
        </p>

        <div className="pillar-grid">
          <div className="pillar-item">
            <div className="pillar-title">EdTech at scale</div>
            <p className="pill-text">
              Owned the frontend architecture of a platform serving 100K+ peak monthly users across 10+ countries.
            </p>
          </div>
          <div className="pillar-item">
            <div className="pillar-title">Ships products solo</div>
            <p className="pill-text">
              Four apps live across macOS, iOS, and Android — native code, payments, subscriptions.
            </p>
          </div>
          <div className="pillar-item">
            <div className="pillar-title">Top to bottom</div>
            <p className="pill-text">12 years across React, Next.js, Node.js, and Django.</p>
          </div>
          <div className="pillar-item">
            <div className="pillar-title">Shipping without drama</div>
            <p className="pill-text">
              CI/CD and Selenium so deploys don&apos;t feel like coin flips.
            </p>
          </div>
        </div>
      </div>
      {/* END ABOUT SECTION */}

      {/* START STATS SECTION */}
      <div
        className="bento-card card-skills wow animate__fadeInUp"
        data-wow-delay="0.1s"
      >
        <span className="card-number">04 / STATS</span>
        <div className="stat-item">
          <span className="stat-num">12+</span>
          <span className="stat-label d-block">Years Exp.</span>
        </div>
      </div>
      <div
        className="bento-card card-skills wow animate__fadeInUp"
        data-wow-delay="0.2s"
      >
        <span className="card-number">05 / STATS</span>
        <div className="stat-item">
          <span className="stat-num">32M+</span>
          <span className="stat-label d-block">Lessons Delivered</span>
        </div>
      </div>
      <div
        className="bento-card card-skills wow animate__fadeInUp"
        data-wow-delay="0.3s"
      >
        <span className="card-number">06 / STATS</span>
        <div className="stat-item">
          <span className="stat-num">4</span>
          <span className="stat-label d-block">Solo Apps Live</span>
        </div>
      </div>
      <div
        className="bento-card card-skills wow animate__fadeInUp"
        data-wow-delay="0.4s"
      >
        <span className="card-number">07 / STATS</span>
        <div className="stat-item">
          <span className="stat-num">100K+</span>
          <span className="stat-label d-block">Peak Monthly Users</span>
        </div>
      </div>
      {/* END STATS SECTION */}

      {/* START RESUME SECTION */}
      <div className="bento-card card-resume wow animate__fadeInUp">
        <span className="card-number">08 / JOURNEY</span>
        <h3 className="text-uppercase mb-2">My Resume.</h3>
        <p className="small mb-4">
          See where I&apos;ve worked and what I&apos;ve shipped.
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
        <span className="card-number">09 / PHILOSOPHY</span>

        <div className="mission-header mb-4">
          <h3 className="text-uppercase">What I value.</h3>
          <p className="small opacity-50 fw-bold">
            Things I&apos;ve learned building products that actually matter.
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
                12 years across React, Next.js, Node.js, and Django.
              </p>
            </div>
          </div>

          <div className="value-item d-flex align-items-start gap-3 mb-4">
            <div className="value-icon"><i className="fa-solid fa-vial"></i></div>
            <div>
              <div className="value-title">CONTINUOUS DELIVERY</div>
              <p className="small opacity-60 mb-0">
                CI/CD and E2E testing. Because manual deploys at midnight aren&apos;t fun.
              </p>
            </div>
          </div>

          <div className="value-item d-flex align-items-start gap-3">
            <div className="value-icon"><i className="fa-solid fa-layer-group"></i></div>
            <div>
              <div className="value-title">FRONTEND ARCHITECTURE</div>
              <p className="small opacity-60 mb-0">
                Framework choice, state, analytics, localization, modular structure — built to scale.
              </p>
            </div>
          </div>
        </div>

        <div className="hub-footer mt-auto w-100">
          <div className="signature-text">FYP × {new Date().getFullYear()}</div>
        </div>
      </div>
      {/* END MISSION SECTION */}

      {/* START SERVICES SECTION */}
      <div className="bento-card card-services wow animate__fadeInUp">
        <span className="card-number">10 / MASTERY</span>
        <h3 className="text-uppercase mb-4">What I do well.</h3>
        <div className="expertise-list">
          <div className="expertise-item">
            <i className="fa-solid fa-gem"></i>
            <span className="fw-bold text-uppercase">React / Next.js Engineering</span>
          </div>
          <div className="expertise-item">
            <i className="fa-solid fa-layer-group"></i>
            <span className="fw-bold text-uppercase">Frontend Architecture</span>
          </div>
          <div className="expertise-item">
            <i className="fa-solid fa-shield-halved"></i>
            <span className="fw-bold text-uppercase">Node.js / Backend Systems</span>
          </div>
          <div className="expertise-item">
            <i className="fa-solid fa-chart-pie"></i>
            <span className="fw-bold text-uppercase">CI/CD &amp; DevOps</span>
          </div>
          <div className="expertise-item">
            <i className="fa-solid fa-brain"></i>
            <span className="fw-bold text-uppercase">LLM Integration</span>
          </div>
        </div>
      </div>
      {/* END SERVICES SECTION */}

      {/* START CLIENTS SECTION */}
      <div className="bento-card card-clients wow animate__fadeInUp">
        <span className="card-number">11 / NETWORK</span>
        <p className="small text-uppercase fw-black opacity-30 mb-5">
          Companies &amp; Products
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
      <PageFooter />
      {/* END FOOTER */}
    </div>
  )
}
