import React, { Component } from 'react';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'hello',
      notes: this.props.notes,
    };
    this.getTitle = this.getTitle.bind();
    this.getContent = this.getContent.bind();
  }
  // Gets current title of state
  getTitle() {
    this.props.displayTitle(this.state.title);
    console.log(this.state.title);
  }
  // Gets current content of state
  getContent() {
    this.props.displayContent(this.state.notes);
  }
  // Drag
  // onStart () {
  //
  // }
  // onDrag () {
  //
  // }
  // onStop () {
  //
  // }
  // edit() {
  //
  // }
  // delete() {
  //
  // }
  render() {
    return (
      <div id="wrapper">
        <div className="getTitle"> {this.state.title}</div>
        <div className="getContent"> {this.state.notes}</div>
      </div>
    );
  }
}

export default Note;
