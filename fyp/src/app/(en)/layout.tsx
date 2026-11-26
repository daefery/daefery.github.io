import RootShell, { rootMetadata, rootViewport } from '@/components/RootShell'

export const metadata = rootMetadata
export const viewport = rootViewport

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="en">{children}</RootShell>
}
