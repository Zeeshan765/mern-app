/*import axios from 'axios';

let axiosInstance = axios.create({
  // baseURL: process.env.REACT_APP_BASE_URL,
  // withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});
axios.defaults.baseURL = 'http://localhost:8000/api/';

//For Haeder
axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token');

//
//axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';
const errorHandler = (error) => {
  return Promise.reject({ ...error });
};

const successHandler = (response) => {
  return response;
};
export default axiosInstance;
*/

import axios from 'axios';
axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token');
axios.defaults.baseURL = 'http://localhost:8000/api/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
let axiosInstance = axios;
export default axiosInstance;
