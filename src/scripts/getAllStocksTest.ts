import { B3Scraper } from '..'

const test = async () => {
  const allStocks = await B3Scraper.getAllStocks()
  console.log(allStocks)
}

test()
