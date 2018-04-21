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
  onDelete() {
    this.setState({
      notes: this.state.notes.delete(this.state.id),
    });
  }
  // Addition
  onAdd(txt) {
    const note = {
      title: txt,
      text: '',
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
      // Fill in with note component & input
      <div>
        <InputBar addTitle={this.onAdd} />
        <Note displayTitle={this.onAdd} displayContent={this.onAdd} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
