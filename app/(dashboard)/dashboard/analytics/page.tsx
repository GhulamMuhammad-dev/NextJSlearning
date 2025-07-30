import React from 'react'

const page = async() => {
    await new Promise((res) => setTimeout(res, 3000));
  return (
    <div className='w-full h-screen bg-gray-900 flex items-center justify-center'>
      <h1 className='text-3xl text-amber-100'>This is dashboard analytics page</h1>
    </div>
  )
}

export default page
