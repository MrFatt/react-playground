import React from "react";
import { UserContext } from "../context";

class UserAvatar extends React.Component {
  render() {
    const user= this.context;
    const { size } = this.props;
    return (
      <img
        className={`user-avatar ${size || ""}`}
        alt="user avatar"
        src={user.avatar}
      />
    );
  }
}

UserAvatar.contextType = UserContext;

export default UserAvatar;
