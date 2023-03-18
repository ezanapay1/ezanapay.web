import { useRef, useState, useEffect } from 'react'
import AuthLayout from '../../layouts/AuthLayout'
import { Button, Text } from '@mantine/core'
import FormInput from '../../components/Forms/Inputs'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useDispatch } from 'react-redux'
import { setCredentials } from '../../redux/features/auth/authSlice'
import { useLoginMutation } from '../../redux/features/auth/authApiSlice'

import {useForm} from "@mantine/form"

const Login = () => {
  const userRef = useRef<null | !undefined>(null)
  const errRef = useRef()
  const [errMsg, setErrMsg] = useState('')
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  const form = useForm({
    initialValues: {
      email: '',
      password: ''
    },
    validate: {
      email: (value) => {
        if (!value) return 'Email is required'
        if (!value.includes('@')) return 'Email is invalid'
      },
      password: (value) => {
        if (!value) return 'Password is required'
        if (value.length < 6) return 'Password must be at least 6 characters'
      }

    }
  })
  
  const navigate = useNavigate() 

  const [login, {isLoading, }] = useLoginMutation()
  const dispatch = useDispatch()

  // useEffect(() => {
  //   userRef.current.focus()
  // }, [])

  useEffect(() => {
    setErrMsg('')
  }, [email, password])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await login({email, password}).unwrap()
      dispatch(setCredentials({token: res.token, user: res.user}))
      setEmail('')
      setPassword('')

      toast.success('Login successful')
      navigate('/dashboard')
    } catch (error: any) {h
      setErrMsg(error.message)
      toast.error(error.message)
    }
  }

  return (
    <AuthLayout>
      <div className="w-96">
      <Text fw={700} fz="xl" ta="center">Login</Text>
      
      <form className='space-y-4'>
      <FormInput 
         name='email' 
         isRequired={true}
         label='Email'  
         placeholder='john.doe@gmail.com' 
         type='email' {...form.getInputProps('email')}
        />
      <FormInput name='password' value={password} onChange={(e) => setPassword(e.target.value)} label='Password' placeholder='********' isRequired={true} type='password' />
      <div className='flex justify-between items-center'>
        <Button variant='default' className='bg-primary text-white' type='submit' 
          onClick={() => {
                       console.log(email, password)
          }
        }
        >Login</Button>
        <Text fz="xs">Don't have an acount? <Link to="/register" className='text-primary underline '>Register</Link></Text>
      </div>
      </form>
      </div>
    </AuthLayout>
  )
}

export default Login