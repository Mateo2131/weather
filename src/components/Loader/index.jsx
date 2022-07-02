import { Spinner, Text, Flex } from '@chakra-ui/react'

function Index() {
  return (
    <Flex
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      h='100vh'
    >
      <Spinner />
      <Text fontSize='18px' letterSpacing='2px' mt='10px'>
        Loading...
      </Text>
    </Flex>
  )
}

export default Index
