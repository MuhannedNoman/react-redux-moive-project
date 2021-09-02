import React from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import Routes from './components/Routes/Routes';

// Components
import Home from './components/Home';
import Sign from './components/Sign';
import MoviePage from './components/MoviePage';
import SingleMoviePage from './components/SingleMoviePage';
import ActorsPage from './components/ActorsPage';
import SingleActorPage from './components/SingleActorPage';

function App() {
  const isLoggedIn = true;
  return (
    <Routes>
      {
        !isLoggedIn
        ?<Redirect exact to='/signin' />
        :<>
          <Route exact path='/' component={Home} />
          <Route exact path='/signin' component={Sign} />
          <Route exact path='/mp' component={MoviePage} />
          <Route exact path='/smp' component={SingleMoviePage} />
          <Route exact path='/ap' component={ActorsPage} />
          <Route exact path='/sap' component={SingleActorPage} />
          <Route exact path='/*' component={Home} />
        </>
      }
    </Routes>
  );
}

export default App;
