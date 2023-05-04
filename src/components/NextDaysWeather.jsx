import React from 'react'
import { format } from 'date-fns'

const NextDaysWeather = ({ forecast }) => {
  const forecastNextDays = forecast?.forecastday.map((data) => {
    const date = new Date(data.date)
    date.setHours(date.getHours() + 3)
    return {
      day: format(date, 'EEE', {
        timeZone: 'America/Argentina/Buenos_Aires'
      }),
      maxtemp_c: Math.round(data.day.maxtemp_c),
      mintemp_c: Math.round(data.day.mintemp_c),
      icon: data.day.condition.icon
    }
  })

  return (
    <div className='flex pt-2 text-center border-t border-gray-400 justify-evenly'>
      {forecastNextDays?.map((day) => (
        <React.Fragment key={day.day}>
          <div className='flex flex-col items-center gap-2'>
            <p className='block mt-2 font-bold '>{day.day.toUpperCase()}</p>
            <img src={day.icon} alt={day.text} />
            <p>{day.maxtemp_c}º</p>
            <p className='text-gray-500'>{day.mintemp_c}º</p>
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}

export default NextDaysWeather
