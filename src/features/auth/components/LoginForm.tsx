import FormInput from '../../../components/Form/Inputs/FormInput'
import { Button, Text } from '@mantine/core'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useForm } from '@mantine/form';
import { toast } from 'react-toastify';
import { useSignIn } from 'react-auth-kit';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../api/login';


const LoginForm = () => {
  const navigate = useNavigate();
  const { loading, error } = useSelector((state: any) => state.auth)
  const dispatch = useDispatch()

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

  const handleSubmit = async (e: any) => {
		// e.preventDefault();

		const data = {
			email: form.values.email,
			password: form.values.password,
		}

		try {
			await dispatch(userLogin(data))

			toast.success('Login successful');
			navigate('/dashboard');
		} catch (error: any) {
			toast.error(error.message);
		}
	};

  return (
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
							type="submit"
							loading={loading}
              >
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
  )
}

export default LoginForm