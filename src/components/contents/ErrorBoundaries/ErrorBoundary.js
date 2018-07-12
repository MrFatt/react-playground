import React, { PureComponent } from "react";

export default class ErrorBoundary extends PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    console.log("error:", error);
    console.log("info:", info);
    this.setState({ hasError: true });
  }

  render() {
    return this.state.hasError ? (
      <p>Error happens ¯\_(ツ)_/¯</p>
    ) : (
      this.props.children
    );
  }
}
