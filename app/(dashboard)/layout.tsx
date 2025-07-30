import React from 'react'

const layout = ({children}:{children: React.ReactNode}) => {
  return (
    <div>
      <div className="bg-gray-900 text-white text-2xl">This is dashboard</div>
      {children}
    </div>
  )
}

export default layout
