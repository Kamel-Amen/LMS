// import React from 'react';

const Copyrights = () => {
  return (
    <footer className='footer row m-0 py-2'>
      <div className='col-6 text-white d-flex justify-content-center align-items-center fs-5'>
        Copyrights &#169;2024{' '}
        <span className='ms-2 text-danger text-decoration-underline'>
          Kamel Amen
        </span>
      </div>
      <div className='col-6 d-flex justify-content-center align-items-center'>
        <a
          href='https://kamel-amen.github.io/New-Portfolio/index.html'
          className='btn btn-primary w-25'
        >
          DEVELOPER
        </a>
      </div>
    </footer>
  );
};

export default Copyrights;
