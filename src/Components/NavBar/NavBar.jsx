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

import { allGenres } from "../../Redux/Slices/moviesFilterSlice";
import { SearchIcon } from "@chakra-ui/icons";
import SignIn from "./SignIn";
import UserProfile from "./UserProfile";
import AlertModal from "./Alert";
import { emptySearchValue } from "../../Redux/Slices/searchSlice";

const imageUrl = "https://image.tmdb.org/t/p/w500/";
export default function NavBar() {
  const genresList = useSelector((state) => state.moviesFilter.allGenres.list);
  const searchResults = useSelector((state) => state.search.searchResult.list);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allGenres());
  }, []);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <Box
      borderBottom="#dc6208 solid 0.2rem"
      px="10"
      h="4rem"
      bg="blackAlpha.800"
      color="white"
    >
      <Flex h="100%" align="center" justify="space-between">
        <HStack spacing="10">
          <Link mr="10" as={ReachLink} to="/">
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
          <Menu>
            <MenuButton
              bg="transparent"
              color="white"
              leftIcon={<SearchIcon />}
              as={Button}
              _hover={{ background: "transparent" }}
              _active={{ background: "transparent" }}
              outline="none"
              border="none"
            >
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
                    <Flex
                      w="100%"
                      my="2"
                      onClick={() => dispatch(emptySearchValue())}
                    >
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
        </HStack>

        <HStack fontSize="lg" spacing="5">
          <Link borderRadius="30px" to="/" as={ReachLink}>
            Home
          </Link>

          <Menu>
            <MenuButton>Movies</MenuButton>
            <MenuList bg="black" h="15rem" overflow="auto" fontSize="md">
              {genresList.map(
                (genre) =>
                  genre.name !== "Documentary" && (
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
                  )
              )}
            </MenuList>
          </Menu>
          <Link to="/actors" as={ReachLink}>
            Actors
          </Link>

          {isLoggedIn ? (
            <Link to="/bookmarks" as={ReachLink}>
              Bookmarks
            </Link>
          ) : (
            <AlertModal />
          )}
        </HStack>

        {isLoggedIn && (
          <HStack>
            {" "}
            <UserProfile />
            <SignIn />
          </HStack>
        )}
        {!isLoggedIn && <SignIn />}
      </Flex>
    </Box>
  );
}
