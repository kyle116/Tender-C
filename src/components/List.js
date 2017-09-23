import React from 'react';
import auth from '../auth';
import {NavLink} from 'react-router-dom';

class List extends React.Component{

  state = {
    currentUser: null,
    matches: []
  }

  componentDidMount() {
    auth.getBusinessList().then(user => {
      this.setState({currentUser: user, matches: user.businesses})
    })
  }

  deleteBusiness(obj) {
    auth.deleteBus(obj).then(user => {
      this.setState({currentUser: user, matches: user.businesses})
    })
  }

  render() {
    return (
      <div className="list-container">
      <NavLink to="/edituser">Edit Your Profile</NavLink>
        <div className="matches-list">
          <ul className="list">
            {this.state.matches.length === 0 ?
              <h2>No Matches Yet</h2>
              :
              this.state.matches.map((business, i) => (
              <div className="listing" key={i}>
                <img className="returned-images" src={business.images[0]} />
                <li className="addresses" key={i}>
                  {business.name}<br />
                  {business.address}<br />
                  {business.city}, {business.state} {business.zip_code}
                </li>
                <button className="btn-xs btn btn-danger delete-listing" onClick={this.deleteBusiness.bind(this, {userId: this.state.currentUser._id, id: business._id})}>X</button>
               </div>
            ))}
          </ul>
      </div>
    </div>
    )
  }

}

export default List
