import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — Fery Yundara Putera',
  description:
    'Engineering articles and technical logs from 12+ years of full-stack development, EdTech architecture, and AI-first engineering.',
  openGraph: {
    title: 'Blog — Fery Yundara Putera | Senior Software Engineer',
    description:
      'Engineering articles and technical logs from 12+ years of full-stack development, EdTech architecture, and AI-first engineering.',
    url: 'https://daefery.github.io/blog',
  },
  alternates: { canonical: 'https://daefery.github.io/blog' },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
