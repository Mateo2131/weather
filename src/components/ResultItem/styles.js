import styled from 'styled-components'
import { Link } from 'wouter'

export const ResultLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  display: grid;
  gap: 1.2rem;
  border: 1px solid #6b7280;
  padding: 1rem;
  border-radius: .6rem;
`

export const ResultHeader = styled.header`
  display: flex;
  gap: .6rem;
  align-items: center;
`

export const Text = styled.p`
  font-size: 1.6rem;
`