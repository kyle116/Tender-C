import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = (props) => {
  return (
    <ul className="NavBar">
    <img className="legit-logo" src="tinder-icon.svg" />
      <li className="nav-links"><NavLink exact to='/'>Home</NavLink></li>
      {props.currentUser ?
        <span className="display-choice">
        {props.currentUser ?
          <p className="username">current user: {props.currentUser.name}</p> : null}
      <li className="nav-links"><NavLink to='/signout'>Sign Out</NavLink></li>
      <li className="nav-links"><NavLink to='/content'>Hook Up</NavLink></li>
      </span>
      :
      (
      <span className="sign-in-up">
        <li className="nav-links"><NavLink to='/signup'>Sign Up</NavLink></li>
        <li className="nav-links"><NavLink to='/signin'>Sign In</NavLink></li>
      </span>
      )}
      </ul>
  )
}


export default NavBar;
