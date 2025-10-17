import { InstitutionSuccessRateChart } from "@/components/charts/InstitutionSuccessRateChart";
import { AverageScoreByInstitutionChart } from "@/components/charts/AverageScoreByInstitutionChart";

export function PerformanceMetricsTab() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="glass-card p-6">
        <h3 className="text-xl font-semibold mb-4">Institutional Success Rate</h3>
        <p className="text-sm text-text-secondary mb-4">
          Comparing the approval rates of proposals from various institutions.
        </p>
        <div className="h-96">
          <InstitutionSuccessRateChart />
        </div>
      </div>
      <div className="glass-card p-6">
        <h3 className="text-xl font-semibold mb-4">Average Score by Institution</h3>
        <p className="text-sm text-text-secondary mb-4">
          Tracks the average AI evaluation score for submissions from each institution.
        </p>
        <div className="h-96">
          <AverageScoreByInstitutionChart />
        </div>
      </div>
    </div>
  );
}