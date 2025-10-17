"use client";

import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from 'recharts';
import { appData } from '@/data/mockData';

const data = appData.compliance_violations.top_rules.sort((a, b) => a.violations - b.violations);

export function TopViolatedRulesChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
        <XAxis type="number" stroke="#8B949E" />
        <YAxis dataKey="name" type="category" stroke="#8B949E" width={120} />
        <Tooltip />
        <Bar dataKey="violations" fill="#F87171" name="Violation Count" />
      </BarChart>
    </ResponsiveContainer>
  );
}