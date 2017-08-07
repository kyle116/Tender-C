import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = (props) => {
  return (
    <ul className="NavBar">
      <li> <NavLink exact to='/'>Home</NavLink></li>
      <li><NavLink to='/signup'>Sign Up</NavLink></li>
      <li><NavLink to='/signin'>Sign In</NavLink></li>
      <li><NavLink to='/signout'>Sign Out</NavLink></li>

      </ul>
  )
}


export default NavBar;
