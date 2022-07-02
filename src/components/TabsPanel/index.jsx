import { Box, Image, Text, Heading, useColorModeValue } from '@chakra-ui/react'

function Index({ time, temp, icon }) {
  const border = useColorModeValue('border.light', 'border.dark')
  return (
    <>
      <Box
        w='100px'
        h='100px'
        borderWidth='1px'
        borderColor={border}
        borderRadius='16px'
        p='10px'
        mb='10px'
      >
        <Image src={icon} w='32px' h='32px' />
        <Text fontSize='12px'>{time}</Text>
        <Heading as='h4' fontSize='24px'>
          {temp}°
        </Heading>
      </Box>
    </>
  )
}

export default Index
