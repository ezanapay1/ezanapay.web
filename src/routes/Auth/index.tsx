import { useState } from 'react';
import AuthForm from '../../components/Forms/AuthForm';
import axios from 'axios';
import { toast } from 'react-toastify';
import { BASE_URL } from '../../constants';

interface FormValues {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  role: string;
}

const AuthPage = () => {
	const [submitting, setSubmitting] = useState(false);
	const [submitError, setSubmitError] = useState<string | null>(null);
	const [showLogin, setShowLogin] = useState(true);

	const handleFormSubmit = async (data: FormValues) => {
		setSubmitting(true);
		setSubmitError(null);
  
		try {
			let response;
			if (showLogin) {
				response = await axios.post(`${BASE_URL}/api/user/login`, {
					email: data.email,
					password: data.password,
				});
				toast.success('Login successful!');
			} else {
				response = await axios.post(`${BASE_URL}/api/user`, {
					firstName: data.firstName,
					lastName: data.lastName,
					email: data.email,
					password: data.password,
					role: data.role,
				});
				toast.success('Signup successful!');
			}
			console.log(response.data);
		} catch (error: any) {
			console.error(error);
			toast.error('Authentication failed. Please try again.');
			setSubmitError(error.response?.data?.message ?? 'Authentication failed. Please try again.');
		} finally {
			setSubmitting(false);
		}
	};
  

	const handleAlternativeLinkClick = () => {
		setShowLogin(!showLogin);
	};

	return (
		<div className="flex justify-center items-center h-screen bg-gray-100">
			<div className="w-full max-w-md">
				<div className="bg-white p-6 rounded-md">
					{showLogin ? (
						<AuthForm
							onSubmit={handleFormSubmit}
							submitting={submitting}
							formTitle="Login"
							submitButtonText="Login"
							alternativeLinkText="Don't have an account?"
							onAlternativeLinkClick={handleAlternativeLinkClick}
							alternativeLink={''}
							authRoute={''}
							isLogin={true}
						/>
					) : (
						<AuthForm
							onSubmit={handleFormSubmit}
							submitting={submitting}
							formTitle="Register"
							submitButtonText="Register"
							alternativeLinkText="Already have an account?"
							onAlternativeLinkClick={handleAlternativeLinkClick}
							alternativeLink={''}
							authRoute={''}
							isLogin={false}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default AuthPage;
