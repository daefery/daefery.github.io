import Link from 'next/link'
import PageFooter from '@/components/PageFooter'

export const metadata = {
  title: 'Contact — Fery Yundara Putera',
  description:
    'Get in touch with Fery Yundara Putera for software engineering, EdTech, and AI-first product collaboration.',
  openGraph: {
    title: 'Contact — Fery Yundara Putera | Senior Software Engineer',
    description:
      'Get in touch for software engineering, EdTech, and AI-first product collaboration.',
    url: 'https://daefery.github.io/feryyp/contact',
  },
  alternates: { canonical: 'https://daefery.github.io/feryyp/contact' },
}

export default function ContactPage() {
  return (
    <div className="contact-page">
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
          <span className="card-number">01 / CONNECTION</span>
          <div className="badge-status">
            <i className="fa-solid fa-circle"></i>
            Open to work, available now
          </div>
          <h1 className="hero-title">LET&apos;S<br /><span>BUILD</span><br />TOGETHER.</h1>
          <p className="hero-desc">Available for full-stack, EdTech, and AI-first engineering projects. Drop a message and I&apos;ll respond within 24 hours.</p>
        </div>
        {/* END HERO SECTION */}

        {/* START CHANNELS SECTION */}
        <div className="bento-card card-channels wow animate__fadeInRight">
          <span className="card-number">02 / CHANNELS</span>
          <h3 className="text-uppercase mb-1">Quick Reach.</h3>
          <p className="small text-muted mb-0">Preferred channels for direct access.</p>

          <div className="contact-reach-list">
            <div className="contact-channel-item">
              <div className="cci-icon">
                <i className="fa-solid fa-paper-plane"></i>
              </div>
              <div>
                <span className="cci-label">Email</span>
                <a href="mailto:feryyp.work@gmail.com" className="cci-value">feryyp.work@gmail.com</a>
              </div>
            </div>
            <div className="contact-channel-item">
              <div className="cci-icon">
                <i className="fa-brands fa-linkedin"></i>
              </div>
              <div>
                <span className="cci-label">LinkedIn</span>
                <a href="https://linkedin.com/in/feryyp" className="cci-value" target="_blank" rel="noopener noreferrer">linkedin.com/in/feryyp</a>
              </div>
            </div>
            <div className="contact-channel-item">
              <div className="cci-icon">
                <i className="fa-brands fa-whatsapp"></i>
              </div>
              <div>
                <span className="cci-label">WhatsApp</span>
                <a href="https://wa.me/6281224641242?text=Hi%20Fery%2C%20I%20found%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20project%20with%20you." className="cci-value" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
              </div>
            </div>
            <div className="contact-channel-item">
              <div className="cci-icon">
                <i className="fa-solid fa-location-crosshairs"></i>
              </div>
              <div>
                <span className="cci-label">Location</span>
                <span className="cci-value">Indonesia (Remote)</span>
              </div>
            </div>
          </div>

          <div className="social-pill mt-auto pt-2">
            <a href="https://linkedin.com/in/feryyp" className="social-btn" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/daefery" className="social-btn" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
          </div>
        </div>
        {/* END CHANNELS SECTION */}

        {/* START STATS SECTION */}

        {/* Availability Card */}
        <div className="bento-card card-contact-stat wow animate__fadeInUp">
          <span className="card-number">03 / STATUS</span>
          <div className="ccs-icon ccs-green">
            <i className="fa-solid fa-circle-check"></i>
          </div>
          <div className="ccs-metric ccs-green">Open</div>
          <div className="ccs-title">Open to Work</div>
          <div className="ccs-desc">Available now. Let&apos;s build something great.</div>
        </div>

        {/* Response Card */}
        <div className="bento-card card-contact-stat wow animate__fadeInUp" data-wow-delay="0.1s">
          <span className="card-number">04 / SPEED</span>
          <div className="ccs-icon ccs-blue">
            <i className="fa-regular fa-clock"></i>
          </div>
          <div className="ccs-metric">{'<'} 24h</div>
          <div className="ccs-title">Response Time</div>
          <div className="ccs-desc">I usually reply same day.</div>
        </div>

        {/* Experience Card */}
        <div className="bento-card card-contact-stat wow animate__fadeInUp" data-wow-delay="0.2s">
          <span className="card-number">05 / TRUST</span>
          <div className="ccs-icon ccs-coral">
            <i className="fa-solid fa-trophy"></i>
          </div>
          <div className="ccs-metric ccs-coral">12+</div>
          <div className="ccs-title">Years Experience</div>
          <div className="ccs-desc">Full stack across 5 companies, 12+ products.</div>
        </div>

        {/* Timezone Card */}
        <div className="bento-card card-contact-stat wow animate__fadeInUp" data-wow-delay="0.3s">
          <span className="card-number">06 / ZONE</span>
          <div className="ccs-icon ccs-purple">
            <i className="fa-solid fa-earth-asia"></i>
          </div>
          <div className="ccs-metric">WIB</div>
          <div className="ccs-title">UTC + 7:00</div>
          <div className="ccs-desc">Indonesia (Remote).</div>
        </div>
        {/* END STATS SECTION */}

        {/* START CTA SECTION */}
        <div className="bento-card card-cta wow animate__fadeInUp">
          <span className="card-number">07 / CONNECT</span>

          <div className="cta-inner">
            <div className="cta-left">
              <p className="cta-eyebrow text-uppercase fw-bold small opacity-50 mb-3">Got a project in mind?</p>
              <h2 className="cta-headline text-uppercase">Let&apos;s Build<br /><span>Something</span><br />Great.</h2>
              <p className="cta-sub mt-3 mb-0 opacity-60 small">Drop a message. I reply within 24 hours.</p>
            </div>

            <div className="cta-right">
              <div className="cta-actions">
                <a href="mailto:feryyp.work@gmail.com" className="cta-btn cta-btn-primary">
                  <i className="fa-solid fa-paper-plane"></i>
                  <span>Email Me</span>
                </a>
                <a href="https://linkedin.com/in/feryyp" target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn-secondary">
                  <i className="fa-brands fa-linkedin"></i>
                  <span>LinkedIn</span>
                </a>
                <a href="https://wa.me/6281224641242?text=Hi%20Fery%2C%20I%20found%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20project%20with%20you." target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn-whatsapp">
                  <i className="fa-brands fa-whatsapp"></i>
                  <span>WhatsApp</span>
                </a>
                <a href="https://github.com/daefery" target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn-ghost">
                  <i className="fa-brands fa-github"></i>
                  <span>GitHub</span>
                </a>
              </div>
              <p className="small opacity-30 fw-bold mt-4 mb-0 text-uppercase" style={{ letterSpacing: '1px' }}>
                <i className="fa-solid fa-circle-check me-2 text-success"></i>Open to work · Remote · Available now
              </p>
            </div>
          </div>

          <div className="cta-footer">
            <div className="signature-text">FYP × {new Date().getFullYear()}</div>
          </div>
        </div>
        {/* END CTA SECTION */}

        {/* START FOOTER */}
        <PageFooter col12 />
        {/* END FOOTER */}

      </div>
    </div>
  )
}
