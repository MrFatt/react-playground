import React from "react";
import Nav from "./components/Nav";
import Body from "./components/Body";
import "../style.css";
import { UserContext } from "./context";

class ReactDemo extends React.Component {
  state = {
    user: {
      avatar:
        "https://pbs.twimg.com/profile_images/1017242934435983360/_yesSDzM_400x400.jpg",
      name: "Dave",
      followers: 1234,
      following: 123
    }
  };

  render() {
    const { user } = this.state;

    return (
      <div className="app">
        <UserContext.Provider value={this.state.user}>
          <Nav user={user} />
          <Body user={user} />
        </UserContext.Provider>
      </div>
    );
  }
}
export default ReactDemo;
