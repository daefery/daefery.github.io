import HomePage from '@/components/HomePage'
import { homeMetadata } from '@/i18n/metadata'

export const metadata = homeMetadata('id')

export default function HomeId() {
  return <HomePage lang="id" />
}
