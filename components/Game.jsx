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

var actions = require('../js/actions');

class Game extends React.Component{
  constructor(props){
    super(props);

  }
  componentWillMount(){
    console.log(this.props, 'from Game');
  }
  render() {
    return (
      <div>
        <Header modalState={this.props.isModalOpen} />
        <h2 id='feedback'>Make your Guess!</h2>
        <GameForm />
        <GuessCountAndList />
      </div>
    );
  }
}

var mapStateToProps = function(state, props){
  return {
    guessArray: state.guessArray,
    guessCounter: state.guessCounter,
    userGuess: state.userGuess,
    secretNumber: state.secretNumber,
    feedback: state.feedback,
    isModalOpen: state.isModalOpen,
  };
};

//var hotOrCold

var Container = connect(mapStateToProps)(Game);

module.exports = Container;
