// import React from 'react';
import { useSelector } from 'react-redux';
import AccountHeader from './AccountHeader';
import About from './Home Sec/About';
import BestSeller from './Home Sec/BestSeller';
import Copyrights from './Home Sec/Copyrights';
import Join from './Home Sec/Join';
import Welcome from './Home Sec/Welcome';
// import { useEffect } from 'react';

const Account = () => {
  const { user } = useSelector((store) => store.user);

  // useEffect(() => {
  //   console.log(user);
  // });

  return (
    <section className='home account'>
      <AccountHeader user={user} />
      <Welcome />
      <About />
      <BestSeller />
      <Join />
      <Copyrights />
    </section>
  );
};

export default Account;
