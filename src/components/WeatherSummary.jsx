import React, { useEffect, useState } from 'react'

const WeatherSummary = ({ data }) => {
  const [airQualityData, setAirQualityData] = useState('')

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

  return (
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
      {data?.alerts.alert.length > 0 && <p>{data?.alerts.alert[0].event}</p>}
    </div>
  )
}

export default WeatherSummary
