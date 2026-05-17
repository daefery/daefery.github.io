'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', icon: 'fa-house-user', label: 'Home' },
  { href: '/resume', icon: 'fa-file-invoice', label: 'Resume' },
  { href: '/works', icon: 'fa-briefcase', label: 'Projects' },
  { href: '/blog', icon: 'fa-bolt', label: 'Feed' },
  { href: '/contact', icon: 'fa-envelope', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()

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
      </nav>
    </div>
  )
}
