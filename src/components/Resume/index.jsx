import {
  Grid,
  useColorModeValue,
  Flex,
  Text,
  Heading,
  Image
} from '@chakra-ui/react'
import { GoLocation } from 'react-icons/go'

function Index({ name, country, temp, icon }) {
  const border = useColorModeValue('border.light', 'border.dark')
  return (
    <Grid
      p={5}
      borderColor={border}
      borderWidth='1px'
      rounded='xl'
      height='250px'
      my={5}
      gridTemplateRows='auto 1fr auto'
    >
      <Flex justifyContent='space-between' alignItems='center'>
        <Heading as='h3' fontSize='24px' fontWeight='500'>
          Today
        </Heading>
        <Text fontSize='15px'>Sat, 3 aug</Text>
      </Flex>
      <Flex justifyContent='space-between' alignItems='center'>
        <Text fontSize='70px'>{temp}°</Text>
        <Image src={icon} />
      </Flex>
      <Flex alignItems='center'>
        <GoLocation />
        <Text fontSize='15px' pl={2}>
          {name}, {country}
        </Text>
      </Flex>
    </Grid>
  )
}

export default Index
