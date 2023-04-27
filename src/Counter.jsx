import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0
        };
      }
    
      incrementCount = () => {
        this.setState({
          count: this.state.count + 1
        });
      }
    
      decrementCount = () => {
        this.setState({
          count: this.state.count - 1
        });
      }
    
      render() {
        return (
          <div>
            <h1>Counter App</h1>
            <h2>Count: {this.state.count}</h2>
            <button onClick={this.incrementCount}>Increment</button>&nbsp;&nbsp;
            <button onClick={this.decrementCount}>Decrement</button>
          </div>
        );
      }
    }
