import React from 'react';
import { Link } from 'react-router-dom';
import './TopMenu.css';

const TopMenu = () => {
  return (
    <>
      <div className='topmenu'>
        <ul>
          <li>
            <Link to='/' className='link-color'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/login' className='link-color'>
              Login
            </Link>
          </li>
          <li>
            <Link to='/register' className='link-color'>
              Register
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TopMenu;
