import Link from 'next/link'
import BASE_PATH from '@/lib/basePath'
import ProjectGrid from '@/components/ProjectGrid'
import worksData from '@/data/works.json'
import PageFooter from '@/components/PageFooter'

export const metadata = {
  title: 'Works — Fery Yundara Putera',
  description:
    'Portfolio of web apps, mobile products, and UX designs built across EdTech, enterprise, and government sectors. 12+ shipped products.',
  openGraph: {
    title: 'Works — Fery Yundara Putera | Senior Software Engineer',
    description:
      'Portfolio of web apps, mobile products, and UX designs built across EdTech, enterprise, and government sectors.',
    url: 'https://feryyp.github.io/works',
  },
  alternates: { canonical: 'https://feryyp.github.io/works' },
}

export default function WorksPage() {
  return (
    <div className="works-page">
      <div className="container bento-container">
        {/* START HEADER */}
        <header className="d-flex justify-content-between align-items-center mb-5 animate__animated animate__fadeInDown">
          <div className="logo-text">
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>FYP.</Link>
          </div>
          <Link
            href="/products"
            className="btn btn-light rounded-pill px-4 py-2 fw-bold text-uppercase"
            style={{ fontSize: 12, letterSpacing: 1 }}
          >
            Products <i className="fa-solid fa-arrow-right-long ms-2"></i>
          </Link>
        </header>
        {/* END HEADER */}

        {/* START HERO SECTION */}
        <div className="bento-card card-hero wow animate__fadeInLeft">
          <span className="card-number">01 / PORTFOLIO</span>
          <div className="badge-status">
            <i className="fa-solid fa-circle"></i>
            Building things that work
          </div>
          <h1 className="hero-title">THINGS<br /><span>I&apos;VE</span><br />SHIPPED.</h1>
          <p className="hero-desc">Web apps, mobile products, UX work. Across EdTech, enterprise, and government. Some shipped to millions of users.</p>
        </div>
        {/* END HERO SECTION */}

        {/* START STATS SECTION */}
        <div className="bento-card card-stats wow animate__fadeInRight">
          <span className="card-number">02 / CORE</span>
          <div className="stat-item mb-4">
            <div className="stat-num">12+</div>
            <div className="stat-label">Products Shipped</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">5</div>
            <div className="stat-label">Companies</div>
          </div>
        </div>
        {/* END STATS SECTION */}

        {/* START PROJECTS HUB */}
        <div className="bento-card card-projects-hub col-12 wow animate__fadeInUp">
          <span className="card-number">03 / LOOKUP</span>
          <ProjectGrid />
        </div>
        {/* END PROJECTS HUB */}

        {/* START FOOTER */}
        <PageFooter col12 />
        {/* END FOOTER */}
      </div>

      {/* START PROJECT MODALS */}
      {worksData.projects.map((project) => {
        const carouselId = `projectCarousel-${project.id}`
        const multiSlide = project.modal.images.length > 1
        return (
          <div
            key={project.modalId}
            className="modal fade velixo-modal"
            id={project.modalId}
            tabIndex={-1}
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header border-0">
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body p-4 p-md-5">
                  <span className="badge-status mb-3">{project.modal.badge}</span>
                  <h2 className="modal-title mb-4">{project.title}</h2>

                  <div id={carouselId} className="carousel slide mb-4 modal-carousel" data-bs-ride="false">
                    {multiSlide && (
                      <div className="carousel-indicators">
                        {project.modal.images.map((_, i) => (
                          <button
                            key={i}
                            type="button"
                            data-bs-target={`#${carouselId}`}
                            data-bs-slide-to={i}
                            className={i === 0 ? 'active' : ''}
                            aria-current={i === 0 ? 'true' : undefined}
                            aria-label={`Slide ${i + 1}`}
                          ></button>
                        ))}
                      </div>
                    )}
                    <div className="carousel-inner rounded-4 overflow-hidden">
                      {project.modal.images.map((img, i) => (
                        <div key={i} className={`carousel-item${i === 0 ? ' active' : ''}`}>
                          <img
                            src={`${BASE_PATH}/assets/img/${img.src}`}
                            className="d-block w-100"
                            alt={img.alt}
                          />
                        </div>
                      ))}
                    </div>
                    {multiSlide && (
                      <>
                        <button className="carousel-control-prev" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </>
                    )}
                  </div>

                  <div className="row g-4">
                    <div className="col-md-8">
                      <h4 className="text-uppercase mb-3">Project Brief</h4>
                      <p className="text-muted">{project.modal.brief}</p>
                    </div>
                    <div className="col-md-4">
                      <div className="project-info-list">
                        {project.modal.info.map((item, i) => (
                          <div key={i} className={`info-item${i < project.modal.info.length - 1 ? ' mb-3' : ''}`}>
                            <span className="label d-block small opacity-50 text-uppercase fw-bold">{item.label}</span>
                            <span className="value fw-bold">
                              {'href' in item && item.href ? (
                                <a href={item.href} target="_blank" rel="noopener noreferrer">{item.value}</a>
                              ) : (
                                item.value
                              )}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
      {/* END PROJECT MODALS */}
    </div>
  )
}
