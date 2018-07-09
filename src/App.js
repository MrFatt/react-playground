import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import ControlledAndUncontrolled from "./components/contents/ControlledAndUncontrolled";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ControlledAndUncontrolled" component={ControlledAndUncontrolled} />
        </Switch>
      </div>
    );
  }
}

export default App;
