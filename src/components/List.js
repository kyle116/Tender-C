import React from 'react'
import auth from '../auth'

class List extends React.Component{

  state = {
    matches: []
  }

  componentDidMount() {
    auth.getBusinessList().then(user => {
      console.log(user);
      this.setState({matches: user.businesses})
    })
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.matches.map((business, i) => (
            <li className="listing" key={i}>{business.name} <button className=" btn-xs btn btn-danger">X</button></li>
          ))}
        </ul>
      </div>
    )
  }

}

export default List
