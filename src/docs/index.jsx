import React from "react";
import { render } from "react-dom";
import Button from "../../lib/Button";
import Input from "../../lib/Input";
import "./styles.css";

function Demo() {
  return (
    <div>
      <h1>Demo with examples of the component</h1>
      <Button>Wow what a button</Button>
      <Input>Wow what a box</Input>
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
