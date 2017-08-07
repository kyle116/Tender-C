import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import SignUp from './components/SignUp';
import axios from 'axios';
import auth from './auth';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';

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
        <div className="App-header">
          <NavBar />
        </div>
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" render={() => (
          <SignIn onSignIn={this.setCurrentUser.bind(this)} />
        )} />
        <Route path="/signout" render={() => (
          <SignOut onSignOut={this.signOut.bind(this)} />
        )} />
      </div>
      </Router>
    );
  }
}

export default App;
