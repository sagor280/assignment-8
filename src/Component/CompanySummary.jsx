import React from 'react';

const companyStats = [
  {
    id: 1,
    name: 'Total Downloads',
    counter: '29.6M',
    subtitle: '21% More Than Last Month',
  },
  {
    id: 2,
    name: 'Total Reviews',
    counter: '906K',
    subtitle: '46% more than last month',
  },
  {
    id: 3,
    name: 'Active Apps',
    counter: '132+',
    subtitle: '31 more will Launch',
  },
];
const CompanySummary = () => {
    return (
        <div
      className="py-10 lg:py-20"
      style={{
        background:
          'linear-gradient(145deg,rgba(99, 46, 227, 1) 0%, rgba(159, 98, 242, 1) 100%)',
      }}
    >
      <div
        className="w-full lg:w-8/12 px-5 mx-auto text-white 
      "
      >
        <h2 className="text-5xl leading-snug font-bold text-center">
          Trusted by Millions, Built for You
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card */}
          {companyStats.map(stats => (
            <div key={stats.id} className="flex flex-col items-center py-3">
              <p className="text-lg">{stats.name}</p>
              <h2 className="text-[64px] font-extrabold">{stats.counter} </h2>
              <p>{stats.subtitle} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
};

export default CompanySummary;