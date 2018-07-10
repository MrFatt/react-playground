import React from "react";
import Controlled from "./Controlled";
import Uncontrolled from "./Uncontrolled";

const ControlledAndUncontrolled = () => (
  <div>
    <h3> Controlled Form vs Uncontrolled Form </h3>
    Controlled Form:
    <Controlled />
    <hr />
    Uncontrolled Form :
    <Uncontrolled/>
  </div>
);

export default ControlledAndUncontrolled;
