import React from 'react';
import { connect } from 'react-redux';

var actions = require('../js/actions');

class GameForm extends React.Component{
  constructor(props){
    super(props);
    this.submitGuess = this.submitGuess.bind(this);
  }
  
  submitGuess(evt){
    evt.preventDefault();
    var inputBox = evt.target.children[0];
    //get the value of the input box
    var userGuess = this.refs.userGuess.value;
    console.log(userGuess, 'from submitGuess');
    //pass userGuess into the guessNumber action.
    this.props.dispatch(actions.guessNumber(userGuess));
    inputBox.target.value = '';
  }


  render(){
    return(
      <div>
        <form onSubmit={this.submitGuess}>
          <input ref='userGuess' type='text' name='userGuess' id='userGuess' className='text' maxLength='3' autoComplete='off' placeholder='Enter your Guess' />
          <input type='submit' id='guessButton' className='button' name='submit' value='Guess' />
        </form>
      </div>
    );
  }
}

var Container = connect()(GameForm);
export default Container;
