import Link from 'next/link'
import BASE_PATH from '@/lib/basePath'
import PageFooter from '@/components/PageFooter'

export const metadata = {
  title: 'Products — Fery Yundara Putera',
  description:
    'Live apps I designed and built myself — Zokuu, Plareon, and Qadha. No client work, no vendor stuff. Real users, real scale.',
  openGraph: {
    title: 'Products — Fery Yundara Putera | Senior Software Engineer',
    description: 'Live apps I designed and built myself — Zokuu, Plareon, and Qadha.',
    url: 'https://daefery.github.io/products',
  },
  alternates: { canonical: 'https://daefery.github.io/products' },
}

const products = [
  {
    slug: 'zokuu',
    num: '02',
    name: 'Zokuu',
    category: 'Mobile · Android · Utility',
    desc: 'Offline-first Android alarm app with spoken (TTS) and custom-sound alarms. No account, no network, no ads — all data lives on-device. Built with Expo + a native Kotlin module for rock-solid background firing.',
    tags: ['React Native', 'Expo', 'Kotlin', 'TypeScript', 'Zustand'],
    metrics: [
      { val: 'Android', lbl: 'Platform' },
      { val: '0 Ads', lbl: 'Always' },
      { val: 'Offline', lbl: 'First' },
    ],
    accentColor: '#06b6d4',
    accentRgb: '6,182,212',
    images: [
      `${BASE_PATH}/assets/img/products/zokuu-screen.png`,
      `${BASE_PATH}/assets/img/products/zokuu-screen2.png`,
      `${BASE_PATH}/assets/img/products/zokuu-screen3.png`,
    ],
  },
  {
    slug: 'plareon',
    num: '03',
    name: 'Plareon',
    category: 'Mobile · iOS & Android · Sports',
    desc: 'Basketball training companion with daily plans, guided drill sessions with audio, XP/streak progress tracking, and achievement system. Supports 6 player archetypes and Elite subscription.',
    tags: ['React Native', 'Expo', 'Supabase', 'TypeScript', 'Firebase'],
    metrics: [
      { val: 'iOS+Android', lbl: 'Platforms' },
      { val: '6', lbl: 'Archetypes' },
      { val: 'Elite', lbl: 'Tier' },
    ],
    accentColor: '#f97316',
    accentRgb: '249,115,22',
    images: [
      `${BASE_PATH}/assets/img/products/plareon-screen.png`,
      `${BASE_PATH}/assets/img/products/plareon-drills.png`,
      `${BASE_PATH}/assets/img/products/plareon-welcome.png`,
    ],
  },
  {
    slug: 'qadha',
    num: '04',
    name: 'Qadha',
    category: 'Mobile · iOS & Android · Islamic',
    desc: 'Islamic companion for Salah consistency. 30-day guided journey, prayer tracker, reflection system, and Islamic audio library. Action-driven — not just tracking. Live on Google Play.',
    tags: ['React Native', 'Expo', 'Supabase', 'TypeScript', 'Firebase'],
    metrics: [
      { val: 'Live', lbl: 'Google Play' },
      { val: '30-day', lbl: 'Journey' },
      { val: '8', lbl: 'Audio cats' },
    ],
    accentColor: '#9a7b4c',
    accentRgb: '154,123,76',
    images: [
      `${BASE_PATH}/assets/img/products/qadha-screen.png`,
      `${BASE_PATH}/assets/img/products/qadha-screen2.png`,
    ],
  },
]

export default function ProductsPage() {
  return (
    <div className="products-page">
    <div className="container bento-container">

      {/* HEADER — same pattern as every other page */}
      <header className="d-flex justify-content-between align-items-center mb-5 animate__animated animate__fadeInDown">
        <div className="logo-text">
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>FYP.</Link>
        </div>
      </header>

      {/* HERO */}
      <div className="bento-card card-hero wow animate__fadeInLeft">
        <span className="card-number">01 / PRODUCTS</span>
        <div className="badge-status">
          <i className="fa-solid fa-circle"></i>
          Built by me, live in production
        </div>
        <h1 className="hero-title">
          BUILT.<br /><span>SHIPPED.</span><br />LIVE.
        </h1>
        <p className="hero-desc">
          Personal projects — not client work, not employer products. Apps I designed, built, and shipped on my own time.
        </p>
      </div>

      {/* PRODUCT SPOTLIGHT CARDS */}
      {products.map((p) => (
        <div key={p.slug} className="wow animate__fadeInUp" style={{ gridColumn: 'span 12' }}>
          <Link
            href={`/products/${p.slug}`}
            className="spotlight-card"
            style={{ border: `1px solid rgba(${p.accentRgb},0.25)` }}
          >
            {/* LEFT — all info */}
            <div
              className="spotlight-left"
              style={{ background: `linear-gradient(135deg, rgba(${p.accentRgb},0.45) 0%, rgba(${p.accentRgb},0.2) 100%)` }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span
                  className="product-cat-pill"
                  style={{
                    background: `rgba(${p.accentRgb},0.25)`,
                    color: '#fff',
                    border: '1px solid rgba(255,255,255,0.2)',
                  }}
                >
                  <span className="pill-dot" style={{ background: '#fff' }} />
                  {p.category}
                </span>
                <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: 2, opacity: 0.5, color: '#fff', textTransform: 'uppercase' }}>
                  {p.num} / PRODUCT
                </span>
                <h2 className="product-section-name" style={{ color: '#fff', marginBottom: 4 }}>
                  {p.name}
                </h2>
                <p className="product-section-desc" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  {p.desc}
                </p>
                <div className="product-section-tags">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="product-section-tag"
                      style={{ color: 'rgba(255,255,255,0.7)', borderColor: 'rgba(255,255,255,0.2)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="spotlight-metrics">
                {p.metrics.map((m) => (
                  <div key={m.lbl}>
                    <div className="spotlight-metric-val" style={{ color: '#fff' }}>{m.val}</div>
                    <div className="spotlight-metric-lbl" style={{ color: 'rgba(255,255,255,0.5)' }}>{m.lbl}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — image collage */}
            <div
              className={`spotlight-collage${p.images.length === 1 ? ' collage-single' : ''}`}
              style={{ background: `rgba(${p.accentRgb},0.06)` }}
            >
              {p.images.map((src, i) => (
                <img key={i} src={src} alt={`${p.name} screenshot ${i + 1}`} className="collage-img" />
              ))}
            </div>
          </Link>
        </div>
      ))}

      <PageFooter />
    </div>
    </div>
  )
}
