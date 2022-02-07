import React from 'react';
import './Register.css';
const Register = () => {
  return (
    <>
      <div className='main-div'>
        <h1>Register Page</h1>
        <div className='form-data'>
          <label htmlFor='fname' className='label-2'>
            First Name
          </label>
          <br />
          <input type='text' className='text-1' />
          <br />
          <label htmlFor='lname' className='label-2'>
            Last Name
          </label>
          <br />
          <input type='text' className='text-1' />
          <br />
          <label htmlFor='email' className='label-2'>
            Email
          </label>{' '}
          <br />
          <input type='text' className='text-1' />
          <br />
          <label htmlFor='phone' className='label-1'>
            Phone #
          </label>
          <br />
          <input type='text' className='text-1' />
          <br />
          <label htmlFor='password' className='label-2'>
            Password
          </label>
          <br />
          <input type='password' className='text-1' /> <br />
          <label htmlFor='cpassword' className='label-2'>
            Confirm Password
          </label>
          <br />
          <input type='password' className='text-1' />
        </div>
      </div>
    </>
  );
};

export default Register;
