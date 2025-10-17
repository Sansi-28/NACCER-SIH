"use client";

import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { appData } from '@/data/mockData';

// Helper function to process data
const processData = () => {
  const institutionStats: { [key: string]: { approved: number; total: number } } = {};

  appData.proposals.forEach(p => {
    if (!institutionStats[p.institution]) {
      institutionStats[p.institution] = { approved: 0, total: 0 };
    }
    if (p.status === 'Approved') {
      institutionStats[p.institution].approved++;
    }
    institutionStats[p.institution].total++;
  });

  return Object.entries(institutionStats).map(([name, data]) => ({
    name,
    success_rate: Math.round((data.approved / data.total) * 100),
  })).sort((a, b) => b.success_rate - a.success_rate);
};

const chartData = processData();

export function InstitutionSuccessRateChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={chartData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
        <XAxis dataKey="name" stroke="#8B949E" />
        <YAxis stroke="#8B949E" />
        <Tooltip formatter={(value) => `${value}%`} />
        <Bar dataKey="success_rate" fill="#4ADE80" name="Success Rate (%)" />
      </BarChart>
    </ResponsiveContainer>
  );
}