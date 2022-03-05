import React from "react";
import { Box, Center, Image, Flex, Badge, Text } from "@chakra-ui/react";
import { MdStar } from "react-icons/md";

const MovieCard = ({ title, vote_average, poster_path }) => {
  return (
    <Box
      maxW="180px"
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      p="5px"
      cursor={"pointer"}
    >
      <Image
        shadow="md"
        borderRadius="md"
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : "https://m.media-amazon.com/images/M/MV5BNzAwNzUzNjY4MV5BMl5BanBnXkFtZTgwMTQ5MzM0NjM@._V1_FMjpg_UX1000_.jpg"
        }
        height="220px"
        width="160px"
        justifySelf="center"
        alignSelf="center"
      />
      <Flex mt={2} align="center" gap="10px">
        <Text fontSize="sm" fontWeight="semibold" lineHeight="short">
          {title}
        </Text>
      </Flex>
      <Flex mt={2} align="center">
        <Box as={MdStar} color="orange.400" />
        <Text ml={1} fontSize="sm">
          <b>{vote_average}</b>
        </Text>
      </Flex>
    </Box>
  );
};

export default MovieCard;
