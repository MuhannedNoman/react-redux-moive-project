import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Flex,
  Spacer,
  Center,
  Text,
  Square,
  Box,
  Link,
  Image,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <div>
      <Flex bg="blue.50" color="black">
        <Box flex="1" bgGradient="linear(to-l, #EBF8FF, #E6FFFA)">
          <Flex
            justify="center"
            align="center"
            direction="column"
            mt="4"
            ml="4"
          >
            <Text mb="1" p="2" fontSize="2xl">
              Your Movie Treasure
            </Text>
            <Text fontSize="md">© 2022</Text>
          </Flex>
        </Box>
        <Spacer />
        <Box flex="1" bg="blue.50">
          <Flex justify="center" align="start" direction="column" mt="4" ml="4">
            <Text fontWeight="semibold" mb="1" fontSize="lg">
              Sections
            </Text>
            <Link mb="0.5" href="#">
              Home
            </Link>
            <Link mb="0.5" href="#">
              Actors
            </Link>
            <Link mb="0.5" href="#">
              Movies
            </Link>
            <Link mb="0.5" href="#">
              Signup
            </Link>
            <Link mb="0.5" href="#">
              Signin
            </Link>
          </Flex>
        </Box>
        <Spacer />
        <Box flex="1" bg="blue.50">
          <Flex justify="center" align="start" direction="column" mt="4" ml="4">
            <Text fontWeight="semibold" mb="1" fontSize="md">
              About Us
            </Text>
            <Flex>
              <Image
                src="https://avatars.githubusercontent.com/u/57989556?v=4"
                alt="Profile-Image"
                boxSize="20px"
                objectFit="cover"
                borderRadius="50%"
                mr="1"
              />
              <Link mb="0.5" href="https://github.com/haticecs">
                Hatice Demir
              </Link>
            </Flex>
            <Flex>
              <Image
                src="https://avatars.githubusercontent.com/u/62790332?v=4"
                alt="Profile-Image"
                boxSize="20px"
                objectFit="cover"
                borderRadius="50%"
                mr="1"
              />
              <Link mb="0.5" href="https://github.com/orkunseyman">
                Orkun Seyman
              </Link>
            </Flex>
            <Flex>
              <Image
                src="https://avatars.githubusercontent.com/u/60944453?v=4"
                alt="Profile-Image"
                boxSize="20px"
                objectFit="cover"
                borderRadius="50%"
                mr="1"
              />
              <Link mb="0.5" href="https://github.com/OzerOzturk">
                Özer Öztürk
              </Link>
            </Flex>
            <Flex>
              <Image
                src="https://avatars.githubusercontent.com/u/63050857?v=4"
                alt="Profile-Image"
                boxSize="20px"
                objectFit="cover"
                borderRadius="50%"
                mr="1"
              />
              <Link mb="0.5" href="https://github.com/sebnemgormus">
                Şebnem Görmüş
              </Link>
            </Flex>
          </Flex>
        </Box>
        <Spacer />
        <Box flex="1" bgGradient="linear(to-l, #E6FFFA,#EBF8FF )" mt="8" mr="2">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/1101/1101793.png"
            alt="Authentic Movie App Logo"
            boxSize="100px"
            objectFit="cover"
          />
        </Box>
      </Flex>
    </div>
  );
};

export default Footer;
