import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

import PlayerForm from './Player/PlayerForm';

class App extends Component {
  state = {
    players: []
  }

  render () {
    return (
      <div className="App">
        <h1>Steam 2 Gether</h1>
        <p>Find games and play together easily.</p>
        <PlayerForm></PlayerForm>
      </div>
    )
  }
}

export default App
