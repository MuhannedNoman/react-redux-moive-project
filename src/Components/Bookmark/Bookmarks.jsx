import {
  Flex,
  LinkBox,
  Image,
  Text,
  Box,
  HStack,
  VStack,
  Icon,
  Badge,
  Stack,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { FaImdb } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link as ReachLink } from "react-router-dom";

import Bookmark from "../../Utilities/Bookmark";
const imageUrl = "https://image.tmdb.org/t/p/w500/";

export default function Bookmarks() {
  const bookmarkedMovies = useSelector((state) => state.bookmarks.bookmarks);
  if (bookmarkedMovies.length === 0) {
    return (
      <Stack
        align="center"
        justify="center"
        color="white"
        minH="95vh"
        bg="black"
      >
        <Text fontSize="5xl" fontWeight="bold" letterSpacing="1px">
          Empty!
        </Text>
        <Link to="/home" as={ReachLink}>
          Bookmark Some Movies Now!
        </Link>
      </Stack>
    );
  }
  return (
    <Box bg="black" minH="100vh" spacing="5">
      <Flex
        direction={["column", "row", "row", "row"]}
        justify="center"
        wrap="wrap"
        spacing="5"
        bg="whiteAlpha.200"
      >
        {bookmarkedMovies.map((movie) => {
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
                <Image
                  objectFit="fill"
                  boxSize="15rem"
                  src={`${imageUrl}/${movie.poster_path}`}
                />

                <Box textAlign="center">
                  <Text fontWeight="bold" fontSize="lg" as="h2">
                    {" "}
                    {movie.title}{" "}
                  </Text>
                </Box>
              </LinkBox>
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
                <Bookmark movie={movie} />
              </VStack>
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
}
