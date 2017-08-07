import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Router>
          <NavBar />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
