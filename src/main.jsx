import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div
      style={{
        backgroundImage:"url('./landscape_snow.jpg')", // ✅ corrected
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        height: '100vh',
        textAlign: 'center',
        backgroundSize: 'cover', // optional
        backgroundPosition: 'center', // optional
        backgroundRepeat: 'no-repeat' // optional
      }}
    >
      <App />
    </div>
  </StrictMode>
)
