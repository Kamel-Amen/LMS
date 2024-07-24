// import React from 'react';
import { NavLink } from 'react-router-dom';
import sh2 from '../../assets/shapes/shape2.svg';
import sh3 from '../../assets/shapes/shape3.svg';
import sh4 from '../../assets/shapes/shape4.svg';
import bookShelf from '../../assets/svg/bookshelves.svg';
import readingTime from '../../assets/svg/reading_time.svg';
import education from '../../assets/svg/education.svg';

const About = () => {
  return (
    <section className='about w-100 text-center py-5 position-relative overflow-hidden'>
      <img
        className='position-absolute top-50 start-0 zIndex'
        src={sh2}
        alt='shape2'
      />
      <img
        className='position-absolute top-0 end-0 zIndex'
        src={sh3}
        alt='shape3'
      />
      <img
        className='position-absolute bottom-0 end-0 zIndex'
        src={sh4}
        alt='shape4'
      />
      <div className='content'>
        <header className='mx-auto' data-aos='fade-down'>
          What is LMS ?!
        </header>
        <section className='section-1 row m-0 mt-5'>
          <div className='col-6 d-flex justify-content-center align-items-center flex-column text-start'>
            <p className='w-50' data-aos='fade-right'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum, eveniet aspernatur ab eos ipsum neque tenetur aperiam
              dolores id pariatur cum itaque fuga optio provident, laborum
              doloribus quas vel dolorum, cumque velit rerum culpa voluptate
              numquam! Reprehenderit, quo? Dolore repellendus eum quo nulla
              deserunt tempore quasi provident soluta quas molestiae!
            </p>
            <NavLink
              className='btn btn-dark w-50 mt-3'
              to='/login'
              data-aos='fade-right'
              data-aos-duration='1500'
            >
              Login
            </NavLink>
          </div>
          <div className='col-6 d-flex justify-content-center align-items-center'>
            <img src={bookShelf} alt='shelf' data-aos='flip-left' />
          </div>
        </section>
        <hr className='w-75 mx-auto' />

        <section className='section-2 row m-0 mt-5'>
          <div className='col-6 d-flex justify-content-center align-items-center'>
            <img src={education} alt='shelf' data-aos='flip-left' />
          </div>
          <div className='col-6 d-flex justify-content-center align-items-center flex-column text-start'>
            <p className='w-50' data-aos='fade-left'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum, eveniet aspernatur ab eos ipsum neque tenetur aperiam
              dolores id pariatur cum itaque fuga optio provident, laborum
              doloribus quas vel dolorum, cumque velit rerum culpa voluptate
              numquam! Reprehenderit, quo? Dolore repellendus eum quo nulla
              deserunt tempore quasi provident soluta quas molestiae!
            </p>
            <NavLink
              className='btn btn-dark w-50 mt-3'
              to='/login'
              data-aos='fade-left'
              data-aos-duration='1500'
            >
              Login
            </NavLink>
          </div>
        </section>
        <hr className='w-75 mx-auto' />

        <section className='section-3 row m-0 mt-5'>
          <div className='col-6 d-flex justify-content-center align-items-center flex-column text-start'>
            <p className='w-50' data-aos='fade-right'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum, eveniet aspernatur ab eos ipsum neque tenetur aperiam
              dolores id pariatur cum itaque fuga optio provident, laborum
              doloribus quas vel dolorum, cumque velit rerum culpa voluptate
              numquam! Reprehenderit, quo? Dolore repellendus eum quo nulla
              deserunt tempore quasi provident soluta quas molestiae!
            </p>
            <NavLink
              className='btn btn-dark w-50 mt-3'
              to='/login'
              data-aos='fade-right'
              data-aos-duration='1500'
            >
              Login
            </NavLink>
          </div>
          <div className='col-6 d-flex justify-content-center align-items-center'>
            <img
              src={readingTime}
              alt='shelf'
              data-aos='flip-right'
              data-aos-duration='1500'
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
