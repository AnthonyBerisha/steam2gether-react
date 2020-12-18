import React, { Component } from 'react'
import './App.css'

import LinearProgress from '@material-ui/core/LinearProgress'

import PlayerForm from './Player/PlayerForm'

class App extends Component {
  state = {
    playersGamesList: [],
    isLoading: false
  }

  handleLoader (loading) {
    this.setState({ isLoading: loading })
  }

  setGamesList (playersGamesList) {
    this.setState({ playersGamesList: playersGamesList })
  }

  render () {
    return (
      <div className="App">
        <h1>Steam 2 Gether</h1>
        <p>Find games and play together easily.</p>
        <PlayerForm handleIsLoading={this.handleLoader.bind(this)}
                    setGamesList={this.setGamesList.bind(this)}></PlayerForm>
        {this.state.isLoading ? <LinearProgress/> : null}
      </div>
    )
  }
}

export default App
