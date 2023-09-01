import { Stock } from '../@types/stock'

export const onPageEvaluate = (): Stock => {
  const values = Array.from(document.querySelectorAll('tr')).map((el) => ({
    labels: Array.from(el.querySelectorAll('td.label > span:last-child')).map(
      (el) => el.textContent!.replace('\n', '').trim(),
    ),
    values: Array.from(el.querySelectorAll('td.data > span:last-child')).map(
      (el) => el.textContent!.replace('\n', '').trim(),
    ),
  }))

  const fundamentusData = values.reduce((acc, curr) => {
    curr.labels.forEach((label, index) => {
      if (acc[label]) return
      acc[label] = curr.values[index]
    })
    return acc
  }, {} as any)

  const about = {
    ticker: fundamentusData.Papel,
    name: fundamentusData.Empresa,
    averageLiquidity: Number(
      fundamentusData['Vol $ méd (2m)'].replaceAll('.', ''),
    ),
    sector: fundamentusData.Setor,
    subSector: fundamentusData.Subsetor,
    numberOfShares: Number(fundamentusData['Nro. Ações'].replaceAll('.', '')),
  }

  const balance = {
    marketValue: Number(
      fundamentusData['Valor de mercado'].replaceAll('.', ''),
    ),
    enterpriseValue: Number(
      fundamentusData['Valor da firma'].replaceAll('.', ''),
    ),
    netIncome: Number(fundamentusData['Receita Líquida'].replaceAll('.', '')),
    ebit: Number(fundamentusData.EBIT.replaceAll('.', '')),
    netProfit: Number(fundamentusData['Lucro Líquido'].replaceAll('.', '')),
    assets: Number(fundamentusData.Ativo.replaceAll('.', '')),
    currentAssets: Number(
      fundamentusData['Ativo Circulante'].replaceAll('.', ''),
    ),
    grossDebt: Number(fundamentusData['Dív. Bruta'].replaceAll('.', '')),
    netDebt: Number(fundamentusData['Dív. Líquida'].replaceAll('.', '')),
    netWorth: Number(fundamentusData['Patrim. Líq'].replaceAll('.', '')),
  }

  const valuation = {
    price: Number(fundamentusData['Cotação'].replaceAll(',', '.')),
    dividendYield: Number(
      fundamentusData['Div. Yield'].replaceAll(',', '.').replaceAll('%', ''),
    ),
    changeInLast12Months: Number(
      fundamentusData['12 meses'].replaceAll(',', '.').replaceAll('%', ''),
    ),
    priceToProfitRatio: Number(fundamentusData['P/L'].replaceAll(',', '.')),
    priceToBookRatio: Number(fundamentusData['P/VP'].replaceAll(',', '.')),
    evToEbitdaRatio: Number(
      fundamentusData['EV / EBITDA'].replaceAll(',', '.'),
    ),
    evToEbitRatio: Number(fundamentusData['EV / EBIT'].replaceAll(',', '.')),
    priceToEbitRatio: Number(fundamentusData['P/EBIT'].replaceAll(',', '.')),
    bookValuePerShare: Number(fundamentusData.VPA.replaceAll(',', '.')),
    priceToAssets: Number(fundamentusData['P/Ativos'].replaceAll(',', '.')),
    profitByShare: Number(fundamentusData.LPA.replaceAll(',', '.')),
    priceToCapitalRatio: Number(
      fundamentusData['P/Cap. Giro'].replaceAll(',', '.'),
    ),
    priceToLiquidAsset: Number(
      fundamentusData['P/Ativ Circ Liq'].replaceAll(',', '.'),
    ),
  }

  const debt = {
    netDebtToEquityRatio:
      Number(fundamentusData['Dív. Líquida'].replaceAll('.', '')) /
      Number(fundamentusData['Patrim. Líq'].replaceAll('.', '')),
    netDebtToEbitRatio:
      Number(fundamentusData['Dív. Líquida'].replaceAll('.', '')) /
      Number(fundamentusData.EBIT.replaceAll('.', '')),
    equityToAssetsRatio:
      Number(fundamentusData['Patrim. Líq'].replaceAll('.', '')) /
      Number(fundamentusData.Ativo.replaceAll('.', '')),
    currentLiquidity: Number(
      fundamentusData['Liquidez Corr'].replaceAll(',', '.'),
    ),
  }

  const efficiency = {
    grossMargin: Number(
      fundamentusData['Marg. Bruta'].replaceAll(',', '.').replaceAll('%', ''),
    ),
    ebitMargin: Number(
      fundamentusData['Marg. EBIT'].replaceAll(',', '.').replaceAll('%', ''),
    ),
    netMargin: Number(
      fundamentusData['Marg. Líquida'].replaceAll(',', '.').replaceAll('%', ''),
    ),
  }

  const profitability = {
    returnOnEquity: Number(
      fundamentusData.ROE.replaceAll(',', '.').replaceAll('%', ''),
    ),
    returnOnInvestedCapital: Number(
      fundamentusData.ROIC.replaceAll(',', '.').replaceAll('%', ''),
    ),
    assetTurnover: Number(
      fundamentusData['Giro Ativos'].replaceAll(',', '.').replaceAll('%', ''),
    ),
  }

  return {
    about,
    balance,
    valuation,
    debt,
    efficiency,
    profitability,
  }
}
