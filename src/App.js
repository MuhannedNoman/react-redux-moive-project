import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";

import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import Slider from "./components/Slider";
import Footer from "./components/Footer";

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Slider />
      <MovieList />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
