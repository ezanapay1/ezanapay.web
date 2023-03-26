import {
	ArrowRightOnRectangleIcon,
	DocumentDuplicateIcon,
	HomeModernIcon,
	UserCircleIcon,
	UserGroupIcon,
	WalletIcon,
} from '@heroicons/react/24/outline';
import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
	return (
		<div className="p-10">
			<div className="w-56 h-[80vh] p-5 flex flex-col justify-between bg-primary/5 rounded-lg shadow-lg">
				<ul className="flex flex-col space-y-5">
					<li className="bg-gray-200 p-2 rounded-md flex items-center text-sm font-semibold space-x-3">
						<UserCircleIcon className="h-8 text-primary" />
						<Link to="/landlord/profile"> User Profile</Link>
					</li>
					<li className="bg-gray-200 p-2 rounded-md flex items-center text-sm font-semibold space-x-3">
						<HomeModernIcon className="h-8 text-primary" />
						<Link to="/properties"> My Properties</Link>
					</li>
					<li className="bg-gray-200 p-2 rounded-md flex items-center text-sm font-semibold space-x-3">
						<UserGroupIcon className="h-8 text-primary" />
						<Link to="/tenants"> My Tenants</Link>
					</li>
					<li className="bg-gray-200 p-2 rounded-md flex items-center text-sm font-semibold space-x-3">
						<DocumentDuplicateIcon className="h-8 text-primary" />
						<Link to="/billing"> Billing</Link>
					</li>
					<li className="bg-gray-200 p-2 rounded-md flex items-center text-sm font-semibold space-x-3">
						<WalletIcon className="h-8 text-primary" />
						<Link to="/wallet"> My Wallet</Link>
					</li>
				</ul>

				<div className="flex items-center justify-center space-x-1">
					<ArrowRightOnRectangleIcon className="h-6 text-primary/80" />
					<span className="text-gray-700 font-light tracking-wide">
						Logout
					</span>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
