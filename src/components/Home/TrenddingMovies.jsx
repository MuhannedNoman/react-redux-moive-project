import React from 'react';

// Hooks
import { TRENDING_MOVIES } from '../hooks/APIs';
import useMoviesFetch from '../hooks/useMoviesFetch';


const TrendingMovies = () => {
    const {data: trendingMovies, isLoaded} = useMoviesFetch(TRENDING_MOVIES)
    if(!isLoaded) return <p> Loading ... </p>
    return (
        <>
            <h1>Trending Movies</h1>
            {trendingMovies.map(movie => <p key={movie.id}>{movie.title}</p>)}
        </>
    );
};

export default TrendingMovies;