"use client";
// components/charts/MonthlyTrendsChart.tsx
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { appData } from "@/data/mockData"; // Import your mock data

ChartJS.register(
  CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler
);

export function MonthlyTrendsChart() {
  const data = {
    labels: appData.monthly_trends.map((item) => item.month),
    datasets: [
      {
        label: "Submissions",
        data: appData.monthly_trends.map((item) => item.submissions),
        borderColor: "#38BDF8",
        backgroundColor: "rgba(56, 189, 248, 0.1)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "Approvals",
        data: appData.monthly_trends.map((item) => item.approvals),
        borderColor: "#4ADE80",
        backgroundColor: "rgba(74, 222, 128, 0.1)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { color: "#E6EDF3" },
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

  return <Line options={options} data={data} />;
}
