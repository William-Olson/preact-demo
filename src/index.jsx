import $ from 'jquery';
import { h, render } from 'preact';

import App from './components/App.jsx';

$(document).ready(() => {

  // grab our element mount point
  const app = $('#demo-app')[0];

  // and clear no js message
  app.innerHTML = '';

  // display the app
  render(<App />, app);
});


