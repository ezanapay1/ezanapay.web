import React from 'react'
import AuthLayout from '../components/Layout'
import { Text } from '@mantine/core'
import LoginForm from '../components/LoginForm'

const Login = () => {
  return (
    <AuthLayout>
      <div className="w-96">

      <Text fw={700} fz="xl" ta="center">
					Login
			</Text>

      {/* LoginForm */}
      <LoginForm />
      </div>
    </AuthLayout>
  )
}

export default Login