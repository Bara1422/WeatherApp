import React from 'react'
import WeatherSummary from './WeatherSummary'
import NextDaysWeather from './NextDaysWeather'
import ButtonsActualWeather from './ButtonsActualWeather'
import CurrentWeather from './CurrentWeather'

const WeatherCard = ({ forecast, current, alerts }) => {
  return (
    <main className='flex flex-col gap-3 p-4 bg-slate-300 rounded-xl'>
      <div className='gap-3 xsm:flex justify-evenly'>
        <CurrentWeather forecast={forecast} current={current} />
        <WeatherSummary current={current} alerts={alerts} />
      </div>
      <NextDaysWeather forecast={forecast} />
      <ButtonsActualWeather current={current} />
    </main>
  )
}

export default WeatherCard
