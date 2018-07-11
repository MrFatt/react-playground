import React from "react";
import LoginForm from "./LoginForm";

const MiddlewareComponent = React.forwardRef((props, ref) => (
  <div style={{border:'3px solid green'}}>
    <p> This is a middleware component </p>
    <LoginForm {...props} ref={ref} />
  </div>
));

export default MiddlewareComponent;
