'use client'

import LanguageSwitch from '@/components/LanguageSwitch'
import { home, LANG_PATH, type Lang } from '@/i18n/home'

export default function PortfolioNav({ lang = 'en' }: { lang?: Lang }) {
  const t = home[lang].nav
  const base = LANG_PATH[lang]
  const sections: [string, string][] = [
    ...t.sections.map(([hash, label]) => [`${base}${hash}`, label] as [string, string]),
    ['/assets/fery-yundara-putera-cv.pdf', 'CV'],
  ]
  return (
    <nav aria-label={t.aria}>
      <a className="logo" href={base} aria-label={t.home}>
        <span className="ring">
          <img src="/assets/avatar.webp" alt="" width="26" height="26" />
        </span>
        fery.
      </a>
      <div className="links">
        {sections.map(([href, label]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </div>
      <details
        className="mobile-menu"
        onClick={(event) => {
          if ((event.target as HTMLElement).closest('a')) event.currentTarget.open = false
        }}
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            event.currentTarget.open = false
            event.currentTarget.querySelector('summary')?.focus()
          }
        }}
      >
        <summary>{t.explore}</summary>
        <div className="mobile-links">
          {sections.map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>
      </details>
      <LanguageSwitch lang={lang} />
      <a className="cta" href={`${base}#work-with-me`}>
        {t.cta}
      </a>
    </nav>
  )
}
