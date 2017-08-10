import React from 'react';
import auth from '../auth';
import {NavLink} from 'react-router-dom';

class Content extends React.Component{
  state = {
    businessData: null,
    images: [],
    location: null
  }

  componentDidMount(){
    this.setState({location: null})
  }


  unmatchButton() {
    console.log('unmatchedd');
    auth.getYelpInfo(this.state.location).then(data => {
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
    //
    // })
    console.log('Matched!');
    console.log(businessData);
    auth.getYelpInfo(this.state.location).then(data => {
      console.log('within');
      this.setState({businessData: data, images: data.photos})
    })

  }

  setLocation(e){
    const locationData = this.refs.location.value
    auth.setLocationYelp(locationData).then(data => {
      this.setState({businessData: data, images: data.photos, location: locationData})
    })
  }


  render(){
    return (
      <div>
      {this.state.location
         ? (
           <div>
           <NavLink to="/matches">See your Matches</NavLink>
           <div className="image">
             <img className="food-pic" src={this.state.images[0]} />
           </div>
           <div className="buttons-container">
             <button className="btn btn-danger choices" onClick={this.unmatchButton.bind(this)}><i className="fa fa-times-circle fa-5x" aria-hidden="true"></i></button>
             <button className="btn btn-success choices" onClick={this.matchButton.bind(this)}><i className="fa fa-check-circle fa-5x" aria-hidden="true"></i></button>
           </div>
           </div>
         ) :
         <div>
           <input ref="location" type="text" placeholder="city" />
           <button onClick={this.setLocation.bind(this)}>Submit</button>
         </div>}
      </div>
    )
  }
}
export default Content
