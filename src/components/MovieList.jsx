import React from "react";
import List from "./List";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchMovies } from "../features/movies";
import { fetchSearchedMovies } from "../features/searchedMovies";

import {
  ModalOverlay,
  Modal,
  Button,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  useDisclosure,
  Center,
  Input,
} from "@chakra-ui/react";

const Overlay = () => (
  <ModalOverlay
    bg="none"
    backdropFilter="auto"
    backdropInvert="80%"
    backdropBlur="2px"
  />
);

const MovieList = () => {
  const mostPopularMovies = useSelector(
    (state) => state.movies.value.mostPopularMovies
  );
  const dispatch = useDispatch();

  const searchedMovies = useSelector(
    (state) => state.searchedMovies.value.searchedMovies
  );

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userInput, setUserInput] = React.useState("");
  const [overlay, setOverlay] = React.useState(<Overlay />);

  const handleMovieSearch = () => {
    onClose();
    dispatch(fetchSearchedMovies(userInput));
  };
  return (
    <Center flex={true} flexDir="column" mt={20}>
      <Button
        ml="4"
        onClick={() => {
          onOpen();
        }}
        bg="red.300"
        fontSize={"xl"}
      >
        👉 Click me 👈
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Movie name</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Venom"
            />
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => handleMovieSearch()}>Search</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <List
        listData={
          searchedMovies.length > 0 ? searchedMovies : mostPopularMovies
        }
        listTitle={
          searchedMovies.length > 0
            ? "Here what I found for " + userInput
            : "Search your fav movies"
        }
      />
    </Center>
  );
};

export default MovieList;
