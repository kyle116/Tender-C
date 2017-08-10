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
      console.log('====Component did mount====');
      console.log(user);
      this.setState({currentUser:user, matches: user.businesses})
    })
  }

  deleteBusiness(obj) {
    console.log('hit');
    console.log(obj);
    auth.deleteBus(obj).then(user => {
      console.log(user);
      this.setState({currentUser: user, matches: user.businesses})
    })
  }

  render() {
    return (
      <div>
      <NavLink to="/edituser">edit your profile</NavLink>
        <ul className="list">
          {this.state.matches.map((business, i) => (
            <div className="listing" key={i}>
            <img className="returned-images" src={business.images[0]} />
            <li className="addresses" key={i}>
              {business.name}<br />
              {business.address}<br />
              {business.city}, {business.state} {business.zip_code}
            </li>
             <button className=" btn-xs btn btn-danger delete-listing" onClick={this.deleteBusiness.bind(this, {userId: this.state.currentUser._id, id: business._id})}>X</button>
             </div>
          ))}
        </ul>
      </div>
    )
  }

}

export default List
