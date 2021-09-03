import { Box, Flex, IconButton, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { similarMovies } from "../../Redux/Slices/moviesFilterSlice";
import { movieActors, movieDetails } from "../../Redux/Slices/moviesSlice";
import "./SingleMovie.scss";
import { Link as ReachLink } from "react-router-dom";
import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

const imageUrl = "https://image.tmdb.org/t/p/w500/";
export default function SingleMovie() {
  const [actorNum, setActorNum] = useState({ first: 0, second: 5 });
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movies.movieDetails.list);
  const similarMovs = useSelector(
    (state) => state.moviesFilter.similarMovies.list
  );
  const actors = useSelector((state) => state.movies.movieActors.list);
  useEffect(() => {
    dispatch(movieDetails(movieId));
    dispatch(similarMovies(movieId));
    dispatch(movieActors(movieId));
  }, [movieId]);

  return (
    <Box p="6" bg="black" minH="100vh">
      <Flex>
        <Image
          borderRadius="10px"
          h="xl"
          src={`${imageUrl}/${movie.poster_path}`}
        />
        <Box borderRadius="10px" ml="5" w="50%" boxShadow="lg" bg="white">
          <Text
            p="5"
            color="blackAlpha.800"
            fontWeight="bold"
            fontSize="4xl"
            borderBottom="#dc6208 solid 0.2rem"
          >
            {movie.original_title}
          </Text>
          <Text
            p="5"
            fontWeight="semibold"
            fontSize="lg"
            color="blackAlpha.700"
          >
            {movie.overview}
          </Text>
        </Box>
        {actors.cast && (
          <Image
            borderRadius="10px"
            ml="5"
            h="xl"
            src={`${imageUrl}/${actors.cast[0].profile_path}`}
          />
        )}
        {/* <Stack>
          {" "}
          {actors.cast.slice(0, 5).map((actor) => {
            return (
              <Box key={actor.id}>
                {" "}
                <Image src={`${imageUrl}/${actor.profile_path}`} />{" "}
              </Box>
            );
          })}{" "}
        </Stack> */}
      </Flex>

      <Text
        color="whiteAlpha.900"
        my="5"
        textAlign="left"
        ml="8"
        fontWeight="semibold"
        fontSize="2xl"
        letterSpacing="1px"
      >
        Actors
      </Text>
      {actors.cast && (
        <Flex align="center" mt="5" justify="space-evenly" bg="black">
          <IconButton
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
            );
          })}{" "}
          <IconButton
            icon={<ArrowRightIcon />}
            onClick={() => {
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
        fontSize="2xl"
        letterSpacing="1px"
      >
        Similar Movies You May Like
      </Text>

      <Flex mt="5" justify="space-evenly" bg="black">
        {similarMovs.slice(0, 5).map((movie) => {
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
