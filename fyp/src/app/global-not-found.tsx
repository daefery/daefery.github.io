// With one root layout per language, Next needs a global 404 that renders the whole document.
// It keeps the same page and shell as before the language split.
import RootShell from '@/components/RootShell'
import NotFoundContent, { notFoundMetadata } from '@/components/NotFoundContent'

export const metadata = notFoundMetadata

export default function GlobalNotFound() {
  return (
    <RootShell lang="en">
      <NotFoundContent />
    </RootShell>
  )
}
