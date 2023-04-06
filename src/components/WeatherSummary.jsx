import React, { useEffect, useState } from 'react'

const WeatherSummary = ({ current, alerts }) => {
  const [airQualityData, setAirQualityData] = useState('')

  useEffect(() => {
    if (current?.air_quality['us-epa-index']) {
      const aQ = current?.air_quality['us-epa-index']
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
  }, [current])

  return (
    <div className='text-sm'>
      <p className='flex items-center'>
        {current?.condition.text}{' '}
        <img
          className='h-6'
          src={current?.condition.icon}
          alt={current?.condition.text}
        />
      </p>
      <p>RealFeel: {current?.feelslike_c}º</p>
      <p>Air Quality: {airQualityData}</p>
      <p>RealFeel: {current?.feelslike_c}º</p>
      {alerts?.alert.length > 0 && <p>{alerts?.alert[0].event}</p>}
    </div>
  )
}

export default WeatherSummary
