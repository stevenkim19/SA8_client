import React, { Component } from 'react';
import Draggable from 'react-draggable';
import marked from 'marked';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: true,
    };
    this.renderSomeSection = this.renderSomeSection.bind(this);
    this.delete = this.delete.bind(this);
    this.edit = this.edit.bind(this);
    this.onInputChangeNote = this.onInputChangeNote.bind(this);
    this.onDrag = this.onDrag.bind(this);
    this.onInputChangeTitle = this.onInputChangeTitle.bind(this);
  }
  onInputChangeNote(event) {
    this.props.onUpdateHandle(this.props.id, { text: event.target.value });
  }
  onInputChangeTitle(event) {
    this.props.onUpdateHandle(this.props.id, { title: event.target.value });
  }
  onDrag(e, ui) {
    this.props.onUpdateHandle(this.props.id, { x: ui.x, y: ui.y });
  }
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

  renderSomeSection() {
    if (this.state.isEditing) {
      return (
        <div className="wrapper">
          <div className="titlepart">
            <input onChange={this.onInputChangeTitle} value={this.props.note.title} className="inputbars" />
            <div className="buttonslist">
              <i onClick={this.delete} className="fa fa-trash-o" id="trash" />
              <i onClick={this.edit} className="fa fa-pencil" id="pencil" />
              <i className="fa fa-arrows-alt draghandler" id="drag" />
            </div>
          </div>
          <div>
            <input onChange={this.onInputChangeNote} value={this.props.note.text} className="inputbars" /> {/* allow user to edit  */}
          </div>
        </div>
      );
    } else {
      return (
        <div className="wrapper">
          <div className="titlepart">
            <div className="noteBody" dangerouslySetInnerHTML={{ __html: marked(this.props.note.title || '') }} />
            <div className="buttonslist">
              <i onClick={this.delete} className="fa fa-trash-o" id="trash" />
              <i onClick={this.edit} className="fa fa-pencil" id="pencil" />
              <i onClick={this.onDrag} className="fa fa-arrows-alt" id="drag" />
            </div>
          </div>
          <div>
            <div className="noteBody" dangerouslySetInnerHTML={{ __html: marked(this.props.note.text || '') }} />
          </div>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <Draggable
          handle=".draghandler"
          grid={[25, 25]}
          defaultPosition={{ x: 50, y: 50 }}
          position={{ x: this.props.note.x, y: this.props.note.y }}
          onDrag={this.onDrag}
        >
          {this.renderSomeSection()}
        </Draggable>
      </div>
    );
  }
}

export default Note;
