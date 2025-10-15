"use client";
import { motion } from 'framer-motion';

interface ScoreCircleProps {
  score: number;
  size?: 'sm' | 'md' | 'lg';
}

export function ScoreCircle({ score, size = 'md' }: ScoreCircleProps) {
  const sizeMap = {
    sm: { dimension: 60, radius: 25, stroke: 4, text: 'text-lg' },
    md: { dimension: 100, radius: 45, stroke: 6, text: 'text-3xl' },
    lg: { dimension: 140, radius: 65, stroke: 8, text: 'text-5xl' },
  };

  const { dimension, radius, stroke, text } = sizeMap[size];
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  const getColor = (s: number) => {
    if (s >= 80) return "#4ADE80"; // Green
    if (s >= 60) return "#FBBF24"; // Yellow
    return "#F87171"; // Red
  };

  return (
    <div className="relative" style={{ width: dimension, height: dimension }}>
      <svg className="transform -rotate-90" width={dimension} height={dimension}>
        <circle
          cx={dimension / 2}
          cy={dimension / 2}
          r={radius}
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth={stroke}
          fill="transparent"
        />
        <motion.circle
          cx={dimension / 2}
          cy={dimension / 2}
          r={radius}
          stroke={getColor(score)}
          strokeWidth={stroke}
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`font-bold ${text}`}>{score}</span>
      </div>
    </div>
  );
}
