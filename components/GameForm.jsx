import React from 'react';
import { connect } from 'react-redux';


class GameForm extends React.Component{
  constructor(props){
    super(props);
  }

  guessButtonClick: function(evt){
    evt.preventDefault();
  }

  render(){
    return(
      <div>
        <form>
          <input type='text' name='userGuess' id='userGuess' className='text' maxLength='3' autoComplete='off' placeholder='Enter your Guess' />
          <input type='submit' id='guessButton' className='button' name='submit' value='Guess' />
        </form>
      </div>
    );
  }
}

var Container = connect()(GameForm);
export default Container;
