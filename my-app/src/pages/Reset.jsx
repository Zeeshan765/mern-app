import React from 'react';

const Reset = () => {
  const [password, setPassword] = React.useState('');
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
          <button className='btn-1'> Update Password </button>
        </div>
      </div>
    </>
  );
};

export default Reset;
