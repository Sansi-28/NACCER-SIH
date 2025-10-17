"use client";

import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import { appData } from '@/data/mockData';

// Helper function to process data for the radar chart
const processRadarData = () => {
    const areaStats: { [key: string]: { count: number, totalScore: number } } = {};
    
    appData.proposals.forEach(p => {
        if (!areaStats[p.research_area]) {
            areaStats[p.research_area] = { count: 0, totalScore: 0 };
        }
        areaStats[p.research_area].count++;
        areaStats[p.research_area].totalScore += p.overall_score;
    });

    return Object.entries(areaStats).map(([area, stats]) => ({
        subject: area,
        A: stats.count, // A for Proposal Count
        B: Math.round(stats.totalScore / stats.count), // B for Average Score
        fullMark: 100 // For scaling the axes
    }));
};

const radarData = processRadarData();

export function ResearchAreaFocusChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
        <PolarGrid stroke="rgba(255, 255, 255, 0.2)" />
        <PolarAngleAxis dataKey="subject" stroke="#E6EDF3" />
        <PolarRadiusAxis angle={30} domain={[0, 'dataMax']} stroke="#8B949E"/>
        <Radar name="Proposal Count" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Radar name="Average Score" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
}