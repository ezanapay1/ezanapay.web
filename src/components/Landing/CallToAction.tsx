import Tenant from '../../assets/tenant.jpg';
import Tick from '../../assets/icons/tick.png';
import LandLord from '../../assets/landlord.jpg';
import PropertyManager from '../../assets/property-manager.jpg';
import { BanknotesIcon } from '@heroicons/react/24/outline';

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

const CallToAction = () => {
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
				<div className="grid grid-cols-2 gap-10 place-content-start place-items-start">
					<div className="flex items-center justify-center w-96">
						<div className="">
							<h1 className="text-4xl font-bold mb-5">
								For Landlords
							</h1>
							<div className="border-2 h-auto rounded-t-3xl">
								<div className="relative h-44 w-full">
									<img
										src={LandLord}
										alt=""
										className="w-full h-full rounded-t-3xl"
									/>
								</div>
								<div className="p-5">
									<ul>
										<li className="flex space-x-2 items-center">
											<BanknotesIcon className="h-8 text-primary" />
											<h1>Automated Rent Collection</h1>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-center w-96">
						<div className="">
							<h1 className="text-4xl font-bold mb-5">
								For Property Managers
							</h1>
							<div className="border-2 h-auto rounded-t-3xl">
								<div className="relative h-44 w-full">
									<img
										src={LandLord}
										alt=""
										className="w-full h-full rounded-t-3xl"
									/>
								</div>
								<div className="p-5">
									<ul>
										<li className="flex space-x-2 items-center">
											<BanknotesIcon className="h-8 text-primary" />
											<h1>Automated Rent Collection</h1>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CallToAction;
