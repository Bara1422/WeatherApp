import './App.css'
import '../data.json'
import { useEffect, useState } from 'react'
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

  console.log(airQualityData)

  const forecastDay = data?.forecast.forecastday[0]
  console.log(data)
  console.log(forecastDay)
  return (
    <>
      {loading && <p> Cargando</p>}
      <main className='container flex flex-col gap-4 p-4 mx-auto bg-slate-50'>
        {/* Menu Nav */}
        <nav className='container flex justify-end gap-2'>
          {data?.current.condition.text === 'Sunny' && <Cloud />}

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
        </section>
      </main>
    </>
  )
}

export default App
