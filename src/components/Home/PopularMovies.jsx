import React from 'react';

// Hooks
import { POPULAR_MOVIES } from '../hooks/APIs';
import useMoviesFetch from '../hooks/useMoviesFetch';


const PopularMovies = () => {
    const {data: popularMovies, isLoaded} = useMoviesFetch(POPULAR_MOVIES)
    if(!isLoaded) return <p> Loading ... </p>
    return (
        <>
             <h1>Popular Movies</h1>
            {popularMovies.results.map(movie => <p key={movie.id}>{movie.title}</p>)}
        </>
    );
};

export default PopularMovies;