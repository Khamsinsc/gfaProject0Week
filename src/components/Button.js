import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value, count, onClick }) => {
  return (
    <button onClick={ () => onClick(count) }     >
      DisplayText:{ value }
    </button>
  )
}

/* Button.propTypes = {
  value: PropTypes.string,
  count: PropTypes.number,
  onClick: PropTypes.func
} */

export default Button;