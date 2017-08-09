import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = (props) => {
  return (
    <ul className="NavBar">
      <li className="nav-links"><NavLink exact to='/'>Home</NavLink></li>
      {props.currentUser ?
        <div className="display-choice">
      <li className="nav-links"><NavLink to='/signout'>Sign Out</NavLink></li>
      <li className="nav-links"><NavLink to='/content'>Hook Up</NavLink></li>
      </div>
      :
      (
      <div className="sign-in-up">
        <li className="nav-links"><NavLink to='/signup'>Sign Up</NavLink></li>
        <li className="nav-links"><NavLink to='/signin'>Sign In</NavLink></li>
      </div>
      )}
      </ul>
  )
}


export default NavBar;
