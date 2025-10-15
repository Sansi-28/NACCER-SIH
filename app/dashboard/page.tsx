import { KpiCard } from "@/components/dashboard/KpiCard";
import { ProposalsTable } from "@/components/dashboard/ProposalsTable";
import { AiInsightCard } from "@/components/dashboard/AiInsightCard";
import { Header } from "@/components/layout/Header";

// Import Chart components
import { MonthlyTrendsChart } from "@/components/charts/MonthlyTrendsChart";
import { ScoreDistributionChart } from "@/components/charts/ScoreDistributionChart";

// Import Icons
import { FileText, TrendingUp, CheckCircle, Clock } from "lucide-react";

export default function DashboardPage() {
  // In a real app, this data would be fetched from an API
  const kpiData = [
    { title: "Total Proposals", value: "245", trend: "+12.5%", icon: FileText, isPositive: true },
    { title: "Average Score", value: "74.2", trend: "+2.3%", icon: TrendingUp, isPositive: true },
    { title: "Approval Rate", value: "68.5%", trend: "+5.1%", icon: CheckCircle, isPositive: true },
    { title: "Pending Reviews", value: "23", trend: "-8 Today", icon: Clock, isPositive: false },
  ];

  return (
    <>
      <Header title="Executive Dashboard" subtitle="AI-Powered R&D Proposal Evaluation System" />

      {/* KPI Section */}
      <section className="mb-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {kpiData.map((kpi) => (
            <KpiCard key={kpi.title} {...kpi} />
          ))}
        </div>
      </section>

      {/* Main Analytics Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 glass-card p-6">
          <h3 className="text-xl font-semibold mb-4">Monthly Submission Trends</h3>
          <div className="h-80">
            <MonthlyTrendsChart />
          </div>
        </div>
        <div className="glass-card p-6">
          <h3 className="text-xl font-semibold mb-4">Score Distribution</h3>
          <div className="h-80">
            <ScoreDistributionChart />
          </div>
        </div>
      </section>

      {/* Proposals Table Section */}
      <section>
        <ProposalsTable />
      </section>
    </>
  );
}
