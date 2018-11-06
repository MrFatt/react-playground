import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import ControlledAndUncontrolled from "./components/contents/ControlledAndUncontrolled";
import Context from "./components/contents/Context";
import Portals from "./components/contents/Portals";
import Ref from "./components/contents/Ref";
import ErrorBoundaries from "./components/contents/ErrorBoundaries";
import StrictMode from "./components/contents/StrictMode";
import ContextDemo from "./components/contents/ContextSession/ContextDemo/ContextDemo";
import ReactDemo from "./components/contents/ContextSession/ReactDemo/ReactDemo";
import NewContextDemo from "./components/contents/ContextSession/NewContextDemo/NewContextDemo";
import ReduxDemo from "./components/contents/ContextSession/ReduxDemo/ReduxDemo";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ControlledAndUncontrolled" component={ControlledAndUncontrolled} />
          <Route exact path="/Context" component={Context} />
          <Route exact path="/Portals" component={Portals} />
          <Route exact path="/Ref" component={Ref} />
          <Route exact path="/ErrorBoundaries" component={ErrorBoundaries} />
          <Route exact path="/StrictMode" component={StrictMode} />
          <Route exact path="/context-demo/react" component={ReactDemo}/>
          <Route exact path="/context-demo/redux" component={ReduxDemo}/>
          <Route exact path="/context-demo/context" component={ContextDemo}/>
          <Route exact path="/context-demo/new-context" component={NewContextDemo}/>
        </Switch>
      </div>
    );
  }
}

export default App;
