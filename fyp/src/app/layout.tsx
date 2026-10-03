import type { Metadata, Viewport } from 'next'
import './globals.css'
import './accessibility.css'
import Nav from '@/components/Nav'
import WowObserver from '@/components/WowObserver'
import BootstrapClient from '@/components/BootstrapClient'
import StructuredData from '@/components/StructuredData'
import {
  identity,
  pageMetadata,
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
} from '@/lib/site'

export const metadata: Metadata = {
  ...pageMetadata(
    'System design and AI-assisted delivery',
    SITE_DESCRIPTION,
    '/',
  ),
  metadataBase: new URL(SITE_URL),
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  keywords: [
    'Senior Software Engineer',
    'System design',
    'Application architecture',
    'AI workflows',
    'AI-assisted delivery',
    'Full Stack Developer',
    'React',
    'Next.js',
    'Django',
    'Laravel',
    'AI Engineering',
    'TypeScript',
    'Rust',
    'EdTech',
    SITE_NAME,
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/assets/favicon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/assets/apple-touch-icon.png',
  },
}

export const viewport: Viewport = { themeColor: '#07080d' }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark-theme" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;800;900&family=Archivo:wght@300&family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
        />
        <StructuredData data={identity} />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Nav />
        <WowObserver />
        <BootstrapClient />
        <main id="main-content">{children}</main>
      </body>
    </html>
  )
}
