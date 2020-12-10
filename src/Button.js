import React from 'react'

const Button = (props) => {
  return (
    <button className='button-wrapper' onClick={props.clickButtonHandler}>
      {props.children}
    </button>
  )
}

export default Button