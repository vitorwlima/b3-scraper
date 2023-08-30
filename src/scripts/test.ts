import { StatusInvest } from '..'

const test = async () => {
  const asset = await StatusInvest.getStock({ ticker: 'blau3' })
  console.log(asset)
}

test()
