import { API_URL, API_KEY } from './config'

async function getWeather(query) {
  const res = await fetch(`${API_URL}/forecast.json?key=${API_KEY}&q=${query}&days=1&aqi=no&alerts=no`)
  const data = await res.json()
  const { location, current, forecast } = data
  const hourly = forecast.forecastday[0].hour

  const TodayForecast = hourly.map(hour => {
    return {
      time: hour.time.slice(11, 16),
      temp: hour.temp_c,
    }
  })

  const info = {
    name: location.name,
    country: location.country,
    region: location.region,
    temp: current.temp_c,
    wind: current.wind_kph,
    humidity: current.humidity,
  }

  return { info, TodayForecast }
}

export default getWeather