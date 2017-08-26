import axios from 'axios';
import jwtDecode from 'jwt-decode';

class AuthClient {
  constructor(){
    this.request = axios.create({
      baseURL: 'https://polar-inlet-28677.herokuapp.com/',
      headers: {
        common: {
          token: this.getToken()
        }
      }
    })
  }

getYelpInfo(locationData){
  return this.request({method: 'GET', url: `/yelp/${locationData}`})
    .then((response) => response.data)
}
addBusinessList(businessData) {
   return this.request({method: 'POST', url: `/${this.getCurrentUser()._id}/matches`, data: businessData})
     .then((response) => response.data)
 }

 getBusinessList() {
   return this.request({method: 'GET', url: `/${this.getCurrentUser()._id}/matches`})
     .then((response) => {
       return response.data
     })
 }
 setLocationYelp(locationData){
   return this.request({method: "GET", url: `/yelp/${locationData}`})
    .then((response) => response.data)
 }

 deleteBus(obj) {
   return this.request({method: 'DELETE', url: `/${obj.userId}/${obj.id}/delete`})
    .then(response => response.data)
 }

  signUp(userInfo) {
    return this.request({method: 'POST', url: '/users', data: userInfo})
      .then((response) => response.data.success)
  }

  signIn(credentials) {
    return this.request({method: 'POST', url: '/authenticate', data: credentials})
      .then(response => {
        if(response.data.success) {
          const token = response.data.token
          this.setToken(token)
          return jwtDecode(token)
        } else {
          return false
        }
      })
  }

  editProfile(userInfo){
    return this.request({method: "PATCH", url: `/users/${this.getCurrentUser()._id}`, data: userInfo})
      .then(response => {
        if(response.data.success) {
          const token = response.data.token
          localStorage.setItem('token', token)
          this.request.defaults.headers.common.token = token
          return jwtDecode(token)
        } else {
          return false
        }
      })
  }

  getCurrentUser() {
    const token = this.getToken()
    return token ? jwtDecode(token) : null
  }

  getToken() {
    return localStorage.getItem('token')
  }

  setToken(token) {
    localStorage.setItem('token', token)
    this.request.defaults.headers.common.token = token
    return token
  }

  clearToken() {
    localStorage.removeItem('token')
    delete this.request.defaults.headers.common.token
  }

}



export default new AuthClient()
