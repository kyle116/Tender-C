import React from 'react'
import auth from '../auth'

class List extends React.Component{

  state = {
    matches: []
  }

  componentDidMount() {
    auth.getBusinessList().then(user => {
      console.log(user.businesses);
      this.setState({matches: user.businesses})
    })
  }

  render() {
    return (
      <div>
        <ul>
          <li>MOKD</li>
          {this.state.matches.map(business => (
            <li>{business.name}</li>
          ))}
        </ul>
      </div>
    )
  }

}

export default List
