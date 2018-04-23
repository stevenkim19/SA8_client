import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';
import './style.scss';
import Note from './components/note';
import InputBar from './components/add_input';
import * as db from './services/datastore';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      notes: Immutable.Map(),
    };
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    // this.deleteNotes = this.deleteNotes.bind(this);
  }
  // Calling fetchNotesFirebase from Firebase
  componentDidMount() {
    db.fetchNotesFirebase((notes) => {
      console.log(notes);
      this.setState({
        notes: this.state.notes.set(this.state.id + 1, note),
      });
    });
  }

  // Delete a note
  onDelete(id) {
    this.setState({
      notes: this.state.notes.delete(id),
    });
  }
  // Add a note
  onAdd(txt) {
    let note = {
      title: txt,
      text: 'dummy note!',
      x: 100,
      y: 100,
      zIndex: 0,
    };
    this.setState({
      notes: this.state.notes.set(this.state.id + 1, note),
      id: this.state.id + 1,
    });
  }

  // onAddGeneral(fields) {
  //   this.setState({
  //     notes: this.state.notes.set(),
  //   });
  // }

  // update text field with edited text
  onUpdate(id, fields) {
    this.setState({
      notes: this.state.notes.update(id, (n) => { return Object.assign({}, n, fields); }),
    });
  }

  // Calling deleteNotesFirebase from Firebase
  // deleteNotes() {
  //   db.deleteNotesFirebase((notes) => {
  //     this.onDelete();
  //   });
  // }

  // Calling deleteNotesFirebase from Firebase


  render() {
    return (
      <div id="mainpart">
        <InputBar addTitle={this.onAdd} />
        {this.state.notes.entrySeq().map(([id, note]) => {
          return (
            <Note id={id} key={id} note={note} onDeleteClick={this.onDelete} onUpdateHandle={this.onUpdate} />
          );
        })}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
