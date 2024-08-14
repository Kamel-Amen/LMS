/* eslint-disable react/prop-types */
// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { faBookOpenReader, faUser } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import shape1 from '../assets/shapes/shape1.svg';

const AccountHeader = ({ user }) => {
  const handleLogout = () => {
    toast(`Logged out Successfully !`);
  };
  const { username } = user;

  return (
    <nav
      className='header navbar sticky-top navbar-expand-lg bg-body-tertiary overflow-hidden'
      data-aos='fade-down'
      data-aos-duration='1500'
    >
      <div className='container-fluid'>
        <img src={shape1} className='position-absolute sh-1 zIndex' />
        <img src={shape1} className='position-absolute sh-2 zIndex' />
        <img src={shape1} className='position-absolute sh-3 zIndex' />
        <img src={shape1} className='position-absolute sh-4 zIndex' />
        <img src={shape1} className='position-absolute sh-5 zIndex' />
        <NavLink className='navbar-brand' to='/'>
          <FontAwesomeIcon icon={faBookOpenReader} /> <span>LMS</span>
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse justify-content-end'
          id='navbarNav'
        >
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink
                className='btn-login nav-link text-white bg-dark px-4 rounded me-3'
                aria-current='page'
                to='/account'
              >
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className='btn-login nav-link text-white bg-dark px-4 rounded me-3'
                aria-current='page'
                to='/books'
              >
                Books
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className='btn-login nav-link text-white bg-dark px-4 rounded me-3'
                aria-current='page'
                to='/contact'
              >
                Contact
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className='register-btn nav-link text-white bg-dark px-4 rounded me-3'
                aria-current='page'
                to='/'
                onClick={handleLogout}
              >
                Logout
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className='btn-login nav-link text-white bg-dark px-4 rounded'
                aria-current='page'
                to='/settings'
              >
                <FontAwesomeIcon icon={faUser} />{' '}
                <span className='ms-2'>{username}</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AccountHeader;
