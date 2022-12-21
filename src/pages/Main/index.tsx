import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Carousel from 'react-multi-carousel'
import {
  Box,
  Image,
  Stack,
  VStack,
  HStack,
  StackDivider,
  Text,
  Button,
  Heading,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Container,
} from '@chakra-ui/react'

import Layout from '../layout'
import { AppState, AppDispatch } from '../../store/store'
import moviesSlice from '../../store/movies'
import { movie_mocks } from '../../const/movie_mocks'
import { IMovie } from '../../types'
import { initial } from 'lodash'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    partialVisibilityGutter: 20,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 4,
    partialVisibilityGutter: 20,
  },
  smallTablet: {
    breakpoint: { max: 768, min: 425 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 425, min: 0 },
    items: 1,
  },
}

function Main() {
  const dispatch: AppDispatch = useDispatch()
  const movies = useSelector((state: AppState) => state.movies.filteredMovies)
  const allMovies = useSelector((state: AppState) => state.movies.allMovies)

  const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null)

  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    dispatch(moviesSlice.actions.addMovies(movie_mocks))
  }, [])

  const handleViewDetail = (movie: IMovie) => {
    setSelectedMovie(movie)
    onOpen()
  }

  return (
    <Layout>
      <Box p="120px 0">
        <Container maxW="1440px">
          <HStack justifyContent="flex-end" mb="30px">
            <Text color="white">{`${movies.length} / ${allMovies.length}`}</Text>
          </HStack>
          <Carousel
            responsive={responsive}
            // autoPlay={true}
            autoPlaySpeed={3000}
            infinite={false}
            keyBoardControl={true}
            partialVisbile
          >
            {movies.map((movie) => (
              <VStack
                key={movie._id}
                spacing={4}
                align="stretch"
                position="relative"
                mx={{ base: 'auto', md: '15px' }}
                maxWidth="280px"
              >
                <Box position="relative">
                  <Image
                    height="350px"
                    width="100%"
                    src={movie.poster}
                    alt={movie.title}
                    userSelect="none"
                    pointerEvents="none"
                  />
                  <VStack
                    position="absolute"
                    top="0"
                    left="0"
                    width="100%"
                    height="100%"
                    opacity={0}
                    transition="all ease-in-out 0.3s"
                    _hover={{
                      opacity: 1,
                      background: 'rgba(0,0,0,0.5)',
                      transition: 'all ease-in-out 0.3s',
                    }}
                  >
                    {/* <Text>{movie.title}</Text> */}
                    <Button
                      colorScheme="blue"
                      onClick={() => handleViewDetail(movie)}
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%,-50%)',
                        background: 'transparent',
                      }}
                      _hover={{
                        background: 'initial',
                        color: '#c0421c',
                        transform: 'translate(-50%,-50%) scale(1.5)',
                      }}
                      _focus={{
                        background: 'initial',
                      }}
                    >
                      More
                    </Button>
                  </VStack>
                </Box>
                <VStack alignItems="flex-start">
                  <Text fontSize="sm" color="white">
                    {movie.genres.join(' | ')}
                  </Text>
                  <Text fontSize="sm" color="#c0421c">
                    {movie.languages.join(' | ')}
                  </Text>
                  <Text
                    fontWeight={600}
                    color={'#e1b35b'}
                    fontSize="md"
                  >{`${movie.imdb.rating} / 10`}</Text>
                </VStack>
              </VStack>
            ))}
          </Carousel>
        </Container>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <ModalContent
          overflow="hidden"
          _before={{
            content: '""',
            position: 'absolute',
            width: '1200px',
            height: '1200px',
            borderTopLeftRadius: '40%',
            borderTopRightRadius: '45%',
            borderBottomLeftRadius: '35%',
            borderBottomRightRadius: '40%',
            left: '60%',
            bottom: '-35%',
            backgroundColor: 'rgba(69, 105, 144, 0.15)',
            zIndex: '-1',
            animationDuration: '6s',
            animationTimingFunction: 'linear',
            animationDelay: '0s',
            animationIterationCount: 'infinite',
            animationDirection: 'normal',
            animationFillMode: 'none',
            animationPlayState: 'running',
            animationName: 'wawes',
          }}
          _after={{
            content: '""',
            position: 'absolute',
            width: '1200px',
            height: '1200px',
            borderTopLeftRadius: '50%',
            borderTopRightRadius: '40%',
            borderBottomLeftRadius: '45%',
            borderBottomRightRadius: '45%',
            left: '63%',
            bottom: '-30%',
            backgroundColor: 'rgba(69, 105, 144, 0.25)',
            zIndex: '-1',
            animationDuration: '6s',
            animationTimingFunction: 'linear',
            animationDelay: '0s',
            animationIterationCount: 'infinite',
            animationDirection: 'normal',
            animationFillMode: 'none',
            animationPlayState: 'running',
            animationName: 'wawes',
          }}
        >
          <ModalHeader
            paddingTop="30px"
            paddingBottom="0"
            fontFamily="fantasy"
            fontSize="28px"
          >
            {selectedMovie && selectedMovie.title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody padding="30px 15px 40px">
            <Stack direction={['column', 'row']} spacing={4} align="stretch">
              {selectedMovie && (
                <React.Fragment>
                  <Image
                    height="400px"
                    objectFit="cover"
                    src={selectedMovie.poster}
                    alt={selectedMovie.title}
                    px={2}
                  />
                  <VStack alignItems="baseline" spacing={3} align="stretch">
                    {selectedMovie.directors && (
                      <Box alignItems="baseline">
                        <Heading size="md">Directors</Heading>
                        <Text>{selectedMovie.directors.join(',')}</Text>
                      </Box>
                    )}
                    {selectedMovie.writers && (
                      <Box alignItems="baseline">
                        <Heading size="md">Writers</Heading>
                        <Text>{selectedMovie.writers.join(',')}</Text>
                      </Box>
                    )}
                    {selectedMovie.cast && (
                      <Box alignItems="baseline">
                        <Heading size="md">Casts</Heading>
                        <Text>{selectedMovie.cast.join(',')}</Text>
                      </Box>
                    )}
                    <Heading size="md">Language</Heading>
                    <Text>{selectedMovie.languages}</Text>
                    <Heading size="md">Plot</Heading>
                    <Text>
                      {selectedMovie.fullplot
                        ? selectedMovie.fullplot
                        : selectedMovie.plot}
                    </Text>
                  </VStack>
                </React.Fragment>
              )}
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Layout>
  )
}

export default Main
