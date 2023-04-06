import './App.css'
import '../data.json'
import React, { useEffect, useState } from 'react'
import { Cloud } from './Cloud'

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [airQualityData, setAirQualityData] = useState('')

  const apiFetch = async () => {
    setLoading(true)
    const dataFetch = await fetch('../data.json')
    const dataparse = await dataFetch.json()
    setData(dataparse)
    setLoading(false)
  }

  useEffect(() => {
    apiFetch()
  }, [])

  useEffect(() => {
    if (data?.current.air_quality['us-epa-index']) {
      const aQ = data.current.air_quality['us-epa-index']
      if (aQ === 1) {
        setAirQualityData('Good')
      } else if (aQ === 2) {
        setAirQualityData('Moderate')
      } else if (aQ === 3) {
        setAirQualityData('Unhealthy for sensitive group')
      } else if (aQ === 4) {
        setAirQualityData('Unhealthy')
      } else if (aQ === 5) {
        setAirQualityData('Very Unhealthy')
      } else if (aQ === 6) {
        setAirQualityData('Hazardous')
      }
    }
  }, [data])

  const forecastNextDays = data?.forecast.forecastday
    .map((data) => ({
      day: new Date(data.date).toLocaleDateString('en-US', {
        weekday: 'short'
      }),
      maxtemp_c: Math.round(data.day.maxtemp_c),
      mintemp_c: Math.round(data.day.mintemp_c),
      icon: data.day.condition.icon
    }))
    .slice(2)

  const hourlyForecast = data?.forecast.forecastday[0].hour.map((data) => ({
    time: new Date(data.time).toLocaleTimeString('en-US', { hour: '2-digit' }),
    icon: data.condition.icon,
    alt: data.condition.text,
    temp: data.temp_c,
    humidity: data.humidity,
    wind: data.wind_kph
  }))

  console.log(hourlyForecast)
  console.log(airQualityData)
  console.log(forecastNextDays)
  console.log(
    new Date(data?.location.localtime).toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    })
  )

  const forecastDay = data?.forecast.forecastday[0]
  console.log(data)

  console.log(forecastDay)
  return (
    <>
      {loading && <p> Cargando</p>}
      <main className='container flex flex-col gap-4 p-4 mx-auto bg-slate-50'>
        {/* Menu Nav */}
        <nav className='container flex justify-end gap-2'>
          {data?.current.condition.text === 'Clear' && <Cloud />}

          <span>Menu</span>
          <span>Reload</span>
        </nav>
        {/* Header */}
        <header className='flex flex-col justify-end h-40 px4 '>
          <h1 className='text-4xl font-bold truncate'>{data?.location.name}</h1>
          <p className='block text-2xl italic font-semibold truncate lg:inline'>
            {data?.location.region}, {data?.location.country}
          </p>
        </header>

        {/* Weather Card */}
        <section className='flex flex-col gap-3 p-4 bg-slate-300 rounded-xl'>
          <div className='flex justify-start space-x-2 divide-x divide-black'>
            <p className='text-5xl font-bold '>{data?.current.temp_c}º</p>
            <div className='flex flex-col items-start justify-between pl-2 text-gray-900'>
              <p>{forecastDay?.day.maxtemp_c}º</p>
              <p className='text-gray-500'>{forecastDay?.day.mintemp_c}º</p>
            </div>
          </div>

          <div className='text-sm'>
            <p className='flex items-center'>
              {data?.current.condition.text}{' '}
              <img
                className='h-6'
                src={data?.current.condition.icon}
                alt={data?.current.condition.text}
              />
            </p>
            <p>RealFeel: {data?.current.feelslike_c}º</p>
            <p>Air Quality: {airQualityData}</p>
            <p>RealFeel: {data?.current.feelslike_c}º</p>
            {data?.alerts.alert.length > 0 && (
              <p>{data?.alerts.alert[0].event}</p>
            )}
          </div>

          <div className='flex pt-2 text-center border-t border-gray-400 justify-evenly'>
            {forecastNextDays?.map((day) => (
              <React.Fragment key={day.day}>
                <div className='flex flex-col items-center gap-2'>
                  <p className='block mt-2 font-bold '>
                    {day.day.toUpperCase()}
                  </p>
                  <img src={day.icon} alt={day.text} />
                  <p>{day.maxtemp_c}</p>
                  <p className='text-gray-500'>{day.mintemp_c}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
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
        </section>
        {/* Today Weather Hourly */}
        <section className='flex flex-col gap-3 p-4 overflow-scroll bg-slate-300 rounded-xl max-h-96'>
          <div>
            <h2 className='text-xl'>
              {new Date(data?.location.localtime).toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric'
              })}
            </h2>
          </div>
          {hourlyForecast?.map((hour) => (
            <div key={hour} className='flex items-center justify-between'>
              <span>{hour.time}</span>
              <img src={hour.icon} alt={hour.text} className='w-11' />
              <span>{hour.temp}º</span>
              <span>{hour.humidity}%</span>
              <span>{Math.round(hour.wind)}km/h</span>
            </div>
          ))}
          <div />
        </section>
      </main>
    </>
  )
}

export default App
