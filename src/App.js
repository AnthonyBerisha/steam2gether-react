import React, { Component } from 'react'
import './App.css'

import axios from 'axios'

import PlayerForm from './Player/PlayerForm'

class App extends Component {
  state = {
    players: []
  }

  getGamesList (playersList) {
    playersList.forEach((player) => {
      axios.get(process.env.API_URL + '/games/' + player)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
    })
  }

  render () {
    return (
      <div className="App">
        <h1>Steam 2 Gether</h1>
        <p>Find games and play together easily.</p>
        <PlayerForm handleLoadButton={this.getGamesList.bind(this)}></PlayerForm>
      </div>
    )
  }
}

export default App
