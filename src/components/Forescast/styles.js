import styled from 'styled-components'

export const ForecastContainer = styled.section`
  margin-block: 2rem;
`

export const Tabs = styled.div`
  display: flex;
  gap: 2rem;
`

export const Tab = styled.div``

export const Title = styled.h3`
  font-size: ${props => props.fontSize || '1.6rem'};
  font-weight: 600;
  color: #e5e7eb;
`

export const ForestCastContent = styled.div`
  margin-top: 1.6rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, 100px);
  grid-auto-flow: column;
  gap: 1rem;
  overflow-x: scroll;
`

export const ForecastCard = styled.div`
  display: grid;
  justify-content: space-between;
  border: 1px solid #6b7280;
  border-radius: 1.6rem;
  padding: 1rem;
  width: 100px;
  height: 100px;
`

export const Text = styled.p`
  font-size: 1.2rem;
`

export const Icon = styled.img`
  width: 32px;
  height: 32px;
`
