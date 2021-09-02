import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import Routes from './components/Routes/Routes';

// Components
import Home from './components/Home';
import Sign from './components/Sign';
import MoviePage from './components/MoviePage';
import SingleMoviePage from './components/SingleMoviePage';
import ActorsPage from './components/ActorsPage';
import SingleActorPage from './components/SingleActorPage';

function App() {
  // const isAuthenticated = useSelector(state => state.isAuthenticated);
  return (
    <Routes>
      <Route exact path='/sign' component={Sign} />
      {/* {
        !isAuthenticated
        ?<Redirect exact to='/sign' />
        :null
      } */}
      <Route exact path='/' component={Home} />
      <Route exact path='/mp' component={MoviePage} />
      <Route exact path='/smp' component={SingleMoviePage} />
      <Route exact path='/ap' component={ActorsPage} />
      <Route exact path='/sap' component={SingleActorPage} />
    </Routes>
  );
}

export default App;
