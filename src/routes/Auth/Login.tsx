import React, { useEffect, useState } from 'react'
import AuthLayout from '../../layouts/AuthLayout'
import { Button, Text } from '@mantine/core'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import FormInput from '../../components/Forms/Inputs'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { TypeOf, z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useLoginUserMutation } from '../../redux/api/authApi'
import { toast } from 'react-toastify'

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(50),
})

export type LoginInput = TypeOf<typeof loginSchema>

const Login = () => {
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  const methods = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const [loginUser, { isLoading, isError, error, isSuccess }] =
    useLoginUserMutation();

    const navigate = useNavigate();
  const location = useLocation();

  const from = ((location.state as any)?.from.pathname as string) || '/profile';


  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = methods;

  useEffect(() => {
    if (isSuccess) {
      toast.success('You successfully logged in');
      navigate(from);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const onSubmitHandler: SubmitHandler<LoginInput> = (values) => {
    // ? Executing the loginUser Mutation
    loginUser(values);
  };

  return (
    <AuthLayout>
      <div className="w-96">
      <Text fw={700} fz="xl" ta="center">Login</Text>
      <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmitHandler)} className='space-y-4'>
      <FormInput name='email' value={email} onChange={(e) => setEmail(e.target.value)} isRequired={true} label='Email'  placeholder='john.doe@gmail.com' type='email' />
      <FormInput name='password' value={password} onChange={(e) => setPassword(e.target.value)} label='Password' placeholder='********' isRequired={true} type='password' />
      <div className='flex justify-between items-center'>
        <Button variant='default' className='bg-primary text-white' loading={isLoading} type='submit' 
          onClick={() => {
                       console.log(email, password)
          }
        }
        >Login</Button>
        <Text fz="xs">Don't have an acount? <Link to="/register" className='text-primary underline '>Register</Link></Text>
      </div>
      </form>
      </FormProvider>
      </div>
    </AuthLayout>
  )
}

export default Login