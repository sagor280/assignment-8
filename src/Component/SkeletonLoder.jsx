import React from 'react';

const SkeletonLoder = ({ count = 8 }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className='animate-pulse bg-base-200 rounded-lg p-4 shadow'>
          <div className='h-48 bg-gray-300 rounded mb-4'></div>
          <div className='h-4 bg-gray-300 rounded w-3/4 mb-2'></div>
          <div className='h-4 bg-gray-300 rounded w-1/2'></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoder;
