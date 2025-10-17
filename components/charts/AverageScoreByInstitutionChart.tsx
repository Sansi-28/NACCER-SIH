"use client";

import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { appData } from '@/data/mockData';

// Helper function to process data
const processData = () => {
  const institutionScores: { [key: string]: { totalScore: number; count: number } } = {};

  appData.proposals.forEach(p => {
    if (!institutionScores[p.institution]) {
      institutionScores[p.institution] = { totalScore: 0, count: 0 };
    }
    institutionScores[p.institution].totalScore += p.overall_score;
    institutionScores[p.institution].count++;
  });

  return Object.entries(institutionScores).map(([name, data]) => ({
    name,
    average_score: Math.round(data.totalScore / data.count),
  })).sort((a, b) => b.average_score - a.average_score);
};

const chartData = processData();

export function AverageScoreByInstitutionChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={chartData}
        layout="vertical"
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
        <XAxis type="number" stroke="#8B949E" domain={[50, 100]} />
        <YAxis dataKey="name" type="category" stroke="#8B949E" width={80} />
        <Tooltip />
        <Bar dataKey="average_score" fill="#38BDF8" name="Average Score" />
      </BarChart>
    </ResponsiveContainer>
  );
}