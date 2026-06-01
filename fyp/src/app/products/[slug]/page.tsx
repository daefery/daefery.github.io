import Link from 'next/link'
import { notFound } from 'next/navigation'
import BASE_PATH from '@/lib/basePath'
import PageFooter from '@/components/PageFooter'

const products: Record<string, {
  name: string
  category: string
  tagline: string
  description: string
  tags: string[]
  accentColor: string
  accentRgb: string
  stats: { label: string; value: string }[]
  images: string[]
  url?: string
  playStore?: string
}> = {
  zokuu: {
    name: 'Zokuu',
    category: 'Mobile · Android · Utility',
    tagline: 'Offline-first alarm app for Android',
    description:
      'No account. No network. No ads. No paywall. Just a reliable alarm that fires every time — even when the app is killed, the screen is off, the device is in Doze mode, or after a reboot. Built with Expo + a custom native Kotlin module using AlarmManager, MediaPlayer, TextToSpeech, and a full-screen lock-screen Activity.',
    tags: ['React Native', 'Expo', 'Kotlin', 'TypeScript', 'Zustand', 'AlarmManager', 'TTS'],
    accentColor: '#06b6d4',
    accentRgb: '6,182,212',
    stats: [
      { label: 'Platform', value: 'Android' },
      { label: 'Ads', value: '0' },
      { label: 'Mode', value: 'Offline' },
      { label: 'Payments', value: 'None' },
    ],
    images: [
      `${BASE_PATH}/assets/img/products/zokuu-screen.png`,
    ],
  },
  plareon: {
    name: 'Plareon',
    category: 'Mobile · iOS & Android · Sports',
    tagline: 'Basketball training companion',
    description:
      'Daily training plans mapped to player archetypes — sharpshooter, slasher, hooper, and more. Features guided sessions with drills and audio, XP/streak progress tracking, an achievement system, and optional Google Sign-In. Elite subscription unlocks advanced content. Built for players of all skill levels serious about improving their game.',
    tags: ['React Native', 'Expo', 'Supabase', 'TypeScript', 'Firebase', 'expo-iap', 'expo-audio'],
    accentColor: '#f97316',
    accentRgb: '249,115,22',
    stats: [
      { label: 'Platforms', value: 'iOS + Android' },
      { label: 'Archetypes', value: '6' },
      { label: 'Membership', value: 'Elite' },
      { label: 'Auth', value: 'Guest-first' },
    ],
    images: [
      `${BASE_PATH}/assets/img/products/plareon-screen.png`,
      `${BASE_PATH}/assets/img/products/plareon-drills.png`,
      `${BASE_PATH}/assets/img/products/plareon-welcome.png`,
    ],
  },
  qadha: {
    name: 'Qadha',
    category: 'Mobile · iOS & Android · Islamic',
    tagline: 'Islamic companion for Salah consistency',
    description:
      'Addresses the real problem: inconsistency and lack of structure in daily prayer. Not another tracker — an action-driven guidance system. Features a 30-day Salah Reset journey with daily focus, reminders, actions, dua, reflection, and encouragement. After Day 30, unlocks infinite Salah Rhythm content. Islamic audio library with 8 categories, offline playback, and sleep timer. Donation-based — no features paywalled.',
    tags: ['React Native', 'Expo', 'Supabase', 'TypeScript', 'Firebase', 'expo-audio', 'expo-iap'],
    accentColor: '#9a7b4c',
    accentRgb: '154,123,76',
    stats: [
      { label: 'Status', value: 'Play Store' },
      { label: 'Journey', value: '30 days' },
      { label: 'Audio categories', value: '8' },
      { label: 'Model', value: 'Donation' },
    ],
    images: [
      `${BASE_PATH}/assets/img/products/qadha-screen.png`,
      `${BASE_PATH}/assets/img/products/qadha-screen2.png`,
    ],
    playStore: 'https://play.google.com/store/apps/details?id=com.qadha.islam',
  },
}

export function generateStaticParams() {
  return Object.keys(products).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = products[params.slug]
  if (!p) return {}
  return {
    title: `${p.name} — Fery Yundara Putera`,
    description: p.description.slice(0, 160),
    openGraph: {
      title: `${p.name} — Fery Yundara Putera`,
      description: p.description.slice(0, 160),
    },
  }
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const p = products[params.slug]
  if (!p) notFound()

  return (
    <div className="products-page">

      {/* HEADER */}
      <div className="products-page-header">
        <div className="d-flex justify-content-between align-items-center animate__animated animate__fadeInDown">
          <div className="logo-text">
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>FYP.</Link>
          </div>
          <Link
            href="/products"
            className="btn btn-light rounded-pill px-4 py-2 fw-bold text-uppercase"
            style={{ fontSize: 12, letterSpacing: 1 }}
          >
            <i className="fa-solid fa-arrow-left-long me-2"></i> All Products
          </Link>
        </div>
      </div>

      {/* HERO */}
      <section className="products-hero animate__animated animate__fadeIn">
        <div className="products-glow" style={{ background: `radial-gradient(circle, rgba(${p.accentRgb},0.12) 0%, transparent 70%)` }} />
        <span className="products-hero-label">{p.category}</span>
        <h1 className="products-hero-title">
          {p.name.toUpperCase()}
        </h1>
        <div className="products-hero-bottom">
          <p className="products-hero-desc">{p.tagline}</p>
          {(p.url || p.playStore) && (
            <a
              href={p.playStore || p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn rounded-pill px-4 py-2 fw-bold text-uppercase"
              style={{ fontSize: 12, letterSpacing: 1, background: p.accentColor, color: '#fff', border: 'none' }}
            >
              {p.playStore ? 'Google Play' : 'Visit Site'} <i className="fa-solid fa-arrow-right-long ms-2"></i>
            </a>
          )}
        </div>
      </section>

      {/* STATS */}
      <section className="product-section" style={{ borderTop: '1px solid var(--velixo-border)', paddingTop: 48 }}>
        <div className="d-flex flex-wrap gap-4 pt-5">
          {p.stats.map((stat) => (
            <div
              key={stat.label}
              className="bento-card"
              style={{ flex: '1 1 180px', minHeight: 'unset', padding: '32px', display: 'flex', flexDirection: 'column', gap: 8 }}
            >
              <span className="stat-num" style={{ color: p.accentColor, fontSize: 32 }}>{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="product-section" style={{ borderColor: `rgba(${p.accentRgb},0.15)` }}>
        <div className="product-section-header">
          <div>
            <div className="product-section-num">ABOUT</div>
            <h2 className="product-section-name" style={{ fontSize: 'clamp(36px,5vw,64px)' }}>What it is.</h2>
          </div>
          <div className="product-section-right" style={{ maxWidth: 520 }}>
            <p style={{ fontSize: 16, color: 'var(--velixo-text-muted)', lineHeight: 1.8 }}>{p.description}</p>
            <div className="product-section-tags mt-2">
              {p.tags.map((tag) => (
                <span key={tag} className="product-section-tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* SCREENSHOTS */}
        {p.images.length > 0 && (
          <div className="d-flex flex-wrap gap-4 mt-2">
            {p.images.map((img, i) => (
              <div
                key={i}
                style={{
                  flex: '1 1 300px',
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  border: `1px solid rgba(${p.accentRgb},0.2)`,
                  background: 'var(--velixo-card)',
                  maxHeight: 500,
                }}
              >
                <img
                  src={img}
                  alt={`${p.name} screenshot ${i + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <div className="products-footer">
        <span className="products-footer-sig">FYP × {new Date().getFullYear()}</span>
        <div className="d-flex gap-3 flex-wrap">
          <Link
            href="/products"
            className="btn btn-light rounded-pill px-4 py-2 fw-bold text-uppercase"
            style={{ fontSize: 12, letterSpacing: 1 }}
          >
            <i className="fa-solid fa-arrow-left-long me-2"></i> All Products
          </Link>
          <Link
            href="/contact"
            className="btn rounded-pill px-4 py-2 fw-bold text-uppercase"
            style={{ fontSize: 12, letterSpacing: 1, background: p.accentColor, color: '#fff', border: 'none' }}
          >
            Hire me <i className="fa-solid fa-arrow-right-long ms-2"></i>
          </Link>
        </div>
      </div>

    </div>
  )
}
