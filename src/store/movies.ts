import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { genreList } from '../const/genreList'
import { IMovie } from '../types'

interface SliceState {
  allMovies: IMovie[]
  filteredMovies: IMovie[]
  filters: string[]
}

const initialState: SliceState = {
  allMovies: [],
  filteredMovies: [],
  filters: genreList,
}

const movies = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, action: PayloadAction<IMovie[]>) => {
      console.log(action.payload)
      state.allMovies = [...action.payload]
      state.filteredMovies = [...action.payload]
      return state
    },
    filterMovies: (state, action: PayloadAction<string[]>) => {
      console.log(action.payload)
      state.filteredMovies = state.allMovies.filter((movie) =>
        movie.genres.some((genre) => action.payload.indexOf(genre) > -1),
      )
      return state
    },
  },
})

export default movies
