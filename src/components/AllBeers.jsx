import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import BeerCard from "./BeerCard";

export default function AllBeers(props) {
  let [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((result) => {
        setBeers(result.data, []);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div>
      {beers.map((beer, index) => {
        return <BeerCard key={index} name={beer.name} id={beer._id} tagline={beer.tagline} img={beer.image_url} beer={beer} />;
      })}
    </div>
  );
}
