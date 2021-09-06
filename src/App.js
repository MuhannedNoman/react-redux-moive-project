import "./App.css";
import React, { Suspense } from "react";

import BookmarkContainer from "./Containers/BookmarkContainer/BookmarkContainer";
import NavBarContainer from "./Containers/NavBarContainer/NavBarContainer";
import HomeContainer from "./Containers/HomeContainer/HomeContainer";
import SingleActorContainer from "./Containers/SingleActorContainer/SingleActorContainer";
import SingleMovieContainer from "./Containers/SingleMovieContainer/SingleMovieContainer";
import { Route, Switch } from "react-router";
import ScrollToTop from "./Utilities/ScrollToTop";
import { useSelector } from "react-redux";
import { Spinner, Stack } from "@chakra-ui/react";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const MoviesContainer = React.lazy(() =>
    import("./Containers/MoviesContainer/MoviesContainer")
  );
  const ActorContainer = React.lazy(() =>
    import("./Containers/ActorContainer/ActorContainer")
  );

  return (
    <Suspense
      fallback={
        <Stack align="center" justify="center" bg="black" h="100vh">
          <Spinner size="xl" color="white" />
        </Stack>
      }
    >
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
    </Suspense>
  );
}

export default App;
