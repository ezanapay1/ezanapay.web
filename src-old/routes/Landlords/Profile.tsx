import React from 'react';
import { UserLayout } from '../../layouts';
import {
	EnvelopeIcon,
	IdentificationIcon,
	PhoneIcon,
	UserIcon,
	UserPlusIcon,
} from '@heroicons/react/24/outline';

const LandlordProfile = () => {
	return (
		<UserLayout>
			<h1 className="text-lg font-semibold mb-5">Landlord Profile</h1>
			<div>
				<div className="bg-gray-50  rounded-md p-5">
					<div className="flex space-x-10 items-center">
						<div className="h-48 border w-48 border-primary rounded-full">
							<UserIcon className="h-full text-primary/50" />
						</div>
						<div className="flex-1">
							<div className="grid grid-cols-2 gap-5">
								<div className="flex space-x-2 items-center">
									<IdentificationIcon className="h-6 text-primary/80" />
									<span className="text-sm font-semibold">
										123456
									</span>
								</div>
								<div className="flex space-x-2 items-center">
									<UserPlusIcon className="h-6 text-primary/80" />
									<span className="text-sm font-semibold">
										John Doe
									</span>
								</div>
								<div className="flex space-x-2 items-center">
									<PhoneIcon className="h-6 text-primary/80" />
									<span className="text-sm font-semibold">
										+25471234567
									</span>
								</div>
								<div className="flex space-x-2 items-center">
									<EnvelopeIcon className="h-6 text-primary/80" />
									<span className="text-sm font-semibold">
										john.doe@gmail.com
									</span>
								</div>
								{/* <div className="flex space-x-2 items-center">
                                <EnvelopeIcon className='h-6 text-primary/80' />
                                <span className='text-sm font-semibold'>john.doe@gmail.com</span>
                            </div> */}
								<button
									type="button"
									className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md w-32 text-center shadow-sm text-white bg-primary hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
									Update Profile
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</UserLayout>
	);
};

export default LandlordProfile;
