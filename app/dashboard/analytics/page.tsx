"use client"; // Add this directive because Tabs are interactive

import { Header } from "@/components/layout/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnalyticsFilterBar } from "@/components/analytics/AnalyticsFilterBar";
import { PortfolioAnalysisTab } from "@/components/analytics/PortfolioAnalysisTab";
import { PerformanceMetricsTab } from "@/components/analytics/PerformanceMetricsTab";
import { FinancialInsightsTab } from "@/components/analytics/FinancialInsightsTab";
import { ComplianceRiskTab } from "@/components/analytics/ComplianceRiskTab";
import { ForecastingTab } from "@/components/analytics/ForecastingTab";

export default function AnalyticsPage() {
  return (
    <div>
      <Header 
        title="Strategic Analytics" 
        subtitle="Deep insights for R&D planning and optimization" 
      />
      
      <AnalyticsFilterBar />

      <Tabs defaultValue="portfolio" className="mt-6">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-5 glass-surface p-1 h-auto">
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="financial">Financial</TabsTrigger>
          <TabsTrigger value="compliance">Compliance & Risk</TabsTrigger>
          <TabsTrigger value="forecasting">Forecasting</TabsTrigger>
        </TabsList>

        <TabsContent value="portfolio">
          <PortfolioAnalysisTab />
        </TabsContent>
        <TabsContent value="performance">
          <PerformanceMetricsTab />
        </TabsContent>
        <TabsContent value="financial">
          <FinancialInsightsTab />
        </TabsContent>
        <TabsContent value="compliance">
          <ComplianceRiskTab />
        </TabsContent>
        <TabsContent value="forecasting">
          <ForecastingTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}