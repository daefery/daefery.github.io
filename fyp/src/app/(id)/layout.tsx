import RootShell, { rootMetadata, rootViewport } from '@/components/RootShell'
import { home } from '@/i18n/home'

export const metadata = rootMetadata
export const viewport = rootViewport

export default function IndonesianLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootShell lang="id" skip={home.id.nav.skip}>
      {children}
    </RootShell>
  )
}
