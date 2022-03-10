import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularMovies, getTrendMovies } from '../store/movieSlice'
import CardTemplate from '../components/CardTemplate'
import CardSlider from '../components/CardSlider'

const Home = () => {
  const dispatch = useDispatch()
  const { popularMovieList } = useSelector((state) => state.movies.popular)
  const trendMovies = useSelector((state) => state.movies.trends.trendMovieList)

  const [currentPopularMovies, setCurrentPopularMovies] = useState({
    before: 0,
    after: 5,
  })
  const [currentTrendMovies, setCurrentTrendMovies] = useState({
    before: 0,
    after: 5,
  })

  // console.log(trendMovies)

  useEffect(() => {
    dispatch(getPopularMovies())
    dispatch(getTrendMovies())
  }, [dispatch])

  return (
    <div>
      <h1 style={{ marginTop: '2rem' }}>Popular Movies</h1>
      <div
        style={{
          display: 'flex',
          position: 'relative',
          justifyContent: 'center',
          marginTop: '2rem',
          alignItems: 'center',
        }}
      >
        {popularMovieList
          .slice(currentPopularMovies.before, currentPopularMovies.after)
          .map((movie) => (
            <CardTemplate
              imageSrc={movie.poster_path}
              title={movie.title}
              text={movie.vote_average}
              key={movie.id}
            />
          ))}
        <CardSlider
          Arrayy={popularMovieList}
          currentState={currentPopularMovies}
          setCurrentState={setCurrentPopularMovies}
        />
      </div>
      <h1 style={{ marginTop: '2rem' }}>Trend Movies</h1>
      <div
        style={{
          display: 'flex',
          position: 'relative',
          justifyContent: 'center',
          marginTop: '2rem',
          alignItems: 'center',
        }}
      >
        {trendMovies
          .slice(currentTrendMovies.before, currentTrendMovies.after)
          .map((movie) => (
            <CardTemplate
              imageSrc={movie.poster_path}
              title={movie.title}
              text={movie.vote_average}
              key={movie.id}
            />
          ))}
        <CardSlider
          Arrayy={trendMovies}
          currentState={currentTrendMovies}
          setCurrentState={setCurrentTrendMovies}
        />
      </div>
    </div>
  )
}

export default Home
