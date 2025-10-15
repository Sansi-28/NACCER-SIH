"use client";

import { ResponsiveContainer, LineChart, XAxis, YAxis, Tooltip, Legend, Line, CartesianGrid, Area } from 'recharts';

const data = [
  { name: 'Q1 24', actual: 30, forecast: 30 },
  { name: 'Q2 24', actual: 45, forecast: 45 },
  { name: 'Q3 24', forecast: 55, range: [50, 60] },
  { name: 'Q4 24', forecast: 60, range: [52, 68] },
  { name: 'Q1 25', forecast: 65, range: [55, 75] },
];

export function SubmissionVolumeForecastChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
        <XAxis dataKey="name" stroke="#8B949E" />
        <YAxis stroke="#8B949E" />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="range" stroke={false} fill="rgba(56, 189, 248, 0.2)" name="Confidence Interval" />
        <Line type="monotone" dataKey="actual" stroke="#4ADE80" strokeWidth={2} name="Historical Submissions" />
        <Line type="monotone" dataKey="forecast" stroke="#38BDF8" strokeWidth={2} strokeDasharray="5 5" name="Forecast" />
      </LineChart>
    </ResponsiveContainer>
  );
}
