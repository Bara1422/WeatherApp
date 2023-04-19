import React, { useEffect, useState } from 'react'

const isMdScreen = () => window.innerWidth >= 768
const ButtonsActualWeather = ({ current }) => {
  const [isMd, setIsMd] = useState(isMdScreen())

  useEffect(() => {
    const handleResize = () => {
      setIsMd(isMdScreen())
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className='flex justify-between gap-2 pt-4 text-sm md:text-base'>
      {(isMd
        ? [
            `Humidity ${current?.humidity}%`,
            `Precip. ${current?.precip_mm} mm`,
            `UV ${current?.uv}`
          ]
        : [
            `H ${current?.humidity}%`,
            `P ${current?.precip_mm} mm`,
            `UV ${current?.uv}`
          ]
      ).map((data, index) => (
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
