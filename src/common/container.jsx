import { Box } from '@chakra-ui/react'

function Container({children}) {
  return (
    <Box
      p={2}
      maxW='480px'
      mx='auto'
      minH='100vh'
      borderWidth={{ base: '0', md: '6px' }}
      borderRadius={{ base: '0', md: '20px' }}
      borderColor='#1f2937'
    >
      {children}
    </Box>
  )
}

export default Container