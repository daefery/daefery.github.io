'use client'

import { useEffect, useState } from 'react'
import BASE_PATH from '@/lib/basePath'
import PageFooter from '@/components/PageFooter'

interface FeedItem {
  title: string
  link: string
  pubDate: string
  content: string
  categories: string[]
  guid: string
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) return dateStr.slice(0, 16).toUpperCase()
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).toUpperCase()
}

function readTime(content: string): string {
  const words = content.replace(/<[^>]+>/g, '').split(/\s+/).length
  return `${Math.max(1, Math.round(words / 200))} Min Read`
}

function getPostId(guid: string): string {
  return guid.split('/').pop() ?? ''
}

function getCategories(item: FeedItem): string {
  return item.categories?.length ? item.categories.slice(0, 2).join(', ') : 'Article'
}

function PostImage({ guid, alt, className }: { guid: string; alt: string; className?: string }) {
  const id = getPostId(guid)
  const fallback = `${BASE_PATH}/assets/img/blog-1.webp`
  const [src, setSrc] = useState(id ? `${BASE_PATH}/assets/img/posts/${id}.png` : fallback)

  const handleError = () => {
    if (src.endsWith('.png')) setSrc(`${BASE_PATH}/assets/img/posts/${id}.jpg`)
    else if (src.endsWith('.jpg')) setSrc(`${BASE_PATH}/assets/img/posts/${id}.webp`)
    else setSrc(fallback)
  }

  return <img src={src} alt={alt} className={className} loading="lazy" onError={handleError} />
}

export default function BlogPage() {
  const [items, setItems] = useState<FeedItem[]>([])
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading')

  useEffect(() => {
    const MEDIUM_RSS = 'https://medium.com/feed/@feryyp'
    const API = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(MEDIUM_RSS)}&count=10&t=${Date.now()}`

    fetch(API)
      .then((r) => r.json())
      .then((data) => {
        if (!data.items?.length) { setStatus('error'); return }
        setItems(data.items)
        setStatus('loaded')
      })
      .catch(() => setStatus('error'))
  }, [])

  return (
    <div className="blog-page">
      <div className="container bento-container">
        <header className="d-flex justify-content-between align-items-center mb-5 animate__animated animate__fadeInDown">
          <div className="logo-text">FYP.</div>
        </header>

        <div className="bento-card card-hero wow animate__fadeInLeft">
          <span className="card-number">01 / INSIGHTS</span>
          <div className="badge-status">
            <i className="fa-solid fa-circle"></i>
            Writing
          </div>
          <h1 className="hero-title">NOTES<br /><span>FROM</span><br />THE FIELD.</h1>
          <p className="hero-desc">Notes on building, debugging, and occasionally overthinking things. Mostly EdTech and web.</p>
        </div>

        <div className="bento-card card-feed-stats wow animate__fadeInRight">
          <span className="card-number">02 / CORE</span>
          <div className="stat-item mb-4">
            <div className="stat-num">
              {status === 'loading' && <span className="stat-loading"><i className="fa-solid fa-spinner fa-spin"></i></span>}
              {status === 'loaded' && items.length}
              {status === 'error' && '—'}
            </div>
            <div className="stat-label">Articles</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">12+</div>
            <div className="stat-label">Years Experience</div>
          </div>
        </div>

        <div className="blog-grid-wrapper col-12">
          {status === 'loading' && (
            <div id="blog-loading" className="text-center py-5">
              <i className="fa-solid fa-spinner fa-spin fa-2x opacity-30"></i>
              <p className="small opacity-30 mt-3 fw-bold text-uppercase">Loading from Medium...</p>
            </div>
          )}

          {status === 'error' && (
            <div id="blog-error" className="text-center py-5">
              <i className="fa-solid fa-triangle-exclamation fa-2x opacity-30"></i>
              <p className="small opacity-30 mt-3 fw-bold text-uppercase">
                Could not load articles.{' '}
                <a href="https://medium.com/@feryyp" target="_blank" rel="noopener noreferrer" className="opacity-50">
                  View on Medium
                </a>
              </p>
            </div>
          )}

          {status === 'loaded' && (
            <div className="row g-4" id="blog-feed">
              {/* Featured article — items[0] */}
              <div className="col-lg-8">
                <article
                  className="blog-featured animate__animated animate__fadeInLeft blog-card-link"
                  onClick={() => window.open(items[0].link, '_blank')}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="bf-img">
                    <PostImage guid={items[0].guid} alt={items[0].title} />
                  </div>
                  <div className="bf-gradient"></div>
                  <div className="bf-content">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <span className="post-tag">{getCategories(items[0])}</span>
                      <span className="post-read"><i className="fa-regular fa-clock me-1"></i>{readTime(items[0].content)}</span>
                    </div>
                    <h2><a href={items[0].link} target="_blank" rel="noopener noreferrer">{items[0].title}</a></h2>
                    <div className="post-author-row d-flex align-items-center gap-2 mt-4">
                      <img src={`${BASE_PATH}/assets/img/profile.webp`} alt="Fery" className="rounded-circle" style={{ width: 28, height: 28, objectFit: 'cover' }} />
                      <span>Fery Yundara Putera</span>
                      <span className="ms-auto">{formatDate(items[0].pubDate)}</span>
                    </div>
                  </div>
                  <div className="bf-arrow"><i className="fa-solid fa-arrow-up-right"></i></div>
                </article>
              </div>

              {/* Side cards — items[1] and items[2] */}
              {items.length > 1 && (
                <div className="col-12 col-lg-4">
                  <div className="row g-4 h-100">
                    {items.slice(1, 3).map((item, i) => (
                      <div key={item.guid} className="col-12">
                        <article
                          className="blog-side-card blog-card-link h-100 animate__animated animate__fadeInRight"
                          onClick={() => window.open(item.link, '_blank')}
                          style={{ cursor: 'pointer', animationDelay: i === 0 ? '0s' : '0.1s' }}
                        >
                          <div className="bsc-img">
                            <PostImage guid={item.guid} alt={item.title} />
                          </div>
                          <div className="bsc-body">
                            <span className="post-tag">{getCategories(item)}</span>
                            <h5><a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a></h5>
                            <div className="d-flex align-items-center gap-2 mt-auto pt-3">
                              <span className="post-read"><i className="fa-regular fa-clock me-1"></i>{readTime(item.content)}</span>
                              <span className="post-date ms-auto">{formatDate(item.pubDate)}</span>
                            </div>
                          </div>
                        </article>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Grid cards — items[3+] */}
              {items.slice(3).map((item) => (
                <div key={item.guid} className="col-12 col-sm-6 col-lg-4 animate__animated animate__fadeInUp">
                  <article
                    className="blog-post-card blog-card-link h-100"
                    onClick={() => window.open(item.link, '_blank')}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="bpc-img">
                      <PostImage guid={item.guid} alt={item.title} />
                      <span className="post-tag">{getCategories(item)}</span>
                    </div>
                    <div className="bpc-body">
                      <h5><a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a></h5>
                      <div className="d-flex align-items-center gap-2 mt-auto pt-3">
                        <span className="post-read"><i className="fa-regular fa-clock me-1"></i>{readTime(item.content)}</span>
                        <span className="post-date ms-auto">{formatDate(item.pubDate)}</span>
                      </div>
                    </div>
                  </article>
                </div>
              ))}

              <div className="col-12 text-center pt-4 pb-2">
                <a
                  href="https://medium.com/@feryyp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light rounded-pill px-5 py-3 fw-bold text-uppercase"
                >
                  View All on Medium <i className="fa-brands fa-medium ms-2" style={{ verticalAlign: 'middle' }}></i>
                </a>
              </div>
            </div>
          )}
        </div>

        <PageFooter col12 />
      </div>
    </div>
  )
}
