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
        for(var x in formData) {
          if(formData[x].length === 0) delete formData[x]
        }

        auth.editProfile(formData).then(user => {
          this.props.dad.updateUser(user)
          if(user) this.setState({shouldRedirect: true})
        })
      }
  }


  render(){
    return (
      this.state.shouldRedirect ? <Redirect to="/matches" /> :
        (<div className="edit-container">
          <h1 className="edit-title">Edit Your Info</h1>
          <form className="edit-form" onSubmit={this.handleFormEdit.bind(this)}>
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
