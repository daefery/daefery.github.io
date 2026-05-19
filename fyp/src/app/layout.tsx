import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import WowObserver from '@/components/WowObserver'
import BootstrapClient from '@/components/BootstrapClient'
import Preloader from '@/components/Preloader'
import BASE_PATH from '@/lib/basePath'

const SITE_URL = 'https://daefery.github.io/feryyp'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'FYP. — Fery Yundara Putera | Senior Software Engineer',
    template: '%s | Fery Yundara Putera',
  },
  description:
    'Senior Software Engineer with 12+ years building EdTech, AI-first systems, and full-stack products. Core developer on edbot.ai — 32M+ lessons across 10+ countries.',
  keywords: [
    'Senior Software Engineer',
    'Full Stack Developer',
    'React',
    'Next.js',
    'Django',
    'Laravel',
    'EdTech',
    'AI Engineering',
    'Fery Yundara Putera',
  ],
  authors: [{ name: 'Fery Yundara Putera', url: SITE_URL }],
  creator: 'Fery Yundara Putera',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'FYP. — Fery Yundara Putera',
    title: 'FYP. — Fery Yundara Putera | Senior Software Engineer',
    description:
      'Senior Software Engineer with 12+ years building EdTech, AI-first systems, and full-stack products.',
    images: [
      {
        url: `${SITE_URL}/assets/img/profile.webp`,
        width: 800,
        height: 800,
        alt: 'Fery Yundara Putera — Senior Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FYP. — Fery Yundara Putera | Senior Software Engineer',
    description:
      'Senior Software Engineer with 12+ years building EdTech, AI-first systems, and full-stack products.',
    images: [`${SITE_URL}/assets/img/profile.webp`],
  },
  icons: {
    icon: `${BASE_PATH}/assets/img/favicon.svg`,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Fery Yundara Putera',
      url: SITE_URL,
      jobTitle: 'Senior Software Engineer',
      description:
        'Senior Software Engineer with 12+ years building EdTech, AI-first systems, and full-stack products shipped at scale.',
      image: `${SITE_URL}/assets/img/profile.webp`,
      sameAs: [
        'https://linkedin.com/in/feryyp',
        'https://github.com/daefery',
        'https://medium.com/@feryyp',
      ],
      knowsAbout: [
        'React',
        'Next.js',
        'Node.js',
        'Django',
        'Laravel',
        'ASP.NET MVC',
        'React Native',
        'CI/CD',
        'EdTech',
        'AI Engineering',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'FYP. — Fery Yundara Putera',
      author: { '@id': `${SITE_URL}/#person` },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark-theme" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;800;900&family=Archivo:wght@300&family=Space+Grotesk:wght@300&display=swap" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Preloader />
        <Nav />
        <WowObserver />
        <BootstrapClient />
        {children}
      </body>
    </html>
  )
}
