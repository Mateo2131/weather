import { Button } from '@chakra-ui/react'
import { MdDarkMode, BsFillSunFill } from 'react-icons/all'
import { useColorMode } from '@chakra-ui/color-mode'

function Index() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Button
        onClick={() => toggleColorMode()}
        variant='ghost'
        fontSize={20}
        p='0'
      >
        {colorMode === 'dark' ? <BsFillSunFill /> : <MdDarkMode />}
      </Button>
    </>
  )
}

export default Index
