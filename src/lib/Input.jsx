import React, { Component } from "react";
import { Input as I } from 'rebass'


class Input extends React.Component {
  render() {
    return (
        <I defaultValue='Hello' placeholder='Input' />
    );
  }
}
export default Input