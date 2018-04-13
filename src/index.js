import $ from 'jquery';
import './style.scss';

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
