import { SubmissionVolumeForecastChart } from "@/components/charts/SubmissionVolumeForecastChart";
import { FundingDemandForecastChart } from "@/components/charts/FundingDemandForecastChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Eye } from "lucide-react";

export function ForecastingTab() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
      <div className="lg:col-span-2 glass-card p-6">
        <h3 className="text-xl font-semibold mb-4">Submission Volume Forecast</h3>
        <p className="text-sm text-text-secondary mb-4">Predicting the number of incoming proposals for proactive resource planning.</p>
        <div className="h-96">
          <SubmissionVolumeForecastChart />
        </div>
      </div>
      
      <div className="space-y-6">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><TrendingUp className="text-primary"/> Emerging Research Areas</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-2">
            <p><strong className="text-green-400">Trending Up:</strong> AI & Automation in Mining (+45% YoY)</p>
            <p><strong className="text-red-400">Trending Down:</strong> Traditional Gasification Methods (-20% YoY)</p>
            <p><strong className="text-yellow-400">On the Horizon:</strong> Carbon Nanotube Applications</p>
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-3 glass-card p-6">
        <h3 className="text-xl font-semibold mb-4">Funding Demand Forecast</h3>
        <p className="text-sm text-text-secondary mb-4">Projecting future funding needs to aid in strategic budget allocation.</p>
        <div className="h-96">
          <FundingDemandForecastChart />
        </div>
      </div>
    </div>
  );
}
