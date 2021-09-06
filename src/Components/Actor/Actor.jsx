import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Actor.scss";
import { getActors } from "../../Redux/Slices/actorsSlice";
import {
  Flex,
  Box,
  Image,
  Skeleton,
  Text,
  LinkBox,
  Stack,
  Spinner,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

const imageUrl = "https://image.tmdb.org/t/p/w500/";
export default function Actor() {
  const actors = useSelector((state) => state.actors.actors.list);

  const actorsStatus = useSelector((state) => state.actors.actors.status);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getActors());
  }, []);
  if (actorsStatus !== "success")
    return (
      <Stack align="center" justify="center" bg="black" h="100vh">
        <Spinner size="xl" color="white" />
      </Stack>
    );
  return (
    <Flex
      direction={["column", "row", "row", "row"]}
      align="center"
      justify="center"
      wrap="wrap"
      spacing="5"
      bg="black"
    >
      {actors.map((actor) => (
        <LinkBox
          as={ReachLink}
          to={`/actors/${actor.id}`}
          key={actor.id}
          m="1rem"
          _hover={{ transform: "scale(1.1)" }}
          transition="ease-in-out 0.1s"
        >
          <Box
            m="5"
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
              fallback={<Skeleton h="100%"></Skeleton>}
              src={`${imageUrl}/${actor.profile_path}`}
            />{" "}
            <Box py="3" textAlign="center">
              <Text fontWeight="bold" fontSize="lg" as="h2">
                {" "}
                {actor.name}{" "}
              </Text>
            </Box>
          </Box>
        </LinkBox>
      ))}
    </Flex>
  );
}
