import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getActors } from '../store/actorsSlice'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Actor = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const dispatch = useDispatch()
  const actorsStatus = useSelector((state) => state.actors.actors.status)
  const actorsList = useSelector((state) => state.actors.actors.actorsList)

  const imageUrl = 'https://image.tmdb.org/t/p/w500'

  useEffect(() => {
    dispatch(getActors(currentPage))
  }, [currentPage, dispatch])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentPage])

  const handlePreviousActors = () => {
    setCurrentPage(currentPage - 1)
  }
  const handleNextActors = () => {
    setCurrentPage(currentPage + 1)
  }

  // console.log(currentPage)
  return (
    <div>
      <h1>Actors</h1>

      {actorsStatus === 'pending' && (
        <h1 style={{ color: 'black', fontSize: '2rem' }}>Loading...</h1>
      )}

      {actorsStatus === 'success' && (
        <>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              paddingTop: '10px',
            }}
          >
            {actorsList.map((actor) => (
              <Link
                key={actor.id}
                style={{ textDecoration: 'none' }}
                to={`/actors/${actor.id}`}
              >
                <Col
                  className='card_hover_effect'
                  style={{
                    marginRight: '10px',
                    marginBottom: '1.25rem',
                    border: '1px solid #ccc',
                  }}
                  key={actor.id}
                  lg={3}
                  md={6}
                  sm={12}
                >
                  <img
                    style={{ height: '350px', width: '300px' }}
                    src={`${imageUrl}/${actor.profile_path}`}
                    alt={actor.name}
                  />
                  <h3 style={{ color: 'black' }}>{actor.name}</h3>
                </Col>
              </Link>
            ))}
          </div>
          <button disabled={currentPage === 1} onClick={handlePreviousActors}>
            Previous
          </button>
          <button onClick={handleNextActors}>Next</button>
        </>
      )}
    </div>
  )
}

export default Actor
