import { Route } from 'wouter'
import Home from './pages/Home'
import { CurrentLocationProvider } from './context/currentLocation'
import Search from './pages/Search'

function App() {
  return (
    <div className='App'>
      <CurrentLocationProvider>
        <Route path='/' component={Home} />
        <Route path='/search' component={Search} />
      </CurrentLocationProvider>
    </div>
  )
}

export default App
