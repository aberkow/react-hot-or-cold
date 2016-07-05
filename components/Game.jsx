// var React = require('react');
// var connect = require('react-redux').connect;
//
// var Header = require('./Header');
// var GameForm = require('./GameForm');
// var GuessCountAndList = require('./GuessCountAndList');
//
// var actions = require('../js/actions');

import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import GameForm from './GameForm';
import GuessCountAndList from './GuessCountAndList';

import actions from '../js/actions';

class Game extends React.Component{
  constructor(props){
    super(props);

  }

  componentWillMount(){
    //this.props.dispatch(actions.newGame(this.props.secretNumber));
  }

  render() {
    return (
      <div>
        <Header />
        <h2 id='feedback'>Make your Guess!</h2>
        <GameForm />
        <GuessCountAndList />
      </div>
    );
  }
}

var mapStateToProps = function(state, props){
  return {
    currentGame: state
    // guessArray: state.guessArray,
    // guessCounter: state.guessCounter,
    // userGuess: state.userGuess,
    // feedback: state.feedback,
    // isModalOpen: state.isModalOpen,
    // secretNumber: state.secretNumber
  };
};

var Container = connect(mapStateToProps)(Game);

module.exports = Container;
