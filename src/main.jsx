import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Exemplo from './exemplo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Exemplo nome='joão' idade="19" />
    <Exemplo nome='vitor' idade="30" />
  </React.StrictMode>,
)
