import React from 'react';

const Button = ({ onClick, displayText }) => {
  return (
    <button onClick={onClick} >{displayText}</button>
  )
}

export default Button;