'use client'

import { useState } from 'react'
import BASE_PATH from '@/lib/basePath'

type FilterValue = '*' | '.web-app' | '.mobile' | '.ux-ui'

const filterButtons: { label: string; value: FilterValue }[] = [
  { label: 'All Work', value: '*' },
  { label: 'Web App', value: '.web-app' },
  { label: 'Mobile', value: '.mobile' },
  { label: 'UX/UI', value: '.ux-ui' },
]

interface GridItem {
  cats: string[]
  img: string
  catLabel: string
  title: string
  desc: string
  tags: string[]
  modalId: string
}

const gridItems: GridItem[] = [
  { cats: ['web-app'], img: 'project-3.webp', catLabel: 'Web App', title: 'Dawn of Civilization', desc: 'Educational game teaching history via gamification, built fullstack with Django.', tags: ['Django', 'Fullstack'], modalId: 'projectModal3' },
  { cats: ['web-app'], img: 'project-4.webp', catLabel: 'Web App', title: 'SICC Singapore', desc: 'Cricket club website and membership portal with full CMS, built on ASP.NET MVC.', tags: ['.NET MVC'], modalId: 'projectModal7' },
  { cats: ['web-app'], img: 'project-5.webp', catLabel: 'Web App', title: 'Localizy', desc: 'Localization SaaS managing translation workflows and multi-language content delivery.', tags: ['React', 'Laravel'], modalId: 'projectModal8' },
  { cats: ['web-app'], img: 'project-6.webp', catLabel: 'Web App', title: 'Content+', desc: 'AI-assisted content creation platform integrating LLMs for marketing teams.', tags: ['React'], modalId: 'projectModal9' },
  { cats: ['web-app'], img: 'project-1.webp', catLabel: 'Web App', title: 'Solve Employment', desc: 'Job platform connecting edtech graduates to opportunities across Southeast Asia.', tags: ['React'], modalId: 'projectModal5' },
  { cats: ['web-app'], img: 'project-2.webp', catLabel: 'Web App', title: 'Mendaki Challenge', desc: 'Gamified challenge portal for Malay community youth with leaderboards and prizes.', tags: ['HTML', 'jQuery'], modalId: 'projectModal10' },
  { cats: ['mobile'], img: 'project-3.webp', catLabel: 'Mobile', title: 'Plareon: Daily Hoops', desc: 'Basketball training game with daily drills and skill progression for Android.', tags: ['Android'], modalId: 'projectModal4' },
  { cats: ['mobile'], img: 'project-4.webp', catLabel: 'Mobile', title: 'Qadha', desc: 'Android app for Muslims to log and track missed prayers with reminders.', tags: ['Android'], modalId: 'projectModal11' },
  { cats: ['mobile', 'ux-ui'], img: 'project-5.webp', catLabel: 'Mobile / UX', title: 'Dompu Apps', desc: 'Government mobile app delivering public services for Dompu Regency citizens.', tags: ['React Native', 'Figma'], modalId: 'projectModal6' },
  { cats: ['ux-ui'], img: 'project-6.webp', catLabel: 'UX/UI', title: 'Pariwisata Mockup', desc: 'Full mobile UI for tourism discovery — onboarding, browsing, and booking flows.', tags: ['Figma'], modalId: 'projectModal12' },
  { cats: ['ux-ui'], img: 'project-1.webp', catLabel: 'UX/UI', title: 'Natakraf Mockup', desc: 'E-commerce marketplace UI for Indonesian artisans to sell handcraft directly.', tags: ['Figma'], modalId: 'projectModal13' },
]

const featuredItems = [
  {
    cat: 'web-app', img: 'project-1.webp', catLabel: 'Web App', title: 'edbot.ai',
    desc: 'AI learning platform — core developer on team that delivered 32M+ lessons across 10+ countries.',
    tags: ['React', 'Next.js', 'Django', 'CI/CD', 'Selenium'],
    link: 'https://edbot.ai', stat: '32M+ lessons', modalId: 'projectModal1', size: 'lg' as const
  },
  {
    cat: 'web-app', img: 'project-2.webp', catLabel: 'Web App', title: 'Learnalytics',
    desc: 'Analytics dashboard surfacing learner engagement and platform metrics for data-driven curriculum decisions.',
    tags: ['React', 'Laravel'],
    link: null, stat: null, modalId: 'projectModal2', size: 'sm' as const
  },
]

function itemMatchesFilter(item: GridItem, filter: FilterValue): boolean {
  if (filter === '*') return true
  const filterCat = filter.slice(1)
  return item.cats.includes(filterCat)
}

function featuredMatchesFilter(cat: string, filter: FilterValue): boolean {
  if (filter === '*') return true
  return filter === `.${cat}`
}

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('*')

  const showFeaturedRow = featuredItems.some((f) => featuredMatchesFilter(f.cat, activeFilter))

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
              onClick={() => setActiveFilter(value)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {showFeaturedRow && (
        <div className="proj-featured-row mb-4" id="proj-featured-row">
          {featuredItems.map((f) => {
            if (!featuredMatchesFilter(f.cat, activeFilter)) return null
            return (
              <div
                key={f.modalId}
                className={`proj-featured-card proj-featured-${f.size} ${f.cat}`}
                data-cat={f.cat}
                role="button"
                data-bs-toggle="modal"
                data-bs-target={`#${f.modalId}`}
              >
                <div className="pfc-img">
                  <img src={`${BASE_PATH}/assets/img/${f.img}`} alt={f.title} />
                  <span className="pfc-badge">Featured</span>
                </div>
                <div className="pfc-body">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="work-cat text-uppercase">{f.catLabel}</span>
                  </div>
                  <h4 className="pfc-title text-uppercase mb-2">{f.title}</h4>
                  <p className="pfc-desc">{f.desc}</p>
                  <div className="pfc-tags mb-3">
                    {f.tags.map((t) => <span key={t} className="proj-tag">{t}</span>)}
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    {f.link ? (
                      <a href={f.link} target="_blank" rel="noopener noreferrer" className="pfc-link" onClick={(e) => e.stopPropagation()}>
                        Live Site <i className="fa-solid fa-arrow-up-right-from-square ms-1"></i>
                      </a>
                    ) : (
                      <span className="pfc-link">View Details <i className="fa-solid fa-arrow-right ms-1"></i></span>
                    )}
                    {f.stat && <span className="pfc-stat"><i className="fa-solid fa-users me-1"></i>{f.stat}</span>}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}

      <div className="isotope-grid" id="proj-grid">
        <div className="grid-sizer"></div>
        {gridItems.map((item) => {
          const visible = itemMatchesFilter(item, activeFilter)
          return (
            <div
              key={item.modalId}
              className={`isotope-item ${item.cats.join(' ')}`}
              style={{ display: visible ? undefined : 'none' }}
            >
              <div
                className="card-work-inner card-work-compact"
                role="button"
                data-bs-toggle="modal"
                data-bs-target={`#${item.modalId}`}
              >
                <div className="work-img-thumb">
                  <img src={`${BASE_PATH}/assets/img/${item.img}`} alt={item.title} />
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
          )
        })}
      </div>
    </>
  )
}
