import { GetStock } from './@types/getStock'
import { onPageEvaluate } from './lib/onPageEvaluate'
import { getLog } from './utils/getLog'
import { getPuppeteerPage } from './utils/getPuppeteerPage'

export const B3Scraper = {
  getStock: async ({ ticker, showLogs }: GetStock) => {
    const log = getLog(showLogs)

    try {
      log(`[B3Scraper] - Getting stock data for ${ticker}`)

      const { browser, page } = await getPuppeteerPage({ showLogs })

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
