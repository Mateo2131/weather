import { FormContainer, Input } from './styles'
import { API_KEY, API_URL } from '@/services/config'
import { useState, useEffect } from 'react'
import ResultList from '@/components/ResultList'
import ResultItem from '@/components/ResultItem'

function Form() {
  const [keyword, setKeyword] = useState('')
  const [result, setResult] = useState([])

  useEffect(() => {
    if (keyword.length >= 4) {
      fetch(`${API_URL}/search.json?key=${API_KEY}&q=${keyword}`)
        .then((res) => res.json())
        .then((res) => {
          const data = res.map((item) => {
            return {
              id: item.id,
              name: item.name,
              country: item.country,
              region: item.region
            }
          })
          setResult(data)
        })
    }
  }, [keyword])

  const handleSubmit = (e) => e.preventDefault()
  const handleChange = (e) => setKeyword(e.target.value)

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <Input placeholder='Search' onChange={handleChange} />
      </FormContainer>
      <ResultList>
        {result.map((item) => (
          <ResultItem data={item} key={item.id} />
        ))}
      </ResultList>
    </>
  )
}

export default Form
