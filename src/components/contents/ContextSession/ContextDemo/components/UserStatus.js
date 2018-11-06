import React from "react";
import UserAvatar from "./UserAvatar";
import { UserContext } from "../context";

const UserStatus = () => (
  <UserContext.Consumer>
    {user => (
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
    )}
  </UserContext.Consumer>
);

export default UserStatus;
