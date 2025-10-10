import React from 'react';
import Hero from '../Component/Hero';
import Apps from './Apps';
import useApp from '../Hooks/useApp';
import Card from '../Component/Card';
import { NavLink } from 'react-router';
import SkeletonLoder from '../Component/SkeletonLoder';

const Home = () => {
  const { loading, error, apps } = useApp()
  const featuredApps = Array.isArray(apps) ? apps.slice(0, 8) : [];
  return (
  <div>
      <Hero />
       <section className="bg-gray-50 py-12 px-6">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">Trending Apps</h2>
        <p className="text-gray-500 mt-1">
          Explore All Trending Apps on the Market developed by us
        </p>
        </div>
         {loading ? (
        <SkeletonLoder></SkeletonLoder>
      ) : (
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto ">
        {featuredApps.map((app) => (
          <Card key={app.id} app={app} />
        ))}
      </div>
      )}
  

      {/* Button */}
      <div className="flex justify-center mt-10">
        <NavLink
          to="/apps"
          className="px-6 py-2 text-white font-medium rounded-md bg-gradient-to-r from-purple-800 to-purple-500 hover:from-purple-700 hover:to-purple-400 transition-all duration-300"
        >
          Show All
        </NavLink>
      </div>
    </section>

      
    </div>
  );
};

export default Home;