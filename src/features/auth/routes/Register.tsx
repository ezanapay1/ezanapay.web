/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { TypeOf, object, string, z } from 'zod';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Text } from '@mantine/core';

// import { useRegisterMutation } from '../../redux/features/auth/authApiSlice';
import AuthLayout from '../components/Layout';
import FormInput from '../../../components/Form/Inputs/FormInput';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../api/register';

export const registerSchema = z
	.object({
		firstName: z.string().min(2).max(50),
		lastName: z.string().min(2).max(50),
		email: z.string().email(),
		password: z.string().min(6).max(50),
		confirmPassword: z.string().min(6).max(50),
		role: z.enum(['Landlord', 'Tenant', 'PropertyManager']),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Passwords do not match',
		path: ['confirmPassword'],
	});

export type RegisterInput = TypeOf<typeof registerSchema>;

const Register = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [role, setRole] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	

	const { loading, userInfo, error, success } = useSelector((state: any) => state.auth)

	const dispatch = useDispatch()

	// const [register, { isLoading }] = useRegisterMutation();

	const methods = useForm<RegisterInput>({
		resolver: zodResolver(registerSchema),
	});

	const navigate = useNavigate();

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		
		try {
			const data = {
				first_name: firstName,
				last_name: lastName,
				email: email.toLowerCase(),
				password,
				role,
			}
	
			dispatch(registerUser(data))
			
			console.log(data)
	
			
			toast.success('Registration successfull');
			navigate('/login');
		} catch (error) {
			toast.error(error.message);
		}
	};

	useEffect(() => {
		if (isLoading) {
			toast.info('Loading...');
		}

		return () => {
			setIsLoading(false);
		}
	}, []);

	return (
		<AuthLayout>
			<Text fw={700} fz="xl" ta="center">
				Registration
			</Text>
			<FormProvider {...methods}>
				<form className="space-y-4" onSubmit={handleSubmit}>
					<div className="grid grid-cols-2 gap-5">
						<FormInput
							label="First Name"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
							name="firstName"
							placeholder="John"
							type="text"
						/>
						<FormInput
							label="Last Name"
							name="lastName"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
							placeholder="Doe"
							type="text"
						/>
					</div>
					<FormInput
						name="email"
						label="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="john.doe@gmail.com"
						type="email"
					/>
					<FormInput
						name="password"
						label="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="********"
						type="password"
					/>
					<FormInput
						name="confirmPassword"
						label="Confirm Password"
						placeholder="********"
						type="password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
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
									value="Landlord"
									checked={role === "Landlord"}
									onChange={() => setRole("Landlord")}
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
									value="Tenant"
									checked={role === "Tenant"}
									onChange={() => setRole("Tenant")}
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
									value="PropertyManager"
									checked={role === "PropertyManager"}
									onChange={() => setRole("PropertyManager")}
									className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
								/>
								<label
									htmlFor="property manager"
									className="ml-2 block text-gray-700 font-bold mb-2">
									Property Manager
								</label>
							</div>
						</div>
						
					<div className="flex justify-between items-center">
						<Button
							variant="default"
							className="bg-primary text-white"
							type="submit"
							loading={loading}
              >
							Register
						</Button>
						<Text fz="xs">
							Have an acount?{' '}
							<Link
								to="/login"
								className="text-primary underline ">
								Login
							</Link>
						</Text>
					</div>
				</form>
			</FormProvider>
		</AuthLayout>
	);
};

export default Register;
