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
  authRoute: string
  onAlternativeLinkClick?: () => void;
  onServiceSelect?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectedService?: string;
}

interface FormValues {
  email: string;
  password: string;
  service: string
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
        email: yup.string().email().required(),
        password: yup.string().required(),
        service: isLogin ? yup.string() :  yup.string().oneOf(['landlord', 'tenant', 'property manager']).required(""),
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
          autoComplete="email"
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
        {!isLogin && (  
            <div className="mb-4">
                <label
                htmlFor="service"
                className="block text-gray-700 font-bold mb-2"
                >
                Service
                </label>
                <div className="flex space-x-4">
                <div className="flex items-center">
                    <input
                    id="landlord"
                    type="radio"
                    {...register('service')}
                    value="landlord"
                    checked={selectedService === 'landlord'}
                    onChange={onServiceSelect}
                    className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                    />
                    <label
                    htmlFor="landlord"
                    className="ml-2 block text-gray-700 font-bold mb-2"
                    >
                    Landlord
                    </label>
                </div>
                <div className="flex items-center">
                    <input
                    id="tenant"
                    type="radio"
                    {...register('service')}
                    value="tenant"
                    checked={selectedService === 'tenant'}
                    onChange={onServiceSelect}
                    className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                    />
                    <label
                    htmlFor="tenant"
                    className="ml-2 block text-gray-700 font-bold mb-2"
                    >
                    Tenant
                    </label>
                </div>
                <div className="flex items-center">
                    <input
                    id="property manager"
                    type="radio"
                    {...register('service')}
                    value="property manager"
                    checked={selectedService === 'property manager'}
                    onChange={onServiceSelect}
                    className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                    />
                    <label
                    htmlFor="property manager"
                    className="ml-2 block text-gray-700 font-bold mb-2"
                    >
                    Property Manager
                    </label>
                </div>
                </div>
                {errors.service && (
                <p className="text-red-500 mt-2 text-sm">
                    {errors.service.message}
                </p>
                )}
            </div>
        )}
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
