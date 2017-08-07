import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class SignOut extends Component{
  componentDidMount(){
    this.props.onSignOut()
  }

  render() {
    return (
      <Redirect to ='/signin' />
    )
  }
}

export default SignOut
