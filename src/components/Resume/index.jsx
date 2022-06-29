import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardText,
  CardIcon
} from './styles'
import { GoLocation } from 'react-icons/go'

function Resume() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Today</CardTitle>
        <CardText>Sat, 3 aug</CardText>
      </CardHeader>
      <CardBody>
        <CardTitle fontSize="8rem">24°</CardTitle>
        <CardIcon src='/icons/sunny.svg'></CardIcon>
      </CardBody>
      <CardFooter>
        <GoLocation size={17}/>
        <CardText>Argentina, Buenos aires</CardText>
      </CardFooter>
    </Card>
  )
}

export default Resume