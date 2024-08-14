/* eslint-disable react/no-unescaped-entities */
// import React from 'react';
import Header from './Header';
import login from '../assets/svg/login.svg';
import { toastError, toastSuccess } from './services/reports';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Login = () => {
  const { user } = useSelector((store) => store.user);

  const [input, setInput] = useState({
    name: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.username === '' && user.password === '') {
      navigate('/register');
      toastError('Please Register First !');
      return;
    } else {
      if (input.name !== user.username || input.password !== user.password) {
        if (input.name !== user.username) {
          toastError('Please provide a valid user name!');
        }
        if (input.password !== user.password) {
          toastError('Please provide a valid user password!');
        }
      } else if (
        input.name === user.username &&
        input.password === user.password
      ) {
        navigate('/account');
        toastSuccess('Login Successfully !');
        return;
      } else {
        toastError('Please provide a valid user info!');
        return;
      }
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className='login w-100 h-100 overflow-hidden'>
      <Header />
      <div className='content row m-0'>
        <form
          onSubmit={handleSubmit}
          className='form col-6 d-flex justify-content-center align-items-center'
        >
          <div className='login-form d-flex justify-content-center align-items-center flex-column'>
            <header className='fs-2 py-2 mb-5'>Login Form</header>
            <label className='mt-2 mb-1' htmlFor='user-name'>
              Name <span className='text-danger'>*</span>
            </label>
            <input
              type='text'
              name='name'
              id='user-name'
              placeholder='username...'
              className='px-2'
              onChange={handleInput}
            />

            <label className='mt-2 mb-1' htmlFor='user-password'>
              Password <span className='text-danger'>*</span>
            </label>
            <input
              type='password'
              name='password'
              id='user-password'
              placeholder='*******'
              className='px-2'
              onChange={handleInput}
            />
            <button className='btn btn-primary mt-4 w-50'>Login</button>
          </div>
        </form>
        <section className='image col-6'>
          <img src={login} alt='image' className='w-100 h-100' />
        </section>
      </div>
    </section>
  );
};

export default Login;
