import { B3Scraper } from '..'

const test = async () => {
  const asset = await B3Scraper.getStock({ ticker: 'blau3' })
  console.log(asset)
}

test()
