import { pageMetadata } from '@/lib/site'

export const metadata = pageMetadata('Engineering notes', 'Notes on application architecture, CI/CD, AI workflows and education technology from Fery Yundara Putera. Read the latest writing on Medium.', '/blog/')

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
