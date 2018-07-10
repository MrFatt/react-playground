import React from "react";
import { Link } from "react-router-dom";
import catalogs from "../catalogs";

const Home = () => (
  <div>
    <h3>Cases: </h3>
    <ul>
      {catalogs.map(catalog => (
        <li key={catalog.path}>
          <Link to={catalog.path}>{catalog.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Home;
