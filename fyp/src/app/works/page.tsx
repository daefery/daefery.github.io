import Link from 'next/link'
import BASE_PATH from '@/lib/basePath'
import ProjectGrid from '@/components/ProjectGrid'

export const metadata = {
  title: 'Works - Fery Yundara Putera | Senior Software Engineer',
  description: 'Portfolio of high-performance digital ecosystems and products by Fery Yundara Putera.',
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
        </header>
        {/* END HEADER */}

        {/* START HERO SECTION */}
        <div className="bento-card card-hero wow animate__fadeInLeft">
          <span className="card-number">01 / PORTFOLIO</span>
          <div className="badge-status">
            <i className="fa-solid fa-circle"></i>
            Shipping Products at Scale
          </div>
          <h1 className="hero-title">ENGINEERING<br /><span>TECHNICAL</span><br />MASTERY.</h1>
          <p className="hero-desc">A curated selection of web apps, mobile products, and UX designs — built across EdTech, enterprise, and government sectors.</p>
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
        <footer className="card-footer col-12">
          <p className="small opacity-50 fw-bold">© 2026 Fery Yundara Putera.</p>
        </footer>
        {/* END FOOTER */}
      </div>

      {/* START PROJECT MODALS */}

      {/* Project Modal 1: edbot.ai */}
      <div className="modal fade velixo-modal" id="projectModal1" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-4 p-md-5">
              <span className="badge-status mb-3">Web App</span>
              <h2 className="modal-title mb-4">edbot.ai</h2>
              <div id="projectCarousel1" className="carousel slide mb-4 modal-carousel" data-bs-ride="false">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#projectCarousel1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#projectCarousel1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#projectCarousel1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner rounded-4 overflow-hidden">
                  <div className="carousel-item active">
                    <img src={`${BASE_PATH}/assets/img/project-1.webp`} className="d-block w-100" alt="edbot.ai — Dashboard" />
                  </div>
                  <div className="carousel-item">
                    <img src={`${BASE_PATH}/assets/img/project-3.webp`} className="d-block w-100" alt="edbot.ai — Learning Flow" />
                  </div>
                  <div className="carousel-item">
                    <img src={`${BASE_PATH}/assets/img/project-5.webp`} className="d-block w-100" alt="edbot.ai — Analytics" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel1" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel1" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div className="row g-4">
                <div className="col-md-8">
                  <h4 className="text-uppercase mb-3">Project Brief</h4>
                  <p className="text-muted">AI learning platform powering 32M+ lessons across 10+ countries. Core developer responsible for architecture, CI/CD pipelines, and Selenium E2E testing. Achieved 100K+ peak monthly active learners.</p>
                </div>
                <div className="col-md-4">
                  <div className="project-info-list">
                    <div className="info-item mb-3">
                      <span className="label d-block small opacity-50 text-uppercase fw-bold">Company</span>
                      <span className="value fw-bold">Solve Education!</span>
                    </div>
                    <div className="info-item mb-3">
                      <span className="label d-block small opacity-50 text-uppercase fw-bold">Link</span>
                      <span className="value fw-bold"><a href="https://edbot.ai" target="_blank" rel="noopener noreferrer">edbot.ai</a></span>
                    </div>
                    <div className="info-item">
                      <span className="label d-block small opacity-50 text-uppercase fw-bold">Tech Stack</span>
                      <span className="value fw-bold">React, Next.js, Django</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal 2: Learnalytics */}
      <div className="modal fade velixo-modal" id="projectModal2" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-4 p-md-5">
              <span className="badge-status mb-3">Web App</span>
              <h2 className="modal-title mb-4">Learnalytics</h2>
              <div id="projectCarousel2" className="carousel slide mb-4 modal-carousel" data-bs-ride="false">
                <div className="carousel-inner rounded-4 overflow-hidden">
                  <div className="carousel-item active">
                    <img src={`${BASE_PATH}/assets/img/project-2.webp`} className="d-block w-100" alt="Learnalytics Detail" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel2" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel2" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
                <div className="carousel-indicators-custom"></div>
              </div>
              <div className="row g-4">
                <div className="col-md-8">
                  <h4 className="text-uppercase mb-3">Project Brief</h4>
                  <p className="text-muted">Internal analytics dashboard for learner engagement. Built to surface insights on learning patterns and course performance, enabling data-driven curriculum decisions at Solve Education!</p>
                </div>
                <div className="col-md-4">
                  <div className="project-info-list">
                    <div className="info-item mb-3">
                      <span className="label d-block small opacity-50 text-uppercase fw-bold">Company</span>
                      <span className="value fw-bold">Solve Education!</span>
                    </div>
                    <div className="info-item">
                      <span className="label d-block small opacity-50 text-uppercase fw-bold">Tech Stack</span>
                      <span className="value fw-bold">React, Laravel</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal 3: Dawn of Civilization */}
      <div className="modal fade velixo-modal" id="projectModal3" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-4 p-md-5">
              <span className="badge-status mb-3">Web App</span>
              <h2 className="modal-title mb-4">Dawn of Civilization</h2>
              <div id="projectCarousel3" className="carousel slide mb-4 modal-carousel" data-bs-ride="false">
                <div className="carousel-inner rounded-4 overflow-hidden">
                  <div className="carousel-item active">
                    <img src={`${BASE_PATH}/assets/img/project-3.webp`} className="d-block w-100" alt="Dawn of Civilization Detail" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel3" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel3" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
                <div className="carousel-indicators-custom"></div>
              </div>
              <div className="row g-4">
                <div className="col-md-8">
                  <h4 className="text-uppercase mb-3">Project Brief</h4>
                  <p className="text-muted">Educational game web platform using gamification to teach history and critical thinking. Built as a fullstack Django application with interactive gameplay and progress tracking.</p>
                </div>
                <div className="col-md-4">
                  <div className="project-info-list">
                    <div className="info-item mb-3">
                      <span className="label d-block small opacity-50 text-uppercase fw-bold">Company</span>
                      <span className="value fw-bold">Solve Education!</span>
                    </div>
                    <div className="info-item mb-3">
                      <span className="label d-block small opacity-50 text-uppercase fw-bold">Link</span>
                      <span className="value fw-bold"><a href="https://dawnofcivilization.net" target="_blank" rel="noopener noreferrer">dawnofcivilization.net</a></span>
                    </div>
                    <div className="info-item">
                      <span className="label d-block small opacity-50 text-uppercase fw-bold">Tech Stack</span>
                      <span className="value fw-bold">Django, Fullstack</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal 4: Plareon */}
      <div className="modal fade velixo-modal" id="projectModal4" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-4 p-md-5">
              <span className="badge-status mb-3">Mobile</span>
              <h2 className="modal-title mb-4">Plareon: Daily Hoops Trainer</h2>
              <div id="projectCarousel4" className="carousel slide mb-4 modal-carousel" data-bs-ride="false">
                <div className="carousel-inner rounded-4 overflow-hidden">
                  <div className="carousel-item active">
                    <img src={`${BASE_PATH}/assets/img/project-4.webp`} className="d-block w-100" alt="Plareon Detail" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel4" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel4" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
                <div className="carousel-indicators-custom"></div>
              </div>
              <div className="row g-4">
                <div className="col-md-8">
                  <h4 className="text-uppercase mb-3">Project Brief</h4>
                  <p className="text-muted">Basketball training game for Android featuring daily drills, skill progression, and in-app purchases. Designed to make training engaging and consistent for players of all levels.</p>
                </div>
                <div className="col-md-4">
                  <div className="project-info-list">
                    <div className="info-item mb-3">
                      <span className="label d-block small opacity-50 text-uppercase fw-bold">Platform</span>
                      <span className="value fw-bold">Android</span>
                    </div>
                    <div className="info-item mb-3">
                      <span className="label d-block small opacity-50 text-uppercase fw-bold">Link</span>
                      <span className="value fw-bold"><a href="https://play.google.com/store/apps/details?id=com.plareon.ball" target="_blank" rel="noopener noreferrer">Play Store</a></span>
                    </div>
                    <div className="info-item">
                      <span className="label d-block small opacity-50 text-uppercase fw-bold">Tech Stack</span>
                      <span className="value fw-bold">Android</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal 5: Solve Employment */}
      <div className="modal fade velixo-modal" id="projectModal5" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-4 p-md-5">
              <span className="badge-status mb-3">Web App</span>
              <h2 className="modal-title mb-4">Solve Employment</h2>
              <div id="projectCarousel5" className="carousel slide mb-4 modal-carousel" data-bs-ride="false">
                <div className="carousel-inner rounded-4 overflow-hidden">
                  <div className="carousel-item active">
                    <img src={`${BASE_PATH}/assets/img/project-5.webp`} className="d-block w-100" alt="Solve Employment Detail" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel5" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel5" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
                <div className="carousel-indicators-custom"></div>
              </div>
              <div className="row g-4">
                <div className="col-md-8">
                  <h4 className="text-uppercase mb-3">Project Brief</h4>
                  <p className="text-muted">Job platform designed for underserved communities, connecting graduates from edtech programs to employment opportunities across Southeast Asia.</p>
                </div>
                <div className="col-md-4">
                  <div className="project-info-list">
                    <div className="info-item mb-3">
                      <span className="label d-block small opacity-50 text-uppercase fw-bold">Company</span>
                      <span className="value fw-bold">Solve Education!</span>
                    </div>
                    <div className="info-item mb-3">
                      <span className="label d-block small opacity-50 text-uppercase fw-bold">Link</span>
                      <span className="value fw-bold"><a href="https://solveemployment.com" target="_blank" rel="noopener noreferrer">solveemployment.com</a></span>
                    </div>
                    <div className="info-item">
                      <span className="label d-block small opacity-50 text-uppercase fw-bold">Tech Stack</span>
                      <span className="value fw-bold">React</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal 6: Dompu Apps */}
      <div className="modal fade velixo-modal" id="projectModal6" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-4 p-md-5">
              <span className="badge-status mb-3">Mobile / UX/UI</span>
              <h2 className="modal-title mb-4">Dompu Apps</h2>
              <div id="projectCarousel6" className="carousel slide mb-4 modal-carousel" data-bs-ride="false">
                <div className="carousel-inner rounded-4 overflow-hidden">
                  <div className="carousel-item active">
                    <img src={`${BASE_PATH}/assets/img/project-6.webp`} className="d-block w-100" alt="Dompu Apps Detail" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel6" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel6" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
                <div className="carousel-indicators-custom"></div>
              </div>
              <div className="row g-4">
                <div className="col-md-8">
                  <h4 className="text-uppercase mb-3">Project Brief</h4>
                  <p className="text-muted">Local government mobile app for Dompu Regency, Indonesia. Designed end-to-end in Figma and built with React Native to deliver public services and information to citizens.</p>
                </div>
                <div className="col-md-4">
                  <div className="project-info-list">
                    <div className="info-item mb-3">
                      <span className="label d-block small opacity-50 text-uppercase fw-bold">Client</span>
                      <span className="value fw-bold">Dompu Regency</span>
                    </div>
                    <div className="info-item">
                      <span className="label d-block small opacity-50 text-uppercase fw-bold">Tech Stack</span>
                      <span className="value fw-bold">React Native, Figma</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal 7: SICC Singapore */}
      <div className="modal fade velixo-modal" id="projectModal7" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-4 p-md-5">
              <span className="badge-status mb-3">Web App</span>
              <h2 className="modal-title mb-4">SICC Singapore</h2>
              <div id="projectCarousel7" className="carousel slide mb-4 modal-carousel" data-bs-ride="false">
                <div className="carousel-inner rounded-4 overflow-hidden">
                  <div className="carousel-item active">
                    <img src={`${BASE_PATH}/assets/img/project-4.webp`} className="d-block w-100" alt="SICC Singapore Detail" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel7" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel7" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
                <div className="carousel-indicators-custom"></div>
              </div>
              <div className="row g-4">
                <div className="col-md-8">
                  <h4 className="text-uppercase mb-3">Project Brief</h4>
                  <p className="text-muted">Singapore Cricket Club website and membership management portal. Built on ASP.NET MVC with full CMS capabilities for managing events, news, and member communications.</p>
                </div>
                <div className="col-md-4">
                  <div className="project-info-list">
                    <div className="info-item mb-3">
                      <span className="label d-block small opacity-50 text-uppercase fw-bold">Company</span>
                      <span className="value fw-bold">Xtremax</span>
                    </div>
                    <div className="info-item mb-3">
                      <span className="label d-block small opacity-50 text-uppercase fw-bold">Link</span>
                      <span className="value fw-bold"><a href="https://sicc.com.sg" target="_blank" rel="noopener noreferrer">sicc.com.sg</a></span>
                    </div>
                    <div className="info-item">
                      <span className="label d-block small opacity-50 text-uppercase fw-bold">Tech Stack</span>
                      <span className="value fw-bold">.NET MVC, SQL Server</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal 8: Localizy */}
      <div className="modal fade velixo-modal" id="projectModal8" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-4 p-md-5">
              <span className="badge-status mb-3">Web App</span>
              <h2 className="modal-title mb-4">Localizy</h2>
              <div id="projectCarousel8" className="carousel slide mb-4 modal-carousel" data-bs-ride="false">
                <div className="carousel-inner rounded-4 overflow-hidden">
                  <div className="carousel-item active">
                    <img src={`${BASE_PATH}/assets/img/project-5.webp`} className="d-block w-100" alt="Localizy Detail" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel8" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel8" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
                <div className="carousel-indicators-custom"></div>
              </div>
              <div className="row g-4">
                <div className="col-md-8">
                  <h4 className="text-uppercase mb-3">Project Brief</h4>
                  <p className="text-muted">Localization management SaaS platform enabling teams to manage translation workflows, glossaries, and multi-language content delivery at scale. Built with React frontend and Laravel backend.</p>
                </div>
                <div className="col-md-4">
                  <div className="project-info-list">
                    <div className="info-item mb-3">
                      <span className="label d-block small opacity-50 text-uppercase fw-bold">Company</span>
                      <span className="value fw-bold">Xtremax</span>
                    </div>
                    <div className="info-item">
                      <span className="label d-block small opacity-50 text-uppercase fw-bold">Tech Stack</span>
                      <span className="value fw-bold">React, Laravel</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal 9: Content+ */}
      <div className="modal fade velixo-modal" id="projectModal9" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-4 p-md-5">
              <span className="badge-status mb-3">Web App</span>
              <h2 className="modal-title mb-4">Content+</h2>
              <div id="projectCarousel9" className="carousel slide mb-4 modal-carousel" data-bs-ride="false">
                <div className="carousel-inner rounded-4 overflow-hidden">
                  <div className="carousel-item active">
                    <img src={`${BASE_PATH}/assets/img/project-6.webp`} className="d-block w-100" alt="Content+ Detail" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel9" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel9" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
                <div className="carousel-indicators-custom"></div>
              </div>
              <div className="row g-4">
                <div className="col-md-8">
                  <h4 className="text-uppercase mb-3">Project Brief</h4>
                  <p className="text-muted">AI-assisted content creation and management platform. Integrates LLM APIs to help marketing teams generate, edit, and publish content at speed. React SPA with real-time collaboration features.</p>
                </div>
                <div className="col-md-4">
                  <div className="project-info-list">
                    <div className="info-item mb-3">
                      <span className="label d-block small opacity-50 text-uppercase fw-bold">Company</span>
                      <span className="value fw-bold">Solve Education!</span>
                    </div>
                    <div className="info-item">
                      <span className="label d-block small opacity-50 text-uppercase fw-bold">Tech Stack</span>
                      <span className="value fw-bold">React, Node.js</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal 10: Mendaki Challenge */}
      <div className="modal fade velixo-modal" id="projectModal10" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-4 p-md-5">
              <span className="badge-status mb-3">Web App</span>
              <h2 className="modal-title mb-4">Mendaki Challenge</h2>
              <div id="projectCarousel10" className="carousel slide mb-4 modal-carousel" data-bs-ride="false">
                <div className="carousel-inner rounded-4 overflow-hidden">
                  <div className="carousel-item active">
                    <img src={`${BASE_PATH}/assets/img/project-2.webp`} className="d-block w-100" alt="Mendaki Challenge Detail" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel10" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel10" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
                <div className="carousel-indicators-custom"></div>
              </div>
              <div className="row g-4">
                <div className="col-md-8">
                  <h4 className="text-uppercase mb-3">Project Brief</h4>
                  <p className="text-muted">Interactive challenge web portal for Mendaki Singapore, targeting Malay community youth engagement through gamified learning challenges, leaderboards, and prize redemption flows.</p>
                </div>
                <div className="col-md-4">
                  <div className="project-info-list">
                    <div className="info-item mb-3">
                      <span className="label d-block small opacity-50 text-uppercase fw-bold">Company</span>
                      <span className="value fw-bold">Xtremax</span>
                    </div>
                    <div className="info-item">
                      <span className="label d-block small opacity-50 text-uppercase fw-bold">Tech Stack</span>
                      <span className="value fw-bold">HTML, jQuery, PHP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal 11: Qadha */}
      <div className="modal fade velixo-modal" id="projectModal11" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-4 p-md-5">
              <span className="badge-status mb-3">Mobile</span>
              <h2 className="modal-title mb-4">Qadha</h2>
              <div id="projectCarousel11" className="carousel slide mb-4 modal-carousel" data-bs-ride="false">
                <div className="carousel-inner rounded-4 overflow-hidden">
                  <div className="carousel-item active">
                    <img src={`${BASE_PATH}/assets/img/project-4.webp`} className="d-block w-100" alt="Qadha Detail" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel11" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel11" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
                <div className="carousel-indicators-custom"></div>
              </div>
              <div className="row g-4">
                <div className="col-md-8">
                  <h4 className="text-uppercase mb-3">Project Brief</h4>
                  <p className="text-muted">Android prayer tracking app for Muslims to log and manage qadha (missed) prayers. Features a clean prayer calendar, reminder system, and progress tracking to help users fulfill their obligations consistently.</p>
                </div>
                <div className="col-md-4">
                  <div className="project-info-list">
                    <div className="info-item mb-3">
                      <span className="label d-block small opacity-50 text-uppercase fw-bold">Platform</span>
                      <span className="value fw-bold">Android</span>
                    </div>
                    <div className="info-item">
                      <span className="label d-block small opacity-50 text-uppercase fw-bold">Tech Stack</span>
                      <span className="value fw-bold">Android, Java</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal 12: Pariwisata Mockup */}
      <div className="modal fade velixo-modal" id="projectModal12" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-4 p-md-5">
              <span className="badge-status mb-3">UX/UI</span>
              <h2 className="modal-title mb-4">Pariwisata Mockup</h2>
              <div id="projectCarousel12" className="carousel slide mb-4 modal-carousel" data-bs-ride="false">
                <div className="carousel-inner rounded-4 overflow-hidden">
                  <div className="carousel-item active">
                    <img src={`${BASE_PATH}/assets/img/project-6.webp`} className="d-block w-100" alt="Pariwisata Mockup Detail" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel12" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel12" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
                <div className="carousel-indicators-custom"></div>
              </div>
              <div className="row g-4">
                <div className="col-md-8">
                  <h4 className="text-uppercase mb-3">Project Brief</h4>
                  <p className="text-muted">Tourism discovery app UI/UX design for Indonesian destinations. Full mobile mockup covering onboarding, destination browsing, booking flows, and itinerary planning — designed end-to-end in Figma.</p>
                </div>
                <div className="col-md-4">
                  <div className="project-info-list">
                    <div className="info-item mb-3">
                      <span className="label d-block small opacity-50 text-uppercase fw-bold">Type</span>
                      <span className="value fw-bold">UX/UI Design</span>
                    </div>
                    <div className="info-item">
                      <span className="label d-block small opacity-50 text-uppercase fw-bold">Tool</span>
                      <span className="value fw-bold">Figma</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal 13: Natakraf Mockup */}
      <div className="modal fade velixo-modal" id="projectModal13" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-4 p-md-5">
              <span className="badge-status mb-3">UX/UI</span>
              <h2 className="modal-title mb-4">Natakraf Mockup</h2>
              <div id="projectCarousel13" className="carousel slide mb-4 modal-carousel" data-bs-ride="false">
                <div className="carousel-inner rounded-4 overflow-hidden">
                  <div className="carousel-item active">
                    <img src={`${BASE_PATH}/assets/img/project-1.webp`} className="d-block w-100" alt="Natakraf Mockup Detail" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel13" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel13" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
                <div className="carousel-indicators-custom"></div>
              </div>
              <div className="row g-4">
                <div className="col-md-8">
                  <h4 className="text-uppercase mb-3">Project Brief</h4>
                  <p className="text-muted">E-commerce and marketplace UI for traditional Indonesian handcraft (natakraf) artisans. Designed to help local craftspeople sell directly to buyers, with a modern aesthetic that honors the craft heritage.</p>
                </div>
                <div className="col-md-4">
                  <div className="project-info-list">
                    <div className="info-item mb-3">
                      <span className="label d-block small opacity-50 text-uppercase fw-bold">Type</span>
                      <span className="value fw-bold">UX/UI Design</span>
                    </div>
                    <div className="info-item">
                      <span className="label d-block small opacity-50 text-uppercase fw-bold">Tool</span>
                      <span className="value fw-bold">Figma</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* END PROJECT MODALS */}
    </div>
  )
}
