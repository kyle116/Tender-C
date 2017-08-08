import React from 'react'
import auth from '../auth'

class Content extends React.Component{
  state = {
    images: []
  }

componentDidMount(){

  auth.getYelpInfo().then(images => {
    this.setState({images})
  })


}

  render(){
  return (
    <div>
      <div className="image">
        <img className="food-pic" src={this.state.images[0]}/>
      </div>
    </div>
  )
  }
}
export default Content
