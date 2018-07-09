import React, { PureComponent } from "react";

export default class Controlled extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }

  handleOnChange = event => {
    const { value } = event.target;
    if(/^\d+$/.test(value)){
      this.setState({
        inputValue: value
      });
    }else{
      window.alert('error, input must be a number')
    }
  };

  handleOnSubmit = () => {
    window.alert(`Input value is ${this.state.inputValue}`);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            value={this.state.inputValue}
            onChange={this.handleOnChange}
          />
          <button>Submit!</button>
        </form>
      </div>
    );
  }
}
