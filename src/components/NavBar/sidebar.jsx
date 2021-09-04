import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// style
import { Offcanvas, Accordion, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

// state
import { useDispatch } from 'react-redux';
import { setGenres } from '../../storage/reducer';

// Geners data
const genres= [
  {
  "id": 28,
  "name": "Action"
  },
  {
  "id": 12,
  "name": "Adventure"
  },
  {
  "id": 16,
  "name": "Animation"
  },
  {
  "id": 35,
  "name": "Comedy"
  },
  {
  "id": 80,
  "name": "Crime"
  },
  {
  "id": 99,
  "name": "Documentary"
  },
  {
  "id": 18,
  "name": "Drama"
  },
  {
  "id": 10751,
  "name": "Family"
  },
  {
  "id": 14,
  "name": "Fantasy"
  },
  {
  "id": 36,
  "name": "History"
  },
  {
  "id": 27,
  "name": "Horror"
  },
  {
  "id": 10402,
  "name": "Music"
  },
  {
  "id": 9648,
  "name": "Mystery"
  },
  {
  "id": 10749,
  "name": "Romance"
  },
  {
  "id": 878,
  "name": "Science Fiction"
  },
  {
  "id": 10770,
  "name": "TV Movie"
  },
  {
  "id": 53,
  "name": "Thriller"
  },
  {
  "id": 10752,
  "name": "War"
  },
  {
  "id": 37,
  "name": "Western"
  }
]

export default function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  return (
    <>
      <FontAwesomeIcon icon={faBars} size='lg' onClick={handleShow} style={{color: '#999999'}} />

      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sidebar</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ListGroup>
          <Link to='/actors' style={{textDecoration: 'none'}} onClick={handleClose}>
            <ListGroup.Item action>
              Actors
            </ListGroup.Item>
          </Link>
          <Link to='/about' style={{textDecoration: 'none'}} onClick={handleClose}>
            <ListGroup.Item action>
              About
            </ListGroup.Item>
          </Link>
        </ListGroup>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header>Geners</Accordion.Header>
            <Accordion.Body className='p-0'>
            <ListGroup>
              {
                genres.map(({id, name}) => (
                  <Link
                    key={id}
                    to='/movies'
                    style={{textDecoration: 'none'}}
                    onClick={() => {
                      handleClose()
                      dispatch(setGenres(id))
                    }}
                    >
                    <ListGroup.Item action style={{border: 'none'}}>
                      {name}
                    </ListGroup.Item>
                  </Link>
                ))
              }
            </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Bookmarks</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}