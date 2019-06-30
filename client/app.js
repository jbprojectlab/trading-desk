import React, {Component} from 'react'
import {hot} from 'react-hot-loader'
import './app.css'
import TradingDesk from './trading-desk'

const App = () => (
  <div>
    <h2>Real Time Trading Desk</h2>
    <TradingDesk />
  </div>
)

export default hot(module)(App);