// components/dashboard/KpiCard.tsx
import { LucideIcon } from "lucide-react";

interface KpiCardProps {
  title: string;
  value: string;
  trend: string;
  icon: LucideIcon;
  isPositive: boolean;
}

export function KpiCard({ title, value, trend, icon: Icon, isPositive }: KpiCardProps) {
  const trendColor = isPositive ? "text-green-400" : "text-red-400";

  return (
    <div className="glass-card p-6 flex items-start gap-4">
      <div className="bg-primary/10 p-3 rounded-lg">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <p className="text-sm text-text-secondary mb-1">{title}</p>
        <h3 className="text-3xl font-bold">{value}</h3>
        <p className={`text-xs font-semibold mt-1 ${trendColor}`}>{trend}</p>
      </div>
    </div>
  );
}
