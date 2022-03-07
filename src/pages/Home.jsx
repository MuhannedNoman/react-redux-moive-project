import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularMovies, getTrendMovies } from '../store/movieSlice'
import { Card } from 'react-bootstrap'
import { IMG_URL } from '../constants'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'

const Home = () => {
  const dispatch = useDispatch()
  const { popularMovieList, status } = useSelector(
    (state) => state.movies.popular
  )

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
      <h1>Popular Movies</h1>
      <div
        style={{
          display: 'flex',
          position: 'relative',
          justifyContent: 'center',
          marginTop: '2rem',
          alignItems: 'center',
        }}
      >
        {status === 'loading' ? (
          <h1>Loading...</h1>
        ) : (
          popularMovieList
            .slice(currentPopularMovies.before, currentPopularMovies.after)
            .map((movie) => (
              <Card
                key={movie.id}
                style={{
                  paddingTop: '5px',
                  border: '1px solid #ccc',
                  width: '18rem',
                  marginRight: '5px',
                }}
              >
                <Card.Img
                  style={{ width: '8rem' }}
                  variant='top'
                  src={`${IMG_URL}/${movie.poster_path}`}
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: '14px' }}>
                    {movie.title}
                  </Card.Title>
                  <Card.Text style={{ fontSize: '11px', fontWeight: 'bold' }}>
                    {movie.vote_average}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))
        )}
        <FaAngleLeft
          onClick={() => {
            currentPopularMovies.before !== 0 &&
              setCurrentPopularMovies((preValue) => {
                return {
                  before: preValue.before - 5,
                  after: preValue.after - 5,
                }
              })
          }}
          style={{
            cursor: 'pointer',
            position: 'absolute',
            left: '2rem',
            fontSize: '29px',
          }}
        />
        <FaAngleRight
          onClick={() => {
            popularMovieList.length > currentPopularMovies.after &&
              setCurrentPopularMovies((preValue) => {
                return {
                  before: preValue.before + 5,
                  after: preValue.after + 5,
                }
              })
          }}
          style={{
            cursor: 'pointer',
            position: 'absolute',
            right: '2rem',
            fontSize: '29px',
          }}
        />
      </div>
      <h1>Trend Movies</h1>
      <div
        style={{
          display: 'flex',
          position: 'relative',
          justifyContent: 'center',
          marginTop: '2rem',
          alignItems: 'center',
        }}
      >
        {}
        {trendMovies
          .slice(currentTrendMovies.before, currentTrendMovies.after)
          .map((movie) => (
            <Card
              key={movie.id}
              style={{
                paddingTop: '5px',
                border: '1px solid #ccc',
                width: '18rem',
                marginRight: '5px',
              }}
            >
              <Card.Img
                style={{ width: '8rem' }}
                variant='top'
                src={`${IMG_URL}/${movie.poster_path}`}
              />
              <Card.Body>
                <Card.Title style={{ fontSize: '14px' }}>
                  {movie.title}
                </Card.Title>
                <Card.Text style={{ fontSize: '11px', fontWeight: 'bold' }}>
                  {movie.vote_average}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        <FaAngleLeft
          onClick={() => {
            currentTrendMovies.before !== 0 &&
              setCurrentTrendMovies((preValue) => {
                return {
                  before: preValue.before - 5,
                  after: preValue.after - 5,
                }
              })
          }}
          style={{
            cursor: 'pointer',
            position: 'absolute',
            left: '2rem',
            fontSize: '29px',
          }}
        />
        <FaAngleRight
          onClick={() => {
            trendMovies.length > currentTrendMovies.after &&
              setCurrentTrendMovies((preValue) => {
                return {
                  before: preValue.before + 5,
                  after: preValue.after + 5,
                }
              })
          }}
          style={{
            cursor: 'pointer',
            position: 'absolute',
            right: '2rem',
            fontSize: '29px',
          }}
        />
      </div>
    </div>
  )
}

export default Home
