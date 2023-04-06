import React from 'react'

const HourlyWeather = ({ data }) => {
  const hourlyForecast = data?.forecast.forecastday[0].hour.map((data) => ({
    time: new Date(data.time).toLocaleTimeString('en-US', {
      hour: '2-digit'
    }),
    icon: data.condition.icon,
    alt: data.condition.text,
    temp: data.temp_c,
    humidity: data.humidity,
    wind: data.wind_kph
  }))

  return (
    <section className='flex flex-col gap-3 p-4 overflow-scroll overflow-x-hidden bg-slate-300 rounded-xl max-h-96 sm:px-10'>
      <div>
        <h2 className='text-xl'>
          {new Date(data?.location.localtime).toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric'
          })}
        </h2>
      </div>
      <div className='flex flex-col justify-start space-y-2 divide-y divide-gray-400'>
        {hourlyForecast?.map((hour) => (
          <div key={hour.time} className='flex items-center justify-between'>
            <span>{hour.time}</span>
            <img src={hour.icon} alt={hour.text} className='w-11' />
            <span>{hour.temp}º</span>
            <span>{hour.humidity}%</span>
            <span>{Math.round(hour.wind)}km/h</span>
          </div>
        ))}
      </div>
      <div />
    </section>
  )
}

export default HourlyWeather