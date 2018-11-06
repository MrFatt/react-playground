import React from "react";
import Sidebar from './Sidebar'
import Content from './Content'

const Body = ({ user }) => (
  <div className="body">
    <Sidebar user={user} />
    <Content user={user} />
  </div>
);

export default Body;
