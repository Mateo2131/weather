import { Link } from 'wouter'
import useCurrentLocation from '@/hooks/useCurrentLocation'
import { Grid, Flex, Text, Icon, useColorModeValue } from '@chakra-ui/react'
import { GoLocation } from 'react-icons/go'

function Index({ data }) {
  const border = useColorModeValue('border.light', 'border.dark')
  const { name, country, region } = data
  const { setCity } = useCurrentLocation()
  const handleClick = () => setCity(name)

  return (
    <Grid
      gap='12px'
      p='10px'
      borderRadius='6px'
      borderWidth='1px'
      borderColor={border}
      mb='10px'
    >
      <Link to='/' onClick={handleClick}>
        <Flex alignItems='center' gap='6px'>
          <Icon as={GoLocation} size='24px' />
          <Text>{name}</Text>
        </Flex>
        <Text fontSize='16px'>
          {region} - {country}
        </Text>
      </Link>
    </Grid>
  )
}

export default Index
