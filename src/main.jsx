import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MantineProvider } from '@mantine/core'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <MantineProvider>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </MantineProvider>
)
