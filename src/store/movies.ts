import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GENRE_LIST } from '../const'

interface SliceState {
  filters: string[]
}

const initialState: SliceState = {
  filters: GENRE_LIST,
}

const movies = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    filterGenres: (state, action: PayloadAction<string[]>) => {
      state.filters = action.payload
    },
  },
})

export default movies
