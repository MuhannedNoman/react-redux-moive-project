import { Flex, Text, Heading, Center } from "@chakra-ui/react";
import Card from "./Card";
const List = ({ listTitle, listData }) => {
  return (
    <Center p="10" flexDir={"column"} w={"100%"}>
      {/* If there is a list title render it, otherwise render just list without title */}
      {listTitle && (
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", lg: "6xl" }}
          p="5px"
        >
          <Text
            as={"span"}
            position={"relative"}
            _after={{
              content: "''",
              width: "full",
              height: "30%",
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: "red.300",
              zIndex: -1,
            }}
          >
            {listTitle}
          </Text>
          <br />
        </Heading>
      )}
      <Flex
        flexWrap={"wrap"}
        rowGap="10px"
        alignItems="center"
        justifyContent={"center"}
        gap="10px"
        alignSelf="center"
      >
        {listData?.map((item) => (
          <Card
            title={item?.title}
            vote_average={item?.vote_average}
            poster_path={item?.poster_path}
            key={item?.id}
          />
        ))}
      </Flex>
    </Center>
  );
};

export default List;
