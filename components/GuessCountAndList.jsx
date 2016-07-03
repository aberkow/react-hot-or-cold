import React from 'react';
import { connect } from 'react-redux';
import { guessNumber } from '../js/actions';

//the count will be the length of the guessArray
class GuessCountAndList extends React.Component {
  constructor(props){
    super(props);
  }
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
