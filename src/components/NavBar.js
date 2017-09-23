import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div id="navigation">
      <nav className="navbar navbar-custom" role="navigation">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="site-logo">
                <NavLink to="/" className="brand">Tender</NavLink>
              </div>
            </div>


            <div className="col-md-10">

              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#menu">
                  <i className="fa fa-bars"></i>
                </button>
              </div>

              <div className="collapse navbar-collapse" id="menu">

                  {!props.currentUser || props.demo ?
                    <ul className="nav navbar-nav navbar-right">
                      <li className="active"><NavLink exact to='/'>Home</NavLink></li>
                      <li><NavLink to="/signup">Sign Up</NavLink></li>
                      <li><NavLink to="/signin">Sign In</NavLink></li>
                    </ul>
                  :
                  <ul className="nav navbar-nav navbar-right">
                    <li className="active"><NavLink exact to='/'>Home</NavLink></li>
                    <li><NavLink to="/matches">Current User: {props.currentUser.name}</NavLink></li>
                    <li><NavLink to="/signout">Sign Out</NavLink></li>
                    <li><NavLink to="/content">Hook Up</NavLink></li>
                  </ul>
                  }
              </div>


            </div>
          </div>
        </div>

      </nav>
    </div>

  )
}


export default NavBar;
