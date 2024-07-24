// import React from 'react';
import background from '../../assets/svg/scattered-forcefields.svg';
import harryPotter1 from '../../assets/books covers/Harry_Potter_and_the_Cursed_Child.jpg';
import harryPotter2 from '../../assets/books covers/harry_potter.png';
import city from '../../assets/books covers/city.jpg';

const BestSeller = () => {
  return (
    <section className='best-seller-section w-100 position-relative text-center overflow-hidden'>
      <div className='w-100 h-100 zIndex position-absolute'>
        <img
          src={background}
          alt='cover'
          data-aos='zoom-out'
          data-aos-duration='1250'
        />
      </div>
      <div className='content'>
        <header data-aos='fade-up' className='fs-1 mx-auto py-2'>
          ＢＥＳＴ ＳＥＬＬＥＲ
        </header>
        <section className='books d-flex justify-content-evenly align-items-center w-100'>
          <div className='book' data-aos='flip-right'>
            <img src={harryPotter1} alt='book' className='w-100 h-100' />
          </div>
          <div className='book' data-aos='flip-right'>
            <img src={harryPotter2} alt='book' className='w-100 h-100' />
          </div>{' '}
          <div className='book' data-aos='flip-right'>
            <img src={city} alt='book' className='w-100 h-100' />
          </div>
        </section>
      </div>
    </section>
  );
};

export default BestSeller;
