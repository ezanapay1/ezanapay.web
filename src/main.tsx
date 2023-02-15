import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './components'
import './styles/index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom" 
import Root from './routes/Home'
import { AuthPage, Billing, Homepage, LandlordProfile, PropertyListing, TenantsListing, Wallet } from './routes'
import ErrorPage from './error'
import Dashboard from './routes/Landlords/Dashboard'
import { store } from './store'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
      path: "/",
      element: <Homepage />,
      errorElement: <ErrorPage />,
  },
  {
      path: "/auth",
      element: <AuthPage />,
  },
  {
      path: "/dashboard",
      element: <Dashboard />,
  },
  {
      path: "/properties",
      element: <PropertyListing />,
  },
  {
    path: "/landlord/profile",
    element: <LandlordProfile /> 
  },
  {
    path: "/tenants",  
    element: <TenantsListing />
  },
  {
    path: "/billing",
    element: <Billing />
  },
  {
    path: "/wallet",
    element: <Wallet />
  }
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
