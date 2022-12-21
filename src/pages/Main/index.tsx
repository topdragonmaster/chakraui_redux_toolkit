import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Carousel from 'react-multi-carousel'
import { Box, HStack, Text, useDisclosure, Container } from '@chakra-ui/react'

import { Layout, MoviePoster } from '../../components'
import { AppState } from '../../store/store'
import { IMovie } from '../../types'
import { MOVIE_DATA, BREAKPOINTS } from '../../const'
import MovieModal from './MovieModal'

function Main() {
  const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null)
  const filters = useSelector((state: AppState) => state.movies.filters)
  const [movies, setMovies] = useState<IMovie[]>([])

  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleViewDetail = (movie: IMovie) => {
    setSelectedMovie(movie)
    onOpen()
  }

  useEffect(() => {
    setMovies(
      MOVIE_DATA.filter((movie) =>
        movie.genres.some((genre) => filters.indexOf(genre) >= 0),
      ),
    )
  }, [filters])

  return (
    <Layout>
      <Box p="120px 0">
        <Container maxW="1440px">
          <HStack justifyContent="flex-end" mb="30px">
            <Text color="white">{`${movies.length} / ${MOVIE_DATA.length}`}</Text>
          </HStack>
          <Carousel
            responsive={BREAKPOINTS}
            infinite={false}
            keyBoardControl={true}
            partialVisbile
          >
            {movies.map((movie) => (
              <MoviePoster
                key={movie._id}
                movie={movie}
                onClick={handleViewDetail}
              />
            ))}
          </Carousel>
        </Container>
      </Box>
      <MovieModal isOpen={isOpen} onClose={onClose} movie={selectedMovie} />
    </Layout>
  )
}

export default Main
