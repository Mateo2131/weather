import { Loader, SpinnerContainer, Text } from './styles'

function Spinner() {
  return (
    <SpinnerContainer>
      <Loader />
      <Text>Loading...</Text>
    </SpinnerContainer>
  )
}

export default Spinner