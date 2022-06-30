import { useEffect, useContext, useState } from 'react'
import Context from '@/context/currentLocation'
import getWeather from '@/services/getWeather'

function useLocation() {
  const { location, current } = useContext(Context)
  const [loading, setLoading] = useState(false)
  const [city, setCity] = location
  const [weather, setWeather] = current

  useEffect(() => {
    setLoading(true)
    getWeather(city)
      .then((res) => {
        setWeather(res)
        setLoading(false)
      })
  }, [city])

  return { weather, loading }
}

export default useLocation
