import React, { PureComponent } from 'react';

export default class Uncontrolled extends PureComponent {
  constructor(props) {
    super(props);
    this.input = null;
  }

  handleOnSubmit = () => {
    window.alert(`Input value is ${this.input.value}`);
  };

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input ref={element => this.input = element}/>
          <button>Submit!</button>
        </form>
      </div>
    )
  }
}