import React from 'react';
import userService from '../components/services/UserService';

const Forget = (props) => {
  const handleEmail = (e) => {
    e.preventDefault();

    userService
      .forgetpassword(email)
      .then((res) => {
        console.log(res);
        props.history.push('/register');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [email, setEmail] = React.useState('');

  return (
    <>
      <div className='main-div'>
        <h1>Forget Password Page</h1>
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
          <button className='btn-1' onClick={handleEmail}>
            Send Email
          </button>
        </div>
      </div>
    </>
  );
};

export default Forget;
