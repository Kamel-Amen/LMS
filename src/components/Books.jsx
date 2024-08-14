// import React from 'react';
import AccountHeader from './AccountHeader';
import cover from '../assets/books covers/book-cover.png';
import Copyrights from './Home Sec/Copyrights';
import { NavLink } from 'react-router-dom';
import shape1 from '../assets/shapes/shape5.svg';
import shape2 from '../assets/shapes/shape3.svg';
import { useSelector } from 'react-redux';

const Books = () => {
  const { user } = useSelector((store) => store.user);

  let books = [];
  const booksNumber = 10;
  for (let i = 0; i < booksNumber; i++) {
    books.push(cover);
  }

  return (
    <div className='books home'>
      <AccountHeader user={user} />
      <section className='content container text-center position-relative py-5'>
        <img
          src={shape1}
          alt='shape'
          className='zIndex position-absolute top-0 start-0'
        />
        <img
          src={shape2}
          alt='shape'
          className='zIndex position-absolute top-0 end-0'
        />
        <header className='fs-1 mb-5 mx-auto' data-aos='flip-up'>
          LIBRARY BOOKS
        </header>
        <div className='row row-cols-5 row-cols-sm-2 row-cols-md-4'>
          {books.map((book) => {
            return (
              <div className='col book' key={book}>
                <img
                  src={book}
                  alt='cover'
                  data-aos='fade-right'
                  data-aos-duration='2000'
                />
                <button
                  className='btn btn-primary mt-3 w-75'
                  data-aos='fade-left'
                  data-aos-duration='1500'
                >
                  Read Now!
                </button>
              </div>
            );
          })}
        </div>
        <NavLink className='btn btn-danger' to='/account' data-aos='zoom-in'>
          See More...
        </NavLink>
      </section>
      <Copyrights />
    </div>
  );
};

export default Books;
