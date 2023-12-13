import React, { Component, ErrorInfo } from "react";
import { ErrorBoundaryProps, ErrorBoundaryTypes } from "./react-ts-env";

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryTypes> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if(this.state.error) {
    return (
      <>
        <h2>Somethings went wrong... </h2>
      </>
    );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
