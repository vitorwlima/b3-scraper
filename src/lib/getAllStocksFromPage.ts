import { AllStocks } from '../@types/allStocks'

export const getAllStocksFromPage = (): AllStocks => {
  const values = Array.from(document.querySelectorAll('tr'))
    .map((el) =>
      Array.from(el.querySelectorAll('td')).map((el) =>
        el.textContent!.replace('\n', '').trim(),
      ),
    )
    .filter((ar) => ar.length > 0)

  const stocks = values.map((ar) => ({
    ticker: ar[0],
    fantasyName: ar[1],
    companyName: ar[2],
  }))

  return stocks
}
