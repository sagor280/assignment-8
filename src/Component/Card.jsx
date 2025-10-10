import React from 'react';
import { CiStar } from 'react-icons/ci';
import { FaArrowDown } from 'react-icons/fa';
import { Link } from 'react-router';

const Card = ({app}) => {
     const { title, image,downloads,  id, ratingAvg } = app
  return (
    
       <Link
      to={`/product/${id}`}
      className="bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden"
    >
      {/* Image */}
      <figure className="h-48 w-full bg-gray-100 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </figure>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-sm font-semibold text-gray-800 line-clamp-2">
          {title}
        </h2>

        {/* Footer buttons */}
        <div className="flex justify-between items-center mt-3">
          <button className="flex items-center text-emerald-500 text-sm font-medium gap-1">
            <FaArrowDown className="text-emerald-500" />
            {downloads}M
          </button>

          <button className="flex items-center text-orange-400 text-sm font-medium gap-1">
            <CiStar className="text-orange-400" />
            {ratingAvg}
          </button>
        </div>
      </div>
    </Link>
  )
};

export default Card;