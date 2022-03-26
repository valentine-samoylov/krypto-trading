import React from 'react'
import ReactDOM from 'react-dom'
import ContextProviders from '@context/ContextProviders'
import './index.scss'
import App from './App'

const mountNode = document.getElementById('root')

ReactDOM.render(
  <ContextProviders>
    <App />
  </ContextProviders>,
  mountNode
)
