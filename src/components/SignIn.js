import React, { Component } from 'react'
import auth from '../auth'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
  state = {
    shouldRedirect: false
  }

  handleFormSubmit(e) {
    e.preventDefault()
    this.props.dad.signOut()
    console.log('working');
    const formData = {
      email: this.refs.email.value,
      password: this.refs.password.value
    }
    auth.signIn(formData).then(user => {
      if(user) {
        this.props.onSignIn()
        this.setState({shouldRedirect: true})
      }
    })
  }

  render() {
    return (
      this.state.shouldRedirect
      ? <Redirect to='/content' />
      : (
        <div className="login">
          <h1 className="login-title">Sign In</h1>
          <form onSubmit={this.handleFormSubmit.bind(this)}>
            <input className="form-control" ref="email" type="text" placeholder="Email" />
            <input className="form-control" ref="password" type="password" placeholder="Password" />
            <button className="btn btn-primary login-button">Sign In</button>
          </form>
        </div>
      )
    )
  }
}

export default SignIn
