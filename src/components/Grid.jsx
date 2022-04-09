import React from "react";
import { Grid } from "@chakra-ui/react";
import Card from "./Card";
import randombeer from "../assets/random-beer.png";
import beers from "../assets/beers.png";
import newbeer from "../assets/new-beer.png";
import { useState, useEffect } from "react";
import axios from "axios";

export default function GridCard() {
  let [beer, setBeer] = useState({});

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((result) => {
        setBeer(result.data, {});
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Grid templateColumns="repeat(3, 1fr)" w="80%" mx="auto" my={0} gap={6}>
      <Card w="100%" h="10" img={randombeer} url={`allbeers/${beer._id}`} title="Random Beer" />
      <Card w="100%" h="10" img={beers} url="allbeers" title="All Beers" />
      <Card w="100%" h="10" img={newbeer} url="new" title="New Beer" />
    </Grid>
  );
}
