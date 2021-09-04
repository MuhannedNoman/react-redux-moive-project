import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Home from '../Home';
import SignIn from '../Sign';
import MovieList from '../Movies';
import SingleMovie from '../Movies/SignleMovie';
import Actors from '../Actors';
import SingleActor from '../Actors/SingleActor';
import About from '../About';

const Routes = () => 
  <Switch>
      <Route exact path='/about'>
        <About />
        </Route>
      <Route exact path='/sign'>
        <SignIn />
        </Route>
      <Route exact path='/movies'>
         <MovieList />
      </Route>
      <Route exact path='/movie'>
        <SingleMovie />
        </Route>
      <Route exact path='/actors'>
        <Actors />
        </Route>
      <Route exact path='/actor'>
        <SingleActor/>
        </Route>
        <Route exact path='/'>
        <Home/>
      </Route>
  </Switch>

export default Routes;