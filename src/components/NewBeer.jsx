import React, { Component } from "react";
import { Form, FormLabel, Input, Button, Textarea } from "@chakra-ui/react";
import axios from "axios";

class NewBeer extends Component {
  state = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  };

  handleChange(event) {
    let { name, value, type } = event.target;
    if (type === "checkbox") {
      value = event.target.checked;
    }
    this.setState({ [name]: value });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('SUBMITTING')
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", {
        name: this.state.name,
        tagline: this.state.tagline,
        description: this.state.description,
        first_brewed: this.state.first_brewed,
        brewers_tips: this.state.brewers_tips,
        attenuation_level: this.state.attenuation_level,
        contributed_by: this.state.name,
      })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
    this.setState({
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: 0,
      contributed_by: "",
    });
  };

  render() {
    return (
      <form w={250} mx="auto" onSubmit={this.handleFormSubmit}>
        <FormLabel htmlFor="name">Name:</FormLabel>
        <Input type="text" id="name" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />

        <FormLabel>tagline:</FormLabel>
        <Input type="text" name="tagline" value={this.state.tagline} onChange={(e) => this.handleChange(e)} />

        <FormLabel>Description</FormLabel>
        <Textarea type="text" name="description" value={this.state.description} onChange={(e) => this.handleChange(e)} />

        <FormLabel>First Brewed:</FormLabel>
        <Input type="text" name="first_brewed" value={this.state.first_brewed} onChange={(e) => this.handleChange(e)} />

        <FormLabel>Brewer's Tips:</FormLabel>
        <Input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={(e) => this.handleChange(e)} />

        <FormLabel>Attenuation Level:</FormLabel>
        <Input type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={(e) => this.handleChange(e)} />

        <FormLabel>Contributed By:</FormLabel>
        <Input type="text" name="contributed_by" value={this.state.contributed_by} onChange={(e) => this.handleChange(e)} />

        <Button type="submit">Submit</Button>
      </form>
    );
  }
}

export default NewBeer;
