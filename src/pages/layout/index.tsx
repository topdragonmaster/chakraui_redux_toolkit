import React, { useState } from 'react'
import {
  Box,
  Container,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Checkbox,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

import { useSelector, useDispatch } from 'react-redux'
import { AppState, AppDispatch } from '../../store/store'
import moviesSlice from '../../store/movies'

import { genreList } from '../../const/genreList'
import { initial } from 'lodash'

type Props = {
  children?: JSX.Element | JSX.Element[] | string | string[]
}

const Layout: React.FC<Props> = ({ children }) => {
  const dispatch: AppDispatch = useDispatch()
  const filters = useSelector((state: AppState) => state.movies.filters)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [curFilters, setCurFilters] = useState<string[]>(filters)

  const handleCheckChange = (checked: boolean, genre: string) => {
    if (checked) {
      setCurFilters([...curFilters, genre])
    } else {
      setCurFilters(curFilters.filter((item) => item != genre))
    }
  }

  const handleFilter = () => {
    dispatch(moviesSlice.actions.filterMovies(curFilters))
    onClose()
  }

  return (
    <Box
      background="linear-gradient(to bottom, #0f0c29, #302b63, #24243e)"
      minH="100vh"
    >
      <Flex
        as="nav"
        bg={useColorModeValue('black', 'gray.800')}
        color={useColorModeValue('white', 'gray.600')}
        py={{ base: 2 }}
        px={{ base: 4 }}
      >
        <Container maxW="1440px">
          <Flex flex={{ base: 1 }} ml={{ base: -2 }} alignItems="center">
            <IconButton
              onClick={onOpen}
              _hover={{ background: 'initial' }}
              icon={<HamburgerIcon w={10} h={10} />}
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
              mr="30px"
            />
            <Flex justify={{ base: 'center', md: 'start' }} flexDir="column">
              <Text
                textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                fontFamily={'heading'}
                color={useColorModeValue('#c0421c', 'white')}
                fontSize="40px"
                lineHeight="1"
              >
                MFLIX
              </Text>
              <Text
                textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                fontFamily={'heading'}
                color={useColorModeValue('#9b9b9b', 'white')}
                fontSize="16px"
              >
                by BILL FOWLER
              </Text>
            </Flex>
          </Flex>
        </Container>
      </Flex>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent background="black" fontFamily="cursive" color="white">
          <DrawerHeader fontSize="30px">Genre Lists</DrawerHeader>
          <DrawerBody>
            <Stack mt={1} spacing={1}>
              {genreList.map((genre) => (
                <Checkbox
                  key={genre}
                  isChecked={curFilters.indexOf(genre) > -1}
                  spacing="10px"
                  size="lg"
                  colorScheme="#c0421c"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    handleCheckChange(event.target.checked, genre)
                  }
                >
                  {genre}
                </Checkbox>
              ))}
            </Stack>
          </DrawerBody>
          <DrawerFooter>
            <Button
              variant="outline"
              mr={3}
              onClick={onClose}
              _hover={{ background: '#c0421c' }}
            >
              Cancel
            </Button>
            <Button
              background="#c0421c"
              colorScheme="blue"
              border="1px solid #c0421c"
              onClick={handleFilter}
              _hover={{ background: 'black' }}
            >
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      {children}
    </Box>
  )
}

export default Layout
