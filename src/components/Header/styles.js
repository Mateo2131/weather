import styled from 'styled-components'

export const Container = styled.header`
  margin-bottom: 2rem;
`

export const Button = styled.button`
  display: grid;
  place-content: center;
  background-color: transparent;
  border-radius: .6rem;
  border: 1px solid #6b7280;
  padding: .4rem;
  cursor: pointer;
`

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`

export const NavItem = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`