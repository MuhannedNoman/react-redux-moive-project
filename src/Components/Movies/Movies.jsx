import {
  Box,
  Image,
  Flex,
  Text,
  HStack,
  Badge,
  Icon,
  Skeleton,
  LinkBox,
  VStack,
  Stack,
  Spinner,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { moviesByGenre } from "../../Redux/Slices/moviesFilterSlice";

import { FaImdb } from "react-icons/fa";
import { Link as ReachLink } from "react-router-dom";
import Bookmark from "../../Utilities/Bookmark";
const imageUrl = "https://image.tmdb.org/t/p/w500/";
export default function Movies() {
  const { genreId } = useParams();
  const genres = useSelector((state) => state.moviesFilter.allGenres.list);
  const movies = useSelector((state) => state.moviesFilter.moviesByGenre.list);
  const moviesStatus = useSelector(
    (state) => state.moviesFilter.moviesByGenre.status
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(moviesByGenre(genreId));
  }, [genreId]);

  // get genre names instead of id's

  const newMovies = movies?.map((movie) => {
    const newIds = movie.genre_ids?.map((id) => {
      const genre = genres?.find((genre) => {
        return genre?.id === id;
      });
      return genre?.name;
    });

    return { ...movie, genre_ids: newIds };
  });
  if (moviesStatus !== "success")
    return (
      <Stack align="center" justify="center" bg="black" h="100vh">
        <Spinner size="xl" color="white" />
      </Stack>
    );
  return (
    <Box bg="black" minH="100vh" spacing="5">
      <Flex
        direction={["column", "row", "row", "row"]}
        justify="center"
        wrap="wrap"
        spacing="5"
        bg="black"
      >
        {newMovies.map((movie) => {
          return (
            <Flex
              direction="column"
              key={movie.id}
              color="white"
              bg="whiteAlpha.300"
              boxShadow="lg"
              w="15rem"
              m="1rem"
              minH="100%"
              position="relative"
            >
              <LinkBox
                as={ReachLink}
                to={`/movies/movie/${movie.id}`}
                key={movie.id}
                _hover={{ transform: "translateY(-10px)" }}
                transition="ease-in-out 0.1s"
              >
                {" "}
                <Image
                  objectFit="fill"
                  boxSize="15rem"
                  fallback={<Skeleton h="100%"></Skeleton>}
                  src={`${imageUrl}/${movie.poster_path}`}
                />{" "}
                <Box textAlign="center">
                  <Text fontWeight="bold" fontSize="lg" as="h2">
                    {" "}
                    {movie.title}{" "}
                  </Text>
                </Box>
              </LinkBox>
              <VStack p="3">
                <HStack wrap="wrap">
                  {movie.genre_ids.map((id) => {
                    return (
                      <Text fontSize="small" key={id}>
                        {" "}
                        {id}{" "}
                      </Text>
                    );
                  })}
                </HStack>
                <HStack spacing="1">
                  <Icon color="#dc6208" boxSize={6} as={FaImdb} />{" "}
                  <Badge> {movie.vote_average} </Badge>
                </HStack>
                <Bookmark movie={movie} />
              </VStack>{" "}
            </Flex>
          );
        })}
        {/* This is Movies Component
      <div>
        Display a list of movies. That has:
        <br />
        movie poster movie name movie rating movie genre
        <br /> <br />
        Functionalities:
        <br />
        Tha ability to bookmark the movie. The ability to search for a specific
        movie. Once you click on a movie, it will move you to the singe page of
        that movie. Use lazy loading functionality.
      </div> */}
      </Flex>
    </Box>
  );
}
