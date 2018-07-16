import React, { PureComponent } from "react";

export default class StringRef extends PureComponent {
  constructor() {
    super(...arguments);
    console.log("in constructor");
  }
  handleOnClick = () => {
    this.refs.input.focus();
  };

  componentWillMount() {
    console.log("in componentWillMount");
  }

  render() {
    console.log("in render");

    return (
      <div>
        <input ref="input" />
        <input
          type="button"
          onClick={this.handleOnClick}
          value="click to focus input"
        />
      </div>
    );
  }
}
