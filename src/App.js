import "./App.css";
import React from "react";

import ActorContainer from "./Containers/ActorContainer/ActorContainer";
import BookmarkContainer from "./Containers/BookmarkContainer/BookmarkContainer";
import FooterContainer from "./Containers/FooterContainer/FooterContainer";
import NavBarContainer from "./Containers/NavBarContainer/NavBarContainer";
import HomeContainer from "./Containers/HomeContainer/HomeContainer";
import MoviesContainer from "./Containers/MoviesContainer/MoviesContainer";
import SingleActorContainer from "./Containers/SingleActorContainer/SingleActorContainer";
import SingleMovieContainer from "./Containers/SingleMovieContainer/SingleMovieContainer";
import { Route, Switch } from "react-router";

function App() {
  return (
    <div>
      {" "}
      <NavBarContainer />
      <FooterContainer />
      <Switch>
        <Route path="/actors">
          <ActorContainer />
        </Route>
        <Route path="/bookmarks">
          <BookmarkContainer />
        </Route>

        <Route path="/" exact>
          <HomeContainer />
        </Route>
        <Route exact path="/movies">
          <MoviesContainer />
        </Route>
        <Route path="/actors/:actorId">
          <SingleActorContainer />
        </Route>
        <Route path="/movies/:movieId">
          <SingleMovieContainer />
        </Route>
        <Route path="*">
          <HomeContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
