import { createRoot } from 'react-dom/client'
import ContextProviders from '@/context/ContextProviders'
import './index.scss'
import App from './App'

const container = document.getElementById('app')
const root = createRoot(container)

root.render(
  <ContextProviders>
    <App />
  </ContextProviders>
)
