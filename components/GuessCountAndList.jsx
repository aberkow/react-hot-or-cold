import React from 'react';
import { connect } from 'react-redux';
var actions = require('../js/actions');

// import Guess from './Guess';

//the count will be the length of the guessArray
class GuessCountAndList extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    var guesses = this.props.guessArray.map(function(guess, index){
      return(
          <li key={index}>{guess}</li>
      );
    });
    return(
      <div>
        <p>Guess #<span id='count'>{this.props.guessArray.length}</span>!</p>
        <ul id='guessList' className='guessBox clearfix'>
          {guesses}
        </ul>
      </div>
    );
  }
}

var Container = connect()(GuessCountAndList);

export default Container;
