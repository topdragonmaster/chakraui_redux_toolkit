import React from 'react'
import { Box, Image, VStack, Text, Button } from '@chakra-ui/react'
import { IMovie } from '../../types'

type Props = {
  movie: IMovie
  onClick: (movie: IMovie) => void
}

const MoviePoster: React.FC<Props> = ({ movie, onClick }) => {
  const handleClick = () => {
    onClick(movie)
  }

  return (
    <VStack
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
            onClick={handleClick}
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
  )
}

export default MoviePoster
