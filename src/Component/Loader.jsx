import React from 'react';

const Loader = () => {
    return (
      <div className='flex justify-center items-center py-10'>
        <span className='loading loading-spinner text-primary'></span>
        <p className='ml-2 text-gray-500'>Loading app details...</p>
      </div>
    );
};

export default Loader;