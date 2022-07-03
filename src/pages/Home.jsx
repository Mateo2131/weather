import Menu from '@/components/Menu'
import Resume from '@/components/Resume'
import Tabs from '@/components/Tabs'
import Loader from '@/components/Loader'
import Details from '@/components/Details'
import Footer from '@/components/Footer'
import Container from '@/common/container'
import useCurrentLocation from '@/hooks/useCurrentLocation'
import getTodayDate from '@/services/getTodayDate'

function Home() {
  const { weather, loading } = useCurrentLocation()
  const { info, TodayForecast } = weather
  const date = getTodayDate()

  return (
    <Container>
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
            date={date}
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
    </Container>
  )
}

export default Home
