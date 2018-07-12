import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import Counter from "./Counter";

export default class ErrorBoundaries extends React.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      count: 0
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    return (
      <div>
        <h3>Error handling in React 16</h3>
        <ErrorBoundary>
          <Counter handleClick={this.handleClick} count={this.state.count} />
        </ErrorBoundary>
        <button>Nothing happens</button>
      </div>
    );
  }
}
