import React from 'react'
import { UserLayout } from '../../../layouts'

const TenantsListing = () => {
  return (
    <UserLayout>
       <div className='w-full'>
            <div className='bg-gray-50 rounded-md p-5'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-lg font-bold'>My Tenants</h1>
                    <button className='bg-primary text-white rounded-md px-5 py-2'>Add Tenants</button>    
                </div>

            </div>
            <p className='my-10 text-center text-sm font-semibold'>You currently have no tenants.</p>

        </div>
    </UserLayout>
  )
}

export default TenantsListing