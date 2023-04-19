import React from 'react'

const CurrentWeather = ({ forecast, current }) => {
  const forecastDay = forecast?.forecastday[0]
  return (
    <div className='flex gap-2 pb-3 divide-x divide-black xsm:pb-0 justify-startspace-x-2'>
      <p className='text-5xl font-bold '>{current?.temp_c}º</p>
      <div className='flex flex-col items-start justify-start pl-2 text-gray-900'>
        <p>{forecastDay?.day.maxtemp_c}º</p>
        <p className='text-gray-500'>{forecastDay?.day.mintemp_c}º</p>
      </div>
    </div>
  )
}

export default CurrentWeather
