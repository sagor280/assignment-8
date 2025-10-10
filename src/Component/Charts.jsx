import React from 'react';
import { Bar, ComposedChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Charts = ({ ratings }) => {
  const data = ratings.map(r => ({ name: r.name, counter: r.count })).reverse();

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        layout="vertical"
        data={data}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      >
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" scale="band" width={80} />
        <Tooltip />
        <Bar dataKey="counter" barSize={25} fill="#FF8811" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default Charts;
