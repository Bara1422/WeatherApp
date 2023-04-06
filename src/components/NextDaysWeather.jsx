import React from 'react'

const NextDaysWeather = ({ forecast }) => {
  const forecastNextDays = forecast?.forecastday
    .map((data) => ({
      day: new Date(data.date).toLocaleDateString('en-US', {
        weekday: 'short'
      }),
      maxtemp_c: Math.round(data.day.maxtemp_c),
      mintemp_c: Math.round(data.day.mintemp_c),
      icon: data.day.condition.icon
    }))
    .slice(2)

  return (
    <div className='flex pt-2 text-center border-t border-gray-400 justify-evenly'>
      {forecastNextDays?.map((day) => (
        <React.Fragment key={day.day}>
          <div className='flex flex-col items-center gap-2'>
            <p className='block mt-2 font-bold '>{day.day.toUpperCase()}</p>
            <img src={day.icon} alt={day.text} />
            <p>{day.maxtemp_c}</p>
            <p className='text-gray-500'>{day.mintemp_c}</p>
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}

export default NextDaysWeather
