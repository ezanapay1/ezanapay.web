import React from 'react';
import { UserLayout } from '../../layouts';

const Dashboard = () => {
	return (
		<UserLayout>
			<div className="flex flex-col items-center justify-center h-full">
				<h1 className="font-bold text-2xl">Welcome to EzanaPay</h1>
				<p className="text-lg font-light">
					Your number one property management solution.
				</p>
			</div>
		</UserLayout>
	);
};

export default Dashboard;
