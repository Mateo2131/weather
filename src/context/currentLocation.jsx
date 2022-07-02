import React, { useState } from 'react'

const Context = React.createContext()

export function CurrentLocation({ children }) {
  const [location, setLocation] = useState('London')
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
        location: [location, setLocation],
        current: [weather, setWeather]
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context
