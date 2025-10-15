"use client";

import { ResponsiveContainer, LineChart, XAxis, YAxis, Tooltip, Legend, Line, CartesianGrid } from 'recharts';

const data = [
  { name: 'Jan', score: 88 },
  { name: 'Feb', score: 90 },
  { name: 'Mar', score: 91 },
  { name: 'Apr', score: 89 },
  { name: 'May', score: 92 },
  { name: 'Jun', score: 93 },
];

export function ComplianceTrendChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
        <XAxis dataKey="name" stroke="#8B949E" />
        <YAxis stroke="#8B949E" domain={[80, 100]}/>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="score" stroke="#38BDF8" strokeWidth={2} name="Average Compliance Score" />
      </LineChart>
    </ResponsiveContainer>
  );
}
