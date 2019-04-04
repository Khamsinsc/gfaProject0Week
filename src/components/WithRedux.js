import React from 'react';
import BuyAcorn from '../containers/BuyAcorn';
import DisplayAcorn from '../containers/DisplayAcorn';
import EatAcorn from '../containers/EatAcorn'

const WithRedux = () => {
  return (
    <div>
      <BuyAcorn />
      <DisplayAcorn />
      <EatAcorn />
    </div>
  )
}

export default WithRedux;