import Link from 'next/link'

export const metadata = {
  title: '404 — Fery Yundara Putera',
  description: 'Page not found.',
}

export default function NotFound() {
  return (
    <div className="container bento-container">

      {/* HEADER */}
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

      {/* HERO */}
      <div className="bento-card card-hero wow animate__fadeInLeft">
        <span className="card-number">404 / NOT FOUND</span>
        <div className="badge-status">
          <i className="fa-solid fa-circle"></i>
          Page missing
        </div>
        <h1 className="hero-title">
          LOST.<br /><span>GONE.</span><br />NOWHERE.
        </h1>
        <p className="hero-desc">
          Whatever you were looking for isn&apos;t here. It may have moved, never existed, or got lost in the void.
        </p>
        <div className="d-flex gap-3 flex-wrap mt-4">
          <Link
            href="/"
            className="btn rounded-pill px-4 py-2 fw-bold text-uppercase"
            style={{ fontSize: 12, letterSpacing: 1, background: 'var(--velixo-primary)', color: '#fff', border: 'none' }}
          >
            <i className="fa-solid fa-house me-2"></i> Go Home
          </Link>
          <Link
            href="/works"
            className="btn btn-light rounded-pill px-4 py-2 fw-bold text-uppercase"
            style={{ fontSize: 12, letterSpacing: 1 }}
          >
            View Works <i className="fa-solid fa-arrow-right-long ms-2"></i>
          </Link>
        </div>
      </div>

      {/* QUICK LINKS */}
      <div className="bento-card card-profile wow animate__fadeInRight" style={{ justifyContent: 'center' }}>
        <span className="card-number">01 / PAGES</span>
        <h3 className="text-uppercase mb-4" style={{ fontSize: 18, fontWeight: 800 }}>Try these.</h3>
        <div className="d-flex flex-column gap-3">
          {[
            { href: '/', icon: 'fa-house', label: 'Home', desc: 'Start here' },
            { href: '/works', icon: 'fa-briefcase', label: 'Works', desc: '12+ shipped products' },
            { href: '/products', icon: 'fa-rocket', label: 'Products', desc: 'Apps I built & own' },
            { href: '/resume', icon: 'fa-file-lines', label: 'Resume', desc: '12 years, 5 companies' },
            { href: '/contact', icon: 'fa-paper-plane', label: 'Contact', desc: 'Let\'s build together' },
          ].map(({ href, icon, label, desc }) => (
            <Link
              key={href}
              href={href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                padding: '14px 20px',
                borderRadius: 16,
                border: '1px solid var(--velixo-border)',
                textDecoration: 'none',
                color: 'var(--velixo-text)',
                transition: 'var(--velixo-transition)',
                background: 'var(--velixo-bg)',
              }}
              className="not-found-link"
            >
              <span style={{
                width: 40,
                height: 40,
                borderRadius: 12,
                background: 'rgba(var(--velixo-primary-rgb), 0.1)',
                color: 'var(--velixo-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                fontSize: 14,
              }}>
                <i className={`fa-solid ${icon}`}></i>
              </span>
              <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: 1 }}>{label}</span>
                <span style={{ fontSize: 12, color: 'var(--velixo-text-muted)', fontWeight: 500 }}>{desc}</span>
              </span>
              <i className="fa-solid fa-arrow-right-long ms-auto" style={{ fontSize: 12, color: 'var(--velixo-text-muted)' }}></i>
            </Link>
          ))}
        </div>
      </div>

    </div>
  )
}
