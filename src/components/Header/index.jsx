import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { Link } from 'wouter'
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

function Header() {
  const [active, setActive] = useState(false)
  const handleActive = () => setActive(!active)

  return (
    <Container>
      {!active ? (
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
          <Link to='/search'>
            <NavItem>
              <BiSearch size={24} />
            </NavItem>
          </Link>
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
