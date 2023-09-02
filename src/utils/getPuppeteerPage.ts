import puppeteer from 'puppeteer'
import { getLog } from './getLog'

export const getPuppeteerPage = async ({
  showLogs,
}: {
  showLogs?: boolean
}) => {
  const log = getLog(showLogs)

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    ignoreDefaultArgs: ['--disable-extensions'],
  })
  log('[B3Scraper] - Browser launched')

  const page = await browser.newPage()
  log('[B3Scraper] - Page created')

  await page.setExtraHTTPHeaders({
    accept: '*/*',
    'accept-language':
      'en-US,en;q=0.9,pt-BR;q=0.8,pt;q=0.7,es-MX;q=0.6,es;q=0.5',
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'x-requested-with': 'XMLHttpRequest',
    'sec-ch-ua':
      '" Not;A Brand";v="99", "Google Chrome";v="97", "Chromium";v="97"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko)',
  })
  log('[B3Scraper] - Page headers set')

  return { browser, page }
}
