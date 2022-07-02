import { Flex, Link } from '@chakra-ui/react'

function Index() {
  return (
    <Flex justifyContent='center' my='10px' as='footer'>
      <Link
        href='https://github.com/Mateo2131/weather'
        isExternal
        fontSize='15px'
      >
        ❤️ Built by Mateo2131
      </Link>
    </Flex>
  )
}

export default Index
