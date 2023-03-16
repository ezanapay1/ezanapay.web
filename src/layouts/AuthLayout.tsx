import React, { ReactNode } from 'react'

type AuthLayoutProps = {
    children: ReactNode
}

const AuthLayout = ({children}: AuthLayoutProps) => {
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
        <div className='bg-white p-6 rounded-md'>
          {children}
        </div>
    </div>
  )
}

export default AuthLayout