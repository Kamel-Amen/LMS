// import React from 'react';

const Welcome = () => {
  return (
    <section className='welcome w-100 position-relative'>
      <div
        className='background-cover position-absolute w-100 h-100'
        data-aos='zoom-in'
      ></div>
      <div className='content d-flex justify-content-start align-items-start w-100 h-100 text-white flex-column'>
        <div>
          {' '}
          <span data-aos='fade-up' data-aos-duration='1500'>
            ONLINE
          </span>
          <header
            data-aos='fade-right'
            data-aos-duration='2500'
            className='mb-2 text-lowercase'
          >
            LIBRARY MANAGEMENT SYSTEM
          </header>
          <p data-aos='fade-right' data-aos-duration='3000'>
            READ ANYTIME, ANYWHERE !
          </p>
        </div>
      </div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        className='position-absolute bottom-0'
      >
        <path
          fill='#ffffff'
          fillOpacity='1'
          d='M0,288L60,282.7C120,277,240,267,360,240C480,213,600,171,720,176C840,181,960,235,1080,256C1200,277,1320,267,1380,261.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
        ></path>
      </svg>{' '}
    </section>
  );
};

export default Welcome;
