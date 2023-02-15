import { useState } from 'react';
import AuthForm from '../../components/Forms/AuthForm';

interface FormValues {
  email: string;
  password: string;
}

const AuthPage = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [showLogin, setShowLogin] = useState(true);

  const handleFormSubmit = async (data: FormValues) => {
    // You can use the `data` object to send a login or signup request to your API
    // You can also set the `submitting` state to `true` while the request is being processed
    // and then set it back to `false` once the request has completed

    // For demonstration purposes, we'll just log the `data` object to the console
    console.log(data);
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
                          onAlternativeLinkClick={handleAlternativeLinkClick} alternativeLink={''} authRoute={''}            />
          ) : (
            <AuthForm
                              onSubmit={handleFormSubmit}
                              submitting={submitting}
                              formTitle="Register"
                              submitButtonText="Register"
                              alternativeLinkText="Already have an account?"
                              onAlternativeLinkClick={handleAlternativeLinkClick} alternativeLink={''} authRoute={''}            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
