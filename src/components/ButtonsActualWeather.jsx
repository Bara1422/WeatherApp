import React from 'react'
import UvIcon from '../assets/UvIcon'
import HumidityIcon from '../assets/HumidityIcon'
import RainIcon from '../assets/RainIcon'

const weatherIcons = {
  humidity: <HumidityIcon />,
  precip: <RainIcon />,
  uv: <UvIcon />
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
