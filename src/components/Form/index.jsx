import PrimaryBtn from '@/common/primaryBtn'
import { useState, useEffect } from 'react'
import { API_URL, API_KEY } from '@/services/config'
import { RiArrowGoBackFill } from 'react-icons/ri'
import { Link } from 'wouter'
import { Input, Box } from '@chakra-ui/react'
import SearchItem from '@/components/SearchItem'

function Index() {
  const [keyword, setKeyword] = useState('')
  const [option, setOption] = useState([])

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
          setOption(data)
        })
    }
  }, [keyword])

  const handleChange = (e) => setKeyword(e.target.value)

  return (
    <>
      <Link to='/'>
        <PrimaryBtn icon={<RiArrowGoBackFill />} label='Back' />
      </Link>
      <Input
        placeholder='Type here (min. 4 letters)'
        onChange={handleChange}
        mt='10px'
        size='lg'
      />
      <Box mt='10px'>
        {option.map((item) => {
          return <SearchItem data={item} key={item.id} />
        })}
      </Box>
    </>
  )
}

export default Index
