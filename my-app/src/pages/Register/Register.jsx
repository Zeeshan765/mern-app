import React from 'react';

import './Register.css';
import userService from '../../components/services/UserService';

const Register = (props) => {
  //Dummy Data

  const handleregister = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      phone,
      password,
    };

    userService
      .register(data)
      .then((res) => {
        console.log(res);
        props.history.push('/login');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [name, setName] = React.useState('');

  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <>
      <div className='main-div'>
        <h1>Register Page</h1>
        <div className='form-data'>
          <label htmlFor='fname' className='label-2'>
            First Name
          </label>
          <br />
          <input
            type='text'
            className='text-1'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <label htmlFor='email' className='label-2'>
            Email
          </label>{' '}
          <br />
          <input
            type='text'
            className='text-1'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <label htmlFor='phone' className='label-1'>
            Phone #
          </label>
          <br />
          <input
            type='text'
            className='text-1'
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <br />
          <label htmlFor='password' className='label-2'>
            Password
          </label>
          <br />
          <input
            type='password'
            className='text-1'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />{' '}
          <br />
        </div>
        <button className='btn-1' onClick={handleregister}>
          {' '}
          Register Here{' '}
        </button>
      </div>
    </>
  );
};

export default Register;
