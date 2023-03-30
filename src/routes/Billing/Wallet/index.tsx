import React from 'react';
import { UserLayout } from '../../../layouts';
import { PlusCircleIcon } from '@heroicons/react/24/outline';

const Wallet = () => {
	return (
		<UserLayout>
			<div className="flex flex-col items-center justify-center h-full">
				<button className="bg-primary text-white flex space-x-2 items-center py-2 px-3 rounded-md font-semibold">
					<PlusCircleIcon className="h-6" />
					<span>Create Wallet</span>
				</button>

				<p className="my-5 text-sm">
					Your wallet will help us manage your transactions.
				</p>
			</div>
		</UserLayout>
	);
};

export default Wallet;
