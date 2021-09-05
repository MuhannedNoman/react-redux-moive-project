import React from "react";
import { Route, Switch } from "react-router-dom";
// import SearchInput from "./components/SearchInput";
// import useFetch from "./hooks/useFetch";
// import requests from "./reuqests/requests";
// import Row from "./components/Row";
// import Slider from "./containers/Slider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/about";
import home from "./pages/home";
import actors from "./pages/actors";
import ActorDetail from "./components/ActorDetail";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Row fetchUrl={requests.fetchTrending} /> */}
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/actors/:id" component={ActorDetail} />
        <Route path="/actors" exact component={actors} />
        <Route path="/" exact component={home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
