import React,{Component} from 'react';
import auth from '../auth';
import {Redirect} from 'react-router-dom';




class EditUser extends Component {
  state = {
    shouldRedirect: false
  }

  handleFormEdit(e){
    e.preventDefault()
      if(this.refs.password.value === this.refs.confirmPassword.value ) {
        const formData = {
          name: this.refs.name.value,
          email: this.refs.email.value,
          password: this.refs.password.value
        }
        if(formData.password.length === 0) delete formData.password
        console.log('Kyle and Brad are updating your account right now.')
        console.log(formData)
        auth.editProfile(formData).then(user => {
          console.log(user._doc)
          this.props.dad.updateUser(user._doc)
          if(user) this.setState({shouldRedirect: true})
        })
      }
  }


  render(){
    return (
      this.state.shouldRedirect ? <Redirect to="/matches" /> :
        (<div>
          <h1>Edit Your Info</h1>
          <form  onSubmit={this.handleFormEdit.bind(this)}>
            <input ref="name" type="text" placeholder="Name" />
            <input ref="email" type="text" placeholder="Email" />
            <input ref="password" type="password" placeholder="Password" />
            <input ref="confirmPassword" type="password" placeholder="Confirm Password" />
            <button className="btn btn-primary">Confirm!</button>
          </form>
        </div>
      )
    )
  }
}


export default EditUser
