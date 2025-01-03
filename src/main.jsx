import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Gallery from './Gallery.jsx'
import Rules from './Rules'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Rules />
    <Gallery />
  </StrictMode>,
)
