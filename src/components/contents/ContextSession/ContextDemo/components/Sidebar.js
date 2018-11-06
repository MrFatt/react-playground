import React from "react";
import UserStatus from "./UserStatus";

const Sidebar = ({ user }) => (
  <div className="sidebar">
    <UserStatus user={user} />
  </div>
);

export default Sidebar;
