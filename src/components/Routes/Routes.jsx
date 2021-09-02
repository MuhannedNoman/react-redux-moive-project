import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Home from '../Home';
import SignIn from '../Authentications/SignIn';
import MovieList from '../Movies';
import SingleMovie from '../Movies/SignleMovie';
import Actors from '../Actors';
import SingleActor from '../Actors/SingleActor';
import NavBar from '../NavBar';

const Routes = () => 
      <Switch>       
         
          <Route exact path='/navbar'>
            <NavBar />
            </Route>
          <Route exact path='/sign-in'>
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