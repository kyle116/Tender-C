import React, { Component } from 'react'
import auth from '../auth'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
  state = {
    shouldRedirect: false
  }

  handleFormSubmit(e) {
    e.preventDefault()
    const formData = {
      email: this.refs.email.value,
      password: this.refs.password.value
    }
    console.log("We are logging you in");
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
      ? <Redirect to='/' />
      : (
        <div className="LogIn">
          <h1>Sign In</h1>
          <form onSubmit={this.handleFormSubmit.bind(this)}>
            <input ref="email" type="text" placeholder="Email" />
            <input ref="password" type="password" placeholder="Password" />
            <button>Sign In</button>
          </form>
        </div>
      )
    )
  }
}

export default SignIn
