import { useRef, useState, useEffect } from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import { Button, Text } from '@mantine/core';
import FormInput from '../../components/Forms/Inputs';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useDispatch } from 'react-redux';
import { setCredentials } from '../../redux/features/auth/authSlice';
import { useLoginMutation } from '../../redux/features/auth/authApiSlice';

import { useForm } from '@mantine/form';

const Login = () => {
	const form = useForm({
		initialValues: {
			email: '',
			password: '',
		},
		validate: {
			email: (value) => {
				if (!value) return 'Email is required';
				if (!value.includes('@')) return 'Email is invalid';
			},
			password: (value) => {
				if (!value) return 'Password is required';
				if (value.length < 6)
					return 'Password must be at least 6 characters';
			},
		},
	});

	const navigate = useNavigate();

	const [login, { isLoading }] = useLoginMutation();
	const dispatch = useDispatch();

	// useEffect(() => {
	//   userRef.current.focus()
	// }, [])

	const handleSubmit = async () => {
		// console.log(form.values?.email)

		try {
			// e.preventDefault()
			const email = form.values?.email;
			const password = form.values?.password;

			const res = await login({ email, password }).unwrap();

			console.log(res);

			// dispatch(setCredentials({token: res.token, user: res.user}))
			// setEmail('')
			// setPassword('')

			toast.success('Login successful');
			navigate('/dashboard');
		} catch (error: any) {
			toast.error(error.message);
		}
	};

	return (
		<AuthLayout>
			<div className="w-96">
				<Text fw={700} fz="xl" ta="center">
					Login
				</Text>

				<form
					className="space-y-4"
					onSubmit={form.onSubmit(handleSubmit)}>
					<FormInput
						name="email"
						isRequired={true}
						label="Email"
						placeholder="john.doe@gmail.com"
						type="email"
						{...form.getInputProps('email')}
					/>
					<FormInput
						name="password"
						label="Password"
						placeholder="********"
						isRequired={true}
						type="password"
						{...form.getInputProps('password')}
					/>
					<div className="flex justify-between items-center">
						<Button
							variant="default"
							className="bg-primary text-white"
							type="submit">
							Login
						</Button>
						<Text fz="xs">
							Don't have an acount?{' '}
							<Link
								to="/register"
								className="text-primary underline ">
								Register
							</Link>
						</Text>
					</div>
				</form>
			</div>
		</AuthLayout>
	);
};

export default Login;
