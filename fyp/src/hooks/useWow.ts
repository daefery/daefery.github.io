import { useEffect } from 'react'

export default function useWow() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.wow')
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          const delay = el.dataset.wowDelay ?? '0s'
          el.style.animationDelay = delay
          el.classList.add('animate__animated')
          observer.unobserve(el)
        })
      },
      { rootMargin: '0px 0px -100px 0px' }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
