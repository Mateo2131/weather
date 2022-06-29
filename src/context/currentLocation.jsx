import React, { useState } from 'react'

const Context = React.createContext()

export function CurrentLocationProvider({ children }) {
  const [location, setLocation] = useState({})

  return (
    <Context.Provider value={{ location, setLocation }}>
      {children}
    </Context.Provider>
  )
}

export default Context