var redux = require('redux');
var createStore = redux.createStore;

var reducers = require('./reducers');

//the second argument allows redux devtools to run.
var store = createStore(reducers.gameReducer, window.devToolsExtension ? window.devToolsExtension() : undefined);

module.exports = store;
