import { Stock } from '../@types/stock'

export const onPageEvaluate = (): Stock => {
  const values = Array.from(document.querySelectorAll('.value')).map(
    (el) => el.innerHTML,
  )

  const about = {
    name: document.querySelector('h1 small')!.innerHTML,
  }

  const valuation = {
    price: Number(values[0].replace(',', '.')),
    dividendYield: Number(values[3].replace(',', '.')),
    priceToProfitRatio: Number(values[11].replace(',', '.')),
    pegRatio: Number(values[12].replace(',', '.')),
    priceToBookRatio: Number(values[13].replace(',', '.')),
    evToEbitdaRatio: Number(values[14].replace(',', '.')),
    evToEbitRatio: Number(values[15].replace(',', '.')),
    priceToEbitdaRatio: Number(values[16].replace(',', '.')),
    priceToEbitRatio: Number(values[17].replace(',', '.')),
    bookValuePerShare: Number(values[18].replace(',', '.')),
    priceToAssets: Number(values[19].replace(',', '.')),
    profitByShare: Number(values[20].replace(',', '.')),
    priceToSalesRatio: Number(values[21].replace(',', '.')),
    priceToCapitalRatio: Number(values[22].replace(',', '.')),
    priceToLiquidAsset: Number(values[23].replace(',', '.')),
  }

  const debt = {
    netDebtToEquityRatio: Number(values[24].replace(',', '.')),
    netDebtToEbitdaRatio: Number(values[25].replace(',', '.')),
    netDebtToEbitRatio: Number(values[26].replace(',', '.')),
    equityToAssetsRatio: Number(values[27].replace(',', '.')),
    liabilitiesToAssetsRatio: Number(values[28].replace(',', '.')),
    currentLiquidity: Number(values[29].replace(',', '.')),
  }

  const efficiency = {
    grossMargin: Number(values[30].replace(',', '.').replace('%', '')),
    ebitdaMargin: Number(values[31].replace(',', '.').replace('%', '')),
    ebitMargin: Number(values[32].replace(',', '.').replace('%', '')),
    netMargin: Number(values[33].replace(',', '.').replace('%', '')),
  }

  const profitability = {
    returnOnEquity: Number(values[34].replace(',', '.').replace('%', '')),
    returnOnAssets: Number(values[35].replace(',', '.').replace('%', '')),
    returnOnInvestedCapital: Number(
      values[36].replace(',', '.').replace('%', ''),
    ),
    assetTurnover: Number(values[37].replace(',', '.').replace('%', '')),
  }

  const growth = {
    cagrRevenue5Years: Number(values[38].replace(',', '.').replace('%', '')),
    cagrProfits5Years: Number(values[39].replace(',', '.').replace('%', '')),
  }

  return { about, valuation, debt, efficiency, profitability, growth }
}
