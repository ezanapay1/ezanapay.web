import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import AuthFormLink from './AuthFormLink';

interface AuthFormProps {
  onSubmit: (data: FormValues) => Promise<void>;
  submitting?: boolean;
  formTitle: string;
  submitButtonText: string;
  alternativeLink: string;
  alternativeLinkText: string;
  authRoute: string
  onAlternativeLinkClick?: () => void;
}

interface FormValues {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const AuthForm = ({
  onSubmit,
  submitting = false,
  formTitle,
  submitButtonText,
  alternativeLink,
  alternativeLinkText,
  authRoute,
    onAlternativeLinkClick,
}: AuthFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
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

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">{formTitle}</h2>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className={`w-full border-2 rounded-md p-3 ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.email && (
          <p className="text-red-500 mt-2 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 font-bold mb-2"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          {...register('password')}
          className={`w-full border-2 rounded-md p-3 ${
            errors.password ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.password && (
          <p className="text-red-500 mt-2 text-sm">
            {errors.password.message}
          </p>
        )}
      </div>
      {submitError && (
        <p className="text-red-500 mb-4">{submitError}</p>
      )}
      <button
        type="submit"
        className="bg-primary text-white py-2 px-4 rounded-md w-full text-center"
        disabled={submitting}
      >
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
