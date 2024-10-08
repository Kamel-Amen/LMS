import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Account from './components/Account';
import Books from './components/Books';
import Contact from './components/Contact';
import Settings from './components/Settings';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/lms' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/account' element={<Account />} />
      <Route path='/books' element={<Books />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/settings' element={<Settings />} />
    </Routes>
  );
}

export default App;
