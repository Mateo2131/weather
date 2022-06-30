import React, { useState } from 'react'

const Context = React.createContext()

export function CurrentLocationProvider({ children }) {
  const [city, setCity] = useState('Buenos Aires')
  const [weather, setWeather] = useState({
    info: {
      temp: 0,
      name: '',
      country: ''
    },
    TodayForecast: []
  })

  return (
    <Context.Provider
      value={{
        location: [city, setCity],
        current: [weather, setWeather]
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context
