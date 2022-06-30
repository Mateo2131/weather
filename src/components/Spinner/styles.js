import styled from 'styled-components'

export const SpinnerContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`

export const Loader = styled.div`
  width:12px;
  height:12px;
  background: #3f3f46;
  border-radius: 50%;
  box-shadow: 20px 0 #3f3f4622,-20px 0 #3f3f46;
  animation:d5 1s infinite linear alternate;

  @keyframes d5 {
    0% {box-shadow: 20px 0 #3f3f46,-20px 0 #3f3f4622;background: #3f3f46}
    33%{box-shadow: 20px 0 #3f3f46,-20px 0 #3f3f4622;background: #3f3f4622}
    66%{box-shadow: 20px 0 #3f3f4622,-20px 0 #3f3f46;background: #3f3f4622}
  }
`

export const Text = styled.p`
  font-size: 1.8rem;
  letter-spacing: .2rem;
`
