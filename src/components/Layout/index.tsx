import React, { useState } from 'react'
import { useDisclosure } from '@chakra-ui/react'

import { useSelector, useDispatch } from 'react-redux'
import { AppState, AppDispatch } from '../../store/store'
import moviesSlice from '../../store/movies'
import Drawer from '../Drawer'
import Header from '../Header'
import { Container } from './styles'

type Props = {
  children?: JSX.Element | JSX.Element[] | string | string[]
}

const Layout: React.FC<Props> = ({ children }) => {
  const filters = useSelector((state: AppState) => state.movies.filters)
  const [selectedGenres, setSelectedGenres] = useState<string[]>(filters)
  const dispatch: AppDispatch = useDispatch()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleToggleGenre = (checked: boolean, genre: string) => {
    if (checked) {
      setSelectedGenres([...selectedGenres, genre])
    } else {
      setSelectedGenres(selectedGenres.filter((item) => item != genre))
    }
  }

  const handleSaveFilters = () => {
    dispatch(moviesSlice.actions.filterGenres(selectedGenres))
    onClose()
  }

  return (
    <Container>
      <Header onOpen={onOpen} />
      <Drawer
        isOpen={isOpen}
        selectedOptions={selectedGenres}
        onChangeOption={handleToggleGenre}
        onClose={onClose}
        onSave={handleSaveFilters}
      />
      {children}
    </Container>
  )
}

export default Layout
