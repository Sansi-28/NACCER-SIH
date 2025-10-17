"use client";

import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { appData } from '@/data/mockData';

// Helper function to aggregate budget by research area
const processBudgetData = () => {
  const budgetByArea: { [key: string]: number } = {};

  appData.proposals.forEach(proposal => {
    if (!budgetByArea[proposal.research_area]) {
      budgetByArea[proposal.research_area] = 0;
    }
    budgetByArea[proposal.research_area] += proposal.budget;
  });

  return Object.entries(budgetByArea).map(([name, value]) => ({
    name,
    value,
  }));
};

const data = processBudgetData();
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF19A3'];

export function BudgetAllocationChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={120}
          innerRadius={70} // This makes it a donut chart
          fill="#8884d8"
          dataKey="value"
          nameKey="name"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          formatter={(value: number) => `₹${value.toLocaleString('en-IN')}`}
        />
        <Legend 
          layout="vertical" 
          align="right" 
          verticalAlign="middle"
        />
      </PieChart>
    </ResponsiveContainer>
  );
}