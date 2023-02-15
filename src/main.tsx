import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './components'
import './styles/index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom" 
import Root from './routes/Home'
import { Billing, Homepage, LandlordProfile, PropertyListing, TenantsListing, Wallet } from './routes'
import ErrorPage from './error'
import Dashboard from './routes/Landlords/Dashboard'

const router = createBrowserRouter([
  {
      path: "/",
      element: <Homepage />,
      errorElement: <ErrorPage />,
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
    <RouterProvider router={router} />
  </React.StrictMode>,
)
