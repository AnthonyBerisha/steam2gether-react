import React, { Component } from 'react'
import './App.css'

import LinearProgress from '@material-ui/core/LinearProgress'

import PlayerForm from './Player/PlayerForm'
import GamesList from './Game/GamesList'

class App extends Component {
  state = {
    commonGamesList: [],
    isLoading: false
  }

  handleLoader (loading) {
    this.setState({ isLoading: loading })
  }

  setGamesList (commonGamesList) {
    this.setState({ commonGamesList: commonGamesList })
  }

  render () {
    return (
      <div className="App">
        <h1>Steam 2 Gether</h1>
        <p>Find games and play together easily.</p>
        <PlayerForm handleIsLoading={this.handleLoader.bind(this)}
                    setGamesList={this.setGamesList.bind(this)}></PlayerForm>
        {this.state.isLoading ? <LinearProgress/> : null}
        <GamesList commonGamesList={this.state.commonGamesList}></GamesList>
      </div>
    )
  }
}

export default App
