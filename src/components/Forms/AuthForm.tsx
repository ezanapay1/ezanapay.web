import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import AuthFormLink from './AuthFormLink';

interface AuthFormProps {
	onSubmit: (data: FormValues) => Promise<void>;
	isLogin: boolean;
	submitting?: boolean;
	formTitle: string;
	submitButtonText: string;
	alternativeLink: string;
	alternativeLinkText: string;
	authRoute: string;
	onAlternativeLinkClick?: () => void;
	onServiceSelect?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	selectedService?: string;
}

interface FormValues {
	email: string;
	password: string;
	role: string;
	firstName: string;
	lastName: string;
}

const AuthForm = ({
	isLogin,
	onSubmit,
	submitting = false,
	formTitle,
	submitButtonText,
	alternativeLinkText,
	selectedService,
	onServiceSelect,
	onAlternativeLinkClick,
}: AuthFormProps) => {
	const schema = yup.object().shape({
		firstName: yup.string().required(),
		lastName: yup.string().required(),
		email: yup.string().email().required(),
		password: yup.string().required(),
		role: isLogin
			? yup.string()
			: yup
					.string()
					.oneOf(['LandLord', 'tenant', 'PropertyManager'])
					.required(''),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		mode: 'onBlur',
		resolver: yupResolver(schema),
	});

	const [submitError, setSubmitError] = useState<string | null>(null);

	const handleFormSubmit = async (data: FormValues) => {
		try {
			await onSubmit(data);
		} catch (error) {
			setSubmitError('An error occurred while submitting the form.');
		}
	};

	if (isLogin) {
		return (
			<form onSubmit={handleSubmit(handleFormSubmit)}>
				<h2 className="text-2xl font-bold mb-6 text-gray-800">
					{formTitle}
				</h2>
				<div className="mb-4">
					<label
						htmlFor="email"
						className="block text-gray-700 font-bold mb-2">
						Email
					</label>
					<input
						id="email"
						type="email"
						{...register('email')}
						autoComplete="email"
						className={`w-full border-2 rounded-md p-3 ${
							errors.email ? 'border-red-500' : 'border-gray-300'
						}`}
					/>
					{errors.email && (
						<p className="text-red-500 mt-2 text-sm">
							{errors.email.message}
						</p>
					)}
				</div>
				<div className="mb-4">
					<label
						htmlFor="password"
						className="block text-gray-700 font-bold mb-2">
						Password
					</label>
					<input
						id="password"
						type="password"
						{...register('password')}
						className={`w-full border-2 rounded-md p-3 ${
							errors.password
								? 'border-red-500'
								: 'border-gray-300'
						}`}
					/>
					{errors.password && (
						<p className="text-red-500 mt-2 text-sm">
							{errors.password.message}
						</p>
					)}
				</div>
				<div className="flex justify-between items-center">
					<button
						type="submit"
						className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 disabled:opacity-50"
						disabled={submitting}>
						{submitButtonText}
					</button>
					<AuthFormLink
						text={alternativeLinkText}
						onClick={onAlternativeLinkClick}
					/>
				</div>
				{submitError && (
					<p className="text-red-500 mt-2 text-sm">{submitError}</p>
				)}
			</form>
		);
	}

	return (
		<form onSubmit={handleSubmit(handleFormSubmit)}>
			<h2 className="text-2xl font-bold mb-6 text-gray-800">
				{formTitle}
			</h2>
			{!isLogin && (
				<>
					<div className="mb-4">
						<label
							htmlFor="email"
							className="block text-gray-700 font-bold mb-2">
							Email
						</label>
						<input
							id="email"
							type="email"
							{...register('email')}
							autoComplete="email"
							className={`w-full border-2 rounded-md p-3 ${
								errors.email
									? 'border-red-500'
									: 'border-gray-300'
							}`}
						/>
						{errors.email && (
							<p className="text-red-500 mt-2 text-sm">
								{errors.email.message}
							</p>
						)}
					</div>
					<div className="mb-4">
						<label
							htmlFor="password"
							className="block text-gray-700 font-bold mb-2">
							Password
						</label>
						<input
							id="password"
							type="password"
							{...register('password')}
							className={`w-full border-2 rounded-md p-3 ${
								errors.password
									? 'border-red-500'
									: 'border-gray-300'
							}`}
						/>
						{errors.password && (
							<p className="text-red-500 mt-2 text-sm">
								{errors.password.message}
							</p>
						)}
					</div>
					<div className="mb-4">
						<div className="grid grid-cols-2 gap-5">
							<div>
								<label htmlFor="firstName">First Name</label>
								<input
									type="text"
									id="firstName"
									{...register('firstName')}
									className="w-full border-2 rounded-md p-3 border-gray-300"
								/>
								{errors.firstName && (
									<p className="text-red-500 mt-2 text-sm">
										{errors.firstName.message}
									</p>
								)}
							</div>
							<div>
								<label htmlFor="lastName">Last Name</label>
								<input
									type="text"
									id="lastName"
									{...register('lastName')}
									className="w-full border-2 rounded-md p-3 border-gray-300"
								/>
								{errors.lastName && (
									<p className="text-red-500 mt-2 text-sm">
										{errors.lastName.message}
									</p>
								)}
							</div>
						</div>
						<label
							htmlFor="role"
							className="block text-gray-700 font-bold mb-2">
							Service
						</label>
						<div className="flex space-x-4">
							<div className="flex items-center">
								<input
									id="landlord"
									type="radio"
									{...register('role')}
									value="landlord"
									onChange={onServiceSelect}
									className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
								/>
								<label
									htmlFor="LandLord"
									className="ml-2 block text-gray-700 font-bold mb-2">
									Landlord
								</label>
							</div>
							<div className="flex items-center">
								<input
									id="tenant"
									type="radio"
									{...register('role')}
									value="Tenant"
									onChange={onServiceSelect}
									className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
								/>
								<label
									htmlFor="tenant"
									className="ml-2 block text-gray-700 font-bold mb-2">
									Tenant
								</label>
							</div>
							<div className="flex items-center">
								<input
									id="property manager"
									type="radio"
									{...register('role')}
									value="PropertyManager"
									onChange={onServiceSelect}
									className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
								/>
								<label
									htmlFor="property manager"
									className="ml-2 block text-gray-700 font-bold mb-2">
									Property Manager
								</label>
							</div>
						</div>
						{errors.role && (
							<p className="text-red-500 mt-2 text-sm">
								{errors.role.message}
							</p>
						)}
					</div>
				</>
			)}
			{submitError && <p className="text-red-500 mb-4">{submitError}</p>}
			<button
				type="submit"
				className="bg-primary text-white py-2 px-4 rounded-md w-full text-center"
				disabled={submitting}>
				{submitting ? 'Submitting...' : submitButtonText}
			</button>
			<AuthFormLink
				text={alternativeLinkText}
				onClick={onAlternativeLinkClick}
			/>
		</form>
	);
};

export default AuthForm;
