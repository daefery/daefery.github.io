import { test, expect } from '@playwright/test'

const routes = [
  '/',
  '/resume/',
  '/works/',
  '/products/',
  '/blog/',
  '/contact/',
  '/products/plareon/',
  '/products/zokuu/',
  '/case-studies/marketing-agent/',
]

test('approved homepage remains readable without JavaScript', async ({
  browser,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    reducedMotion: 'reduce',
  })
  const page = await context.newPage()
  await page.goto('http://127.0.0.1:7008/')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'I design systems.I build with AI.',
  )
  await expect(
    page.getByRole('heading', { name: 'Selected research.' }),
  ).toBeVisible()
  await expect(page.getByText('closed', { exact: true })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Download CV' })).toHaveAttribute(
    'href',
    '/assets/fery-yundara-putera-cv.pdf',
  )
  await expect(page.locator('a[href="#"]')).toHaveCount(0)
  await context.close()
})

for (const width of [360, 390, 768, 960, 1440]) {
  test(`homepage layout and assets at ${width}px`, async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/')
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    for (const image of await page.locator('main img').all()) {
      await image.scrollIntoViewIfNeeded()
      await expect
        .poll(() =>
          image.evaluate(
            (img: HTMLImageElement) => img.complete && img.naturalWidth > 0,
          ),
        )
        .toBeTruthy()
    }
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBeTruthy()
    expect(errors).toEqual([])
    await expect(page.locator('.apps')).toHaveCSS(
      'grid-template-columns',
      width <= 600
        ? /^(\d+(\.\d+)?px)$/
        : width <= 900
          ? /^(\d+(\.\d+)?px ){1}\d+(\.\d+)?px$/
          : /^(\d+(\.\d+)?px ){3}\d+(\.\d+)?px$/,
    )
  })
}

test('mobile navigation works with keyboard, including research', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  const menu = page.locator('.mobile-menu summary')
  await menu.focus()
  await page.keyboard.press('Enter')
  const research = page
    .locator('.mobile-menu')
    .getByRole('link', { name: 'Research' })
  await expect(research).toBeVisible()
  await research.click()
  await expect(page.locator('.mobile-menu')).not.toHaveAttribute('open')
  await expect(page).toHaveURL(/#research$/)
  await expect(
    page.getByRole('heading', { name: 'Selected research.' }),
  ).toBeInViewport()
  await menu.focus()
  await page.keyboard.press('Enter')
  await expect(page.locator('.mobile-menu')).toHaveAttribute('open')
  await page.keyboard.press('Escape')
  await expect(page.locator('.mobile-menu')).not.toHaveAttribute('open')
  await expect(menu).toBeFocused()
})

test('verification illustration can pause and replay; reduced motion stays still', async ({
  page,
}) => {
  await page.goto('/')
  await expect(page.locator('[data-console-state]')).toHaveText('verified')
  await page.getByRole('button', { name: 'Replay illustration' }).click()
  await expect(page.locator('[data-console-state]')).toHaveText('running')
  await page.getByRole('button', { name: 'Pause illustration' }).click()
  const count = await page.locator('.log > div').count()
  await page.waitForTimeout(1300)
  expect(await page.locator('.log > div').count()).toBe(count)
  await page.getByRole('button', { name: 'Resume illustration' }).click()
  await expect(page.locator('[data-console-state]')).toHaveText('verified', {
    timeout: 10000,
  })
})

for (const route of routes) {
  test(`exported SEO contract: ${route}`, async ({ page }) => {
    const response = await page.goto(route)
    expect(response?.status()).toBe(200)
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    await expect(page.locator('head meta[name="robots"]')).toHaveAttribute(
      'content',
      'index, follow',
    )
    await expect(page.locator('head title')).toHaveCount(1)
    await expect(page.locator('head meta[name="description"]')).toHaveAttribute(
      'content',
      /\S.{30}/,
    )
    await expect(page.locator('head link[rel="canonical"]')).toHaveAttribute(
      'href',
      `https://daefery.github.io${route}`,
    )
    await expect(page.locator('head meta[property="og:url"]')).toHaveAttribute(
      'content',
      `https://daefery.github.io${route}`,
    )
    await expect(
      page.locator('head meta[property="og:image"]'),
    ).toHaveAttribute(
      'content',
      'https://daefery.github.io/assets/og-portfolio.png',
    )
    await expect(
      page.locator('head meta[name="twitter:title"]'),
    ).toHaveAttribute('content', await page.title())
    expect((await page.title()).match(/Fery Yundara Putera/g)).toHaveLength(1)
    const graphs = await page
      .locator('script[type="application/ld+json"]')
      .evaluateAll((nodes) =>
        nodes.map((n) => JSON.parse(n.textContent || '{}')),
      )
    const person = graphs
      .flatMap((g) => g['@graph'] || [g])
      .find((g) => g['@type'] === 'Person')
    expect(person.jobTitle).toBe('Senior Software Engineer')
    expect(person.sameAs).toContain('https://www.instagram.com/feryyp.id')
    if (route === '/products/plareon/' || route === '/products/zokuu/') {
      const name = route.includes('plareon') ? 'PLAREON' : 'ZOKUU'
      await expect(page.getByRole('heading', { level: 1 })).toHaveText(name)
      const schemas = graphs.flatMap((g) => g['@graph'] || [g])
      expect(
        schemas
          .find((g) => g['@type'] === 'SoftwareApplication')
          .name.toUpperCase(),
      ).toBe(name)
      expect(
        schemas
          .find((g) => g['@type'] === 'BreadcrumbList')
          .itemListElement.at(-1).item,
      ).toBe(`https://daefery.github.io${route}`)
    }
  })
}

test('crawler policy, sitemap, verification, CV and product downloads survive', async ({
  request,
}) => {
  const robots = await request.get('/robots.txt')
  expect(robots.status()).toBe(200)
  const policy = await robots.text()
  for (const agent of [
    'Googlebot',
    'Bingbot',
    'GPTBot',
    'ClaudeBot',
    'ChatGPT-User',
    'Google-Extended',
    'PerplexityBot',
    'Applebot-Extended',
    'cohere-ai',
    'meta-externalagent',
    'Amazonbot',
  ]) {
    expect(policy).toContain(`User-agent: ${agent}\nAllow: /`)
  }
  const sitemap = await request.get('/sitemap.xml')
  const xml = await sitemap.text()
  // This is the published XML contract, not an assertion over implementation source.
  const locations = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
  expect(new Set(locations).size).toBe(locations.length)
  for (const route of [...routes, '/products/vacua/', '/products/qadha/']) {
    expect(locations).toContain(`https://daefery.github.io${route}`)
  }
  for (const url of locations)
    expect((await request.get(new URL(url).pathname)).status()).toBe(200)
  for (const asset of [
    '/google5b514286b765f335.html',
    '/assets/fery-yundara-putera-cv.pdf',
    '/assets/og-portfolio.png',
    '/products/vacua/Vacua-1.0.dmg',
    '/llms.txt',
  ]) {
    expect((await request.get(asset)).status()).toBe(200)
  }
})

test('all homepage internal links resolve and research does not publish the paper', async ({
  page,
  request,
}) => {
  await page.goto('/')
  const hrefs = await page
    .locator('main a[href]')
    .evaluateAll((nodes) => nodes.map((n) => n.getAttribute('href')!))
  for (const href of hrefs) {
    if (href.startsWith('#')) await expect(page.locator(href)).toHaveCount(1)
    else if (href.startsWith('/'))
      expect((await request.get(href)).status()).toBe(200)
  }
  await expect(page.locator('#research a')).toHaveCount(1)
  await expect(page.locator('#research a')).toHaveAttribute(
    'href',
    'https://www.agenthon.net/#call-for-papers',
  )
  await page
    .getByRole('link', { name: /A marketing agent that can't publish/ })
    .click()
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    "A marketing agent that can't publish on its own",
  )
  await expect(page.getByText('[n]', { exact: true })).toHaveCount(0)
})
