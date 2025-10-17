import { BudgetAllocationChart } from "@/components/charts/BudgetAllocationChart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function FinancialInsightsTab() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="glass-card lg:col-span-1">
        <CardHeader>
          <CardTitle>Budget Allocation by Research Area</CardTitle>
          <CardDescription>
            Distribution of total requested funding across different research domains.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-96">
            <BudgetAllocationChart />
          </div>
        </CardContent>
      </Card>
      {/* Add more financial charts here, e.g., Funding vs. Duration scatter plot */}
    </div>
  );
}