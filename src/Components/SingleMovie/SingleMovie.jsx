import {
  Box,
  Flex,
  IconButton,
  Image,
  Link,
  Text,
  Stack,
  Button,
  Spinner,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { similarMovies } from "../../Redux/Slices/moviesFilterSlice";
import { movieActors, movieDetails } from "../../Redux/Slices/moviesSlice";
import { Link as ReachLink } from "react-router-dom";
import { useState } from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
} from "@chakra-ui/icons";
import Bookmark from "../../Utilities/Bookmark";

const imageUrl = "https://image.tmdb.org/t/p/w500/";
export default function SingleMovie() {
  const [actorNum, setActorNum] = useState({ first: 0, second: 5 });
  const [movieNum, setMovieNum] = useState({ first: 0, second: 5 });
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movies.movieDetails.list);
  const similarMovs = useSelector(
    (state) => state.moviesFilter.similarMovies.list
  );
  const similarMovsStatus = useSelector(
    (state) => state.moviesFilter.similarMovies.status
  );
  const actorsStatus = useSelector((state) => state.movies.movieActors.status);
  const movieStatus = useSelector((state) => state.movies.movieDetails.status);

  const actors = useSelector((state) => state.movies.movieActors.list);

  useEffect(() => {
    dispatch(movieDetails(movieId));
    dispatch(similarMovies(movieId));
    dispatch(movieActors(movieId));
    setActorNum({
      first: 0,
      second: 5,
    });
    setMovieNum({
      first: 0,
      second: 5,
    });
  }, [movieId]);
  if (
    actorsStatus !== "success" &&
    similarMovsStatus !== "success" &&
    movieStatus !== "success"
  )
    return (
      <Stack align="center" justify="center" bg="black" h="100vh">
        <Spinner size="xl" color="white" />
      </Stack>
    );
  return (
    <Box p="6" bg="black" minH="100vh">
      {movieStatus === "success" && actorsStatus === "success" && (
        <Flex direction={["column,row,row,row"]}>
          <Image
            borderRadius="10px"
            h="lg"
            src={`${imageUrl}/${movie.poster_path}`}
          />

          <Flex
            bg="whiteAlpha.500"
            color="white"
            p="5"
            direction="column"
            borderRadius="10px"
            ml="5"
            w="50%"
            h="lg"
            boxShadow="lg"
            position="relative"
          >
            <Bookmark movie={movie} size={39} top="0" />
            <Stack borderBottom="#dc6208 solid 0.2rem">
              <Text fontWeight="bold" fontSize="4xl" flexBasis="20%">
                {movie.original_title}
              </Text>
              <Flex justify="space-between">
                <HStack spacing="2">
                  {movie.genres.slice(0, 3).map((genre) => (
                    <Text key={genre.id} fontSize="lg" color="gray.200">
                      {genre.name}
                    </Text>
                  ))}
                </HStack>
                <HStack>
                  <Text fontSize="lg" fontWeight="semibold">
                    {" "}
                    Directed By:{" "}
                  </Text>
                  {actors.crew.slice(0, 1).map((crew) => (
                    <Text
                      fontSize="lg"
                      color="gray.200"
                      fontWeight="bold"
                      key={crew.id}
                    >
                      {" "}
                      {crew.name}
                    </Text>
                  ))}
                </HStack>
              </Flex>
            </Stack>
            <Stack justify="space-evenly" flexBasis="80%">
              <Text p="5" fontWeight="semibold" fontSize="lg" color="white">
                {movie.overview}
              </Text>

              {movie.videos && (
                <Button
                  bg="#dc6208"
                  _hover={{ background: "#f56d09", textDecoration: "none" }}
                  m="auto"
                  as={Link}
                  isExternal
                  href={`https://www.youtube.com/watch?v=${movie.videos?.results[0]?.key}`}
                >
                  Watch Trailer <ExternalLinkIcon mx="2" />{" "}
                </Button>
              )}
            </Stack>
          </Flex>
          {actorsStatus === "success" && (
            <Image
              borderRadius="10px"
              ml="5"
              h="lg"
              src={`${imageUrl}/${actors.cast[0]?.profile_path}`}
            />
          )}
        </Flex>
      )}

      <Text
        color="whiteAlpha.900"
        my="5"
        textAlign="left"
        ml="8"
        fontWeight="semibold"
        fontSize="4xl"
        letterSpacing="1px"
      >
        Actors
      </Text>
      {actors.cast && (
        <Flex mt="5" justify="space-evenly" bg="black">
          <IconButton
            alignSelf="center"
            mr="3"
            icon={<ArrowLeftIcon />}
            onClick={() => {
              if (actorNum.first !== 0)
                setActorNum((prevNum) => {
                  return {
                    first: prevNum.first - 5,
                    second: prevNum.second - 5,
                  };
                });
            }}
          />
          {actors.cast.slice(actorNum.first, actorNum.second).map((actor) => {
            return (
              <Link
                to={`/actors/${actor.id}`}
                as={ReachLink}
                key={actor.id}
                _hover={{ transform: "scale(1.1)" }}
                transition="ease-in-out 0.1s"
              >
                <Box color="white" bg="whiteAlpha.300" mr="3" key={actor.id}>
                  {" "}
                  <Image
                    boxSize="15rem"
                    src={`${imageUrl}/${actor.profile_path}`}
                    borderRadius="5px"
                  />{" "}
                  <Text fontSize="lg" textAlign="center" p="5">
                    {" "}
                    {actor.name}{" "}
                  </Text>
                </Box>
              </Link>
            );
          })}{" "}
          <IconButton
            alignSelf="center"
            icon={<ArrowRightIcon />}
            onClick={() => {
              if (actors.cast.length >= actorNum.second)
                setActorNum((prevNum) => {
                  return {
                    first: prevNum.first + 5,
                    second: prevNum.second + 5,
                  };
                });
            }}
          />
        </Flex>
      )}
      <Text
        color="whiteAlpha.900"
        my="5"
        textAlign="left"
        ml="8"
        fontWeight="semibold"
        fontSize="4xl"
        letterSpacing="1px"
      >
        Similar Movies You May Like
      </Text>

      <Flex mt="5" justify="space-evenly" bg="black">
        <IconButton
          alignSelf="center"
          icon={<ArrowLeftIcon />}
          mr="3"
          onClick={() => {
            if (movieNum.first !== 0)
              setMovieNum((prevNum) => {
                return {
                  first: prevNum.first - 5,
                  second: prevNum.second - 5,
                };
              });
          }}
        />
        {similarMovsStatus === "success" &&
          similarMovs.slice(movieNum.first, movieNum.second).map((movie) => {
            return (
              <Link
                key={movie.id}
                as={ReachLink}
                to={`/movies/movie/${movie.id}`}
                _hover={{ transform: "scale(1.1)" }}
                transition="ease-in-out 0.1s"
              >
                <Box
                  textAlign="center"
                  minH="100%"
                  maxW="15rem"
                  color="white"
                  bg="whiteAlpha.300"
                  mr="3"
                >
                  {" "}
                  <Image
                    boxSize="15rem"
                    src={`${imageUrl}/${movie.poster_path}`}
                    borderRadius="5px"
                  />{" "}
                  <Text fontSize="lg" textAlign="center" p="5">
                    {" "}
                    {movie.title}{" "}
                  </Text>
                </Box>
              </Link>
            );
          })}{" "}
        <IconButton
          alignSelf="center"
          icon={<ArrowRightIcon />}
          onClick={() => {
            if (movieNum.second < 20)
              return setMovieNum((prevNum) => {
                return {
                  first: prevNum.first + 5,
                  second: prevNum.second + 5,
                };
              });
          }}
        />
      </Flex>
      {/* This is Single Movie Components:
      <div>
        Display: the poster of the movie and a description. 5 of the actors that
        played in the movie. a section for related movies, at least 5. the
        trailer of the movie. the director name. the movie rating and votes
        count.
        <br />
        <br />
        Functionalities:
        <br />
        Tha ability to bookmark the movie. Once you click on an actor you move
        to their page.
      </div> */}
    </Box>
  );
}
