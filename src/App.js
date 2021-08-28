import logo from './logo.svg';
import './App.css';

import ActorContainer from './Containers/ActorContainer';
import BookmarkContainer from './Containers/BookmarkContainer';
import FooterContainer from './Containers/FooterContainer';
import HeaderContainer from './Containers/HeaderContainer/HeaderContainer';
import HomeContainer from './Containers/HomeContainer/HomeContainer';
import MoviesContainer from './Containers/MoviesContainer/MoviesContainer';
import SingleActorContainer from './Containers/SingleActorContainer/SingleActorContainer';
import SingleMovieContainer from './Containers/SingleMovieContainer/SingleMovieContainer';

function App() {
  return (
    <div >
      <ActorContainer/>
      <BookmarkContainer/>
      <FooterContainer/>
      <HeaderContainer/>
      <HomeContainer/>
      <MoviesContainer/>
      <SingleActorContainer/>
      <SingleMovieContainer/>
    </div>
  );
}

export default App;
