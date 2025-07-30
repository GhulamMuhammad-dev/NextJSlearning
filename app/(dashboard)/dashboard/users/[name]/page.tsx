import React from 'react'

const page = ({params}:{params:{name:string}}) => {
    const {name} =params;
  return (
    
      <div className='w-full h-screen bg-gray-900 flex items-center justify-center'>
      <h1 className='text-3xl text-amber-100'>Wellcome {name}</h1>
    </div>
    
  )
}

export default page
