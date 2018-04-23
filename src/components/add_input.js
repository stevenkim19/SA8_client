import React, { Component } from 'react';

class InputBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Note Title',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }
  onSubmit() {
    this.props.addTitle(this.state.title);
  }
  onInputChange(event) {
    this.setState({ title: event.target.value });
  }
  render() {
    return (
      <div id="search-bar">
        <input onChange={this.onInputChange} value={this.state.title} className="inputbars" />
        <button onClick={this.onSubmit} id="submitbtn"> Create Note </button>
      </div>
    );
  }
}

export default InputBar;
