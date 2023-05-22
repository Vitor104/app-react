import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Grocery from './exemplo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Grocery item1="eggs" item2="bread" item3="beaf" />
  </React.StrictMode>,
)
