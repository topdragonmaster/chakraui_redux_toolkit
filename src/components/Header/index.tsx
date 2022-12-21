import React from 'react'
import {
  Flex,
  Text,
  IconButton,
  useBreakpointValue,
  Container,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

type Props = {
  onOpen: () => void
}

const Header: React.FC<Props> = ({ onOpen }) => {
  return (
    <Flex as="nav" bg="black" color="white" py={{ base: 2 }} px={{ base: 4 }}>
      <Container maxW="1440px">
        <Flex flex={{ base: 1 }} ml={{ base: -2 }} alignItems="center">
          <IconButton
            onClick={onOpen}
            icon={<HamburgerIcon w={10} h={10} />}
            aria-label="Toggle Navigation"
            mr="30px"
          />
          <Flex justify={{ base: 'center', md: 'start' }} flexDir="column">
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              color="brand"
              fontSize="40px"
              lineHeight="1"
            >
              MFLIX
            </Text>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              color="gray"
              fontSize="16px"
            >
              by BILL FOWLER
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  )
}

export default Header
