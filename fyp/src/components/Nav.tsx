'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const navItems = [
  { href: '/', icon: 'fa-house-user', label: 'Home' },
  { href: '/resume', icon: 'fa-file-invoice', label: 'Resume' },
  { href: '/works', icon: 'fa-briefcase', label: 'Projects' },
  { href: '/blog', icon: 'fa-bolt', label: 'Feed' },
  { href: '/contact', icon: 'fa-envelope', label: 'Contact' },
]

export default function Nav() {
  const rawPathname = usePathname()
  const pathname = rawPathname.replace(/\/$/, '') || '/'
  const [scrollVisible, setScrollVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrollVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="nav-container animate__animated animate__fadeInUp">
      <nav className="nav-dock">
        {navItems.map(({ href, icon, label }) => {
          const isActive = pathname === href
          return (
            <Link key={href} href={href} className={`dock-item${isActive ? ' active' : ''}`}>
              <i className={`fa-solid ${icon}`}></i>
              <span>{label}</span>
            </Link>
          )
        })}
        <a
          href="#"
          className={`dock-item scroll-top-btn${scrollVisible ? ' visible' : ''}`}
          id="scrollTopBtn"
          aria-label="Back to top"
          onClick={handleScrollTop}
        >
          <i className="fa-solid fa-chevron-up"></i>
          <span>Top</span>
        </a>
      </nav>
    </div>
  )
}
