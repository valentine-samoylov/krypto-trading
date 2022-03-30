import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import ContextProviders from '@context/ContextProviders'
import './globals.scss'
import App from './App'

const mountNode = document.getElementById('root')

ReactDOM.render(
  <StrictMode>
    <ContextProviders>
      <App />
    </ContextProviders>
  </StrictMode>,
  mountNode
)
