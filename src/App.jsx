import '../data.json'
import React from 'react'
import Header from './components/Header'
import WeatherCard from './components/WeatherCard'
import HourlyWeather from './components/HourlyWeather'

import { useWeather } from './hooks/useWeather'
import GitHub from './assets/GitHub'
import LinkedIn from './assets/LinkedIn'
import Spinner from './UI/Spinner'

function App() {
  const { data, loading, fetchData } = useWeather()

  const handleWeather = (label) => {
    fetchData(label)
  }

  const conditionName = data?.current?.condition?.text
    .toLowerCase()
    .replace(/ /g, '')

  const condition = conditionName?.includes('rain')
    ? 'rain'
    : `${conditionName}`

  const iconStyle = {
    backgroundImage: `url(/${condition}.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }

  return (
    <>
      <div
        className='bg-transparent opacity-[0.85] font-oswald'
        style={iconStyle}
      >
        <div
          className='container xsm:max-w-[425px] md:max-w-[640px] lg:max-w-[768px] sm flex flex-col max-w-screen-md gap-4 p-4 mx-auto bg-slate-50 opacity-95
        '
        >
          <Header location={data?.location} handleWeather={handleWeather} />
          {loading && <Spinner />}

          <WeatherCard
            forecast={data?.forecast}
            current={data?.current}
            alerts={data?.alerts}
            localtime={data?.location?.localtime}
          />

          <HourlyWeather forecast={data?.forecast} location={data?.location} />
          <footer className='flex items-end justify-center w-full gap-8 p-2 text-white'>
            <div className='flex justify-center w-full gap-8'>
              <a
                href='https://www.linkedin.com/in/juan-baranovsky/'
                target='_blank'
                rel='noreferrer'
              >
                <LinkedIn />
              </a>
              <a
                href='https://github.com/Bara1422'
                target='_blank'
                rel='noreferrer'
              >
                <GitHub />
              </a>
            </div>
            <p className='w-full text-black text-end'>
              Powered by{' '}
              <a
                href='https://www.weatherapi.com/'
                className='text-blue-500'
                title='Free Weather API'
              >
                WeatherAPI.com
              </a>
            </p>
          </footer>
        </div>
      </div>
    </>
  )
}

export default App
