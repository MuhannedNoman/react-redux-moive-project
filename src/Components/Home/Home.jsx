import React, { useEffect, useState } from "react";
import "./Home.scss";
import {
  Box,
  Flex,
  Image,
  IconButton,
  Text,
  VStack,
  HStack,
  Icon,
  Badge,
  LinkBox,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import {
  getPopularMovies,
  getTrendingMovies,
} from "../../Redux/Slices/moviesSlice";
import { FaImdb } from "react-icons/fa";
const imageUrl = "https://image.tmdb.org/t/p/w500/";
export default function Home() {
  const [movieNum, setMovieNum] = useState({
    first: 0,
    second: 5,
  });
  const [trendingNum, setTrendingNum] = useState({
    first: 0,
    second: 5,
  });
  const popularMovies = useSelector((state) => state.movies.popular.list);
  const trendingMovies = useSelector((state) => state.movies.trending.list);
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.moviesFilter.allGenres.list);

  const newPopularMovies = popularMovies.map((movie) => {
    const newIds = movie.genre_ids.map((id) => {
      const genre = genres.find((genre) => {
        return genre.id === id;
      });
      return genre.name;
    });

    return { ...movie, genre_ids: newIds };
  });
  const newTrendingMovies = trendingMovies.map((movie) => {
    const newIds = movie.genre_ids.map((id) => {
      const genre = genres.find((genre) => {
        return genre.id === id;
      });
      return genre.name;
    });

    return { ...movie, genre_ids: newIds };
  });
  useEffect(() => {
    if (popularMovies.length === 0) dispatch(getPopularMovies());
    if (trendingMovies.length === 0) dispatch(getTrendingMovies());
    setMovieNum({
      first: 0,
      second: 5,
    });
    setTrendingNum({
      first: 0,
      second: 5,
    });
  }, []);
  console.log(newTrendingMovies);
  console.log(newPopularMovies);
  return (
    <Box bg="black" minH="100vh" py="5" px="3">
      <Text
        p="4"
        textAlign="center"
        bg="whiteAlpha.100"
        color="white"
        as="h1"
        fontWeight="bold"
        fontSize="4xl"
      >
        Popular Movies
      </Text>
      <Flex py="3" justify="space-evenly">
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
        {newPopularMovies
          .slice(movieNum.first, movieNum.second)
          .map((movie) => (
            <LinkBox
              as={ReachLink}
              to={`/movies/movie/${movie.id}`}
              key={movie.id}
              _hover={{ transform: "scale(1.04)" }}
              transition="ease-in-out 0.1s"
            >
              <Box
                key={movie.id}
                color="white"
                bg="whiteAlpha.300"
                boxShadow="lg"
                overflow="hidden"
                w="15rem"
                minH="100%"
              >
                <Image
                  objectFit="fill"
                  boxSize="15rem"
                  src={`${imageUrl}/${movie.poster_path}`}
                />{" "}
                <Box textAlign="center">
                  <Text fontWeight="bold" fontSize="lg" as="h2">
                    {" "}
                    {movie.title}{" "}
                  </Text>
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
                    <HStack spacing="1">
                      <Icon color="#dc6208" boxSize={6} as={FaImdb} />{" "}
                      <Badge> {movie.vote_average} </Badge>
                    </HStack>
                  </VStack>
                </Box>
              </Box>{" "}
            </LinkBox>
          ))}
        <IconButton
          alignSelf="center"
          icon={<ArrowRightIcon />}
          onClick={() => {
            if (popularMovies.length >= movieNum.second)
              setMovieNum((prevNum) => {
                return {
                  first: prevNum.first + 5,
                  second: prevNum.second + 5,
                };
              });
          }}
        />
      </Flex>
      <Text
        p="4"
        textAlign="center"
        bg="whiteAlpha.100"
        color="white"
        as="h1"
        fontWeight="bold"
        fontSize="4xl"
      >
        Trending Movies
      </Text>
      <Flex py="3" justify="space-evenly">
        <IconButton
          alignSelf="center"
          icon={<ArrowLeftIcon />}
          mr="3"
          onClick={() => {
            if (trendingNum.first !== 0)
              setTrendingNum((prevNum) => {
                return {
                  first: prevNum.first - 5,
                  second: prevNum.second - 5,
                };
              });
          }}
        />
        {newTrendingMovies
          .slice(trendingNum.first, trendingNum.second)
          .map((movie) => (
            <LinkBox
              as={ReachLink}
              to={`/movies/movie/${movie.id}`}
              key={movie.id}
              _hover={{ transform: "scale(1.04)" }}
              transition="ease-in-out 0.1s"
            >
              <Box
                key={movie.id}
                color="white"
                bg="whiteAlpha.300"
                boxShadow="lg"
                overflow="hidden"
                w="15rem"
                minH="100%"
              >
                <Image
                  objectFit="fill"
                  boxSize="15rem"
                  src={`${imageUrl}/${movie.poster_path}`}
                />{" "}
                <Box textAlign="center">
                  <Text fontWeight="bold" fontSize="lg" as="h2">
                    {" "}
                    {movie.title}{" "}
                  </Text>
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
                    <HStack spacing="1">
                      <Icon color="#dc6208" boxSize={6} as={FaImdb} />{" "}
                      <Badge> {movie.vote_average} </Badge>
                    </HStack>
                  </VStack>
                </Box>
              </Box>{" "}
            </LinkBox>
          ))}
        <IconButton
          alignSelf="center"
          icon={<ArrowRightIcon />}
          onClick={() => {
            if (trendingMovies.length >= trendingNum.second)
              setTrendingNum((prevNum) => {
                return {
                  first: prevNum.first + 5,
                  second: prevNum.second + 5,
                };
              });
          }}
        />
      </Flex>
    </Box>
  );
}
