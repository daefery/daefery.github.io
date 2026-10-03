'use client'

const sections = [
  ['/#approach', 'Approach'],
  ['/#work', 'Work'],
  ['/#research', 'Research'],
  ['/#products', 'Products'],
  ['/#writing', 'Writing'],
  ['/assets/fery-yundara-putera-cv.pdf', 'CV'],
]

export default function PortfolioNav() {
  return (
    <nav aria-label="Portfolio navigation">
      <a className="logo" href="/" aria-label="Fery Yundara Putera, home">
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
        <summary>Explore</summary>
        <div className="mobile-links">
          {sections.map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>
      </details>
      <a className="cta" href="mailto:feryyp.work@gmail.com">
        Get in touch
      </a>
    </nav>
  )
}
