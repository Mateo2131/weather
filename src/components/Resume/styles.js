import styled from 'styled-components'

export const Card = styled.section`
  display: grid;
  grid-template-rows: auto 1fr auto;
  border: 1px solid #6b7280;
  border-radius: 1.2rem;
  height: 250px;
  padding: 2rem;
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CardBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  gap: .6rem;
`

export const CardText = styled.p`
  font-size: 1.5rem;
`

export const CardTitle = styled.h3`
  font-size: ${props => props.fontSize || '2.4rem'};
  font-weight: 500;
`

export const CardIcon = styled.img``