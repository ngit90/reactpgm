import React, { Component } from 'react';

class Newcomp1 extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('Constructor: Initialize state');
  }

  componentDidMount() {
    console.log('Component did mount: Fetch data or set up subscriptions');
  }


  componentDidUpdate(prevProps, prevState) {
    console.log('Component did update');
  }

  componentWillUnmount() {
    console.log('Component will unmount: Clean up tasks');
  }

  componentDidCatch(error,info) {
    console.error(error);
  };
  
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <h2>Data from : {this.props.countdata}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default Newcomp1;
