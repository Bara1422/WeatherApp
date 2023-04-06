import React from 'react'

const Header = ({ data }) => {
  return (
    <header className='flex flex-col justify-end h-40 px4 '>
      <h1 className='text-4xl font-bold truncate'>{data?.location.name}</h1>
      <p className='block text-2xl italic font-semibold truncate lg:inline'>
        {data?.location.region}, {data?.location.country}
      </p>
    </header>
  )
}

export default Header
