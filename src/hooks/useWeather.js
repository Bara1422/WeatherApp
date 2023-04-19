import { useEffect, useState } from 'react'

export const useWeather = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchData = async (label = 'Bahia Blanca') => {
    setLoading(true)
    const dataFetch = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${
        import.meta.env.VITE_API_KEY
      }&q=${label}&days=7&aqi=yes&alerts=yes`
    )
    const dataparse = await dataFetch.json()
    console.log(dataparse)
    setData(dataparse)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { data, loading, fetchData }
}
