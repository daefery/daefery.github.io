'use client'

import { useState } from 'react'
import BASE_PATH from '@/lib/basePath'
import worksData from '@/data/works.json'

type FilterValue = '*' | '.web-app' | '.mobile' | '.ux-ui' | '.chatbot'

type Project = (typeof worksData.projects)[number]
type FeaturedProject = Project & { featured: NonNullable<Project['featured']> }

const PAGE_SIZE = 6

const filterButtons: { label: string; value: FilterValue }[] = [
  { label: 'All Work', value: '*' },
  { label: 'Web App', value: '.web-app' },
  { label: 'Mobile', value: '.mobile' },
  { label: 'UX/UI', value: '.ux-ui' },
  { label: 'Chatbot', value: '.chatbot' },
]

const allProjects = worksData.projects
function isFeatured(p: Project): p is FeaturedProject { return p.featured !== null }
const featuredItems = allProjects.filter(isFeatured)
const gridItems = allProjects.filter((p) => p.featured === null)

function itemMatchesFilter(cats: string[], filter: FilterValue): boolean {
  if (filter === '*') return true
  return cats.includes(filter.slice(1))
}

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('*')
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  function handleFilterChange(val: FilterValue) {
    setActiveFilter(val)
    setVisibleCount(PAGE_SIZE)
  }

  const showFeaturedRow = activeFilter === '*'
  const visibleFeatured = showFeaturedRow ? featuredItems : []
  const filteredGrid = [
    ...(showFeaturedRow ? [] : featuredItems.filter((p) => itemMatchesFilter(p.cats, activeFilter))),
    ...gridItems.filter((item) => itemMatchesFilter(item.cats, activeFilter)),
  ]
  const visibleGrid = filteredGrid.slice(0, visibleCount)
  const hasMore = filteredGrid.length > visibleCount

  return (
    <>
      <div className="hub-header d-flex flex-wrap justify-content-between align-items-center mb-5 gap-4">
        <div className="hub-title">
          <h3 className="text-uppercase mb-1">Project Hub.</h3>
          <p className="small opacity-50 fw-bold mb-0">Discover web apps, mobile products, and UX designs</p>
        </div>
        <div className="filter-group">
          {filterButtons.map(({ label, value }) => (
            <button
              key={value}
              className={`filter-btn${activeFilter === value ? ' active' : ''}`}
              onClick={() => handleFilterChange(value)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {visibleFeatured.length > 0 && (
        <div className="proj-featured-row mb-4" id="proj-featured-row">
          {visibleFeatured.map((p, i) => (
            <div
              key={`${p.modalId}-${activeFilter}`}
              className={`proj-featured-card proj-featured-${p.featured.size} ${p.cats[0]} animate__animated animate__fadeInUp`}
              style={{ animationDelay: `${i * 0.07}s` }}
              data-cat={p.cats[0]}
              role="button"
              data-bs-toggle="modal"
              data-bs-target={`#${p.modalId}`}
            >
              <div className="pfc-img">
                <img src={`${BASE_PATH}/assets/img/${p.cover}`} alt={p.title} />
                <span className="pfc-badge">Featured</span>
              </div>
              <div className="pfc-body">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <span className="work-cat text-uppercase">{p.catLabel}</span>
                </div>
                <h4 className="pfc-title text-uppercase mb-2">{p.title}</h4>
                <p className="pfc-desc">{p.desc}</p>
                <div className="pfc-tags mb-3">
                  {p.tags.map((t) => <span key={t} className="proj-tag">{t}</span>)}
                </div>
                <div className="d-flex align-items-center gap-3">
                  {p.featured.link ? (
                    <a href={p.featured.link} target="_blank" rel="noopener noreferrer" className="pfc-link" onClick={(e) => e.stopPropagation()}>
                      Live Site <i className="fa-solid fa-arrow-up-right-from-square ms-1"></i>
                    </a>
                  ) : (
                    <span className="pfc-link">View Details <i className="fa-solid fa-arrow-right ms-1"></i></span>
                  )}
                  {p.featured.stat && <span className="pfc-stat"><i className="fa-solid fa-users me-1"></i>{p.featured.stat}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="isotope-grid" id="proj-grid">
        {visibleGrid.map((item, i) => (
          <div
            key={`${item.modalId}-${activeFilter}-${i}`}
            className={`isotope-item ${item.cats.join(' ')} animate__animated animate__fadeInUp`}
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <div
              className="card-work-inner card-work-compact"
              role="button"
              data-bs-toggle="modal"
              data-bs-target={`#${item.modalId}`}
            >
              <div className="work-img-thumb">
                <img src={`${BASE_PATH}/assets/img/${item.cover}`} alt={item.title} />
              </div>
              <div className="work-content">
                <span className="work-cat text-uppercase">{item.catLabel}</span>
                <h4 className="work-title text-uppercase">{item.title}</h4>
                <p className="work-desc">{item.desc}</p>
                <div className="pfc-tags">
                  {item.tags.map((t) => <span key={t} className="proj-tag">{t}</span>)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="text-center mt-5">
          <button
            className="btn-load-more"
            onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
          >
            Load More <i className="fa-solid fa-chevron-down ms-2"></i>
            <span className="load-more-count">
              {filteredGrid.length - visibleCount} remaining
            </span>
          </button>
        </div>
      )}
    </>
  )
}
