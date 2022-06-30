import Resume from '@/components/Resume'
import Header from '@/components/Header'
import Spinner from '@/components/Spinner'
import Forescast from '@/components/Forescast'
import useLocation from '@/hooks/useLocation'

function Home() {
  const { weather, loading } = useLocation()
  const { info, TodayForecast } = weather

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Header />
          <Resume 
            name={info.name} 
            country={info.country} 
            temp={info.temp} 
          />
          <Forescast TodayForecast={TodayForecast}/>
        </>
      )}
    </>
  )
}

export default Home
