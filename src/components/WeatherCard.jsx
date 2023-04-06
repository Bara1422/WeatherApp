import React from 'react'
import WeatherSummary from './WeatherSummary'
import NextDaysWeather from './NextDaysWeather'
import ButtonsActualWeather from './ButtonsActualWeather'
import CurrentWeather from './CurrentWeather'

const WeatherCard = ({ forecast, current, alerts }) => {
  return (
    <main className='flex flex-col gap-3 p-4 bg-slate-300 rounded-xl'>
      <CurrentWeather forecast={forecast} current={current} />
      <WeatherSummary current={current} alerts={alerts} />
      <NextDaysWeather forecast={forecast} />
      <ButtonsActualWeather current={current} />
    </main>
  )
}

export default WeatherCard
