var redux = require('redux');
var createStore = redux.createStore;
var applyMiddleware = redux.applyMiddleware;
var thunk = require('redux-thunk').default;
var reducers = require('./reducers');

//the second argument allows redux devtools to run.
var store = createStore(reducers.gameReducer, window.devToolsExtension ? window.devToolsExtension() : undefined, applyMiddleware(thunk));

module.exports = store;
