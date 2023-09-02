import { GetAllStocks } from './@types/getAllStocks'
import { GetStock } from './@types/getStock'
import { getAllStocksFromPage } from './lib/getAllStocksFromPage'
import { getStockFromPage } from './lib/getStockFromPage'
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

      const stock = await page.evaluate(getStockFromPage)
      log('[B3Scraper] - Stock data extracted')

      await browser.close()
      log('[B3Scraper] - Browser closed')

      return stock
    } catch (e) {
      log('[B3Scraper] - Error: ', e)
    }
  },

  getAllStocks: async (getAllStocksData?: GetAllStocks) => {
    const { showLogs } = getAllStocksData || {}
    const log = getLog(showLogs)

    try {
      log('[B3Scraper] - Getting all stocks data')

      const { browser, page } = await getPuppeteerPage({ showLogs })

      await page.goto('https://www.fundamentus.com.br/detalhes.php', {
        waitUntil: 'domcontentloaded',
      })
      log('[B3Scraper] - Page loaded')

      const allStocks = await page.evaluate(getAllStocksFromPage)
      log('[B3Scraper] - Stocks data extracted')

      await browser.close()
      log('[B3Scraper] - Browser closed')

      return allStocks
    } catch (e) {
      log('[B3Scraper] - Error: ', e)
    }
  },
}
