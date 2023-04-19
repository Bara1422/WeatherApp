import React from 'react'

const Spinner = () => {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='w-12 h-12 mx-auto my-auto border-8 border-pink-600 border-solid rounded-full min-h animate-spin border-t-transparent' />
    </div>
  )
}

export default Spinner
