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
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { moviesByGenre } from "../../Redux/Slices/moviesFilterSlice";
import "./Movies.scss";
import { FaImdb } from "react-icons/fa";
import { Link as ReachLink } from "react-router-dom";
const imageUrl = "https://image.tmdb.org/t/p/w500/";
export default function Movies() {
  const { genreId } = useParams();
  const genres = useSelector((state) => state.moviesFilter.allGenres.list);
  const movies = useSelector((state) => state.moviesFilter.moviesByGenre.list);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(moviesByGenre(genreId));
  }, [genreId]);

  // get genre names instead of id's
  const newMovies = movies.map((movie) => {
    const newIds = movie.genre_ids.map((id) => {
      const genre = genres.find((genre) => {
        return genre.id === id;
      });
      return genre.name;
    });

    return { ...movie, genre_ids: newIds };
  });

  return (
    <Flex
      direction={["column", "row", "row", "row"]}
      align="center"
      justify="center"
      wrap="wrap"
      spacing="5"
      bg="black"
    >
      {newMovies.map((movie) => {
        return (
          <LinkBox
            as={ReachLink}
            to={`/movies/movie/${movie.id}`}
            key={movie.id}
            m="1rem"
            _hover={{ transform: "scale(1.1)" }}
            transition="ease-in-out 0.1s"
          >
            <Box
              color="white"
              bg="whiteAlpha.300"
              boxShadow="lg"
              overflow="hidden"
              w="15rem"
              minH="100%"
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
              <VStack p="3">
                <HStack>
                  {movie.genre_ids.map((id) => {
                    return (
                      <Text fontSize="small" key={id}>
                        {" "}
                        {id}{" "}
                      </Text>
                    );
                  })}
                </HStack>
                <Icon color="#dc6208" boxSize={6} as={FaImdb} />{" "}
                <Badge> {movie.vote_average} </Badge>
              </VStack>
            </Box>
          </LinkBox>
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
  );
}
