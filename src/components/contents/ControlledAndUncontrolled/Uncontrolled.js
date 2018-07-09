import React, { PureComponent } from "react";

export default class Uncontrolled extends PureComponent {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  handleOnSubmit = () => {
    const { value } = this.input.current;
    window.alert(
      /^\d+$/.test(value)
        ? `Input value is ${value}`
        : `Error, Input value must be a number`
    );
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input ref={this.input} />
          <button>Submit!</button>
        </form>
      </div>
    );
  }
}
