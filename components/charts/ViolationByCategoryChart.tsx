import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from 'recharts';
import { appData } from '@/data/mockData';

const data = appData.compliance_violations.by_category;

export function ViolationByCategoryChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
        <XAxis dataKey="name" stroke="#8B949E" />
        <YAxis stroke="#8B949E" />
        <Tooltip />
        <Bar dataKey="violations" fill="#FBBF24" name="Violation Count" />
      </BarChart>
    </ResponsiveContainer>
  );
}