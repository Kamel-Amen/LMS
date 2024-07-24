// import React from 'react';
import join from '../../assets/svg/join.svg';
import { NavLink } from 'react-router-dom';

const Join = () => {
  return (
    <section className='join text-center'>
      <header className='mx-auto fs-1 py-1' data-aos='fade-down'>
        JOIN NOW !
      </header>
      <div className='content row m-0'>
        <div className='col-6 d-flex justify-content-center align-items-center flex-column'>
          <h2 data-aos='fade-right' data-aos-duration='1000'>
            Do you want to read thousand of books ?!
          </h2>
          <h3 data-aos='fade-right' data-aos-duration='1500' className='my-3'>
            Join us now for free !
          </h3>
          <NavLink
            to='/login'
            className='btn btn-primary w-50 mt-3'
            data-aos='fade-right'
            data-aos-duration='2000'
          >
            Login
          </NavLink>
        </div>
        <div className='col-6 cover'>
          <img
            src={join}
            alt='join'
            data-aos='fade-left'
            data-aos-duration='1500'
          />
        </div>
      </div>
    </section>
  );
};

export default Join;
