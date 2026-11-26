import '@/app/portfolio.css'
import PortfolioNav from '@/components/PortfolioNav'
import PortfolioFooter from '@/components/PortfolioFooter'
import VerificationConsole from '@/components/VerificationConsole'
import StructuredData from '@/components/StructuredData'
import { SITE_URL } from '@/lib/site'
import { home, LANG_PATH, type Lang } from '@/i18n/home'

// Medium articles are written in English; their titles stay as published in both languages.
const posts = [
  ['https://feryyp.medium.com/ship-more-break-less-ci-cd-pipelines-that-actually-work-b4ef58857c4e', 'Ship more, break less: CI/CD pipelines that actually work'],
  ['https://feryyp.medium.com/how-we-scaled-edbot-ai-to-32-million-lessons-793416c7b0b7', 'How we scaled edbot.ai to 32 million lessons'],
  ['https://feryyp.medium.com/building-ai-agentic-workflows-lessons-from-edtech-at-scale-7fc95cfc836d', 'Building AI-agentic workflows: lessons from EdTech at scale'],
  ['https://feryyp.medium.com/from-net-to-next-js-a-12-year-engineering-journey-b31ee3462a2a', 'From .NET to Next.js: a 12-year engineering journey'],
]

function Tag({ tag, em }: { tag: string; em: string }) {
  return (
    <div className="tag">
      <span>{tag}</span>
      <em>{em}</em>
    </div>
  )
}

function Pills({ pills }: { pills?: string[] }) {
  if (!pills) return null
  return (
    <div className="pills">
      {pills.map((p) => (
        <span key={p}>{p}</span>
      ))}
    </div>
  )
}

export default function HomePage({ lang }: { lang: Lang }) {
  const t = home[lang]
  const w = t.work
  const path = LANG_PATH[lang]
  return (
    <div className="portfolio" lang={lang}>
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'ProfilePage',
          '@id': `${SITE_URL}${path}#profile`,
          url: `${SITE_URL}${path}`,
          name: `Fery Yundara Putera: ${t.meta.ogAlt}`,
          inLanguage: lang,
          mainEntity: { '@id': `${SITE_URL}/#person` },
          isPartOf: { '@id': `${SITE_URL}/#website` },
        }}
      />
      <div className="bg" aria-hidden="true">
        <div className="orb o1"></div>
        <div className="orb o2"></div>
        <div className="orb o3"></div>
        <div className="grid"></div>
      </div>
      <div className="wrap">
        <PortfolioNav lang={lang} />
        <header className="hero">
          <span className="chip">
            <b></b>
            {t.hero.chip}
          </span>
          <h1>
            {t.hero.h1a}
            <br />
            <span className="grad">{t.hero.h1b}</span>
          </h1>
          <p className="sub">{t.hero.sub}</p>
          <div className="btns">
            <a className="btn main" href="#work">
              {t.hero.seeWork}
            </a>
            <a
              className="btn ghost"
              href="/assets/fery-yundara-putera-cv.pdf"
              download="Fery-Yundara-Putera-CV.pdf"
            >
              {t.hero.cv}
            </a>
          </div>
          <VerificationConsole copy={t.console} />
          <div className="note">{t.hero.note}</div>
        </header>
        <div className="stats reveal">
          {t.stats.map(([big, small]) => (
            <div key={big}>
              <b>{big}</b>
              <span>{small}</span>
            </div>
          ))}
        </div>
        <section id="approach">
          <div className="kick reveal">{t.approach.kick}</div>
          <h2 className="reveal">{t.approach.h2}</h2>
          <p className="lead reveal">{t.approach.lead}</p>
          <div className="bento">
            {t.approach.tiles.map((tile) => (
              <article className="tile w3 reveal" key={tile.tag}>
                <Tag tag={tile.tag} em={tile.em} />
                <h3>{tile.title}</h3>
                <p>{tile.body}</p>
              </article>
            ))}
          </div>
        </section>
        <section id="work">
          <div className="kick reveal">{w.kick}</div>
          <h2 className="reveal">{w.h2}</h2>
          <p className="lead reveal">{w.lead}</p>
          <div className="bento">
            <a className="tile w4 reveal" href="/case-studies/marketing-agent/">
              <Tag tag={w.marketing.tag} em={w.marketing.em} />
              <h3>{w.marketing.title}</h3>
              <p>{w.marketing.body}</p>
              <div className="flow">
                {w.marketing.flow.flatMap((step) => [
                  <span key={step}>{step}</span>,
                  <b key={`${step}-arrow`}>→</b>,
                ])}
                <span className="gate">{w.marketing.gate}</span>
                <b>→</b>
                <span>{w.marketing.publish}</span>
              </div>
            </a>
            <article className="tile reveal">
              <Tag tag={w.platform.tag} em={w.platform.em} />
              <h3>{w.platform.title}</h3>
              <p>{w.platform.body}</p>
            </article>
            <article className="tile w3 reveal">
              <Tag tag={w.brodev.tag} em={w.brodev.em} />
              <h3>{w.brodev.title}</h3>
              <p>{w.brodev.body}</p>
              <Pills pills={w.brodev.pills} />
            </article>
            {(
              [
                ['https://github.com/daefery/ravnori', w.ravnori],
                ['https://github.com/daefery/lariksa', w.lariksa],
                ['https://github.com/daefery/penadf', w.penadf],
              ] as const
            ).map(([href, tile]) => (
              <a className="tile w3 reveal" href={href} key={href}>
                <Tag tag={tile.tag} em={tile.em} />
                <h3>{tile.title}</h3>
                <p>{tile.body}</p>
                <Pills pills={tile.pills} />
              </a>
            ))}
            <a className="tile w6 shot reveal" href="https://edbot.ai">
              <div>
                <Tag tag={w.edbot.tag} em={w.edbot.em} />
                <h3>{w.edbot.title}</h3>
                <p>{w.edbot.body}</p>
                <Pills pills={w.edbot.pills} />
              </div>
              <img
                src="/assets/img/works/edbot/1.webp"
                alt={w.edbot.alt}
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>
          {[w.openSource, w.earlier].map((group) => (
            <div className="earlier reveal" key={group.title}>
              <h4>{group.title}</h4>
              <div className="chips">
                {group.chips.map(([href, name, note]) => (
                  <a href={href} key={href}>
                    <b>{name}</b>
                    <span>{note}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </section>
        <section id="research" aria-labelledby="research-heading">
          <div className="kick reveal">{t.research.kick}</div>
          <h2 className="reveal" id="research-heading">
            {t.research.h2}
          </h2>
          <div className="bento">
            <article className="tile w6 reveal research-card">
              <Tag tag={t.research.tag} em={t.research.em} />
              <h3>{t.research.title}</h3>
              <p>{t.research.body}</p>
              <p className="citation">
                <strong lang="en">{t.research.paper}</strong>
                <span>{t.research.authors}</span>
                <span>{t.research.venue}</span>
              </p>
              <a
                className="all"
                href="https://www.agenthon.net/#call-for-papers"
              >
                {t.research.link}
              </a>
            </article>
          </div>
        </section>
        <section id="products">
          <div className="kick reveal">{t.products.kick}</div>
          <h2 className="reveal">{t.products.h2}</h2>
          <p className="lead reveal">{t.products.lead}</p>
          <div className="apps">
            {t.products.apps.map((app) => (
              <a className="app reveal" href={app.href} key={app.name}>
                <img
                  src={app.img}
                  alt={app.alt}
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <b>{app.name}</b>
                  <p>{app.body}</p>
                  <span className="meta">{app.meta}</span>
                </div>
              </a>
            ))}
          </div>
        </section>
        <section>
          <div className="two">
            <div>
              <div className="kick reveal">{t.experience.kick}</div>
              <h2 className="reveal" style={{ marginBottom: '28px' }}>
                {t.experience.h2}
              </h2>
              <div className="tl reveal">
                {t.experience.jobs.map((job) => (
                  <div key={job.name}>
                    <b>{job.name}</b>
                    <span>{job.years}</span>
                    <p>{job.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div id="writing">
              <div className="kick reveal">{t.writing.kick}</div>
              <h2 className="reveal" style={{ marginBottom: '28px' }}>
                {t.writing.h2}
              </h2>
              <div className="posts reveal" lang="en">
                <div className="unpublished">
                  Close only on evidence: running coding agents I don't trust
                  <span>
                    <em className="soon" lang={lang}>
                      {t.writing.soon}
                    </em>
                  </span>
                </div>
                {posts.map(([href, title]) => (
                  <a href={href} key={href}>
                    {title}
                    <span lang={lang}>{t.writing.month}</span>
                  </a>
                ))}
              </div>
              <a className="all reveal" href="https://medium.com/@feryyp">
                {t.writing.all}
              </a>
            </div>
          </div>
        </section>
        <section id="work-with-me" aria-labelledby="work-with-me-heading">
          <div className="kick reveal">{t.workWithMe.kick}</div>
          <h2 className="reveal" id="work-with-me-heading">
            {t.workWithMe.h2}
          </h2>
          <p className="lead reveal">{t.workWithMe.lead}</p>
          <div className="bento">
            {t.workWithMe.tiles.map((tile, i) => (
              <article
                className={`tile ${i < 2 ? 'w3 ' : ''}reveal`}
                key={tile.tag}
              >
                <Tag tag={tile.tag} em={tile.em} />
                <h3>{tile.title}</h3>
                <p>{tile.body}</p>
              </article>
            ))}
          </div>
        </section>
        <div className="final reveal" id="contact">
          <h2>
            {t.final.h2a}
            <span className="nowrap">{t.final.h2b}</span>
          </h2>
          <p>{t.final.body}</p>
          <div className="btns">
            <a
              className="btn main"
              href={`mailto:feryyp.work@gmail.com?subject=${encodeURIComponent(t.final.projectSubject)}`}
            >
              {t.final.project}
            </a>
            <a
              className="btn ghost"
              href={`mailto:feryyp.work@gmail.com?subject=${encodeURIComponent(t.final.roleSubject)}`}
            >
              {t.final.role}
            </a>
            <a className="btn ghost" href="https://linkedin.com/in/feryyp">
              LinkedIn
            </a>
          </div>
          <p className="final-mail">
            {t.final.orEmail}{' '}
            <a href="mailto:feryyp.work@gmail.com">feryyp.work@gmail.com</a>
          </p>
        </div>
        <PortfolioFooter lang={lang} />
      </div>
    </div>
  )
}
