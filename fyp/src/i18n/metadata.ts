import type { Metadata } from 'next'
import { pageMetadata, SITE_URL } from '@/lib/site'
import { home, LANG_PATH, type Lang } from '@/i18n/home'

/** Homepage metadata with hreflang alternates, so search engines show each visitor the right language. */
export function homeMetadata(lang: Lang): Metadata {
  const t = home[lang].meta
  const base = pageMetadata(t.title, t.description, LANG_PATH[lang])
  return {
    ...base,
    alternates: {
      ...base.alternates,
      languages: {
        en: `${SITE_URL}${LANG_PATH.en}`,
        id: `${SITE_URL}${LANG_PATH.id}`,
        'x-default': `${SITE_URL}${LANG_PATH.en}`,
      },
    },
    openGraph: {
      ...base.openGraph,
      locale: t.locale,
      alternateLocale: [lang === 'en' ? home.id.meta.locale : home.en.meta.locale],
    },
  }
}
