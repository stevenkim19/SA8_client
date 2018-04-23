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
  }
  // Calling fetchNotesFirebase from Firebase
  componentDidMount() {
    db.fetchNotesFirebase((notes) => {
      this.setState({ notes: Immutable.Map(notes) });
    });
  }

  // Delete a note
  onDelete(id) {
    // if firebase isn't connected
    if (!db) {
      this.setState({
        notes: this.state.notes.delete(id),
      });
    } else { // read whatever's in firebase - indicate which note's ID to delete
      db.deleteNotesFirebase(id);
      console.log('Deleted note from database!');
    }
  }
  // Add a note
  onAdd(txt) {
    if (!db) {
      let note = {
        title: txt,
        text: 'dummy note!',
        x: 0,
        y: 0,
        zIndex: 0,
      };
      this.setState({
        notes: this.state.notes.set(this.state.id + 1, note),
        id: this.state.id + 1,
      });
    } else {
      db.createNoteFirebase(txt);
    }
  }

  // update text field with edited text
  onUpdate(id, fields, note) {
    if (!db) {
      this.setState({
        notes: this.state.notes.update(id, (n) => { return Object.assign({}, n, fields); }),
      });
    } else {
      console.log(fields);
      db.updateNotesFirebase(id, Object.assign({}, this.state.notes.id, fields));
    }
  }

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
