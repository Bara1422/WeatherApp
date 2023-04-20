import React from 'react'
import Uv from '../assets/UV'
import Humidity from '../assets/Humidity'
import Rain from '../assets/Rain'

const weatherIcons = {
  humidity: <Humidity />,
  precip: <Rain />,
  uv: <Uv />
}

const ButtonsActualWeather = ({ current }) => {
  const currentWeather = [
    { name: 'humidity', value: `${current?.humidity}%` },
    { name: 'precip', value: `${current?.precip_mm} mm` },
    { name: 'uv', value: `${current?.uv} UV` }
  ]

  console.log(current)

  return (
    <div className='flex justify-between gap-2 pt-4 text-sm md:text-base'>
      {currentWeather.map((data, index) => (
        <div
          className='sm:w-1/5 sm:justify-center flex sm:mx-auto flex-col sm:flex-row p-4 text-center text-blue-400 font-semibold bg-gray-100 rounded-full basis-[30%] gap-2  mx-auto items-center'
          key={index}
        >
          {weatherIcons[data.name]}
          {data.value}
        </div>
      ))}
    </div>
  )
}

export default ButtonsActualWeather
