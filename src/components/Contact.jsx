// import React from 'react';
import { NavLink } from 'react-router-dom';
import AccountHeader from './AccountHeader';

const Contact = () => {
  return (
    <div className='home contact w-100 position-relative'>
      <div
        className='background-cover position-absolute w-100 h-100'
        data-aos='zoom-in'
      ></div>
      <AccountHeader />
      <div className='contact-form d-flex flex-column justify-content-center align-items-center w-100 h-100 py-3'>
        <div className='wrapper w-50'>
          <svg className='w-100 h-100'>
            <text x='50%' y='50%' dy='.35em' textAnchor='middle'>
              Contact US
            </text>
          </svg>
        </div>
        <label htmlFor='email' data-aos='fade-right' data-aos-duration='1500'>
          Email
        </label>
        <input
          className='mb-3'
          type='email'
          name='email'
          id='email'
          data-aos='fade-left'
          data-aos-duration='2000'
        />
        <label htmlFor='number' data-aos='fade-right' data-aos-duration='1750'>
          Phone Number
        </label>
        <input
          className='mb-3'
          type='number'
          name='number'
          id='number'
          data-aos='fade-left'
          data-aos-duration='2250'
        />
        <label data-aos='fade-right' data-aos-duration='2000' htmlFor='message'>
          Message
        </label>
        <textarea
          className='mb-3'
          name='message'
          id='message'
          rows='7'
          cols='25'
          data-aos='fade-left'
          data-aos-duration='2500'
        ></textarea>
        <NavLink to='/account' className='btn btn-primary'>
          Send
        </NavLink>
      </div>
    </div>
  );
};

export default Contact;
