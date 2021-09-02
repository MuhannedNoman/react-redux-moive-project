import React from 'react';
import { Link } from 'react-router-dom';

// hooks
import { GENRES } from '../hooks/APIs';
import useMoviesFetch from "../hooks/useMoviesFetch"

// Styles
import {DropdownStyle} from "./Styles"

function Dropdown() {
  const {data: genres, isLoaded} = useMoviesFetch(GENRES)
  if (!isLoaded) return <p>Loading ...</p>
  return (
    <DropdownStyle  role="presentation" >
      {genres.genres.map((movie) => 
            <p key={movie.id}>
              <Link  to="/" >
                {movie.name}
              </Link>
            </p>
          )}
    </DropdownStyle>
  );
}

export default Dropdown;
