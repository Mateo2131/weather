import { RiArrowGoBackFill } from 'react-icons/ri'
import { Link } from 'wouter'
import { Button, Header } from './styles'

function Menu() {
  return (
    <Header>
      <Link to='/'>
        <Button>
          <RiArrowGoBackFill size={24} />
        </Button>
      </Link>
    </Header>
  )
}

export default Menu
