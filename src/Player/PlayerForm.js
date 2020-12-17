import React, { Component } from 'react';

import PlayerInput from './PlayerInput';
import Button from '@material-ui/core/Button';

class PlayerForm extends Component {
  state = {
    amountOfPlayers: 2,
  }
  render () {
    const formStyle = {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      alignItems: 'center'
    }
    const inputFields = [];

    for (let i = 0; i < this.state.amountOfPlayers; i++) {
      inputFields.push(<PlayerInput index={i} key={i}></PlayerInput>)
    }

    return (
      <div style={formStyle}>
        {inputFields}
      </div>
    )
  }
}

PlayerForm.propTypes = {}

export default PlayerForm