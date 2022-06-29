import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import {
  BiHeart,
  GoLocation,
  BsSun,
  BsMoon,
  BiSearch,
  AiOutlineClose
} from 'react-icons/all'
import { Container, Button, Nav, NavItem } from './styles'
import { useState } from 'react'
import { useLocation } from 'wouter'

function Header() {
  const [active, setActive] = useState(false)
  const [location, setLocation] = useLocation()
  const handleActive = () => setActive(!active)

  return (
    <Container>
      {active ? (
        <Button onClick={handleActive}>
          <HiOutlineMenuAlt1 size={24} />
        </Button>
      ) : (
        <Nav>
          <Button onClick={handleActive}>
            <AiOutlineClose size={24} />
          </Button>
          <NavItem>
            <GoLocation size={24} />
          </NavItem>
          <NavItem>
            <BiSearch size={24} onClick={() => setLocation('/search')}/>
          </NavItem>
          <NavItem>
            <BiHeart size={24} />
          </NavItem>
          <NavItem>
            <BsSun size={24} />
          </NavItem>
        </Nav>
      )}
    </Container>
  )
}

export default Header
