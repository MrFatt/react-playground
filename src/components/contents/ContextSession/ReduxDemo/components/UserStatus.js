import React from "react";
import { connect } from "react-redux";
import UserAvatar from "./UserAvatar";

const UserStatus = ({ user }) => (
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

export default connect(state => ({ user: state.user }))(UserStatus);
