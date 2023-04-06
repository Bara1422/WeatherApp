import './App.css'
import '../data.json'
import React from 'react'
import Header from './components/Header'
import WeatherCard from './components/WeatherCard'
import HourlyWeather from './components/HourlyWeather'
import Nav from './components/Nav'
import { useWeather } from './hooks/useWeather'

function App() {
  const { data, loading } = useWeather()

  return (
    <>
      {loading && <p className='animate-spin' />}
      <div className='container flex flex-col gap-4 p-4 mx-auto bg-slate-50'>
        <Nav current={data?.current} />

        <Header location={data?.location} />

        <WeatherCard
          forecast={data?.forecast}
          current={data?.current}
          alerts={data?.alerts}
        />

        <HourlyWeather forecast={data?.forecast} location={data?.location} />
      </div>
    </>
  )
}

export default App
