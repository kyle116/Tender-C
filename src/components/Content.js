import React from 'react';
import auth from '../auth';
import {NavLink} from 'react-router-dom';

class Content extends React.Component{
  state = {
    businessData: null,
    images: [],
    location: localStorage.getItem('location')
  }

  componentDidMount(){
    this.props.dad.setLoading()
    auth.getYelpInfo(this.state.location).then(data => {
      console.log(data);
      this.setState({businessData: data, images: data.photos})
      this.props.dad.setLoading()
    })
  }


  unmatchButton() {
    this.props.dad.setLoading()
    auth.getYelpInfo(this.state.location).then(data => {
      this.setState({businessData: data, images: data.photos})
      this.props.dad.setLoading()
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
    // set loading to true here
    this.props.dad.setLoading()
    auth.getYelpInfo(this.state.location).then(data => {
      this.setState({businessData: data, images: data.photos})
      // set loading to false here
      this.props.dad.setLoading()
    })

  }

  setLocation(){
    const locationData = this.refs.location.value
    localStorage.setItem('location', locationData)
    auth.getYelpInfo(locationData).then(data => {
      this.setState({businessData: data, images: data.photos, location: locationData})
    })
  }

  clearLocation(){
    localStorage.removeItem('location')
    this.setState({location: null})
  }

  render(){
    return (
      <div className="content">
      {this.state.location
         ? (
        <div>
          <a className="btn btn-skin btn-default change-location" onClick={this.clearLocation.bind(this)}>Change Location</a>
          <NavLink to="/matches" className="match-link" >See your Matches</NavLink>
          <div className="card">

            <div className="picture-border">
              <img className="card-img-top food-pic" src={this.state.images[0]} />
            </div>
            <div className="card-block buttons-container">
              <div className="button-no">
                <button className="btn btn-danger choices" onClick={this.unmatchButton.bind(this)}><i className="fa fa-times fa-2x" aria-hidden="true"></i></button>
              </div>
              <div className="button-yes">
                <button className="btn btn-success choices" onClick={this.matchButton.bind(this)}><i className="fa fa-check fa-2x" aria-hidden="true"></i></button>
              </div>
            </div>
          </div>
        </div>
         ) :
         <div>
           <h1 className="location-title">Enter Location</h1>

             <input id="city-search" className="form-control" ref="location" type="text" placeholder="City or Zip Code" />
             <button id="city-btn" className="btn btn-success" onClick={this.setLocation.bind(this)}>Submit</button>

         </div>}
      </div>
    )
  }
}
export default Content
