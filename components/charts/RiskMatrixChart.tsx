"use client";

import { ResponsiveContainer, ScatterChart, XAxis, YAxis, Tooltip, Scatter, ReferenceArea } from 'recharts';
import { appData } from '@/data/mockData';

const riskToNumber = { "Low": 1, "Medium": 2, "High": 3 };
const chartData = appData.proposals.map(p => ({
  x: riskToNumber[p.risk_level as keyof typeof riskToNumber],
  y: p.overall_score,
  title: p.title,
}));

export function RiskMatrixChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <ReferenceArea x1={0.5} x2={1.5} y1={80} y2={101} fill="rgba(74, 222, 128, 0.1)" stroke="rgba(74, 222, 128, 0.3)" label={{ value: "Ideal", position: "insideTopLeft", fill: "#4ADE80" }} />
        <ReferenceArea x1={2.5} x2={3.5} y1={80} y2={101} fill="rgba(251, 191, 36, 0.1)" stroke="rgba(251, 191, 36, 0.3)" label={{ value: "High Reward", position: "insideTopRight", fill: "#FBBF24" }} />
        <ReferenceArea x1={2.5} x2={3.5} y1={0} y2={60} fill="rgba(248, 113, 113, 0.1)" stroke="rgba(248, 113, 113, 0.3)" label={{ value: "Avoid", position: "insideBottomRight", fill: "#F87171" }} />
        <XAxis 
          dataKey="x" 
          type="number" 
          name="Risk" 
          domain={[0.5, 3.5]}
          ticks={[1, 2, 3]}
          tickFormatter={(tick) => ['Low', 'Medium', 'High'][tick - 1]}
          stroke="#8B949E" 
        />
        <YAxis dataKey="y" type="number" name="AI Score" domain={[40, 100]} stroke="#8B949E" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter data={chartData} fill="#38BDF8" fillOpacity={0.7} />
      </ScatterChart>
    </ResponsiveContainer>
  );
}
