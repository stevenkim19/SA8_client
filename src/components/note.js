import React, { Component } from 'react';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: true,
    };
    this.renderSomeSection = this.renderSomeSection.bind(this);
    this.delete = this.delete.bind(this);
    this.edit = this.edit.bind(this);
    // this.onInputChangeNote = this.onInputChangeNote.bind(this);
  }
  // onInputChangeNote(event) {
  //   this.props.onEditNote(event.target.value);
  // }
  delete(event) {
    this.props.onDeleteClick(this.props.id);
  }
  edit(event) {
    // change state of editing
    if (!this.state.isEditing) {
      this.setState({ isEditing: true });
    } else {
      this.setState({ isEditing: false });
    }
  }
  // drag(event, ui) {
  //   this.props.onDrag(event, ui, this.props.id);
  // }
  renderSomeSection() {
    if (this.state.isEditing) {
      console.log(this.props);
      return (
        <div className="wrapper">
          <div className="titlepart">
            {this.props.note.title}
            <i onClick={this.delete} className="fa fa-trash-o" id="trash" />
            <i onClick={this.edit} className="fa fa-pencil" id="pencil" />
            <i onClick={this.drag} className="fa fa-arrows-alt" id="drag" />
          </div>
          <div>
            <input onChange={this.onInputChangeNote} value="Type something!" /> {/* allow user to edit  */}
          </div>
        </div>
      );
    } else {
      return (
        <div className="wrapper">
          <div className="titlepart">
            {this.props.note.title}
            <i onClick={this.delete} className="fa fa-trash-o" id="trash" />
            <i onClick={this.edit} className="fa fa-pencil" id="pencil" />
            {/* <i onClick={this.drag} className="fa fa-arrows-alt" id="drag" /> */}
          </div>
          <div>
            {this.props.note.text}
          </div>
        </div>
      );
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
