import React from 'react';

// Components
import LatestMovies from './LatestMovies';
import PopularMovies from './PopularMovies';
import TrendingMovies from './TrenddingMovies';


const Home = () => (
  <>
    <PopularMovies />
    <TrendingMovies/>
    <LatestMovies/>
  </>
)
    


export default Home;