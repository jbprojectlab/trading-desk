import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {secretAlphaVantageKey} from '../secrets'

const TradingDesk = () => {
  const [stockData, setStockData] = useState([])

  useEffect(() => {
    const fetchStockData = async () => {
      const {data} = await axios(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=${secretAlphaVantageKey}`)
      console.log(data)
      setStockData(data)
    }
    fetchStockData()
  }, [])

  return (
    <div className='table'>
      Stocks
    </div>
  )
}

export default TradingDesk