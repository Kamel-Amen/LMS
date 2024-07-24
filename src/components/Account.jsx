// import React from 'react';
import AccountHeader from './AccountHeader';
import About from './Home Sec/About';
import BestSeller from './Home Sec/BestSeller';
import Copyrights from './Home Sec/Copyrights';
import Join from './Home Sec/Join';
import Welcome from './Home Sec/Welcome';

const Account = () => {
  return (
    <section className='home account'>
      <AccountHeader />
      <Welcome />
      <About />
      <BestSeller />
      <Join />
      <Copyrights />
    </section>
  );
};

export default Account;
