import { useEffect, useState } from 'react'

export const useWeather = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    const dataFetch = await fetch('../data.json')
    const dataparse = await dataFetch.json()
    setData(dataparse)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { data, loading }
}
