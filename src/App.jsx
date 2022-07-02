import { Route } from 'wouter'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@/themes'

import Home from '@/pages/Home'
import Search from '@/pages/Search'
import { CurrentLocation } from './context/currentLocation'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CurrentLocation>
        <Route path='/' component={Home} />
        <Route path='/search' component={Search} />
      </CurrentLocation>
    </ChakraProvider>
  )
}

export default App
