import React from 'react'
import TextField from '@material-ui/core/TextField'

const PlayerInput = (props) => {

  return (
    <div className={'player-input'}>
      <TextField label="Steam ID"
                 onChange={(event) => props.handleChange(event.target.value, props.index)}
                 onBlur={(event) => props.handleBlurEvent(event.target.value)}></TextField>
    </div>
  )
}

export default PlayerInput