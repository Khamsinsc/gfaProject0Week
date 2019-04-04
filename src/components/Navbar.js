import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div>
        <ul>
          <li><NavLink to="/">Homepage</NavLink></li>
          <li><NavLink to="/simple/states">States</NavLink></li>
          <li><NavLink to="/simple/redux">Redux</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;