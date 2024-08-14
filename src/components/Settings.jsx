// import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AccountHeader from './AccountHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { toastError, toastSuccess } from './services/reports';
import { updateUserData } from '../features/UserSlice';
import { useState } from 'react';
import Loading from './Loading';

const Settings = () => {
  const { user } = useSelector((store) => store.user);
  const { username, phone, email } = user;
  const [updatedData, setUpdatedData] = useState({
    username: '',
    phone: '',
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      updatedData.username !== '' &&
      updatedData.password !== '' &&
      updatedData.email !== '' &&
      updatedData.phone !== ''
    ) {
      setTimeout(() => {
        setLoading(false);
        dispatch(
          updateUserData({
            username: updatedData.username,
            phone: updatedData.phone,
            email: updatedData.email,
            password: updatedData.password,
          })
        );
        // console.log(newUser);
        toastSuccess('Your data had been updated successfully !');
      }, 3000);
      setLoading(true);
      setUpdatedData({
        username: '',
        phone: '',
        email: '',
        password: '',
      });
      return;
    }
    toastError('Please provide a valid data and fill all the fields!');
  };

  return (
    <div className='settings'>
      <AccountHeader user={user} />
      {!loading ? (
        <section className='content p-5'>
          <header className='fs-2'>Account Settings</header>
          <span className='text-secondary'>
            Real-time information about you
          </span>
          <div className='row m-0 pt-5'>
            <section className='col-12'>
              <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                  <label htmlFor='username' className='form-label'>
                    Username
                  </label>
                  <input
                    type='text'
                    id='username'
                    name='username'
                    className='form-control'
                    onChange={handleChange}
                    placeholder={username}
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='phone' className='form-label'>
                    Phone
                  </label>
                  <input
                    type='number'
                    id='phone'
                    name='phone'
                    className='form-control'
                    onChange={handleChange}
                    placeholder={phone}
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='email' className='form-label'>
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    className='form-control'
                    onChange={handleChange}
                    placeholder={email}
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='exampleInputPassword1' className='form-label'>
                    Password
                  </label>
                  <input
                    type='password'
                    id='exampleInputPassword1'
                    name='password'
                    className='form-control'
                    placeholder='*****'
                    onChange={handleChange}
                  />
                </div>
                <button type='submit' className='btn btn-primary'>
                  Update{' '}
                  <FontAwesomeIcon icon={faPenToSquare} className='ms-1' />
                </button>
              </form>
            </section>
          </div>
        </section>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Settings;
