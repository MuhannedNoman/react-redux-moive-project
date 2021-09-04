import {
  Box,
  Link,
  Text,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Image,
  Button,
  LinkBox,
} from "@chakra-ui/react";
import MenuInput from "./MenuInput";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as ReachLink } from "react-router-dom";
import "./NavBar.scss";

import { allGenres } from "../../Redux/Slices/moviesFilterSlice";
import { SearchIcon } from "@chakra-ui/icons";
const imageUrl = "https://image.tmdb.org/t/p/w500/";
export default function NavBar() {
  const genresList = useSelector((state) => state.moviesFilter.allGenres.list);
  const searchResults = useSelector((state) => state.search.searchResult.list);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allGenres());
  }, []);

  return (
    <Box
      borderBottom="#dc6208 solid 0.2rem"
      px="10"
      h="4rem"
      bg="blackAlpha.800"
      color="white"
    >
      <Flex h="100%" align="center" justify="space-between">
        <Link as={ReachLink} to="/">
          <Text
            letterSpacing="1px"
            as="h1"
            fontSize="lg"
            fontWeight="bold"
            rounded="full"
          >
            TMDB
          </Text>
        </Link>

        <HStack fontSize="lg" spacing="5">
          <Link borderRadius="30px" to="/" as={ReachLink}>
            Home
          </Link>
          <Link to="/about" as={ReachLink}>
            About
          </Link>
          <Menu>
            <MenuButton>Movies</MenuButton>
            <MenuList bg="black" h="15rem" overflow="auto" fontSize="md">
              {genresList.map((genre) => (
                <LinkBox
                  key={genre.id}
                  to={`/movies/${genre.id}`}
                  as={ReachLink}
                >
                  <MenuItem
                    bg="whiteAlpha.300"
                    _hover={{ background: "whiteAlpha.500" }}
                    color="white"
                    key={genre.id}
                  >
                    {genre.name}{" "}
                  </MenuItem>
                </LinkBox>
              ))}
            </MenuList>
          </Menu>
          <Link to="/actors" as={ReachLink}>
            Actors
          </Link>

          <Link to="/bookmarks" as={ReachLink}>
            Bookmarks
          </Link>
        </HStack>
        <Menu>
          <MenuButton color="black" leftIcon={<SearchIcon />} as={Button}>
            Search
          </MenuButton>
          <MenuList p="3" bg="black" w="25rem">
            <MenuInput />
            <MenuDivider />
            {searchResults.slice(0, 4).map((movie) => (
              <Link
                to={`/movies/movie/${movie.id}`}
                as={ReachLink}
                _hover={{ textDecoration: "none", color: "gray" }}
                key={movie.id}
              >
                <MenuItem
                  p="0"
                  my="1"
                  _hover={{ background: "none", textDecoration: "none" }}
                >
                  <Flex w="100%" my="2">
                    <Image
                      boxSize="5rem"
                      src={`${imageUrl}/${movie.poster_path}`}
                    />
                    <Box p="4" w="100%" bg="whiteAlpha.300">
                      <Text as="h1">{movie.title}</Text>
                    </Box>
                  </Flex>{" "}
                </MenuItem>
              </Link>
            ))}
          </MenuList>
        </Menu>
      </Flex>
      {/* This is The Header Component it should contain navigation, Login, Search
      <ul>
        <li>Include a Home button that moves the user to the home page.</li>
        <li>
          Include a Genre button that display a dropdown list of all movies
          genre.
        </li>
        <li>Include a Actor button that moves the user to the Actors Page.</li>
        <li>Include an About page that describes the website.</li>
        <li>
          Include a Bookmarked button that displays the movies user wanted to
          bookmark
        </li>
        <li>
          Include Sign In button that displays a modal for the user to Sign in
          using Google. Once the use is logged in display their name and avatar.
        </li>
        <br />
        only show in home:
        <li>
          In Home page show a filter based on popular, release date, top rated,
          now playing, and upcoming
        </li>
      </ul> */}
    </Box>
  );
}
