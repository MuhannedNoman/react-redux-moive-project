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

function App() {
  return (
    <div>
      <ActorContainer />
      <BookmarkContainer />
      <FooterContainer />
      <NavBarContainer />
      <HomeContainer />
      <MoviesContainer />
      <SingleActorContainer />
      <SingleMovieContainer />
    </div>
  );
}

export default App;
