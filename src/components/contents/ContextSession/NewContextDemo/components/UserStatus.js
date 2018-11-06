import React from "react";
import UserAvatar from "./UserAvatar";
import { UserContext } from "../context";

class UserStatus extends React.Component {
  render() {
    const user = this.context;
    return (
      <div className="user-stats">
        <div>
          <UserAvatar user={user} />
          {user.name}
        </div>
        <div className="stats">
          <div>{user.followers} Followers</div>
          <div>Following {user.following}</div>
        </div>
      </div>
    );
  }
}

UserStatus.contextType = UserContext;
export default UserStatus;
