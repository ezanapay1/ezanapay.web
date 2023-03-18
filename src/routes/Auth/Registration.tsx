import React, { useEffect, useState } from 'react'
import AuthLayout from '../../layouts/AuthLayout'
import { TypeOf, object, string, z } from 'zod'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Button, Text } from '@mantine/core'
import FormInput from '../../components/Forms/Inputs'

export const registerSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(6).max(50),
  confirmPassword: z.string().min(6).max(50),
}).refine(data => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
})

export type RegisterInput = TypeOf<typeof registerSchema>

const Registration = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const methods = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  })

  
  return (
    <AuthLayout>
      <Text fw={700} fz="xl" ta="center">Registration</Text>
      <FormProvider {...methods}>
      <form  className='space-y-4'>
      <div className='grid grid-cols-2 gap-5'>
        <FormInput label='First Name'  value={firstName} onChange={(e) => setFirstName(e.target.value)} name='firstName' placeholder='John' type='text'  />
        <FormInput label='Last Name' name='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='Doe' type='text'  />
      </div>
      <FormInput name='email' label='Email' value={email} onChange={(e) => setEmail(e.target.value)}  placeholder='john.doe@gmail.com' type='email' />
      <FormInput name='password' label='Password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='********' type='password' />
      <FormInput name='confirmPassword' label='Confirm Password' placeholder='********' type='password' value={''} />
      <div className='flex justify-between items-center'>
        <Button variant='default'
         className='bg-primary text-white'
           type='submit' 
                  >Register</Button>
        <Text fz="xs">Have an acount? <Link to="/login" className='text-primary underline '>Login</Link></Text>
      </div>
      </form>
      </FormProvider>
    </AuthLayout>
  )
}

export default Registration