// import React from 'react'

const Loading = () => {
  return (
    <div
      id='loading-indicator'
      className='d-flex justify-content-center align-items-center position-fixed bottom-0 start-0'
    >
      <div className='lds-hourglass d-inline-block position-relative'></div>
    </div>
  );
};

export default Loading;
