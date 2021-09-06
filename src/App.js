import "./App.css";
import React from "react";

import ActorContainer from "./Containers/ActorContainer/ActorContainer";
import BookmarkContainer from "./Containers/BookmarkContainer/BookmarkContainer";
import NavBarContainer from "./Containers/NavBarContainer/NavBarContainer";
import HomeContainer from "./Containers/HomeContainer/HomeContainer";
import MoviesContainer from "./Containers/MoviesContainer/MoviesContainer";
import SingleActorContainer from "./Containers/SingleActorContainer/SingleActorContainer";
import SingleMovieContainer from "./Containers/SingleMovieContainer/SingleMovieContainer";
import { Route, Switch } from "react-router";
import ScrollToTop from "./Utilities/ScrollToTop";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div>
      <ScrollToTop />
      <NavBarContainer />
      {/* <FooterContainer /> */}
      <Switch>
        <Route exact path="/actors">
          <ActorContainer />
        </Route>
        {isLoggedIn && (
          <Route exact path="/bookmarks">
            <BookmarkContainer />
          </Route>
        )}

        <Route path="/" exact>
          <HomeContainer />
        </Route>
        <Route exact path="/movies/:genreId">
          <MoviesContainer />
        </Route>
        <Route exact path="/actors/:actorId">
          <SingleActorContainer />
        </Route>
        <Route exact path="/movies/movie/:movieId">
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
