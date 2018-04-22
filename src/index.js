import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';
import './style.scss';
import Note from './components/note';
import InputBar from './components/add_input';

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
    // this.componentDidMount = this.componentDidMount.bind(this);
  }
  // Communicate with Firebase
  // componentDidMount() {
  //   firebasedb.fetchNotes((notes) => {
  //     this.setState({ notes: Immutable.Map(notes) });
  //   });
  // }
  // Delete a note
  onDelete(id) {
    this.setState({
      notes: this.state.notes.delete(id),
    });
  }
  // Add a note
  onAdd(txt) {
    let note = {
      title: 'dummy note title',
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

  // update text field with edited text
  onUpdate(id, fields) {
    this.setState({
      notes: this.state.notes.update(id, (n) => { return Object.assign({}, n, fields); }),
    });
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
