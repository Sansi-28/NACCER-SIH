import { ComplianceViolationHeatmap } from "@/components/charts/ComplianceViolationHeatmap";
import { RiskMatrixChart } from "@/components/charts/RiskMatrixChart";
import { ComplianceTrendChart } from "@/components/charts/ComplianceTrendChart";

export function ComplianceRiskTab() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      <div className="lg:col-span-2 glass-card p-6">
        <h3 className="text-xl font-semibold mb-4">Compliance Violation Hotspots</h3>
        <p className="text-sm text-text-secondary mb-4">Identifying which rules are most frequently failed across different research domains.</p>
        <div className="h-96">
          <ComplianceViolationHeatmap />
        </div>
      </div>
      
      <div className="glass-card p-6">
        <h3 className="text-xl font-semibold mb-4">Proposal Risk Matrix</h3>
        <p className="text-sm text-text-secondary mb-4">Visualizing proposals by their AI-assessed risk vs. potential reward.</p>
        <div className="h-80">
          <RiskMatrixChart />
        </div>
      </div>

      <div className="glass-card p-6">
        <h3 className="text-xl font-semibold mb-4">Overall Compliance Trend</h3>
        <p className="text-sm text-text-secondary mb-4">Tracking the average compliance score of submissions over time.</p>
        <div className="h-80">
          <ComplianceTrendChart />
        </div>
      </div>
    </div>
  );
}
