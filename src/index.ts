import puppeteer from 'puppeteer'
import { GetStock } from './@types/getStock'
import { onPageEvaluate } from './lib/onPageEvaluate'

export const B3Scraper = {
  getStock: async ({ ticker, showLogs }: GetStock) => {
    const log = showLogs ? console.log : () => {}

    try {
      log(`[B3Scraper] - Getting stock data for ${ticker}`)

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

      await page.goto(
        `https://www.fundamentus.com.br/detalhes.php?papel=${ticker}`,
        {
          waitUntil: 'domcontentloaded',
        },
      )
      log('[B3Scraper] - Page loaded')

      const stock = await page.evaluate(onPageEvaluate)
      log('[B3Scraper] - Stock data extracted')

      await browser.close()
      log('[B3Scraper] - Browser closed')

      return stock
    } catch (e) {
      log('[B3Scraper] - Error: ', e)
    }
  },
}
