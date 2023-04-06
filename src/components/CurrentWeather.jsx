import React from 'react'

const CurrentWeather = ({ data }) => {
  const forecastDay = data?.forecast.forecastday[0]
  return (
    <div className='flex justify-start space-x-2 divide-x divide-black'>
      <p className='text-5xl font-bold '>{data?.current.temp_c}º</p>
      <div className='flex flex-col items-start justify-between pl-2 text-gray-900'>
        <p>{forecastDay?.day.maxtemp_c}º</p>
        <p className='text-gray-500'>{forecastDay?.day.mintemp_c}º</p>
      </div>
    </div>
  )
}

export default CurrentWeather
