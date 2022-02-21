import React from 'react';
import './Register.css';
const Register = () => {
  const handleregister = (e) => {
    e.preventDefault();
    console.log(fname, lname);
  };

  const [fname, setFname] = React.useState('');
  const [lname, setLname] = React.useState('');

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
            value={fname}
            onChange={(e) => {
              setFname(e.target.value);
            }}
          />
          <br />
          <label htmlFor='lname' className='label-2'>
            Last Name
          </label>
          <br />
          <input
            type='text'
            className='text-1'
            value={lname}
            onChange={(e) => {
              setLname(e.target.value);
            }}
          />
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
        <button className='btn-1' onClick={handleregister}>
          {' '}
          Register Here{' '}
        </button>
      </div>
    </>
  );
};

export default Register;
