/* eslint-disable linebreak-style */
import Tenant from '../../../assets/tenant.jpg';
import Tick from '../../../assets/icons/tick.png';
import LandLord from '../../../assets/landlord.jpg';
import PropertyManager from '../../../assets/property-manager.jpg';
import { BanknotesIcon, HomeModernIcon } from '@heroicons/react/24/outline';
import './index.css';
import React from 'react';

const feat = [
	{
		id: 1,
		name: 'Convenient',
		image: Tick,
	},
	{
		id: 2,
		name: 'Secure',
		image: Tick,
	},
	{
		id: 3,
		name: 'Efficient',
		image: Tick,
	},
];

export function Services () {
	return (
		<div className="p-10 h-auto">
			<h1 className="text-4xl font-bold">For Tenants</h1>
			<div className="py-5 flex items-center flex-col">
				<p className="text-center text-xl w-2/3">
					Say <strong>goodbye</strong> to the <strong>stress</strong>{' '}
					of receiving rent receipts on your doorsteps, going to the
					bank to pay, or remembering due dates.
				</p>
				<div className="grid grid-cols-2 gap-20 py-10">
					<div className="flex items-center justify-center">
						<img
							src={Tenant}
							alt="Tenant"
							className="rounded-2xl"
						/>
					</div>
					<div className="flex items-center justify-start">
						<h2 className="text-xl font-semibold">
							Our technology makes rent payment;{' '}
							<div className="space-y-4 mt-7">
								{feat.map((feature) => (
									<div
										key={feature.id}
										className="flex items-start justify-start space-x-2">
										<img
											src={feature.image}
											alt="TICK"
											className="h-8 w-10"
										/>
										<h1 className="font-light">
											{feature.name}
										</h1>
									</div>
								))}
							</div>
						</h2>
					</div>
				</div>
				<div className="landing-main">
					<div className="landing-item landlords">
						<div className="landing-item-inner">
							<h1 className="landing-item-header">
								For Landlords
							</h1>
							<div className="landing-item-body">
								<div className="img-cover">
									<img src={LandLord} alt="" className="" />
								</div>
								<div className="meta-desc">
									<h2>
										Gain control and simplify your property
										management with our technology
									</h2>
									<ul className="icons-list">
										<li className="flex space-x-2 items-center">
											<HomeModernIcon className="h-8 text-primary" />
											<h1>Automated Rent Collection</h1>
										</li>
										<li className="flex space-x-2 items-center">
											<HomeModernIcon className="h-8 text-primary" />
											<h1>
												Streamline communication with
												tenants and property managers
											</h1>
										</li>
										<li className="flex space-x-2 items-center">
											<HomeModernIcon className="h-8 text-primary" />
											<h1>
												Easily vet new tenants with a
												tenant credit score
											</h1>
										</li>
										<li className="flex space-x-2 items-center">
											<HomeModernIcon className="h-8 text-primary" />
											<h1>
												Access accurate reports and
												up-to-date information with just
												a few clicks
											</h1>
										</li>
									</ul>
								</div>
							</div>
							<div className="landing-item-desc">
								Say goodbye to the chaos and frustration of
								manual record-keeping on excel sheets and hello
								to an organized, time-saving, and cost-effective
								solution.
							</div>
						</div>
					</div>
					<div className="landing-item prop-managers">
						<div className="landing-item-inner">
							<h1 className="landing-item-header">
								For Property Managers
							</h1>
							<div className="landing-item-body">
								<div className="img-cover">
									<img
										src={PropertyManager}
										alt=""
										className=""
									/>
								</div>
								<div className="meta-desc">
									<h2>
										Improve efficiency and productivity
										with our technology
									</h2>
									<ul className="icons-list">
										<li className="flex space-x-2 items-center">
											<BanknotesIcon className="h-8 text-primary" />
											<h1>Automated Rent Collection</h1>
										</li>
										<li className="flex space-x-2 items-center">
											<BanknotesIcon className="h-8 text-primary" />
											<h1>
												Communication with tenants and
												landlords effectively
											</h1>
										</li>
										<li className="flex space-x-2 items-center">
											<BanknotesIcon className="h-8 text-primary" />
											<h1>
												Access real-time information and
												reports
											</h1>
										</li>
										<li className="flex space-x-2 items-center">
											<BanknotesIcon className="h-8 text-primary" />
											<h1>
												Streamline property management
												tasks with just a few clicks
											</h1>
										</li>
										<li className="flex space-x-2 items-center">
											<BanknotesIcon className="h-8 text-primary" />
											<h1>
												Track and reconcile payments
												made to your Landlords
											</h1>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="landing-item-desc">
							Join the revolution and start experiencing the
							benefits of technology in rent payment and property
							management today. Sign up now and experience the
							ease, convenience, and peace of mind that comes with
							our innovative solution.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};