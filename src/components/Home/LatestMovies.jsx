import React from 'react';

import useMoviesFetch from '../hooks/useMoviesFetch';
import { LATEST_MOVIES } from '../hooks/APIs';

const LatestMovies = () => {
    const {data:latestMovies , isLoaded} = useMoviesFetch(LATEST_MOVIES)
   
    if(!isLoaded) return <p> Loading ... </p>

    return (
        <>
             <h1>Latest Movies</h1>
            {latestMovies.title}
        </>
    );
};

export default LatestMovies;