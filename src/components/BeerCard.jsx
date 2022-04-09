import React from "react";

import { Link } from "react-router-dom";

import { Center, Flex, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";

export default function BeerCard(props) {
  return (
    <Link to={`/allbeers/${props.id}`}>
      <Center py={6}>
        <Stack borderWidth="1px" borderRadius="lg" w={{ sm: "100%", md: "540px" }} height={{ sm: "476px", md: "20rem" }} direction={{ base: "column", md: "row" }} bg={useColorModeValue("white", "gray.900")} boxShadow={"2xl"} padding={4}>
          <Flex flex={1} bg="white">
            <Image objectFit="contain" boxSize="100%" src={props.img} />
          </Flex>
          <Stack flex={1} flexDirection="column" justifyContent="center" alignItems="center" p={1} pt={2}>
            <Heading fontSize={"2xl"} fontFamily={"body"}>
              {props.name}
            </Heading>
            <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
              {props.tagline}
            </Text>
          </Stack>
        </Stack>
      </Center>
    </Link>
  );
}
