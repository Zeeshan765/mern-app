import React from 'react';
import userService from '../components/services/UserService';
const Reset = (props) => {
  const token = props.match.params.resetToken;

  const [password, setPassword] = React.useState('');
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
