import React, { Component } from 'react';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: true,
    };
    this.renderSomeSection = this.renderSomeSection.bind(this);
    this.delete = this.delete.bind(this);
  }
  delete(event) {
    this.props.onDeleteClick(this.props.id);
  }
  renderSomeSection() {
    if (this.state.isEditing) {
      console.log(this.props);
      return <div id="wrapper"> {this.props.note.title} {this.props.note.text} <i onClick={this.delete} className="fa fa-trash-o editing" /> </div>;
    } else {
      return <div id="wrapper"> {this.props.note.title} {this.props.note.text} <i onClick={this.delete} className="fa fa-trash-o editing" /> </div>;
    }
  }
  render() {
    return (
      <div>
        {this.renderSomeSection()}
      </div>
    );
  }
}

export default Note;
