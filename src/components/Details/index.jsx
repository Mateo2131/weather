import Card from '@/common/card'
import { Grid, useColorModeValue } from '@chakra-ui/react'
import { MdOutlineVisibility, BsSun, BiDroplet, TbWind } from 'react-icons/all'

function Index({ visibility, wind, humidity, uv }) {
  const border = useColorModeValue('border.light', 'border.dark')
  return (
    <Grid
      gridTemplateColumns='1fr 1fr'
      mt='20px'
      borderWidth='1px'
      borderColor={border}
      rounded='xl'
      gap='20px'
      py='20px'
    >
      <Card
        icon={MdOutlineVisibility}
        value={visibility}
        text='Visibility'
        metric='Km'
      />
      <Card icon={BsSun} value={uv} text='UV' metric='' />
      <Card icon={BiDroplet} value={humidity} text='Humidity' metric='%' />
      <Card icon={TbWind} value={wind} text='Wind' metric='Mph' />
    </Grid>
  )
}

export default Index
