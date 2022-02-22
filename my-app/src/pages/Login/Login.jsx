import React from 'react';
import axios from 'axios';
import './Login.css';
const Login = (props) => {
  const handlelogin = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    axios
      .post('http://localhost:8000/api/auth/login', data)
      .then((res) => {
        console.log(res);
        props.history.push('/register');
      })
      .catch((error) => {
        console.log(error);
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
        </div>
      </div>
    </>
  );
};

export default Login;
