import React from 'react'

const CurrentWeather = ({ forecast, current }) => {
  const forecastDay = forecast?.forecastday[0]

  return (
    <div className='flex gap-2 pb-3 divide-x divide-black sm:w-3/5 xsm:pb-0 justify-startspace-x-2'>
      <p className='flex justify-between items-center md:flex-row flex-col-reverse text-5xl font-bold sm:w-3/5 md:items-start'>
        <img
          className='hidden  sm:h-24 sm:w-24 xsm:flex xsm:h-20 '
          src={current?.condition.icon}
          alt={current?.condition.text}
        />
        {current?.temp_c}º
      </p>
      <div className='flex flex-col items-start justify-start pl-2 text-gray-900'>
        <p>{forecastDay?.day.maxtemp_c}º</p>
        <p className='text-gray-500'>{forecastDay?.day.mintemp_c}º</p>
      </div>
    </div>
  )
}

export default CurrentWeather
