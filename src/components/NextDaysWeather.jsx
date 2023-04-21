import React from 'react'
import { format } from 'date-fns'
import { es, enUS } from 'date-fns/locale'

function getLocale() {
  const [languageCode] = navigator.language.split('-')
  return languageCode
}

const NextDaysWeather = ({ forecast }) => {
  const forecastNextDays = forecast?.forecastday.map((data) => {
    console.log(data)
    const date = new Date(data.date)
    date.setHours(date.getHours() + 3)
    return {
      day: format(date, 'EEE', {
        locale: getLocale() === 'es' ? es : enUS,
        timeZone: 'America/Argentina/Buenos_Aires'
      }),
      maxtemp_c: Math.round(data.day.maxtemp_c),
      mintemp_c: Math.round(data.day.mintemp_c),
      icon: data.day.condition.icon
    }
  })

  console.log(new Date(forecast?.forecastday[0].date))
  /*  console.log(
    format(new Date(forecast?.forecastday[1]?.date), "'Today is a' eeee")
  ) */

  console.log(forecastNextDays)
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
