import React from 'react';

// Components
import LatestMovies from './LatestMovies';
import PopularMovies from './PopularMovies';
import TrendingMovies from './TrenddingMovies';


const Home = () => {
  return (
    <>
      <PopularMovies />
      <TrendingMovies/>
      <LatestMovies/>
    </>
  )
} 

export default Home;