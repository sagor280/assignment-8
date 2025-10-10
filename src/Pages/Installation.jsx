import React, { useEffect, useMemo, useState } from 'react';
import { loadInstalledApps, removeApp } from '../utiliti/LocalStorage';
import { CiStar } from 'react-icons/ci';
import { FaArrowDown } from 'react-icons/fa';
import error from '../assets/App-Error.png'



const Installation = () => {
    const [install, setInstall] = useState(() => loadInstalledApps());
    const [sortOrder, setSortOrder] = useState('none')
    const [loading, setLoading] = useState(true);


     useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
    }, []);
    
  const sortedItem = useMemo(() => {
    if (sortOrder === 'downloads-asc') {
      return [...install].sort((a, b) => Number(a.downloads) - Number(b.downloads));
    } else if (sortOrder === 'downloads-desc') {
      return [...install].sort((a, b) => Number(b.downloads) - Number(a.downloads));
    } else {
      return install;
    }
  }, [sortOrder, install]);

   const handleRemove = id => {
    removeApp(id);
    setInstall(prev => prev.filter(p => p.id !== id));

  }




    return (
         <div className='space-y-6'>
      <div className='text-center'>
        <h1 className='font-bold text-3xl'>Your Installed Apps</h1>
        <small className='text-gray-500'>Explore All Trending Apps on the Market developed by us</small>
      </div>


      {
        loading ? (
          <div className='fixed inset-0 bg-white bg-opacity-60 z-50 flex items-center justify-center'>
            <span className='loading loading-spinner text-purple-600 w-16 h-16'></span>
          </div>
        )

          : sortedItem.length === 0 ? (

            <div className='flex flex-col items-center justify-center py-10 text-center'>
              <img src={error} alt="No App Found" className='w-64 mb-6' />
              <h2 className='text-xl font-bold text-red-500'>No App Installed</h2>
              <p className='text-gray-500'>You haven’t installed any apps yet. Go to the Apps page and explore!</p>
            </div>


          ) : (
            <>
              <div className='flex justify-between  items-center'>
                <h1 className='text-3xl font-semibold'>

                  <span className='text-3xl text-gray-500'>
                    ({sortedItem.length})

                  </span>
                  {" "} Apps Found
                </h1>

                <label className='form-control w-full max-w-xs'>

                  <select
                    className='select select-bordered'
                    value={sortOrder}
                    onChange={e => setSortOrder(e.target.value)}
                  >
                    <option value='none'>Sort by Downloads</option>
                    <option value='downloads-asc'>Low → High</option>
                    <option value='downloads-desc'>High → Low</option>
                  </select>

                </label>
              </div>

              <div className='divider'></div>
              <div className='space-y-3'>
                {sortedItem.map(p => (
                  <div key={p.id} className='card card-side bg-base-100 shadow border p-3'>
                    <figure>
                      <img
                        className='w-40 h-28 object-cover rounded-lg'
                        src={p.image}
                        alt={p.title}
                      />
                    </figure>
                    <div className='card-body'>
                      <h3 className='card-title'>{p.title}</h3>

                      <div className='flex gap-2 items-center'>

                        <button className=' btn text-emerald-400'><FaArrowDown />{p.downloads}M</button>
                        <button className='text-red-500 btn'><CiStar />{p.ratingAvg}</button>
                      </div>

                    </div>
                    <div className='pr-4 flex items-center gap-3'>
                      <button
                        onClick={() => handleRemove(p.id)}
                        className='btn btn-success'
                      >
                        Uninstall
                      </button>
                    </div>
                  </div>
                ))}
              </div>


            </>
          )}



    </div>
    );
};

export default Installation;