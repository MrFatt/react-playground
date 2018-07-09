import React, { PureComponent } from "react";

export default class Controlled extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  handleOnChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  handleOnSubmit = () => {
    window.alert(`Input value is ${this.state.inputValue}`);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="number"
            value={this.state.inputValue}
            onChange={this.handleOnChange}
          />
          <button>Submit!</button>
        </form>
      </div>
    );
  }
}
