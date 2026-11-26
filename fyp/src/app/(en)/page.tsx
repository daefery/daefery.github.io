import HomePage from '@/components/HomePage'
import { homeMetadata } from '@/i18n/metadata'

export const metadata = homeMetadata('en')

export default function Home() {
  return <HomePage lang="en" />
}
