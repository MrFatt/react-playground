import React, { PureComponent } from "react";
import MiddlewareComponent from "./MiddlewareComponent";

export default class OutermostComponent extends PureComponent {
  constructor() {
    super(...arguments);
    this.loginForm = React.createRef();
  }

  clearLoginForm = () => {
    this.loginForm.current.clearForm();
  };

  render() {
    return (
      <div style={{border:'3px solid red'}}>
        <p> Outermost Component </p>
        <MiddlewareComponent ref={this.loginForm} />
        <br />
        <button onClick={this.clearLoginForm}>Reset Form</button>
      </div>
    );
  }
}
