import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'
import { RouterProvider } from 'react-router-dom'

import { router } from './routes'
import { AuthProvider } from 'react-auth-kit'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider 
      authType="cookie"
      authName="_auth"
      cookieDomain="localhost"
      cookieSecure={false}
    >
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
