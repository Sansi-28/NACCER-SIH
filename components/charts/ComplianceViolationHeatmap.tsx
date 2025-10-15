"use client";

import { ResponsiveContainer, ScatterChart, XAxis, YAxis, ZAxis, Tooltip, Scatter, Rectangle } from 'recharts';

const data = [
  { area: 'Safety', rule: 'Budget', violations: 15 },
  { area: 'Safety', rule: 'Novelty', violations: 5 },
  { area: 'Clean Coal', rule: 'Budget', violations: 25 },
  { area: 'Clean Coal', rule: 'Team', violations: 10 },
  { area: 'Digital', rule: 'Timeline', violations: 18 },
  { area: 'Digital', rule: 'Budget', violations: 8 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="glass-card p-3 text-sm">
        <p>{`${data.area} / ${data.rule}`}</p>
        <p className="font-bold">{`Violation Rate: ${data.violations}%`}</p>
      </div>
    );
  }
  return null;
};

export function ComplianceViolationHeatmap() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ScatterChart margin={{ top: 20, right: 20, bottom: 40, left: 60 }}>
        <XAxis dataKey="area" type="category" name="Research Area" stroke="#8B949E" />
        <YAxis dataKey="rule" type="category" name="Compliance Rule" stroke="#8B949E" reversed />
        <ZAxis dataKey="violations" range={[100, 1000]} name="Violations" />
        <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3' }} />
        <Scatter data={data} shape={<Rectangle />} fill="#38BDF8" />
      </ScatterChart>
    </ResponsiveContainer>
  );
}
