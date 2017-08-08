import React from 'react'
import auth from '../auth'

class Content extends React.Component{
  state = {
    businessData: null,
    images: []
  }

  componentDidMount(){
    auth.getYelpInfo().then(data => {
      this.setState({businessData: data, images: data.photos})
      console.log(this.state.businessData);
    })
  }


  auth.getYelpInfo().then(images => {
    this.setState({images})
  })
}

  unmatchButton() {
    console.log('unmatchedd');
    auth.getYelpInfo().then(data => {
      this.setState({businessData: data, images: data.photos})
    })
  }

  matchButton() {
    const businessData = {
      yelpID: this.state.businessData.id,
      name: this.state.businessData.name,
      address: this.state.businessData.location.address1,
      city: this.state.businessData.location.city,
      state: this.state.businessData.location.state,
      zip_code: this.state.businessData.location.zip_code,
      rating: this.state.businessData.rating,
      url: this.state.businessData.url,
      images: this.state.businessData.photos
    }
    auth.addBusinessList(businessData)
    // .then(business => {
    //   this.setState()
    // })
    console.log('Matched!');
    console.log(businessData);

    auth.getYelpInfo().then(data => {
      this.setState({businessData: data, images: data.photos})
    })
  }


  render(){
    return (
      <div>
        <div className="image">
          <img className="food-pic" src={this.state.images[0]}/>
        </div>
        <button onClick={this.unmatchButton.bind(this)}>No</button>
        <button onClick={this.matchButton.bind(this)}>Match</button>
      </div>
    )
  }
}
export default Content
