import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";

import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import TrendingMovies from "./components/TrendingMovies";

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Slider />
      <TrendingMovies />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
