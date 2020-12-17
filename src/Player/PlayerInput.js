import React from 'react'
import TextField from '@material-ui/core/TextField'

const PlayerInput = (props) => {
  let input

  if (props.index === 0) {
    input = <TextField label="Steam ID" onBlur={() => console.log('Blur')}></TextField>
  } else {
    input = <TextField label="Steam ID"></TextField>
  }

  return (
    <div className={'player-input'}>
      {input}
    </div>
  )
}

export default PlayerInput