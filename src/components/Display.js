import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Display = ({ count, upKeyDown, downKeyDown }) => {

  const handleKeyEvent = (e) => {
    e.keyCode === 38 && upKeyDown(count);
    e.keyCode === 40 && downKeyDown(count)
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyEvent);

    return () => {
      document.removeEventListener('keydown', handleKeyEvent);
    }
  })

  return (
    <div className='display'>
      The count:{count}
    </div>
  )
}

Display.propTypes = {
  count: PropTypes.number,
  upKeyDown: PropTypes.func,
  downKeyDown: PropTypes.func
}

export default Display;