import { Flex, Text, Icon } from '@chakra-ui/react'

function Card({ icon, text, value, metric }) {
  return (
    <Flex direction='column' w='100%' alignItems='center' gap='4px'>
      <Icon as={icon} fontSize='24' />
      <Text fontWeight='bold'>
        {value} {metric}
      </Text>
      <Text color='gray.400'>{text}</Text>
    </Flex>
  )
}

export default Card
