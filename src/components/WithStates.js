import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';

const WithStates = () => {

  const [count, setCount] = useState(0);

  const buyOne = () => {
    setCount(count + 1);
  }

  const eatOne = () => {
    count > 0 && setCount(count - 1);
  }

  return (
    <div>
      <Button
        value={'Buy one (with hooksstate)'}
        count={count}
        onClick={buyOne}
      />
      <Display
        count={count}
        upKeyDown={buyOne}
        downKeyDown={eatOne}
      />
      <Button
        value={'Eat one (with hooksstate)'}
        count={count}
        onClick={eatOne} />
    </div>
  )
}

export default WithStates;