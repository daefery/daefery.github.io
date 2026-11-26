// Language choice for the static homepage. Pure functions so the rule is tested without a browser.
//
// Rule (Fery, 26 Nov 2026): a visitor whose IP is in Indonesia gets Indonesian by default, everyone else English.
// GitHub Pages has no server, so the country comes from Cloudflare's public trace endpoint in the browser.
// A choice the visitor made with the language switch always wins over the IP.

export const CHOICE_KEY = 'fery-lang'
export const TRACE_URL = 'https://www.cloudflare.com/cdn-cgi/trace'
export const TIMEOUT_MS = 1500

/** Country code from a Cloudflare trace body ("...\nloc=ID\n..."), or null. */
export function countryFromTrace(body: string): string | null {
  const m = body.match(/^loc=([A-Z]{2})$/m)
  return m ? m[1] : null
}

export type Decision = 'stay' | 'go-id'

/** A language the visitor chose explicitly: the ?lang= parameter first, then the saved choice. */
export function explicitChoice(search: string, saved: string | null): 'en' | 'id' | null {
  const fromUrl = new URLSearchParams(search).get('lang')
  if (fromUrl === 'en' || fromUrl === 'id') return fromUrl
  return saved === 'en' || saved === 'id' ? saved : null
}

/**
 * Should the English homepage send this visitor to /id/?
 * - bots never move (search engines index both pages through hreflang)
 * - an explicit choice (link or saved) decides next
 * - otherwise Indonesia goes to /id/, anything else or unknown stays
 */
export function decide({ choice, country, isBot }: { choice: string | null; country: string | null; isBot: boolean }): Decision {
  if (isBot) return 'stay'
  if (choice === 'en') return 'stay'
  if (choice === 'id') return 'go-id'
  return country === 'ID' ? 'go-id' : 'stay'
}

/** Same page in the other language, keeping the query (minus lang) and the #section. */
export function switchUrl(current: string, toPath: string, lang: 'en' | 'id'): string {
  const url = new URL(current)
  url.pathname = toPath
  url.searchParams.set('lang', lang)
  return `${url.pathname}${url.search}${url.hash}`
}

// Crawlers and link-preview fetchers keep the English page; both pages are indexed through hreflang.
export const BOT_PATTERN = /bot\b|bot\/|crawl|spider|slurp|lighthouse|headlesschrome|facebookexternalhit|embedly|whatsapp|telegram|discord|preview/i
