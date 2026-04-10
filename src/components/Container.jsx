import React from 'react'

const Container = ({children}) => {
  return (
    <div className='bg-gradient-to-t from-gray-800 to-gray-200 h-screen flex flex-col justify-center items-center'>
      {children}
    </div>
  )
}

export default Container