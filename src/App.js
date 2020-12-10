import React, { Component } from 'react'
import './App.css'

import axios from 'axios'

import Player from './Player/Player'
import Button from './Button'

class App extends Component {
  state = {
    amountOfPlayers: 2,
    players: [
      { id: '76561198015418034' },
      { id: '76561197960812074' }
    ]
  }

  playerChangehandler (event, index) {
    let player = this.state.players[index]
    player.id = event.target.value

    let players = this.state.players
    players[index] = player

    this.setState({ players })
  }

  requestAllPlayers () {
    let playersId = ''
    this.state.players.forEach(p => {
      playersId += (p.id + ',')
    })

    axios.get('https://steam2gether-server.vercel.app/user/' + playersId)
      .then(res => {
        console.log(res)

      })
      .catch(err => {
        console.log(err)
      })

    let players = this.state.players

    this.setState({ players })
  }

  generateInputs () {
    let inputs = []
    for (let i = 0; i < this.state.amountOfPlayers; i++) {
      inputs.push(<Player playerChangeHandler={(event) => this.playerChangehandler(event, i)}
                          playerRef={this.state.players[i].id}
                          key={i}
      ></Player>)
    }

    return inputs
  }

  clickButtonHandler (type) {
    let players = this.state.players

    if (type === 'less' && this.state.amountOfPlayers > 2) {
      players.pop()
      this.setState({ amountOfPlayers: this.state.amountOfPlayers - 1 })
    } else if (type === 'more') {
      this.setState({ amountOfPlayers: this.state.amountOfPlayers + 1 })
      players.push({ id: '', data: '' })
    }
    this.setState({ players: players })
  }

  render () {

    return (
      <div className="App">
        <div className='player-container'>
          <Button clickButtonHandler={() => this.clickButtonHandler('less')}>-</Button>
          {this.generateInputs()}
          <Button clickButtonHandler={() => this.clickButtonHandler('more')}>+</Button>

          <button onClick={this.requestAllPlayers.bind(this)}>Get !</button>
        </div>
      </div>
    )
  }
}

export default App
