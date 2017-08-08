import React from 'react';
import {NavLink} from 'react-router-dom';

const Home = (props) => {
  return (
    <div>
      <h1>Welcome, to Tender where you get hooked up with great food! Sign up to get started</h1>
      <li className="nav-links"><NavLink to='/signup'>Sign Up</NavLink></li>
    </div>
  )
}


export default Home
