import Menu from '@/components/Menu'
import Resume from '@/components/Resume'
import Tabs from '@/components/Tabs'
import Loader from '@/components/Loader'
import Details from '@/components/Details'
import Footer from '@/components/Footer'
import { Box } from '@chakra-ui/react'
import useCurrentLocation from '@/hooks/useCurrentLocation'

function Home() {
  const { weather, loading } = useCurrentLocation()
  const { info, TodayForecast } = weather

  return (
    <Box p={2} maxW='480px' mx='auto' minH='100vh'>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Menu />
          <Resume
            name={info.name}
            country={info.country}
            temp={info.temp}
            icon={info.icon}
          />
          <Tabs TodayForecast={TodayForecast} />
          <Details
            uv={info.uv}
            humidity={info.humidity}
            visibility={info.vis_km}
            wind={info.wind}
          />
        </>
      )}
      <Footer />
    </Box>
  )
}

export default Home
