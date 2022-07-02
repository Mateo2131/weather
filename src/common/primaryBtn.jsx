import { IconButton, useColorModeValue } from '@chakra-ui/react'

function Index({ icon, label, onClick }) {
  const border = useColorModeValue('border.light', 'border.dark')
  return (
    <IconButton
      variant='outline'
      borderColor={border}
      aria-label={label}
      icon={icon}
      fontSize='24px'
      onClick={onClick}
    ></IconButton>
  )
}

export default Index
