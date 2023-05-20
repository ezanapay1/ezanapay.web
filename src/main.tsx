import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import { router } from './routes'
import { AuthProvider } from 'react-auth-kit'
import store from './store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    <ToastContainer />
    </Provider>
  </React.StrictMode>,
)
