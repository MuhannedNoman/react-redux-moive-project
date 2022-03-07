import { configureStore } from '@reduxjs/toolkit'
import movies from './movieSlice'
import movieFilter from './movieFilterSlice'

const store = configureStore({
  reducer: {
    movies: movies,
    movieFilter: movieFilter,
  },
})

export default store
