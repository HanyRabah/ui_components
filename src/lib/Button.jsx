import React, { Component } from "react";
import { Provider, Heading,  Button as Btn } from 'rebass'


class Button extends React.Component {
  handleClick = () => {
    console.log("Click!");
  };

  render() {
    return (
      <Btn onClick={this.handleClick}>Rebass</Btn>
    );
  }
}
export default Button