import { useBoolean, Flex, IconButton } from '@chakra-ui/react'
import ToggleBtn from '@/components/ToggleColor'
import PrimaryBtn from '@/common/primaryBtn'
import Geolocation from '@/components/Geolocation'
import { RiMenu2Line, AiOutlineClose, BiSearch } from 'react-icons/all'
import { Link } from 'wouter'

function Index() {
  const [flag, setFlag] = useBoolean()

  return (
    <>
      {!flag ? (
        <PrimaryBtn
          icon={<RiMenu2Line />}
          label={'menu'}
          onClick={setFlag.toggle}
        />
      ) : (
        <Flex justifyContent='center' alignItems='center' gap='10px'>
          <PrimaryBtn
            icon={<AiOutlineClose />}
            label={'close'}
            onClick={setFlag.toggle}
          />
          <Geolocation />
          <Link to='/search'>
            <IconButton
              icon={<BiSearch />}
              label='search'
              variant='ghost'
              fontSize='24px'
            ></IconButton>
          </Link>
          <ToggleBtn />
        </Flex>
      )}
    </>
  )
}

export default Index
