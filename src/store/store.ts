import { configureStore, combineReducers } from '@reduxjs/toolkit'
import movies from './movies'

const rootReducer = combineReducers({
  movies: movies.reducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof rootReducer>

export default store
