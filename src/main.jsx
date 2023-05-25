import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Grocery from './exemplo.jsx'
import Teste from './teste.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Grocery  />
    <Teste />
  </React.StrictMode>,
)
