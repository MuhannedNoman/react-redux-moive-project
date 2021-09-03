import React from 'react';
// import { Link } from 'react-router-dom';

// hooks
// import { GENRES } from '../hooks/APIs';
// import useMoviesFetch from "../hooks/useMoviesFetch"

// Styles
import {DropdownStyle} from "./Styles"

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

function Dropdown() {
  // const [genre, setGenre] = useState(null)
  // const {data: genres, isLoaded} = useMoviesFetch(GENRES)
  
  // const handleClick = (movieId) => {
  //   setGenre(movieId)
  // }
  // if (!isLoaded) return <p>Loading ...</p>


  return (
    <DropdownStyle  role="presentation" >
      {genres.map((movie) => 
            // <p key={movie.id} role="presentation" onKeyDown={() => handleClick(movie.id)} onClick={() => handleClick(movie.id) }>
            <p key={movie.id} role="presentation">
              {/* <Link  to="/" > */}
                {movie.name}
              {/* </Link> */}
            </p>
          )}
    </DropdownStyle>
  );
}

export default Dropdown;
