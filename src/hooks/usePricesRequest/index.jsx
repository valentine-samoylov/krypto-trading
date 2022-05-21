// usePricesRequest
import { useState, useEffect } from 'react'
import axios from 'axios'

const usePricesRequest = (endpoint) => {
  const [coinPrices, setCoinsPrices] = useState([])

  const getCoinPrices = () => {
    axios.get(endpoint).then((res) => {
      const coinsData = res.data
      let coinPrices = []
      let price

      for (let i = 0; i < coinsData.length; i++) {
        price = Math.round((coinsData[i].current_price + Number.EPSILON) * 100) / 100
        coinPrices.push({ price })
      }

      setCoinsPrices(coinPrices)
    })
  }

  useEffect(() => {
    getCoinPrices()
  }, [])

  return { coinPrices }
}

export default usePricesRequest
