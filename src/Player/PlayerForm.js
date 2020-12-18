import React, { Component } from 'react'
import axios from 'axios'

import PlayerInput from './PlayerInput'
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button'

class PlayerForm extends Component {
  state = {
    amountOfPlayers: 2,
    mainUserFriendsList: null,
    playersFieldsValue: ['', ''],
    alert: false
  }

  getMainUserData (userId) {
    if (!userId)
      return
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
    let count = 0;
    this.state.playersFieldsValue.forEach((value, index) => {
      if (value !== '') {
        count++;
      }
    })
    return count;
  }

  createNewField (value) {
    if (this.countFilledInputs() === this.state.amountOfPlayers) {
      this.setState({ amountOfPlayers: this.state.amountOfPlayers + 1 });
    }
  }

  handleChange (value, index) {
    let newValues = this.state.playersFieldsValue;
    newValues[index] = value;
    this.setState({ playersFieldsValue: newValues });
  }

  getGamesList () {
    if (this.countFilledInputs() < 2) {
      this.setState({alert: true});
      return;
    }
    else
      this.setState({alert: false})
    this.props.handleIsLoading(true);
    let url
    if (process.env.NODE_ENV === 'development')
      url = 'https://steam2gether-server.vercel.app/'
    else
      url = process.env.REACT_APP_API_URL

    let playersGamesList = [];

    this.state.playersFieldsValue.forEach((player) => {
      axios.get(url + 'games/' + player)
        .then((res) => {
          this.props.handleIsLoading(false);
          playersGamesList.push({id: player, games: res.data.response.games})
          console.log(res.data.response.games)
        })
        .catch((err) => {
          console.log(err)
        })
    })
    this.props.setGamesList(playersGamesList);
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

    let alert = null;
    if (this.state.alert)
      alert = <Alert severity='error'>Please provide at least 2 Steam IDs</Alert>

    return (
      <div className="player-input-container">
        <div style={formStyle}>
          {inputFields}
        </div>
        <Button onClick={() => this.getGamesList()} variant="contained" color="primary">Get games</Button>
        <div style={{ marginTop: '50px' }}>{alert}</div>
      </div>
    )
  }
}

export default PlayerForm