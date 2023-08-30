export type Stock = {
  about: {
    name: string
  }
  valuation: {
    price: number | null
    dividendYield: number | null
    priceToProfitRatio: number | null
    pegRatio: number | null
    priceToBookRatio: number | null
    evToEbitdaRatio: number | null
    evToEbitRatio: number | null
    priceToEbitdaRatio: number | null
    priceToEbitRatio: number | null
    bookValuePerShare: number | null
    priceToAssets: number | null
    profitByShare: number | null
    priceToSalesRatio: number | null
    priceToCapitalRatio: number | null
    priceToLiquidAsset: number | null
  }
  debt: {
    netDebtToEquityRatio: number | null
    netDebtToEbitdaRatio: number | null
    netDebtToEbitRatio: number | null
    equityToAssetsRatio: number | null
    liabilitiesToAssetsRatio: number | null
    currentLiquidity: number | null
  }
  efficiency: {
    grossMargin: number | null
    ebitdaMargin: number | null
    ebitMargin: number | null
    netMargin: number | null
  }
  profitability: {
    returnOnEquity: number | null
    returnOnAssets: number | null
    returnOnInvestedCapital: number | null
    assetTurnover: number | null
  }
  growth: {
    cagrRevenue5Years: number | null
    cagrProfits5Years: number | null
  }
}
