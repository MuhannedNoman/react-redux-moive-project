import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import CardSlider from '../components/CardSlider'

import { getActorDetails, getActorMovies } from '../store/actorsSlice'

const SingleActor = () => {
  const { actorId } = useParams()
  const dispatch = useDispatch()
  const actor = useSelector(
    (state) => state.actors.actorsDetails.actorsDetailsList
  )
  const actorMovies = useSelector(
    (state) => state.actors.actorMovies.actorMoviesList
  )
  const { status } = useSelector((state) => state.actors.actorsDetails)
  const [currentMovieNumber, setCurrentMovieNumber] = useState({
    before: 0,
    after: 5,
  })
  const imageUrl = 'https://image.tmdb.org/t/p/w500'

  useEffect(() => {
    dispatch(getActorDetails(actorId))
    dispatch(getActorMovies(actorId))
  }, [actorId, dispatch])

  return (
    <div style={{ marginTop: '2rem' }}>
      {status === 'loading' ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className='grid_actor_container'>
            <div>
              <img
                style={{ width: '100%', height: '100%' }}
                src={`${imageUrl}/${actor.profile_path}`}
                alt={actor.name}
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
                {actor.name}
              </h1>
              <div style={{ display: 'flex', padding: '5px' }}>
                <p style={{ marginRight: 'auto' }}>
                  <span style={{ marginRight: '5px' }}>Birthday:</span>
                  {actor.birthday}
                  {actor.deathday && <span>Death:{actor.deathday}</span>}
                </p>
                <p>
                  <span style={{ marginRight: '5px' }}>Popularity:</span>
                  {actor.popularity}
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
                {actor.biography?.slice(0, 1000) + '...'}
              </p>
            </div>
            <div>
              {actorMovies.cast && (
                <img
                  style={{ width: '100%', height: '100%' }}
                  alt='img.png'
                  src={`${imageUrl}/${actorMovies?.cast[0]?.poster_path}`}
                />
              )}
            </div>
          </div>
          <h3
            style={{
              textAlign: 'center',
              paddingLeft: '1.5rem',
              marginTop: '1.9rem',
              fontSize: '2rem',
            }}
          >
            Movies
          </h3>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {actorMovies.cast &&
              actorMovies.cast
                .slice(currentMovieNumber.before, currentMovieNumber.after)
                .map((movie) => (
                  <Link
                    style={{ textDecoration: 'none' }}
                    key={movie.id}
                    to={`/movies/movie/${movie.id}`}
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
                        src={`${imageUrl}/${movie.poster_path}`}
                      />
                      <h4 style={{ color: 'black', width: '15rem' }}>
                        {movie.title.length > 25
                          ? movie.title.slice(0, 25) + '...'
                          : movie.title}
                      </h4>
                    </Col>
                  </Link>
                ))}
            <div style={{ alignSelf: 'center' }}>
              <CardSlider
                Arrayy={actorMovies.cast}
                currentState={currentMovieNumber}
                setCurrentState={setCurrentMovieNumber}
              />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default SingleActor
