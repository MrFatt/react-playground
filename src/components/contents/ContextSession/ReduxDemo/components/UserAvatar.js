import React from "react";
import { connect } from "react-redux";

const UserAvatar = ({ user, size }) => (
  <img
    className={`user-avatar ${size || ""}`}
    alt="user avatar"
    src={user.avatar}
  />
);

export default connect(state => ({ user: state.user }))(UserAvatar);
