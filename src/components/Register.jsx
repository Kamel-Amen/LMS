/* eslint-disable react/no-unescaped-entities */
// import React from 'react';
import Header from './Header';
import login from '../assets/svg/login.svg';
import { NavLink } from 'react-router-dom';
import { toastSuccess } from './services/reports';

const Register = () => {
  const handleClick = () => {
    toastSuccess('Login Successfully !');
  };

  return (
    <section className='login w-100 h-100 overflow-hidden'>
      <Header />
      <div className='content row m-0'>
        <section className='form col-6 d-flex justify-content-center align-items-center'>
          <div className='login-form d-flex justify-content-center align-items-center flex-column'>
            <header className='fs-2 py-2 mb-5'>Register Form</header>
            <label className='mt-2 mb-1' htmlFor='username'>
              Username <span>*</span>
            </label>
            <input type='text' name='username' id='username' required />
            <label className='mt-2 mb-1' htmlFor='number'>
              Number <span>*</span>
            </label>
            <input type='number' name='number' id='number' required />
            <label className='mt-2 mb-1' htmlFor='email'>
              Email <span>*</span>
            </label>
            <input type='email' name='email' id='email' required />
            <label className='mt-2 mb-1' htmlFor='password'>
              Password <span>*</span>
            </label>
            <input type='password' name='password' id='password' required />
            <NavLink
              to='/account'
              className='btn btn-primary mt-4 w-50'
              onClick={handleClick}
            >
              Register
            </NavLink>
          </div>
        </section>
        <section className='image col-6'>
          <img src={login} alt='image' className='w-100 h-100' />
        </section>
      </div>
    </section>
  );
};

export default Register;
