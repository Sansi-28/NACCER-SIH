"use client";
// components/charts/ScoreDistributionChart.tsx
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { appData } from "@/data/mockData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function ScoreDistributionChart() {
  const data = {
    labels: appData.score_distribution.map(d => d.range),
    datasets: [
      {
        label: 'Number of Proposals',
        data: appData.score_distribution.map(d => d.count),
        backgroundColor: 'rgba(56, 189, 248, 0.5)',
        borderColor: '#38BDF8',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
        y: {
            grid: { color: "rgba(255, 255, 255, 0.1)" },
            ticks: { color: "#8B949E" },
          },
          x: {
            grid: { display: false },
            ticks: { color: "#8B949E" },
          },
    },
  };

  return <Bar options={options} data={data} />;
}
