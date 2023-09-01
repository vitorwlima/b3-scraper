import puppeteer from 'puppeteer'

import { GetStock } from './@types/getStock'
import { onPageEvaluate } from './lib/onPageEvaluate'

export const StatusInvest = {
  getStock: async ({ ticker }: GetStock) => {
    const browser = await puppeteer.launch({
      headless: 'new',
      defaultViewport: null,
    })
    const page = await browser.newPage()
    await page.setExtraHTTPHeaders({
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36',
    })
    await page.goto(`https://statusinvest.com.br/acoes/${ticker}`, {
      waitUntil: 'domcontentloaded',
    })

    const stock = await page.evaluate(onPageEvaluate)

    await browser.close()

    return stock
  },
}
