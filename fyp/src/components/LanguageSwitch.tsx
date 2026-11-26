'use client'

import { CHOICE_KEY, switchUrl } from '@/i18n/detect'
import { home, LANG_PATH, type Lang } from '@/i18n/home'

/**
 * Link to the other language. The ?lang= parameter makes the choice work even when storage is blocked,
 * and the click also saves it so later visits keep it. The current #section is kept.
 */
export default function LanguageSwitch({ lang }: { lang: Lang }) {
  const other: Lang = lang === 'en' ? 'id' : 'en'
  const t = home[lang].nav
  const href = `${LANG_PATH[other]}?lang=${other}`
  return (
    <a
      className="lang-switch"
      href={href}
      hrefLang={other}
      lang={other}
      aria-label={t.switchAria}
      onClick={(event) => {
        try {
          window.localStorage.setItem(CHOICE_KEY, other)
        } catch {
          // storage blocked: ?lang= in the link carries the choice
        }
        event.preventDefault()
        window.location.assign(switchUrl(window.location.href, LANG_PATH[other], other))
      }}
    >
      {t.switchText}
    </a>
  )
}
