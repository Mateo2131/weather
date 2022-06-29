import styled from 'styled-components'

export const FormContainer = styled.form`
  margin-bottom: 2rem;
`

export const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 1rem;
  border-radius: .6rem;
  font-size: 1.5rem;
  color: #ffffff;
  background-color: #0f172a;
  border: 1px solid #6b7280;
  outline: none;
`

export const Header = styled.header`
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

export const Result = styled.div`
  display: grid;
  gap: 1rem;
`

export const ResultItem = styled.div`
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