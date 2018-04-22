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
  }
  // Deletion
  onDelete(id) {
    this.setState({
      notes: this.state.notes.delete(id),
    });
  }
  // Addition
  onAdd(txt) {
    console.log(txt);
    const note = {
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

  // Updates
  // onUpdate() {
  //   this.setState({
  //     notes: this.state.notes.update(id, (n) => { return Object.assign({}, n, fields); }),
  //   });
  // }

  render() {
    return (
      <div>
        <InputBar addTitle={this.onAdd} />
        {this.state.notes.entrySeq().map(([id, note]) => {
          return <Note id={id} key={id} note={note} onDeleteClick={this.onDelete} />;
        })}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
