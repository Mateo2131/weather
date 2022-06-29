import {
  FormContainer,
  Input,
  Header,
  Button,
  Result,
  ResultHeader,
  ResultItem,
  Text
} from './styles'
import { RiArrowGoBackFill, GoLocation } from 'react-icons/all'
import { useLocation } from 'wouter'

function Form() {
  const [location, setLocation] = useLocation()
  return (
    <>
      <Header>
        <Button onClick={() => setLocation('/')}>
          <RiArrowGoBackFill size={24} />
        </Button>
      </Header>
      <FormContainer>
        <Input placeholder='Search' />
      </FormContainer>
      <Result>
        <ResultItem>
          <ResultHeader>
            <GoLocation size={20} />
            <Text>Buenos Aires</Text>
          </ResultHeader>
          <Text>Distrito Federal - Argentina</Text>
        </ResultItem>
      </Result>
    </>
  )
}

export default Form
