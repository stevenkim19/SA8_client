import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './style.scss';

const App = () => {
  return <div className="test">All the React are belong to us!</div>;
};

ReactDOM.render(<App />, document.getElementById('main'));


$('#main').html('Here we go!');

const time = {
  count: 0,
  pass() {
    this.count += 1;
    return this.count;
  },
};

setInterval(() => {
  const message = `You have been here for ${time.count} seconds`;
  time.pass();
  console.log(time.count);
  $('#main').html(message);
}, 1000);
