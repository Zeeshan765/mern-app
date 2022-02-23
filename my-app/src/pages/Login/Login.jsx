import React from 'react';
//import axios from 'axios';
import './Login.css';
import userService from '../../components/services/UserService';
import { toast } from 'react-toastify';
const Login = (props) => {
  const handleforget = () => {
    props.history.push('/forgetpassword');
  };

  const handlelogin = (e) => {
    e.preventDefault();

    userService
      .login(email, password)
      .then((res) => {
        toast.success('Logged In');
        console.log(res);
        props.history.push('/register');
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data, {
          position: toast.POSITION.TOP_LEFT,
        });
      });
  };

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <>
      <div className='main-div'>
        <h1>Login Page</h1>
        <div className='form-data'>
          <label htmlFor='email' className='label-1'>
            Email
          </label>
          <br />
          <input
            type='text'
            className='text'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <label htmlFor='password' className='label-1'>
            Password
          </label>
          <br />
          <input
            type='password'
            className='text'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <button className='btn-1' onClick={handlelogin}>
            {' '}
            Login{' '}
          </button>
          <button className='btn-1' onClick={handleforget}>
            {' '}
            Forget{' '}
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
