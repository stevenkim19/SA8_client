import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';
import Draggable from 'react-draggable';
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
    // this.onUpdate = this.onUpdate.bind(this);
    // this.onDrag = this.onDrag.bind(this);
  }
  // Deletion
  onDelete(id) {
    this.setState({
      notes: this.state.notes.delete(id),
    });
  }
  // Addition
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
  // onUpdate(id, e) {
  //   this.setState({
  //     notes: this.state.notes.update(id, (n) => { return Object.assign({ text: txt }, n - 1, txt); }),
  //   });
  // }
  // Drag
  onDrag(e, ui, id) {
    this.setState({
      notes: this.state.notes.set(this.state.id, () => {
        note.x = e.ui.x;
        note.y = e.ui.y;
      }),
    });
  }

  render() {
    return (
      <div id="mainpart">
        <InputBar addTitle={this.onAdd} />
        {this.state.notes.entrySeq().map(([id, note]) => {
          return (
            <Draggable
              handle=".note-mover"
              grid={[25, 25]}
              defaultPosition={{ x: 50, y: 50 }}
              position={position}
              onStart={this.onStartDrag}
              onDrag={this.onDrag}
              onStop={this.onStopDrag}
            >
              <Note id={id} key={id} note={note} onDeleteClick={this.onDelete} />
              {/* // onEditNote={this.onUpdate} /> */}
            </Draggable>
          );
        })}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
