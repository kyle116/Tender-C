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

    <img src={this.state.images[0]}/>
    </div>
  )
  }
}
export default Content
