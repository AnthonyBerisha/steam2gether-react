import React, { Component } from 'react'

import PlayerCard from './PlayerCard'

class Player extends Component {

  render () {
    return (
      <div className='player'>
        <input onChange={this.props.playerChangeHandler}
               onBlur={this.props.playerRequest}
               value={this.props.playerRef}
        />
        <PlayerCard></PlayerCard>
      </div>
    )
  }
}

export default Player