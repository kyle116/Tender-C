import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import SignUp from './components/SignUp';
import axios from 'axios';
import auth from './auth';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';

import Home from './components/Home'

import Content from './components/Content'

import List from './components/List'
import EditUser from './components/EditUser'



class App extends Component {
  state = {
    currentUser: auth.getCurrentUser()
  }

  setCurrentUser() {
    this.setState({
      currentUser: auth.getCurrentUser()
    })
  }

  signOut(){
    auth.clearToken()
    this.setState({currentUser: null})
  }

  render() {
    const currentUser = this.state.currentUser
    return (
      <Router>
      <div className="App">
        {currentUser ?
          <p>current user: {currentUser.name}</p> : null}

          <NavBar currentUser={this.state.currentUser}/>
            <Route exact path='/' component={Home} />
            <Route path="/signup" render={() => (
            <SignUp onSignUp={this.setCurrentUser.bind(this)} />
        )} />
        <Route path="/signin" render={() => (
          <SignIn onSignIn={this.setCurrentUser.bind(this)} />
        )} />
        <Route path="/signout" render={() => (
          <SignOut onSignOut={this.signOut.bind(this)} />
        )} />

        <Route path="/content" render={() => (
          currentUser ? <Content /> : <Redirect to="/signin" />)} />

        <Route path="/matches" component={() => (
          currentUser ? <List /> : <Redirect to="/signin" /> )} />

            <Route path="/edituser" component={EditUser} />
      </div>
      </Router>
    );
  }
}

export default App;
