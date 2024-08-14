/* eslint-disable react/no-unescaped-entities */
// import React from 'react';
import Header from './Header';
import login from '../assets/svg/login.svg';
import { toastError, toastSuccess } from './services/reports';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerNewUser } from '../features/UserSlice';

const Register = () => {
  const [newUser, setNewUser] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
    // console.log(newUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      newUser.name !== '' &&
      newUser.password !== '' &&
      newUser.email !== '' &&
      newUser.phone !== ''
    ) {
      dispatch(
        registerNewUser({
          username: newUser.name,
          email: newUser.email,
          password: newUser.password,
          phone: newUser.phone,
        })
      );
      console.log(newUser);
      navigate('/login');
      toastSuccess('Registered Successfully, Now Login Please !');
      return;
    }
    toastError('Please provide a valid input!');
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
            <header className='fs-2 py-2 mb-5'>Register Form</header>
            <label className='mt-2 mb-1' htmlFor='name'>
              Username <span className='text-danger'>*</span>
            </label>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='username...'
              className='px-2'
              onChange={handleChange}
            />

            <label className='mt-2 mb-1' htmlFor='phone'>
              Phone <span className='text-danger'>*</span>
            </label>
            <input
              type='number'
              name='phone'
              id='phone'
              placeholder='01111111111'
              className='px-2'
              onChange={handleChange}
            />

            <label className='mt-2 mb-1' htmlFor='email'>
              Email <span className='text-danger'>*</span>
            </label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='example@gmail.com'
              className='px-2'
              onChange={handleChange}
            />

            <label className='mt-2 mb-1' htmlFor='password'>
              Password <span className='text-danger'>*</span>
            </label>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='********'
              className='px-2'
              onChange={handleChange}
            />

            <button className='btn btn-primary mt-4 w-50'>Register</button>
          </div>
        </form>
        <section className='image col-6'>
          <img src={login} alt='image' className='w-100 h-100' />
        </section>
      </div>
    </section>
  );
};

export default Register;
