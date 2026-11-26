import { home, type Lang } from '@/i18n/home'

export default function PortfolioFooter({ lang = 'en' }: { lang?: Lang }) {
  return (
    <footer>
      <span>© 2026 Fery Yundara Putera</span>
      <div className="footer-links">
        {home[lang].footer.pages.map(([href, label]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </div>
      <div className="footer-links">
        <a href="https://linkedin.com/in/feryyp">LinkedIn</a>
        <a href="https://github.com/daefery">GitHub</a>
        <a href="https://medium.com/@feryyp">Medium</a>
        <a href="https://www.instagram.com/feryyp.id">Instagram</a>
      </div>
    </footer>
  )
}
