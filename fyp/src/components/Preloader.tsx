'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Preloader() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(true)
  const [hiding, setHiding] = useState(false)

  useEffect(() => {
    setVisible(true)
    setHiding(false)

    const showTimer = setTimeout(() => {
      setHiding(true)
      const hideTimer = setTimeout(() => setVisible(false), 450)
      return () => clearTimeout(hideTimer)
    }, 600)

    return () => clearTimeout(showTimer)
  }, [pathname])

  if (!visible) return null

  return (
    <div className={`page-preloader${hiding ? ' hiding' : ''}`} aria-hidden="true">
      <div className="preloader-inner">
        <span className="preloader-logo">FYP.</span>
        <div className="preloader-bar">
          <div className="preloader-progress" />
        </div>
      </div>
    </div>
  )
}
