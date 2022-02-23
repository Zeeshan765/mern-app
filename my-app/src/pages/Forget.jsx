import React from 'react';
import userService from '../components/services/UserService';
import swal from 'sweetalert';

const Forget = (props) => {
  const handleEmail = (e) => {
    e.preventDefault();

    userService
      .forgetpassword(email)
      .then((res) => {
        swal({
          title: 'Congratulations!',
          text: res.message,
          icon: 'success',
          button: 'Check It ',
        });
      })
      .catch((error) => {
        swal({
          title: 'Oops!',
          text: error.response.data,
          icon: 'error',
          button: 'ok ',
        });
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
