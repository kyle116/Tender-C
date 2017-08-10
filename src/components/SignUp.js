import React,{Component} from 'react';
import auth from '../auth';
import {Redirect} from 'react-router-dom';




class SignUp extends Component {
  state = {
    shouldRedirect: false
  }

  handleFormSubmit(e){
    e.preventDefault()
      if(this.refs.password.value === this.refs.confirmPassword.value ) {
        const formData = {
          name: this.refs.name.value,
          email: this.refs.email.value,
          password: this.refs.password.value
        }
        console.log('Kyle and Brad are making your account right now.')
        console.log(formData)
        auth.signUp(formData)
        auth.signIn(formData).then(user => {
          if(user) {
            this.props.onSignUp()
            this.setState({shouldRedirect: true})
          }
        })
      } else {
        console.log('your mom.')
      }
  }


  render(){
    return (
      this.state.shouldRedirect ? <Redirect to="/content" /> :
        (<div>
          <h1>Sign Up</h1>
          <form  onSubmit={this.handleFormSubmit.bind(this)}>
            <input className="form-control" ref="name" type="text" placeholder="Name" />
            <input className="form-control" ref="email" type="text" placeholder="Email" />
            <input className="form-control" ref="password" type="password" placeholder="Password" />
            <input className="form-control" ref="confirmPassword" type="password" placeholder="Confirm Password" />
            <button className="btn btn-primary">Sign Up!</button>
          </form>
        </div>
      )
    )
  }
}


export default SignUp
