// import React from 'react'
import Header from './Header';
import Welcome from './Home Sec/Welcome';
import About from './Home Sec/About';
import Copyrights from './Home Sec/Copyrights';
import BestSeller from './Home Sec/BestSeller';
import Join from './Home Sec/Join';

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <Welcome />
      <About />
      <BestSeller />
      <Join />
      <Copyrights />
    </div>
  );
};

export default Home;
