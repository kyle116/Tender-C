import axios from 'axios';
import jwtDecode from 'jwt-decode';

class AuthClient {
  constructor(){
    this.request = axios.create({
      baseURL: 'http://localhost:3001',
      headers: {
        common: {
          // token: this.getToken()
        }
      }
    })
  }

  signUp(userInfo) {
    return this.request({method: 'POST', url: '/users', data: userInfo})
      .then((response) => response.data.success)
  }


}



export default new AuthClient()
