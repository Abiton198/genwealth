import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import DarkMode from './components/DarkMode.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
    <DarkMode>
        <App />
    </DarkMode>
      </BrowserRouter> 
  </React.StrictMode>,
)


