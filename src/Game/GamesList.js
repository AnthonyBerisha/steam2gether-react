import React, { Component } from 'react'
import GameMiniature from './GameMiniature'

class GamesList extends Component {

  render () {
    const style = {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    }

    const games = []
    if (this.props.commonGamesList) {
      this.props.commonGamesList.forEach((game) => {
        games.push(<GameMiniature key={game.appid} gameData={game}></GameMiniature>)
      })
    }

    return (
      <div className={'game-list'} style={style}>
        {games}
      </div>
    )
  }
}

export default GamesList