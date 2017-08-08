import axios from 'axios';
import jwtDecode from 'jwt-decode';

class AuthClient {
  constructor(){
    this.request = axios.create({
      baseURL: 'http://localhost:3001',
      headers: {
        common: {
          token: this.getToken()
        }
      }
    })
  }

  getYelpInfo(){
    return this.request({method: 'GET', url: '/yelp'})
      .then((response) => response.data)
  }

  addBusinessList(businessData) {
    return this.request({method: 'POST', url: '/matches', data: businessData})
      .then((response) => response.data)
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
