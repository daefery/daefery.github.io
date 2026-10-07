import './portfolio.css'
import PortfolioNav from '@/components/PortfolioNav'
import PortfolioFooter from '@/components/PortfolioFooter'
import VerificationConsole from '@/components/VerificationConsole'
import StructuredData from '@/components/StructuredData'
import { pageMetadata, SITE_DESCRIPTION, SITE_URL } from '@/lib/site'

export const metadata = pageMetadata(
  'System design and AI-assisted delivery',
  SITE_DESCRIPTION,
  '/',
)

export default function Home() {
  return (
    <div className="portfolio">
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'ProfilePage',
          '@id': `${SITE_URL}/#profile`,
          url: `${SITE_URL}/`,
          name: 'Fery Yundara Putera: system design and AI-assisted delivery',
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
        <PortfolioNav />
        <header className="hero">
          <span className="chip">
            <b></b>Fery Yundara Putera · Open to roles and projects ·
            Indonesia, UTC+7
          </span>
          <h1>
            I design systems.
            <br />
            <span className="grad">I build with AI.</span>
          </h1>
          <p className="sub">
            I'm Fery. I design applications and the workflows around them, using
            AI to help plan, implement and review. I set the constraints and
            check the result.
          </p>
          <div className="btns">
            <a className="btn main" href="#work">
              See the work
            </a>
            <a
              className="btn ghost"
              href="/assets/fery-yundara-putera-cv.pdf"
              download="Fery-Yundara-Putera-CV.pdf"
            >
              Download CV
            </a>
          </div>
          <VerificationConsole />
          <div className="note">
            Illustration of the rule my orchestrator enforces: an agent saying
            "done" never closes a task.
          </div>
        </header>
        <div className="stats reveal">
          <div>
            <b>12 yrs</b>
            <span>software design and delivery</span>
          </div>
          <div>
            <b>32M+</b>
            <span>lessons on edbot.ai</span>
          </div>
          <div>
            <b>4 apps</b>
            <span>built and shipped solo</span>
          </div>
          <div>
            <b>8 yrs</b>
            <span>fully remote, 10+ countries</span>
          </div>
        </div>
        <section id="approach">
          <div className="kick reveal">// how I work</div>
          <h2 className="reveal">From a workflow to working software.</h2>
          <p className="lead reveal">
            AI helps with planning and implementation. I keep the design
            decisions explicit and check the result against the original need.
          </p>
          <div className="bento">
            <article className="tile w3 reveal">
              <div className="tag">
                <span>01 / define</span>
                <em>requirements</em>
              </div>
              <h3>Start with the workflow</h3>
              <p>
                Map who uses the system, where work gets stuck, and what needs a
                person's approval. Set the scope before asking an agent to
                build.
              </p>
            </article>
            <article className="tile w3 reveal">
              <div className="tag">
                <span>02 / design</span>
                <em>architecture</em>
              </div>
              <h3>Make the trade-offs explicit</h3>
              <p>
                Define system boundaries and data flow. Record failure paths and
                release checks, so the plan explains how the system will run.
              </p>
            </article>
            <article className="tile w3 reveal">
              <div className="tag">
                <span>03 / direct</span>
                <em>AI-assisted delivery</em>
              </div>
              <h3>Give agents bounded tasks</h3>
              <p>
                Use AI to turn a reviewed plan into small changes. Give each
                task a clear scope and acceptance criteria, with isolated
                workspaces where needed.
              </p>
            </article>
            <article className="tile w3 reveal">
              <div className="tag">
                <span>04 / verify</span>
                <em>review and testing</em>
              </div>
              <h3>Check the whole path</h3>
              <p>
                Review the changes and test the user's workflow. An agent's
                completion message is a claim to check; passing unit tests alone
                can still miss a broken first run.
              </p>
            </article>
          </div>
        </section>
        <section id="work">
          <div className="kick reveal">// selected work</div>
          <h2 className="reveal">The design behind the software.</h2>
          <p className="lead reveal">
            Human approval in marketing automation. Task isolation in
            coding-agent tools. Application architecture and release automation
            for edbot.ai.
          </p>
          <div className="bento">
            <a className="tile w4 reveal" href="/case-studies/marketing-agent/">
              <div className="tag">
                <span>production · 2026</span>
                <em>Claude on Bedrock</em>
              </div>
              <h3>A marketing agent that can't publish on its own</h3>
              <p>
                I designed the path from staff updates to draft posts, with
                human approval required before publication. Built on AWS
                Bedrock.
              </p>
              <div className="flow">
                <span>update</span>
                <b>→</b>
                <span>draft</span>
                <b>→</b>
                <span>review</span>
                <b>→</b>
                <span className="gate">human gate</span>
                <b>→</b>
                <span>publish</span>
              </div>
            </a>
            <article className="tile reveal">
              <div className="tag">
                <span>platform</span>
                <em>2026</em>
              </div>
              <h3>0 → 7</h3>
              <p>
                live tools on Solve Education's automation platform in one
                quarter.
              </p>
            </article>
            <article className="tile w3 reveal">
              <div className="tag">
                <span>personal project · Brodev</span>
                <em>orchestration</em>
              </div>
              <h3>Rules for agent-led delivery</h3>
              <p>
                I designed a coding-agent orchestrator with isolated git
                worktrees and task closure based on passing project checks.
                Architecture decisions live in ADRs.
              </p>
              <div className="pills">
                <span>Rust</span>
                <span>git worktrees</span>
                <span>verification gates</span>
              </div>
            </article>
            <a
              className="tile w3 reveal"
              href="https://github.com/daefery/mnem"
            >
              <div className="tag">
                <span>open source · mnem</span>
                <em>released ↗</em>
              </div>
              <h3>Memory across agent sessions</h3>
              <p>
                Local-first memory built from agent transcripts. Events and read
                progress commit in one SQLite transaction, so interrupted
                capture can resume.
              </p>
              <div className="pills">
                <span>Rust</span>
                <span>SQLite</span>
                <span>Claude Code / Codex / pi</span>
              </div>
            </a>
            <a className="tile w6 shot reveal" href="https://edbot.ai">
              <div>
                <div className="tag">
                  <span>edtech at scale · 2018 to 2025</span>
                  <em>edbot.ai ↗</em>
                </div>
                <h3>Application architecture at learning-platform scale</h3>
                <p>
                  I owned the frontend architecture of edbot.ai, which delivered
                  32M+ lessons across 10+ countries. I also introduced the
                  team's first CI/CD pipeline and end-to-end tests.
                </p>
                <div className="pills">
                  <span>React</span>
                  <span>Next.js</span>
                  <span>CI/CD</span>
                  <span>100K+ peak monthly users</span>
                </div>
              </div>
              <img
                src="/assets/img/works/edbot/1.webp"
                alt="edbot.ai landing page"
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>
          <div className="earlier reveal">
            <h4>Earlier at Solve Education</h4>
            <div className="chips">
              <a href="https://content.solveeducation.org/">
                <b>Content+</b>
                <span>LLM drafting tool, real-time collaboration</span>
              </a>
              <a href="https://learnalytics.solveeducation.org/">
                <b>Learnalytics</b>
                <span>learner analytics dashboard</span>
              </a>
              <a href="https://localizy.dawnofcivilization.net/">
                <b>Localizy</b>
                <span>translation workflows</span>
              </a>
              <a href="https://ed.solveeducation.org/">
                <b>Ed The Bot</b>
                <span>portal for an English-learning chatbot</span>
              </a>
              <a href="https://dawnofcivilization.net">
                <b>Dawn of Civilization</b>
                <span>history learning game, Django</span>
              </a>
            </div>
          </div>
        </section>
        <section id="research" aria-labelledby="research-heading">
          <div className="kick reveal">// evaluation and verification</div>
          <h2 className="reveal" id="research-heading">
            Selected research.
          </h2>
          <div className="bento">
            <article className="tile w6 reveal research-card">
              <div className="tag">
                <span>Accepted workshop poster</span>
                <em>2026 · non-archival</em>
              </div>
              <h3>When a forecasting score rewards the wrong report</h3>
              <p>
                A benchmark can reward a forecaster for reporting something
                other than what it believes. We examine why, test the mechanism
                in simulation and practice tasks, and propose normalization
                fixed before the outcome.
              </p>
              <p className="citation">
                <strong>
                  Per-Outcome Baseline Normalization Makes Proper Forecast
                  Scores Improper
                </strong>
                <span>Fery Yundara Putera and Bramantya Farid Prakoso.</span>
                <span>
                  Accepted for poster presentation at Agenthon 2026: Verifiable
                  AI for Quantitative Finance, a workshop at NeurIPS 2026.
                </span>
              </p>
              <a
                className="all"
                href="https://www.agenthon.net/#call-for-papers"
              >
                Workshop details ↗
              </a>
            </article>
          </div>
        </section>
        <section id="products">
          <div className="kick reveal">// side products</div>
          <h2 className="reveal">Four apps, from idea to release.</h2>
          <p className="lead reveal">
            Personal products I designed and shipped solo, each with a different
            workflow and platform constraint.
          </p>
          <div className="apps">
            <a className="app reveal" href="/products/vacua/">
              <img
                src="/assets/img/products/vacua-screen.webp"
                alt="Vacua scanning a Mac for junk files"
                loading="lazy"
                decoding="async"
              />
              <div>
                <b>Vacua</b>
                <p>
                  Mac cleaner with a Safe or Moderate label on every item. 9
                  scan categories, $12 once.
                </p>
                <span className="meta">macOS · SwiftUI</span>
              </div>
            </a>
            <a
              className="app reveal"
              href="https://play.google.com/store/apps/details?id=com.qadha.islam"
            >
              <img
                src="/assets/img/products/qadha-screen.webp"
                alt="Qadha showing the day's prayer focus"
                loading="lazy"
                decoding="async"
              />
              <div>
                <b>Qadha</b>
                <p>
                  A 30-day guided reset for prayer consistency. Donation-based,
                  nothing paywalled.
                </p>
                <span className="meta">Google Play · React Native</span>
              </div>
            </a>
            <a className="app reveal" href="/products/plareon/">
              <img
                src="/assets/img/products/plareon-screen.webp"
                alt="Plareon cover: a basketball player dribbling on court"
                loading="lazy"
                decoding="async"
              />
              <div>
                <b>Plareon</b>
                <p>
                  Daily basketball plans for 6 player types, with audio drills
                  and an Elite tier.
                </p>
                <span className="meta">iOS, Android · Supabase</span>
              </div>
            </a>
            <a className="app reveal" href="/products/zokuu/">
              <img
                src="/assets/img/products/zokuu-screen.webp"
                alt="Zokuu alarm screens"
                loading="lazy"
                decoding="async"
              />
              <div>
                <b>Zokuu</b>
                <p>
                  Alarms that fire even in Doze mode or after a reboot. No
                  account, no network.
                </p>
                <span className="meta">Android · native Kotlin</span>
              </div>
            </a>
          </div>
        </section>
        <section>
          <div className="two">
            <div>
              <div className="kick reveal">// experience</div>
              <h2 className="reveal" style={{ marginBottom: '28px' }}>
                Twelve years, mostly remote.
              </h2>
              <div className="tl reveal">
                <div>
                  <b>Solve Education!</b>
                  <span>2018 to now</span>
                  <p>
                    Senior Software Engineer. I lead the AI automation platform
                    and built the team's AI coding-agent setup. Before that I owned edbot.ai's frontend and built the team's
                    first CI/CD.
                  </p>
                </div>
                <div>
                  <b>Xtremax</b>
                  <span>2016 to 2018</span>
                  <p>
                    Backend Developer. Maintained three live client projects for
                    teams in Singapore and Indonesia. Certified in Sitefinity
                    CRM.
                  </p>
                </div>
                <div>
                  <b>Elephant Talk</b>
                  <span>2015 to 2017</span>
                  <p>
                    Software Developer. C# microservices and two AngularJS web
                    apps, Spain and Indonesia.
                  </p>
                </div>
                <div>
                  <b>Suzuki Indomobil</b>
                  <span>2014 to 2015</span>
                  <p>
                    .NET Developer. Dealer management system used in every main
                    branch office.
                  </p>
                </div>
              </div>
            </div>
            <div id="writing">
              <div className="kick reveal">// writing</div>
              <h2 className="reveal" style={{ marginBottom: '28px' }}>
                Notes from the gate.
              </h2>
              <div className="posts reveal">
                <div className="unpublished">
                  Close only on evidence: running coding agents I don't trust
                  <span>
                    <em className="soon">soon</em>
                  </span>
                </div>
                <a href="https://feryyp.medium.com/ship-more-break-less-ci-cd-pipelines-that-actually-work-b4ef58857c4e">
                  Ship more, break less: CI/CD pipelines that actually work
                  <span>May 2026</span>
                </a>
                <a href="https://feryyp.medium.com/how-we-scaled-edbot-ai-to-32-million-lessons-793416c7b0b7">
                  How we scaled edbot.ai to 32 million lessons
                  <span>May 2026</span>
                </a>
                <a href="https://feryyp.medium.com/building-ai-agentic-workflows-lessons-from-edtech-at-scale-7fc95cfc836d">
                  Building AI-agentic workflows: lessons from EdTech at scale
                  <span>May 2026</span>
                </a>
                <a href="https://feryyp.medium.com/from-net-to-next-js-a-12-year-engineering-journey-b31ee3462a2a">
                  From .NET to Next.js: a 12-year engineering journey
                  <span>May 2026</span>
                </a>
              </div>
              <a className="all reveal" href="https://medium.com/@feryyp">
                All posts on Medium →
              </a>
            </div>
          </div>
        </section>
        <section id="work-with-me" aria-labelledby="work-with-me-heading">
          <div className="kick reveal">// work with me</div>
          <h2 className="reveal" id="work-with-me-heading">
            Two ways to work together.
          </h2>
          <p className="lead reveal">
            I'm open to a full-time remote role, and to project-based or
            freelance work. Both follow the same process: define, design, build
            with AI, verify.
          </p>
          <div className="bento">
            <article className="tile w3 reveal">
              <div className="tag">
                <span>full-time · remote</span>
                <em>UTC+7</em>
              </div>
              <h3>Join your team</h3>
              <p>
                Application and AI systems design, with responsibility for
                delivery. My working day overlaps with Asia, Australia and the
                European morning.
              </p>
            </article>
            <article className="tile w3 reveal">
              <div className="tag">
                <span>project · freelance</span>
                <em>open now</em>
              </div>
              <h3>Build one thing, well</h3>
              <p>
                A project with a clear finish line: a new product, an AI
                workflow or a rebuild. You get a written plan before any code,
                working software at each step, and a handover your team can run.
              </p>
            </article>
            <article className="tile reveal">
              <div className="tag">
                <span>AI workflows</span>
                <em>human approval</em>
              </div>
              <h3>Automation that knows when to stop</h3>
              <p>
                Workflows that do the routine work and wait where a person must
                decide. Proof: a marketing workflow on AWS Bedrock that can't
                publish without approval.
              </p>
            </article>
            <article className="tile reveal">
              <div className="tag">
                <span>products</span>
                <em>idea to release</em>
              </div>
              <h3>From idea to the app store</h3>
              <p>
                Web and mobile products shipped end to end. Proof: four apps I
                designed and released solo on macOS, iOS and Android.
              </p>
            </article>
            <article className="tile reveal">
              <div className="tag">
                <span>teams</span>
                <em>AI-assisted delivery</em>
              </div>
              <h3>Coding agents your team can trust</h3>
              <p>
                Shared rules, required checks and delivery commands, so agent
                work passes review. Proof: the setup my team uses today.
              </p>
            </article>
          </div>
        </section>
        <div className="final reveal" id="contact">
          <h2>
            Want to build something{' '}
            <span className="nowrap">world‑class?</span>
          </h2>
          <p>
            Tell me what you want to build, as a project or a full-time role. I
            reply within 24 hours with questions and a first take on scope.
          </p>
          <div className="btns">
            <a
              className="btn main"
              href="mailto:feryyp.work@gmail.com?subject=Project%3A%20"
            >
              Start a project
            </a>
            <a
              className="btn ghost"
              href="mailto:feryyp.work@gmail.com?subject=Full-time%20role%3A%20"
            >
              Discuss a full-time role
            </a>
            <a className="btn ghost" href="https://linkedin.com/in/feryyp">
              LinkedIn
            </a>
          </div>
          <p className="final-mail">
            Or email{' '}
            <a href="mailto:feryyp.work@gmail.com">feryyp.work@gmail.com</a>
          </p>
        </div>
        <PortfolioFooter />
      </div>
    </div>
  )
}
