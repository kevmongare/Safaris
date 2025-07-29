import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom' // Import BrowserRouter
// import App from './pages/masaiMara'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <BrowserRouter>
    <div className='bg-[var(--primary)]'>
      <App />
    </div>
    </BrowserRouter>
  </StrictMode>,
)
