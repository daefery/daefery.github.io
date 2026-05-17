'use client'

import { useEffect, useState } from 'react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <a
      href="#"
      className={`dock-item scroll-top-btn${visible ? ' visible' : ''}`}
      id="scrollTopBtn"
      aria-label="Back to top"
      onClick={handleClick}
    >
      <i className="fa-solid fa-chevron-up"></i>
      <span>Top</span>
    </a>
  )
}
