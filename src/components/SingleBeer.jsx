import React from "react";
import { Badge, Button, Center, Flex, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function SingleBeer(props) {
  let { id } = useParams();
  let [beer, setBeer] = useState({});

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((result) => {
        setBeer(result.data);
      })
      .catch((err) => console.log(err));
  });

  return (
    <Center py={6}>
      <Stack borderWidth="1px" borderRadius="lg" w={{ sm: "100%", md: "540px" }} direction={{ base: "column", md: "row" }} bg="white" boxShadow={"2xl"} padding={4}>
        <Flex flex={1} justifyContent="center" alignItems="center" bg="white">
          <Image objectFit="contain" boxSize="70%" src={beer.image_url} />
        </Flex>
        <Stack flex={1} flexDirection="column" justifyContent="center" alignItems="center" p={1} pt={2}>
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            {beer.name}
          </Heading>
          <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
            {beer.tagline}
          </Text>
          <Text textAlign={"center"} color={useColorModeValue("gray.700", "gray.400")} px={3}>
            {beer.description}
          </Text>
          <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
            <Badge px={2} py={1} bg={useColorModeValue("gray.50", "gray.800")} fontWeight={"400"}>
              {beer.contributed_by}
            </Badge>
          </Stack>

          <Stack width={"100%"} mt={"2rem"} direction={"row"} padding={2} justifyContent={"space-between"} alignItems={"center"}>
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              _focus={{
                bg: "gray.200",
              }}
            >
              {beer.first_brewed}
            </Button>
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              _focus={{
                bg: "gray.200",
              }}
            >
              AB: {beer.attenuation_level}
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
}
