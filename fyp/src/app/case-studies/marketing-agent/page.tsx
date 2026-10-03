import '../../portfolio.css'
import PortfolioNav from '@/components/PortfolioNav'
import PortfolioFooter from '@/components/PortfolioFooter'
import StructuredData from '@/components/StructuredData'
import { pageMetadata, SITE_URL } from '@/lib/site'

const title = "A marketing agent that can't publish on its own"
const description =
  'Designing an AWS Bedrock and Claude workflow that turns staff updates into draft posts, with human approval required before publication.'
const path = '/case-studies/marketing-agent/'
export const metadata = pageMetadata(title, description, path)

export default function MarketingAgentPage() {
  return (
    <div className="portfolio">
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Article',
              headline: title,
              description,
              url: `${SITE_URL}${path}`,
              author: { '@id': `${SITE_URL}/#person` },
              mainEntityOfPage: `${SITE_URL}${path}`,
              image: `${SITE_URL}/assets/og-portfolio.png`,
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: `${SITE_URL}/`,
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Marketing agent',
                  item: `${SITE_URL}${path}`,
                },
              ],
            },
          ],
        }}
      />
      <div className="bg" aria-hidden="true">
        <div className="orb o1" />
        <div className="orb o2" />
        <div className="grid" />
      </div>
      <div className="wrap">
        <PortfolioNav />
        <article className="case-copy">
          <header className="hero">
            <div className="kick">Case study · 2026 · Solve Education!</div>
            <h1>{title}</h1>
            <p className="sub">{description}</p>
          </header>
          <h2>The workflow</h2>
          <p>
            I designed the path from staff updates to draft social posts. Claude
            on AWS Bedrock helps prepare the draft; a person reviews it before
            anything is published.
          </p>
          <div
            className="flow"
            aria-label="Staff update, draft, review, human approval, publish"
          >
            <span>staff update</span>
            <b>→</b>
            <span>draft</span>
            <b>→</b>
            <span>review</span>
            <b>→</b>
            <span className="gate">human approval</span>
            <b>→</b>
            <span>publish</span>
          </div>
          <h2>The design constraint</h2>
          <p>
            Generating a draft and authorizing publication are separate steps.
            The agent can help prepare content, but it cannot grant itself
            permission to publish.
          </p>
          <h2>My responsibility</h2>
          <p>
            I designed and built the workflow, including the required human
            approval. This is production work at Solve Education!, separate from
            my personal coding-agent tools.
          </p>
          <h2>How I approach verification</h2>
          <p>
            I review the implementation against the original workflow and check
            the whole path. A successful model response is only one part of the
            system; the approval boundary must also hold.
          </p>
          <p className="note">
            This overview describes the public design approach. Internal
            prompts, source code and operational data are not included.
          </p>
          <a className="all" href="/#work">
            ← Back to selected work
          </a>
        </article>
        <PortfolioFooter />
      </div>
    </div>
  )
}
