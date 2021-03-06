import React from "react";
import Nav from './components/Nav'
import Body from './components/Body'
import "../style.css"

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
        <Nav user={user} />
        <Body user={user} />
      </div>
    );
  }
}
export default ReactDemo;
