import React, { useCallback, useEffect, useRef, useState } from 'react'
import Spinner from '../UI/Spinner'

const Header = ({ location, handleWeather }) => {
  const [value, setValue] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const prevSuggestionsRef = useRef()

  useEffect(() => {
    prevSuggestionsRef.current = suggestions
  }, [suggestions])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataFetch = await fetch(
          `https://api.weatherapi.com/v1/search.json?key=${
            import.meta.env.VITE_API_KEY
          }&q=${value}`
        )
        const newSuggestions = await dataFetch.json()

        // Comparar las nuevas sugerencias con las anteriores
        if (
          JSON.stringify(prevSuggestionsRef.current) !==
          JSON.stringify(newSuggestions)
        ) {
          setSuggestions(newSuggestions)
        }
      } catch (err) {
        console.log(err)
      }
    }

    if (value) {
      fetchData()
    } else {
      setSuggestions([])
    }
  }, [value])

  const handleInputChange = useCallback((value) => {
    setValue(value)
  }, [])

  const handleSubmit = (e) => {
    setIsLoading(true)
    e.preventDefault()
    handleWeather(value)
    setValue('')
    setIsLoading(false)
  }

  const handleSuggestionClick = (suggestion) => {
    setIsLoading(true)
    setValue(suggestion.name)
    setSuggestions([])
    handleWeather(value)
    setValue('')
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && <Spinner key='spinner' />}
      <header className='flex flex-col items-center justify-between pt-3 px4 md:flex-row md:items-end'>
        <div className='flex flex-col pl-1 text-center'>
          <h1 className='text-4xl font-bold truncate'>{location?.name}</h1>
          <p className='block text-2xl italic font-semibold truncate lg:inline'>
            {location?.region}, {location?.country}
          </p>
        </div>
        <form className='relative w-full text-center' onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='City, Region, Country'
            value={value}
            onChange={(e) => handleInputChange(e.target.value)}
            className='h-10 p-2 text-xl border border-gray-500 rounded-md w-[77%] sm:w-4/5 md:w-3/5'
          />
          {suggestions.length > 0 && (
            <ul className='absolute left-0 z-10 w-full py-2 text-lg bg-white border border-gray-200 rounded-md top-full'>
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion.id}
                  className='px-4 py-2 cursor-pointer hover:bg-gray-100'
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion.name},{suggestion.region}, {suggestion.country}
                </li>
              ))}
            </ul>
          )}
        </form>
      </header>
    </>
  )
}

export default Header
