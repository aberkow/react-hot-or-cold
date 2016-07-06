import React from 'react';
import { connect } from 'react-redux';
var actions = require('../js/actions');

// import Guess from './Guess';

//the count will be the length of the guessArray
class GuessCountAndList extends React.Component {
  constructor(props){
    super(props);
  }
  //var guesses (inside render)= iterate through the guessArray from state using map? becomes {guesses}
  render(){


    return(
      <div>
        <p>Guess #<span id='count'>0</span>!</p>
        <ul id='guessList' className='guessBox clearfix'>

        </ul>
      </div>
    );
  }
}

var Container = connect()(GuessCountAndList);

export default Container;
