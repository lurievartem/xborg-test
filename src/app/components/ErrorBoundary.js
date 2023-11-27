'use client'

import { Component } from 'react';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error) {
    //do something
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      return <div>some app error</div>;
    }

    return this.props.children;
  }
}
