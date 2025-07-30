import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-screen bg-gray-900 flex items-center justify-center'>
      <h1 className='text-3xl text-amber-100'>This is dashboard users page</h1>
      <div className='flex gap-3 mx-4'>
      <Button><Link href={'/dashboard/users/ali'}>Ali</Link></Button>
      <Button><Link href={'/dashboard/users/bilal'}>Bilal</Link></Button>
      <Button><Link href={'/dashboard/users/ghulam'}>Ghulam</Link></Button>
     </div>
    </div>
  )
}

export default page
