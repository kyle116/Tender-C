import React,{Component} from 'react';
import auth from '../auth';



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
        auth.signUp(formData).then(success => {
          if(success) this.setState({shouldRedirect: true})
        })
      } else {
        console.log('your mom.')
      }
  }


  render(){
    return (
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleFormSubmit.bind(this)}>
          <input ref="name" type="text" placeholder="Name" />
          <input ref="email" type="text" placeholder="Email" />
          <input ref="password" type="password" placeholder="Password" />
          <input ref="confirmPassword" type="password" placeholder="Confirm Password" />
          <button>Sign Up!</button>
        </form>
      </div>
    )
  }
}


export default SignUp
