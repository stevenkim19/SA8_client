import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: Immutable.Map(),
    };
  }
  render() {
    return (
      <div>
        <p> hello!</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
