import React, { Component } from 'react'
import axios from 'axios'

import PlayerInput from './PlayerInput'
import Button from '@material-ui/core/Button'

class PlayerForm extends Component {
  state = {
    amountOfPlayers: 2,
    mainUserFriendsList: null,
    playersFieldsValue: ['', '']
  }

  getMainUserData (userId) {
    if (!userId)
      return;
    console.log(userId)
    axios.get('https://steam2gether-server.vercel.app/user/' + userId + '/friends')
      .then((res) => {
        let data = res.data.friendslist.friends
        console.log(data)
        this.setState({ mainUserFriendsList: data })
      })
      .catch((err) => {

      })
  }

  countFilledInputs () {
    let count = 0
    this.state.playersFieldsValue.forEach((value, index) => {
      if (value !== '') {
        count++
      }
    })
    return count;
  }

  createNewField (value) {
    if (this.countFilledInputs() === this.state.amountOfPlayers) {
      this.setState({ amountOfPlayers: this.state.amountOfPlayers + 1 })
    }
  }

  handleChange (value, index) {
    console.log(value, index)
    let newValues = this.state.playersFieldsValue;
    newValues[index] = value;
    this.setState({playersFieldsValue: newValues})
  }

  render () {
    const formStyle = {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      alignItems: 'center'
    }
    const inputFields = []

    for (let i = 0; i < this.state.amountOfPlayers; i++) {
      if (i === 0) {
        inputFields.push(<PlayerInput index={i} key={i} value={this.state.playersFieldsValue[i]}
                                      handleChange={this.handleChange.bind(this)}
                                      handleBlurEvent={this.getMainUserData}></PlayerInput>)
      } else {
        inputFields.push(<PlayerInput index={i} key={i} value={this.state.playersFieldsValue[i]}
                                      handleChange={this.handleChange.bind(this)}
                                      handleBlurEvent={this.createNewField.bind(this)}></PlayerInput>)
      }
    }

    return (
      <div>
        <div style={formStyle} className="player-input-container">
          {inputFields}
        </div>
        <Button onClick={() => this.props.handleLoadButton(this.state.playersFieldsValue)} variant="contained" color="primary">Get games</Button>
      </div>
    )
  }
}

export default PlayerForm