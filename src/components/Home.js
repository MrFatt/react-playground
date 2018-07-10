import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h3>Cases: </h3>
    <ul>
      <li>
        <Link to='ControlledAndUncontrolled'>Controlled Component & Uncontrolled Component</Link>
      </li>
      <li>
        <Link to='Context'>ContextAPI</Link>
      </li>
    </ul>
  </div>
);

export default Home;
