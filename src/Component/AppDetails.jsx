import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useApp from '../Hooks/useApp';
import appErrorImg from '../assets/App-Error.png';
import { FaDownload, FaStar, FaUserCheck } from 'react-icons/fa';
import Charts from './Charts';
import Description from './Description';
import { toast } from 'react-toastify';
import { installApp, isAppInstalled } from '../utiliti/LocalStorage';

const AppDetails = () => {
  const [isInstalled, setIsInstalled] = useState(false);
  const { id } = useParams();
  const { apps, loading } = useApp();
    
  const app = apps?.find(p => p.id === Number(id));
    useEffect(() => {
    if (app) {
      const status = isAppInstalled(app.id);
      setIsInstalled(status);
    }
  }, [app]);


  if (loading) {
    return (
      <div className='flex justify-center items-center py-10'>
        <span className='loading loading-spinner text-primary'></span>
        <p className='ml-2 text-gray-500'>Loading app details...</p>
      </div>
    );
  }

  if (!app) {
    return (
      <div className='flex flex-col items-center justify-center min-h-[60vh] text-center p-6'>
        <img src={appErrorImg} alt='App Not Found' className='max-w-md mb-6' />
        <h1 className='text-2xl font-bold text-red-500'>OPPS!! APP NOT FOUND</h1>
        <p className='text-gray-500 mt-2'>
          The app you are looking for is not found in our system. Please try another one.
        </p>
        <a href='/' className='btn btn-primary mt-4'>Go Back</a>
      </div>
    );
  }

  const { title, image, downloads, ratingAvg, reviews } = app;

  return (
     <section className='bg-gray-50 min-h-screen pt-12 pb-16 px-4 sm:px-6 lg:px-10'>
      <div className="bg-white shadow-sm rounded-2xl border border-gray-100 p-4 sm:p-6 
        flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto"> 

        
        <div className="flex justify-center w-full lg:w-1/3">
          <img
            src={image}
            alt={title}
            
            className="w-full h-64 sm:h-80 md:h-96 lg:h-full object-cover rounded-xl"
          />
        </div>

        {/* Right: Details */}
        <div className="flex-1 flex flex-col justify-between gap-4 w-full">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">{title}</h2>
            <p className="text-gray-500 text-sm mt-1">
              Developed by <span className="text-indigo-600 font-medium">productive.io</span>
            </p>
            
            
            <div className="flex items-start text-center gap-x-8 gap-y-4 mt-8">
              {/* Downloads */}
              <div className="w-fit">
                <FaDownload className="text-emerald-500 text-2xl mx-auto mb-1" />
                <p className="text-gray-500 text-sm">Downloads</p>
                <p className="text-xl font-bold text-gray-800">{downloads}M</p>
              </div>

              {/* Average Ratings */}
              <div className="w-fit">
                <FaStar className="text-orange-400 text-2xl mx-auto mb-1" />
                <p className="text-gray-500 text-sm">Average Ratings</p>
                <p className="text-xl font-bold text-gray-800">{ratingAvg}</p>
              </div>

              {/* Total Reviews */}
              <div className="w-fit">
                <FaUserCheck className="text-purple-500 text-2xl mx-auto mb-1" />
                <p className="text-gray-500 text-sm">Total Reviews</p>
                <p className="text-xl font-bold text-gray-800">{reviews}K</p>
              </div>
            </div>
          </div>
          
          
          <div className='card-actions'>
            <button
              disabled={isInstalled}
              onClick={() => {
                installApp(app);
                setIsInstalled(true);
                 toast.success('App installed successfully');
              }}
              
              className={`btn ${isInstalled ? 'btn-disabled bg-sky-500 text-white' : 'btn-success'}`}>
              
                {isInstalled ? 'Installed': `Install Now(${downloads}MB)`}
            </button>
          </div>
        </div>
      </div>

      {/* Ratings Chart */}
      
      <div className="mt-10 max-w-6xl mx-auto w-full p-4 sm:p-6 bg-white rounded-2xl shadow-sm">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Ratings</h3>
        <div className="w-full h-56 sm:h-64 md:h-72 lg:h-72">
          <Charts ratings={app.ratings} />
        </div>
      </div>
      <div className="mt-8 max-w-6xl mx-auto w-full">
        <Description />
      </div>
           
    </section>
  );
};

export default AppDetails;
