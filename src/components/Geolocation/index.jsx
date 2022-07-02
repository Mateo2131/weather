import { GoLocation } from 'react-icons/go'
import { useEffect, useState } from 'react'
import { useToast, IconButton } from '@chakra-ui/react'
import useCurrentLocation from '@/hooks/useCurrentLocation'

function Index() {
  const { setCity } = useCurrentLocation()
  const toast = useToast()
  const [pos, setPos] = useState('')

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(success, error)
  }

  const success = (position) => {
    setPos(`${position.coords.latitude},${position.coords.longitude}`)
  }

  const error = () => {
    toast({
      variant: 'solid',
      icon: '😦',
      description: 'Could not get your location'
    })
  }

  useEffect(() => {
    if (pos) {
      setCity(pos)
    }
  }, [pos])

  return (
    <>
      <IconButton
        icon={<GoLocation />}
        onClick={getLocation}
        variant='ghost'
        fontSize={24}
        aria-label='Get your location'
      />
    </>
  )
}

export default Index
