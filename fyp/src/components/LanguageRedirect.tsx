'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { BOT_PATTERN, CHOICE_KEY, TIMEOUT_MS, TRACE_URL, countryFromTrace, decide, explicitChoice, switchUrl } from '@/i18n/detect'

// Kept in memory too: survives client-side navigation when both storages are blocked.
let memoryChoice: string | null = null
let carryOnLinks = false

function savedChoice(): string | null {
  for (const store of ['localStorage', 'sessionStorage'] as const) {
    try {
      const v = window[store].getItem(CHOICE_KEY)
      if (v) return v
    } catch {
      // this storage is blocked, try the next
    }
  }
  return memoryChoice
}

function remember(lang: string) {
  memoryChoice = lang
  for (const store of ['localStorage', 'sessionStorage'] as const) {
    try {
      window[store].setItem(CHOICE_KEY, lang)
      carryOnLinks = false
      return
    } catch {
      // blocked, try the next
    }
  }
  carryOnLinks = true // both blocked: carry ?lang= on same-site links for the rest of this visit
}

/** Add ?lang= to same-site page links that do not already choose a language (the switch keeps its own). */
function carryChoice(lang: string) {
  for (const a of document.querySelectorAll<HTMLAnchorElement>('a[href^="/"]')) {
    const url = new URL(a.href)
    if (url.pathname.startsWith('/assets/') || url.pathname.startsWith('/products/vacua/Vacua')) continue
    const own = url.searchParams.get('lang')
    if (own === 'en' || own === 'id') continue
    url.searchParams.set('lang', lang)
    a.setAttribute('href', `${url.pathname}${url.search}${url.hash}`)
  }
}

/**
 * Mounted once in the document shell, so it runs on every page and after client-side navigation.
 * - remembers a language chosen through ?lang=
 * - on the English homepage only, sends visitors from Indonesia to /id/ unless they chose English
 */
export default function LanguageRedirect() {
  const pathname = usePathname()
  useEffect(() => {
    const fromLink = new URLSearchParams(window.location.search).get('lang')
    if (fromLink === 'en' || fromLink === 'id') remember(fromLink)
    if (carryOnLinks && memoryChoice) carryChoice(memoryChoice)

    if ((pathname.replace(/\/$/, '') || '/') !== '/') return
    const isBot = BOT_PATTERN.test(navigator.userAgent)
    const choice = () => explicitChoice(window.location.search, savedChoice())
    const go = () => window.location.replace(switchUrl(window.location.href, '/id/', 'id'))
    if (isBot || choice()) {
      if (decide({ choice: choice(), country: null, isBot }) === 'go-id') go()
      return
    }
    const controller = new AbortController()
    const timer = window.setTimeout(() => controller.abort(), TIMEOUT_MS)
    // A choice made in another tab while the lookup runs must still win.
    const onStorage = (e: StorageEvent) => {
      if (e.key === CHOICE_KEY) controller.abort()
    }
    window.addEventListener('storage', onStorage)
    fetch(TRACE_URL, { signal: controller.signal, cache: 'no-store' })
      .then((r) => (r.ok ? r.text() : ''))
      .then((body) => {
        if (decide({ choice: choice(), country: countryFromTrace(body), isBot: false }) === 'go-id') go()
      })
      .catch(() => {
        // offline, blocked, slow or cancelled: stay in English
      })
      .finally(() => window.clearTimeout(timer))
    return () => {
      controller.abort()
      window.clearTimeout(timer)
      window.removeEventListener('storage', onStorage)
    }
  }, [pathname])
  return null
}
