import React from 'react';
import ReactDOM from 'react-dom';
var Provider = require('react-redux').Provider;

import store from './js/store';
import Game from './components/Game';

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(
    <Provider store={store}>
      <Game />
    </Provider>,
    document.getElementById('app')
  );
});
