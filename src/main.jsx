import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BookingModalProvider } from './context/BookingModalContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookingModalProvider>
      <App />
    </BookingModalProvider>
  </StrictMode>,
)