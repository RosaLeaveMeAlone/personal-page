import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { PersonalPageApp } from './PersonalPageApp'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <PersonalPageApp />
    </BrowserRouter>
  </React.StrictMode>,
)
