import { ResearchAreaFocusChart } from "@/components/charts/ResearchAreaFocusChart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function PortfolioAnalysisTab() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Research Area Focus</CardTitle>
          <CardDescription>
            Multi-dimensional visualization of proposal counts and average scores by research area.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-96"><ResearchAreaFocusChart /></div>
        </CardContent>
      </Card>
      {/* Add more portfolio charts here, e.g., Proposal Distribution by Institution bar chart */}
    </div>
  );
}