import React from 'react'
import { Card, CardMedia } from '@material-ui/core'

const GameMiniature = (props) => {

  const style = {
    width: '300px',
    height: '140px',
    cursor: 'pointer'
  }

  return (
    <Card style={style} className={'game-miniature'}>
      <CardMedia component="img"
                 height="100%"
                 image={`https://steamcdn-a.akamaihd.net/steam/apps/${props.gameData.appid}/header.jpg`}></CardMedia>
      <div className='game-miniature-overlay'></div>
    </Card>
  )
}

export default GameMiniature