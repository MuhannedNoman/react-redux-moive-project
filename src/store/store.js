import { configureStore } from '@reduxjs/toolkit'
import movies from './movieSlice'
import movieFilter from './movieFilterSlice'
import actors from './actorsSlice'

const store = configureStore({
  reducer: {
    movies: movies,
    movieFilter: movieFilter,
    actors: actors,
  },
})

export default store
