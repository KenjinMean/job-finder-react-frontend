import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Update state to indicate that an error has occurred
    this.setState({ hasError: true });

    // You can also log the error to an error tracking service
    console.error("Error:", error);
  }

  render() {
    if (this.state.hasError) {
      // You can render a custom error UI here
      return <div>Something went wrong. Please try again later.</div>;
    }

    // Render the child components if no error has occurred
    return this.props.children;
  }
}

export default ErrorBoundary;
