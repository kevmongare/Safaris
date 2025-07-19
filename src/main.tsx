import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
// import App from './pages/masaiMara'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='bg-[var(--primary)]'>
      <App />
    </div>
  </StrictMode>,
)
