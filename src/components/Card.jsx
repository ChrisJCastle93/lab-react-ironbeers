import React from "react";
import { Box, Center, useColorModeValue, Heading, Stack, Image } from "@chakra-ui/react";
import { Link } from 'react-router-dom'

export default function Card(props) {
  return (
    <Center py={12}>
      <Link to={`/${props.url}`}>
        <Box role={"group"} p={6} maxW={"330px"} w={"full"} bg={useColorModeValue("white", "gray.800")} boxShadow={"2xl"} rounded={"lg"} pos={"relative"} zIndex={1}>
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            height={"230px"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image rounded={"lg"} height={230} width={282} objectFit={"cover"} src={props.img} />
          </Box>
          <Stack pt={10} align={"center"}>
            <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
              {props.title}
            </Heading>
          </Stack>
        </Box>
      </Link>
    </Center>
  );
}
