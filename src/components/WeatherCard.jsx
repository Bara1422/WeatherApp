import React from 'react'
import WeatherSummary from './WeatherSummary'
import NextDaysWeather from './NextDaysWeather'
import ButtonsActualWeather from './ButtonsActualWeather'
import CurrentWeather from './CurrentWeather'

const WeatherCard = ({ data }) => {
  return (
    <main className='flex flex-col gap-3 p-4 bg-slate-300 rounded-xl'>
      <CurrentWeather data={data} />
      <WeatherSummary data={data} />
      <NextDaysWeather data={data} />
      <ButtonsActualWeather data={data} />
    </main>
  )
}

export default WeatherCard
