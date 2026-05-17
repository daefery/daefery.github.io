// fyp/src/app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import ScrollToTop from '@/components/ScrollToTop'
import WowObserver from '@/components/WowObserver'
import BootstrapClient from '@/components/BootstrapClient'
import BASE_PATH from '@/lib/basePath'

export const metadata: Metadata = {
  icons: {
    icon: `${BASE_PATH}/assets/img/favicon.svg`,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark-theme">
      <head>
        <link rel="stylesheet" href={`${BASE_PATH}/assets/google-fonts.css`} />
      </head>
      <body>
        <Nav />
        <WowObserver />
        <BootstrapClient />
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}
