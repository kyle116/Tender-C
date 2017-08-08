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

  unmatchButton() {
    console.log('unmatchedd');
  }

  matchButton() {
    console.log('MATCHED');
  }

  render(){
    return (
      <div>
        <div className="image">
          <img className="food-pic" src={this.state.images[0]}/>
        </div>
        <button onClick={this.unmatchButton}>No</button>
        <button onClick={this.matchButton}>Match</button>
      </div>
    )
  }
}
export default Content
