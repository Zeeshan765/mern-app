import GenericService from './GenericService';
//import axios from 'axios';

class UserService extends GenericService {
  constructor() {
    super();
  }

  //Login

  login = (email, password) =>
    new Promise((resolve, reject) => {
      this.post('auth/login', { email, password })
        .then((token) => {
          localStorage.setItem('token', token);
          resolve(token);
        })
        .catch((err) => {
          reject(err);
        });
    });
  //Register
  register = (name, email, password) =>
    this.post('auth/register', { password, email, name });

  //Forget
  forgetpassword = (email) => this.post('auth/forgetpassword', { email });
}

let userService = new UserService();
export default userService;
