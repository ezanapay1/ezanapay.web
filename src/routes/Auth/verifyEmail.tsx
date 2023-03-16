import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { TypeOf, z } from 'zod';
import { useVerifyEmailMutation } from '../../redux/api/authApi';
import { toast } from 'react-toastify';

const verificationCodeSchema = z.object({
	verificationCode: z.string().min(6).max(6)
});

export type VerificationCodeInput = TypeOf<typeof verificationCodeSchema>

const VerifyEmail = () => {

	const {verificationCode} = useParams();

	const methods = useForm<VerificationCodeInput>({
		resolver: zodResolver(verificationCodeSchema),
	});

	const [verifyEmail, { isLoading, isSuccess, data, isError, error }] =
    useVerifyEmailMutation();

	const navigate = useNavigate();

	const {
		reset,
		handleSubmit,
		formState: { isSubmitSuccessful },
	} = methods;


	useEffect(() => {
		if (verificationCode) {
			reset({ verificationCode });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
    
	useEffect(() => {
		if (isSuccess) {
			toast.success(data?.message);
			navigate('/login');
		}
		if (isError) {
			if (Array.isArray((error as any).data.error)) {
				(error as any).data.error.forEach((el: any) =>
					toast.error(el.message, {
						position: 'top-right',
					})
				);
			} else {
				toast.error((error as any).data.message, {
					position: 'top-right',
				});
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLoading]);
    
	useEffect(() => {
		if (isSubmitSuccessful) {
			reset();
		}
	}, [isSubmitSuccessful]);
    
	const onSubmitHandler: SubmitHandler<VerificationCodeInput> = ({
		verificationCode,
	}) => {
		// ? Executing the verifyEmail Mutation
		verifyEmail({ verificationCode });
	};
    

    

	return (
		<div>verifyEmail</div>
	);
};

export default VerifyEmail;