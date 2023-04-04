import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { TypeOf, z } from 'zod';
import { toast } from 'react-toastify';

const verificationCodeSchema = z.object({
	verificationCode: z.string().min(6).max(6),
});

export type VerificationCodeInput = TypeOf<typeof verificationCodeSchema>;

const VerifyEmail = () => {
	const { verificationCode } = useParams();

	return (
		<div>verifyEmail</div>
	);
};

export default VerifyEmail;
