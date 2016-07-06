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
    console.log(this.props.guessArray, 'from Game');
  }
  render() {
    return (
      <div>
        <Header modalState={this.props.isModalOpen} />
        <h2 id='feedback'>{this.props.feedback}</h2>
        <GameForm />
        <GuessCountAndList guessArray={this.props.guessArray}/>
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

var Container = connect(mapStateToProps)(Game);

module.exports = Container;

// var hotOrCold = function(userGuess, secretNumber){
//   var feedback = document.getElementById('feedback').innerHTML;
//
//   //form validation
//   if (isNaN(action.number) || (action.number < 1 || action.number > 100)){
//     console.log('Enter a number between 1 and 100');
//   }
//   //check to see if the guess wins the game
//   if (action.number === state.secretNumber) {
//     feedback = 'YOU WIN!!!';
//   }
//   else { //play the game.
//     let currentDifference = Math.abs(state.secretNumber - state.guessArray[state.guessArray.length]);
//     let previousDifference = Math.abs(state.secretNumber - state.guessArray[state.guessArray - 1]);
//
//     if (currentDifference === previousDifference) {
//       console.log('Please enter a different number');
//     }
//     else if (currentDifference > 50) {
//       feedback = 'Very cold!';
//     }
//     else if (currentDifference <= 50 && currentDifference > 30){
//       feedback = 'Cold';
//     }
//     else if (currentDifference <= 30 && currentDifference > 10) {
//       feedback = 'Hot';
//     }
//     else {
//       feedback = 'Very hot!';
//     }
//   }
//   return feedback;
// }
