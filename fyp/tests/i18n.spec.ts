import { test, expect } from '@playwright/test'
import { BOT_PATTERN, countryFromTrace, decide, explicitChoice, switchUrl } from '../src/i18n/detect'

const TRACE = 'https://www.cloudflare.com/cdn-cgi/trace'
// A normal desktop browser; the default test agent says HeadlessChrome, which the site treats as a bot on purpose.
test.use({ userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0 Safari/537.36' })
const trace = (loc: string) => `fl=1\nh=www.cloudflare.com\nip=1.2.3.4\nloc=${loc}\ntls=TLSv1.3\n`

test('language rule: bots, then explicit choice, then country', () => {
  expect(countryFromTrace(trace('ID'))).toBe('ID')
  expect(countryFromTrace('no country here')).toBeNull()
  expect(decide({ choice: null, country: 'ID', isBot: false })).toBe('go-id')
  expect(decide({ choice: null, country: 'SG', isBot: false })).toBe('stay')
  expect(decide({ choice: null, country: null, isBot: false })).toBe('stay')
  expect(decide({ choice: 'en', country: 'ID', isBot: false })).toBe('stay')
  expect(decide({ choice: 'id', country: 'US', isBot: false })).toBe('go-id')
  for (const choice of [null, 'en', 'id']) expect(decide({ choice, country: 'ID', isBot: true })).toBe('stay')
  expect(explicitChoice('?lang=en', 'id')).toBe('en')
  expect(explicitChoice('?x=1', 'id')).toBe('id')
  expect(explicitChoice('?lang=fr', null)).toBeNull()
  expect(switchUrl('https://daefery.github.io/?utm_source=threads#work', '/id/', 'id')).toBe('/id/?utm_source=threads&lang=id#work')
  for (const ua of ['Googlebot/2.1 (+http://www.google.com/bot.html)', 'facebookexternalhit/1.1', 'WhatsApp/2.23', 'Mozilla/5.0 HeadlessChrome/153.0'])
    expect(BOT_PATTERN.test(ua)).toBe(true)
  for (const ua of ['Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) Safari/604.1', 'Mozilla/5.0 (Linux; Android 14) Chrome/153.0 Mobile Safari/537.36'])
    expect(BOT_PATTERN.test(ua)).toBe(false)
})

test('search bots and link previews always get the English page', async ({ browser }) => {
  const context = await browser.newContext({ userAgent: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)' })
  const page = await context.newPage()
  await page.route(TRACE, (r) => r.fulfill({ status: 200, body: trace('ID') }))
  await page.goto('/')
  await page.waitForTimeout(800)
  await expect(page).toHaveURL(/\/$/)
  await context.close()
})

test('a visitor from Indonesia lands on the Indonesian homepage', async ({ page }) => {
  await page.route(TRACE, (r) => r.fulfill({ status: 200, body: trace('ID') }))
  await page.goto('/')
  await expect(page).toHaveURL(/\/id\/(\?lang=id)?$/)
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Merancang sistem.Membangun dengan AI.')
  await expect(page.locator('.portfolio')).toHaveAttribute('lang', 'id')
})

test('a visitor from elsewhere, or with a failed lookup, stays in English', async ({ page }) => {
  await page.route(TRACE, (r) => r.fulfill({ status: 200, body: trace('SG') }))
  await page.goto('/')
  await page.waitForTimeout(800)
  await expect(page).toHaveURL(/\/$/)
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('I design systems.I build with AI.')
  await page.unroute(TRACE)
  await page.route(TRACE, (r) => r.abort())
  await page.goto('/')
  await page.waitForTimeout(800)
  await expect(page).toHaveURL(/\/$/)
})

test('choosing English from Indonesia sticks, and switching back works', async ({ page }) => {
  await page.route(TRACE, (r) => r.fulfill({ status: 200, body: trace('ID') }))
  await page.goto('/')
  await expect(page).toHaveURL(/\/id\//)
  await page.getByRole('link', { name: 'Read in English' }).click()
  await expect(page).toHaveURL(/\/\?lang=en$/)
  await page.goto('/')
  await page.waitForTimeout(800)
  await expect(page).toHaveURL(/\/$/)
  await page.getByRole('link', { name: 'Baca dalam Bahasa Indonesia' }).click()
  await expect(page).toHaveURL(/\/id\/\?lang=id$/)
})

test('choosing English works even when storage is blocked', async ({ browser }) => {
  const context = await browser.newContext({ userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/153.0 Safari/537.36' })
  await context.addInitScript(() => {
    for (const store of ['localStorage', 'sessionStorage'])
      Object.defineProperty(window, store, { get() { throw new Error('blocked') } })
  })
  const page = await context.newPage()
  await page.route(TRACE, (r) => r.fulfill({ status: 200, body: trace('ID') }))
  await page.goto('/')
  await expect(page).toHaveURL(/\/id\//)
  await page.getByRole('link', { name: 'Read in English' }).click()
  await page.waitForTimeout(800)
  await expect(page).toHaveURL(/\/\?lang=en$/)
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('I design systems.I build with AI.')
  // clicking around the English page keeps English, even with no storage
  await page.locator('nav .cta').click()
  await page.waitForTimeout(800)
  await expect(page).toHaveURL(/lang=en/)
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('I design systems.I build with AI.')
  // the switch keeps its own language, it is not rewritten to English
  await expect(page.getByRole('link', { name: 'Baca dalam Bahasa Indonesia' })).toHaveAttribute('href', '/id/?lang=id')
  // to the case study and back: still English
  await page.getByRole('link', { name: /A marketing agent that can't publish/ }).click()
  await expect(page).toHaveURL(/case-studies\/marketing-agent\/\?lang=en/)
  await page.goBack()
  await page.waitForTimeout(800)
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('I design systems.I build with AI.')
  await page.goto('/case-studies/marketing-agent/?lang=en')
  await page.locator('a[href^="/#"], a[href^="/?"]').first().click()
  await page.waitForTimeout(800)
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('I design systems.I build with AI.')
  await context.close()
})

test('a slow lookup does not override English chosen meanwhile', async ({ page }) => {
  await page.route(TRACE, async (r) => {
    await new Promise((res) => setTimeout(res, 700))
    await r.fulfill({ status: 200, body: trace('ID') })
  })
  await page.goto('/')
  await page.evaluate(() => localStorage.setItem('fery-lang', 'en'))
  await page.waitForTimeout(1200)
  await expect(page).toHaveURL(/\/$/)
})

test('switching language keeps the section and query', async ({ page }) => {
  await page.route(TRACE, (r) => r.abort())
  await page.goto('/?utm_source=threads#products')
  await page.getByRole('link', { name: 'Baca dalam Bahasa Indonesia' }).click()
  await expect(page).toHaveURL(/\/id\/\?utm_source=threads&lang=id#products$/)
})

test('without JavaScript the Indonesian page is still Indonesian, with one skip link', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false })
  const page = await context.newPage()
  await page.goto('/id/')
  await expect(page.locator('html')).toHaveAttribute('lang', 'id')
  await expect(page.locator('.skip-link')).toHaveCount(1)
  await expect(page.locator('.skip-link')).toHaveText('Lewati ke konten')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Merancang sistem.Membangun dengan AI.')
  await context.close()
})

test('no hydration or console errors on either homepage', async ({ page }) => {
  const problems: string[] = []
  page.on('console', (m) => { if (m.type() === 'error') problems.push(m.text()) })
  page.on('pageerror', (e) => problems.push(e.message))
  await page.route(TRACE, (r) => r.abort())
  for (const path of ['/', '/id/']) {
    await page.goto(path)
    await page.waitForTimeout(600)
  }
  expect(problems.filter((p) => !/cdn-cgi\/trace|ERR_FAILED/.test(p))).toEqual([])
})

test('Indonesian page: SEO, hreflang, links and contact', async ({ page, request }) => {
  const response = await page.goto('/id/')
  expect(response?.status()).toBe(200)
  await expect(page.locator('html')).toHaveAttribute('lang', 'id')
  await expect(page.getByRole('navigation', { name: 'Navigasi portofolio' })).toBeVisible()
  await expect(page.locator('head link[rel="canonical"]')).toHaveAttribute('href', 'https://daefery.github.io/id/')
  await expect(page.locator('head link[rel="alternate"][hreflang="en"]')).toHaveAttribute('href', 'https://daefery.github.io/')
  await expect(page.locator('head link[rel="alternate"][hreflang="id"]')).toHaveAttribute('href', 'https://daefery.github.io/id/')
  await expect(page.locator('head link[rel="alternate"][hreflang="x-default"]')).toHaveAttribute('href', 'https://daefery.github.io/')
  await expect(page.locator('head meta[property="og:locale"]')).toHaveAttribute('content', 'id_ID')
  expect((await page.title()).match(/Fery Yundara Putera/g)).toHaveLength(1)
  for (const href of await page.locator('main a[href]').evaluateAll((n) => n.map((a) => a.getAttribute('href')!))) {
    if (href.startsWith('#')) await expect(page.locator(href)).toHaveCount(1)
    else if (href.startsWith('/')) expect((await request.get(href.split('#')[0])).status()).toBe(200)
  }
  const contact = page.locator('#contact')
  await expect(contact.getByRole('link', { name: 'Mulai proyek' })).toHaveAttribute('href', /^mailto:feryyp\.work@gmail\.com\?subject=Proyek/)
  await expect(page.locator('nav .cta')).toHaveAttribute('href', '/id/#work-with-me')
  await expect(page.locator('#work-with-me').getByRole('heading', { level: 3 })).toHaveCount(5)
  await expect(page.locator('[data-console-state]')).toHaveText('terverifikasi')
})

test('English homepage also points search engines to the Indonesian version', async ({ page }) => {
  await page.route(TRACE, (r) => r.abort())
  await page.goto('/')
  await expect(page.locator('head link[rel="alternate"][hreflang="id"]')).toHaveAttribute('href', 'https://daefery.github.io/id/')
  await expect(page.locator('head link[rel="canonical"]')).toHaveAttribute('href', 'https://daefery.github.io/')
})

for (const width of [360, 390, 1440]) {
  test(`Indonesian homepage fits at ${width}px`, async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/id/')
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy()
    await expect(page.locator('.nav-dock')).toHaveCount(0)
    const nav = await page.getByRole('navigation', { name: 'Navigasi portofolio' }).boundingBox()
    expect(nav!.height).toBeLessThan(70)
    expect(errors).toEqual([])
  })
}

test('custom 404 page survives the language split', async ({ request }) => {
  const res = await request.get('/404.html')
  expect(res.status()).toBe(200)
  const html = await res.text()
  expect(html).toContain('<title>404 — Fery Yundara Putera</title>')
  expect(html).toContain('<html lang="en"')
})
