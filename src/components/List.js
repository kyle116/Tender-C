import React from 'react'
import auth from '../auth'

class List extends React.Component{

  state = {
    currentUser: null,
    matches: []
  }

  componentDidMount() {
    auth.getBusinessList().then(user => {
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
        <ul className="list">
          {this.state.matches.map((business, i) => (
            <li className="listing" key={i}>{business.name} <button className=" btn-xs btn btn-danger" onClick={this.deleteBusiness.bind(this, {userId: this.state.currentUser._id, id: business._id})}>X</button></li>
          ))}
        </ul>
      </div>
    )
  }

}

export default List
