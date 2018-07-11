import React, { PureComponent } from "react";

export default class LoginForm extends PureComponent {
  constructor() {
    super(...arguments);
    this.form = React.createRef();
  }

  clearForm = () => {
    this.form.current.reset();
  };

  render() {
    return (
      <div style={{border:'3px solid blue'}}>
        <p>Login form </p>
        <form ref={this.form}>
          Username: <input />
          <br />
          Password: <input type="password" />
        </form>
      </div>
    );
  }
}
