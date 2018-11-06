import React from "react";
import { Provider } from "react-redux";

import Nav from "./components/Nav";
import Body from "./components/Body";
import { store } from "./user.duck";
import "../style.css";

const ReduxDemo = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Nav />
        <Body />
      </div>
    </Provider>
  );
};

export default ReduxDemo;
