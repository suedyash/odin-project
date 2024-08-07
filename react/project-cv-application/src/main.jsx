import React from 'react'
import ReactDOM from 'react-dom/client'
import Info from './Info.jsx'
import EdExp from './EdExp.jsx'
import PracExp from './PracExp.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Info />
    <PracExp />
    <EdExp />
  </React.StrictMode>,
)