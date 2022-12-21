import React from 'react'
import {
  Image,
  Stack,
  VStack,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { IMovie } from '../../types'
import { ModalContent } from './styles'
import { LabelText } from '../../components'

type Props = {
  isOpen: boolean
  movie: IMovie | null
  onClose: () => void
}

const MovieModal: React.FC<Props> = ({ isOpen, movie, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose} size="6xl" variant="primary">
    <ModalOverlay />
    <ModalContent overflow="hidden">
      <ModalHeader
        paddingTop="30px"
        paddingBottom="0"
        fontFamily="fantasy"
        fontSize="28px"
      >
        {movie && movie.title}
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody padding="30px 15px 40px">
        <Stack direction={['column', 'row']} spacing={4} align="stretch">
          {movie && (
            <React.Fragment>
              <Image
                height="400px"
                objectFit="cover"
                src={movie.poster}
                alt={movie.title}
                px={2}
              />
              <VStack alignItems="baseline" spacing={3} align="stretch">
                {movie.directors && (
                  <LabelText
                    label="directors"
                    text={movie.directors.join(',')}
                  />
                )}
                {movie.writers && (
                  <LabelText label="writers" text={movie.writers.join(',')} />
                )}
                {movie.cast && (
                  <LabelText label="cast" text={movie.cast.join(',')} />
                )}
                <LabelText label="languages" text={movie.languages.join(',')} />
                <LabelText label="plot" text={movie.fullplot || movie.plot} />
              </VStack>
            </React.Fragment>
          )}
        </Stack>
      </ModalBody>
    </ModalContent>
  </Modal>
)

export default MovieModal
