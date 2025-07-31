import React from 'react'

const App = async() => {
  await new Promise((res) => setTimeout(res, 3000));
  return (
    <div className='w-full h-screen bg-gray-900 flex items-center justify-center'>
      <h1 className='text-3xl text-chart-1'>Hello World</h1>
    </div>
  )
}

export default App
