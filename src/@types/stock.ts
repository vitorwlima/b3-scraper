export type Stock = {
  about: {
    ticker: string | null
    name: string | null
    averageLiquidity: number | null
    sector: string | null
    subSector: string | null
    numberOfShares: number | null
  }
  quote: {
    price: number | null
    oscilationIn30Days: number | null
    oscilationIn12Months: number | null
    minPriceIn52Weeks: number | null
    maxPriceIn52Weeks: number | null
    lastQuoteDate: string | null
  }
  balance: {
    marketValue: number | null
    enterpriseValue: number | null
    netIncome: number | null
    ebit: number | null
    netProfit: number | null
    assets: number | null
    currentAssets: number | null
    grossDebt: number | null
    netDebt: number | null
    netWorth: number | null
  }
  valuation: {
    dividendYield: number | null
    priceToProfitRatio: number | null
    priceToBookRatio: number | null
    evToEbitRatio: number | null
    priceToEbitRatio: number | null
    bookValuePerShare: number | null
    priceToAssets: number | null
    profitByShare: number | null
    priceToCapitalRatio: number | null
    priceToLiquidAsset: number | null
  }
  debt: {
    netDebtToEquityRatio: number | null
    netDebtToEbitRatio: number | null
    equityToAssetsRatio: number | null
    currentLiquidity: number | null
  }
  efficiency: {
    grossMargin: number | null
    ebitMargin: number | null
    netMargin: number | null
  }
  profitability: {
    returnOnEquity: number | null
    returnOnInvestedCapital: number | null
    assetTurnover: number | null
  }
}
