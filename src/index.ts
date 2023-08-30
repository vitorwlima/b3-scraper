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
    await page.goto(`https://statusinvest.com.br/acoes/${ticker}`, {
      waitUntil: 'domcontentloaded',
    })

    const stock = await page.evaluate(onPageEvaluate)

    await browser.close()

    return stock
  },
}
