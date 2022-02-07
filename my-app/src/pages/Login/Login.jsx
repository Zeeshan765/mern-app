import React from 'react';
import './Login.css';
const Login = () => {
  return (
    <>
      <div className='main-div'>
        <h1>Login Page</h1>
        <div className='form-data'>
          <label htmlFor='email' className='label-1'>
            Email
          </label>
          <br />
          <input type='text' className='text' />
          <br />
          <label htmlFor='password' className='label-1'>
            Password
          </label>
          <br />
          <input type='password' className='text' />
        </div>
      </div>
    </>
  );
};

export default Login;
