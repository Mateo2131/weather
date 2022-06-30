import {
  ForecastContainer,
  Tabs,
  Tab,
  Title,
  Text,
  ForecastCard,
  ForestCastContent,
  Icon
} from './styles'

function Forescast({ TodayForecast }) {
  return (
    <ForecastContainer>
      <Tabs>
        <Tab>
          <Title>Today</Title>
        </Tab>
        <Tab>
          <Title>Tomorrow</Title>
        </Tab>
        <Tab>
          <Title>Next 7 days</Title>
        </Tab>
      </Tabs>
      <ForestCastContent>
        {TodayForecast.map((item, index) => {
          return (
            <ForecastCard key={index}>
              <Icon src='/icons/sunny.svg' />
              <Text>{item.time}</Text>
              <Title fontSize='2.4rem'>{item.temp}°</Title>
            </ForecastCard>
          )
        })}
      </ForestCastContent>
    </ForecastContainer>
  )
}

export default Forescast
