import React, { useState } from 'react';
import useApp from '../Hooks/useApp';
import { Link } from 'react-router';
import Card from '../Component/Card';

const Apps = () => {
  const { apps } = useApp();
  const [search, setSearch] = useState('');

  // apps সবসময় array হোক
  const allApps = Array.isArray(apps) ? apps : [];

  const term = search.trim().toLowerCase();

  const searchedApps = term
    ? allApps.filter(app =>
        app.title?.toLowerCase().includes(term)
      )
    : allApps;

  return (
    <section className="bg-gray-50 min-h-screen pt-12 pb-16 px-5 lg:px-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Our All Applications
        </h1>
        <p className="text-gray-500">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
        <h2 className="text-xl font-semibold text-gray-800">
          ({searchedApps.length}){' '}
          <span className="text-2xl font-normal">Apps Found</span>
        </h2>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Apps"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.isArray(searchedApps) && searchedApps.length > 0 ? (
          searchedApps.map((app) => <Card key={app.id} app={app} />)
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No apps found.
          </p>
        )}
      </div>
    </section>
  );
};

export default Apps;
