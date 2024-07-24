/* eslint-disable react/no-unescaped-entities */
// import React from 'react';
import Header from './Header';
import login from '../assets/svg/login.svg';
import { NavLink } from 'react-router-dom';
import { toastSuccess } from './services/reports';

const Login = () => {
  const handleClick = () => {
    toastSuccess('Login Successfully !');
  };

  return (
    <section className='login w-100 h-100 overflow-hidden'>
      <Header />
      <div className='content row m-0'>
        <section className='form col-6 d-flex justify-content-center align-items-center'>
          <div className='login-form d-flex justify-content-center align-items-center flex-column'>
            <header className='fs-2 py-2 mb-5'>Login Form</header>
            <label className='mt-2 mb-1' htmlFor='email'>
              Email <span>*</span>
            </label>
            <input type='email' name='email' id='email' />
            <label className='mt-2 mb-1' htmlFor='password'>
              Password <span>*</span>
            </label>
            <input type='password' name='password' id='password' />
            <NavLink
              to='/account'
              className='btn btn-primary mt-4 w-50'
              onClick={handleClick}
            >
              login
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

export default Login;
