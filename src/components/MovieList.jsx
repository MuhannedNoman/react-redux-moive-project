import React from "react";
import {
  Box,
  Center,
  Image,
  Flex,
  Badge,
  Text,
  Heading,
} from "@chakra-ui/react";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../features/movies";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const mostPopularMovies = useSelector(
    (state) => state.movies.value.mostPopularMovies
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <Box p="10">
      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: "2xl", sm: "4xl", lg: "6xl" }}
        p="5px"
      >
        <Text
          as={"span"}
          position={"relative"}
          _after={{
            content: "''",
            width: "full",
            height: "30%",
            position: "absolute",
            bottom: 1,
            left: 0,
            bg: "red.400",
            zIndex: -1,
          }}
        >
          Trending Movies
        </Text>
        <br />
      </Heading>
      <Flex flexWrap={"wrap"} rowGap="10px" gap={"10px"}>
        {mostPopularMovies.map((movie) => (
          <MovieCard
            title={movie.title}
            vote_average={movie.vote_average}
            poster_path={movie.poster_path}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default MovieList;
