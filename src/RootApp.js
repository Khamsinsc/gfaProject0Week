import React from 'react';
import Navbar from './components/Navbar';

const RootApp = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>)
}


export default RootApp;