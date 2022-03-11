import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import CardSlider from '../components/CardSlider'
import { getMovieActors, getMovieDetails } from '../store/movieSlice'

const Movie = () => {
  const [currentActorNumber, setCurrentActorNumber] = useState({
    before: 0,
    after: 5,
  })
  const { movieId } = useParams()
  const dispatch = useDispatch()
  const { movieActorsList } = useSelector((state) => state.movies.movieActors)
  const movieActorsStatus = useSelector(
    (state) => state.movies.movieActors.status
  )
  const { movieDetailsList } = useSelector((state) => state.movies.movieDetails)
  const movieDetailsStatus = useSelector(
    (state) => state.movies.movieDetails.status
  )

  const imageUrl = 'https://image.tmdb.org/t/p/w500/'
  // console.log(movieDetailsList)

  useEffect(() => {
    dispatch(getMovieActors(movieId))
    dispatch(getMovieDetails(movieId))
  }, [movieId, dispatch])

  return (
    <div style={{ marginTop: '2rem' }}>
      {movieActorsStatus === 'loading' || movieDetailsStatus === 'loading' ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className='grid_actor_container'>
            <div>
              <img
                style={{ width: '100%', height: '100%' }}
                src={`${imageUrl}/${movieDetailsList.poster_path}`}
                alt='movie.png'
              />
            </div>
            <div
              style={{
                backgroundColor: '#FFFAFA',
                color: 'black',
                padding: '12px',
              }}
            >
              <h1
                style={{
                  fontSize: '1.5rem',
                  textAlign: 'left',
                  padding: '5px',
                }}
              >
                {movieDetailsList.original_title}
              </h1>
              <div style={{ display: 'flex', padding: '5px' }}>
                <p style={{ marginRight: 'auto' }}>
                  {movieDetailsList.genres?.slice(0, 3).map((genre) => (
                    <span key={genre.id}>
                      {genre.name} {''}
                    </span>
                  ))}
                </p>
                <p>
                  <span style={{ marginRight: '5px' }}>Directed By:</span>
                  {movieActorsList?.crew?.slice(0, 1).map((crew) => (
                    <span
                      fontSize='lg'
                      color='gray.200'
                      fontWeight='bold'
                      key={crew.id}
                    >
                      {crew.name}
                    </span>
                  ))}
                </p>
              </div>
              <hr style={{ margin: '0 7px' }} />
              <p
                style={{
                  padding: '0 7px',
                  marginTop: '0.5rem',
                  textAlign: 'justify',
                  lineHeight: '1.5rem',
                }}
              >
                {movieDetailsList.overview?.slice(0, 1000) + '...'}
              </p>
            </div>
            <div>
              {movieActorsStatus === 'success' && (
                <img
                  style={{ width: '100%', height: '100%' }}
                  alt='img.png'
                  src={
                    movieActorsList &&
                    `${imageUrl}/${movieActorsList.cast[0]?.profile_path}`
                  }
                />
              )}
            </div>
          </div>
          <h1
            style={{
              fontSize: '3rem',
              textAlign: 'center',
              margin: '2rem 0 0 4rem',
            }}
          >
            Actors
          </h1>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {movieActorsList.cast &&
              movieActorsList.cast
                .slice(currentActorNumber.before, currentActorNumber.after)
                .map((actor) => (
                  <Link
                    style={{ textDecoration: 'none' }}
                    key={actor.id}
                    to={`/actors/${actor.id}`}
                  >
                    <Col
                      className='card_hover_effect'
                      style={{
                        margin: '2rem  5px 1rem',
                        border: '1px solid #ccc',
                      }}
                    >
                      <img
                        alt='actor.png'
                        style={{ width: '15rem', height: '15rem' }}
                        src={`${imageUrl}/${actor.profile_path}`}
                      />
                      <h4 style={{ color: 'black', width: '15rem' }}>
                        {actor.name}
                      </h4>
                    </Col>
                  </Link>
                ))}
            <div style={{ alignSelf: 'center' }}>
              <CardSlider
                Arrayy={movieActorsList.cast}
                currentState={currentActorNumber}
                setCurrentState={setCurrentActorNumber}
              />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Movie
