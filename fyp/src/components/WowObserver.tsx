'use client'

import { usePathname } from 'next/navigation'
import useWow from '@/hooks/useWow'

export default function WowObserver() {
  const pathname = usePathname()
  useWow(pathname)
  return null
}
