"use client";

import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Legend, Bar, CartesianGrid } from 'recharts';

const data = [
  { name: 'Q3 24', demand: 1.5, range: [1.2, 1.8] },
  { name: 'Q4 24', demand: 1.8, range: [1.5, 2.1] },
  { name: 'Q1 25', demand: 2.2, range: [1.9, 2.5] },
  { name: 'Q2 25', demand: 2.5, range: [2.2, 2.8] },
];

export function FundingDemandForecastChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
        <XAxis dataKey="name" stroke="#8B949E" />
        <YAxis stroke="#8B949E" label={{ value: 'Funding (in millions)', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="demand" fill="#38BDF8" name="Forecasted Demand" />
      </BarChart>
    </ResponsiveContainer>
  );
}
