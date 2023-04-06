import React from 'react'

const ButtonsActualWeather = ({ data }) => {
  return (
    <div className='flex justify-between max-w-3xl gap-2 pt-4 text-sm md:text-base'>
      {[
        `H ${data?.current.humidity}%`,
        `P ${data?.current.precip_mm} mm`,
        `UV ${data?.current.uv}`
      ].map((data, index) => (
        <div
          className='sm:flex-none sm:w-1/5 sm:justify-center sm:flex sm:mx-auto flex-grow p-4 text-center text-blue-400 bg-gray-100 rounded-full basis-[30%]'
          key={index}
        >
          {data}
        </div>
      ))}
    </div>
  )
}

export default ButtonsActualWeather
