import type { Metadata } from 'next'

export const SITE_URL = 'https://daefery.github.io'
export const SITE_NAME = 'Fery Yundara Putera'
export const SITE_DESCRIPTION =
  'Senior software engineer in Indonesia (UTC+7). Application architecture, AI workflows and AI-assisted delivery. Twelve years in software, eight fully remote.'

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`
  const url = new URL(path, SITE_URL).href
  const images = [
    {
      url: `${SITE_URL}/assets/og-portfolio.png`,
      width: 1200,
      height: 630,
      alt: `${SITE_NAME}: system design and AI-assisted delivery`,
    },
  ]
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      url,
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: images.map((image) => image.url),
    },
  }
}

export const identity = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      jobTitle: 'Senior Software Engineer',
      description: SITE_DESCRIPTION,
      image: `${SITE_URL}/assets/img/profile.webp`,
      homeLocation: { '@type': 'Country', name: 'Indonesia' },
      worksFor: { '@type': 'Organization', name: 'Solve Education!' },
      alumniOf: [
        { '@type': 'CollegeOrUniversity', name: 'Bina Nusantara University' },
        { '@type': 'CollegeOrUniversity', name: 'Telkom University' },
      ],
      sameAs: [
        'https://linkedin.com/in/feryyp',
        'https://github.com/daefery',
        'https://medium.com/@feryyp',
        'https://www.instagram.com/feryyp.id',
      ],
      knowsAbout: [
        'System design',
        'Application architecture',
        'AI-assisted software delivery',
        'Agent orchestration',
        'AI evaluation',
        'Model Context Protocol',
        'TypeScript',
        'Python',
        'Rust',
        'React',
        'Next.js',
        'Node.js',
        'Django',
        'React Native',
        'SwiftUI',
        'Kotlin',
        'EdTech',
        'LLM Integration',
        'AWS Bedrock',
        'CI/CD',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      inLanguage: 'en',
      author: { '@id': `${SITE_URL}/#person` },
    },
  ],
}
