import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components';
import './styles/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Home';
import {
	AuthPage,
	Billing,
	Homepage,
	LandlordProfile,
	Login,
	PropertyListing,
	Registration,
	TenantsListing,
	Wallet,
	VerifyEmail,
} from './routes';
import { ErrorPage } from './error';
import Dashboard from './routes/Landlords/Dashboard';
import { Provider } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MantineProvider } from '@mantine/core';
import { store } from './redux';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Homepage />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/verify-email',
		element: <VerifyEmail />,
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/register',
		element: <Registration />,
	},
	{
		path: '/dashboard',
		element: <Dashboard />,
	},
	{
		path: '/properties',
		element: <PropertyListing />,
	},
	{
		path: '/landlord/profile',
		element: <LandlordProfile />,
	},
	{
		path: '/tenants',
		element: <TenantsListing />,
	},
	{
		path: '/billing',
		element: <Billing />,
	},
	{
		path: '/wallet',
		element: <Wallet />,
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<MantineProvider
				theme={
					{
						// colors: {
						//   brand: ['#FFC107', '#FFC107', '#FFC107', '#FFC107', '#FFC107']
						// },
						// primaryColor: "brand",
					}
				}>
				<RouterProvider router={router} />
				<ToastContainer />
			</MantineProvider>
		</Provider>
	</React.StrictMode>
);
