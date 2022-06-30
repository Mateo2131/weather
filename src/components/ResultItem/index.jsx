import { ResultLink, ResultHeader, Text } from './styles'
import { GoLocation } from 'react-icons/go'
import LocationContext from '@/context/currentLocation'
import { useContext } from 'react'

function ResultItem({ data }) {
  const { name, country, region } = data
  const { location } = useContext(LocationContext)
  const [, setCity] = location

  const handleClick = () => setCity(name)

  return (
    <ResultLink to='/' onClick={handleClick}>
      <ResultHeader>
        <GoLocation size={18} />
        <Text>{name}</Text>
      </ResultHeader>
      <Text>
        {region} - {country}
      </Text>
    </ResultLink>
  )
}

export default ResultItem
