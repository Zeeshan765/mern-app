import React from 'react';
// import axios from 'axios';
import userService from '../components/services/UserService';
const Reset = (props) => {
  const [password, setPassword] = React.useState('');
  const token = props.match.params.resetToken;
  const handlereset = (e) => {
    e.preventDefault();
    userService
      .resetpassword(token, { password })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });

    /* const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };

    axios.put(
      `/api/auth/passwordreset/${props.match.params.resetToken}`,
      {
        password,
      },
      config
    );
  };*/
  };

  return (
    <>
      <div className='main-div'>
        <h1>Reset Password Page</h1>
        <div className='form-data'>
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
          <button className='btn-1' onClick={handlereset}>
            {' '}
            Update Password{' '}
          </button>
        </div>
      </div>
    </>
  );
};

export default Reset;
