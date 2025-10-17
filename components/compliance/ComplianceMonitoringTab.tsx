import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, AlertTriangle } from "lucide-react";
import { ViolationByCategoryChart } from "@/components/charts/ViolationByCategoryChart";
import { TopViolatedRulesChart } from "@/components/charts/TopViolatedRulesChart";
import { RecentViolationsTable } from "@/components/compliance/RecentViolationsTable";
 
export function ComplianceMonitoringTab() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><BarChart /> Violations by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center text-text-secondary">
              <ViolationByCategoryChart />
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><AlertTriangle /> Top Violated Rules</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center text-text-secondary">
              <TopViolatedRulesChart />
            </div>
          </CardContent>
        </Card>
      </div>
      <RecentViolationsTable />
    </div>
  );
}