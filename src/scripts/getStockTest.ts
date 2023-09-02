import { B3Scraper } from '..'

const test = async () => {
  const stock = await B3Scraper.getStock({ ticker: 'blau3' })
  console.log(stock)
}

test()
