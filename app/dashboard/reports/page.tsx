"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { ReportTemplateCard } from "@/components/reports/ReportTemplateCard";
import { Button } from "@/components/ui/button";
import { CustomReportBuilderDialog } from "@/components/reports/CustomReportBuilderDialog";
import { ScheduledReportsTable } from "@/components/reports/ScheduledReportsTable"; // Import the table
import { FilePlus2, BarChart3, ShieldAlert, PieChart } from "lucide-react";

export default function ReportsPage() {
  const [isBuilderOpen, setIsBuilderOpen] = useState(false);

  const standardReports = [
    { title: "Monthly Evaluation Summary", description: "Comprehensive overview for CIL R&D Board meetings.", icon: BarChart3, id: "monthly_summary" },
    { title: "Annual Research Portfolio Analysis", description: "Strategic review for long-term planning purposes.", icon: PieChart, id: "annual_portfolio" },
    { title: "Institution Performance Report", description: "Detailed scorecards for partner institutions.", icon: ShieldAlert, id: "institution_performance" },
  ];

  return (
    <div>
      <Header 
        title="Reports & Exports" 
        subtitle="Generate, schedule, and download comprehensive reports." 
      />
      
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold">Standard Templates</h2>
        <Button size="lg" className="bg-primary hover:bg-primary-hover" onClick={() => setIsBuilderOpen(true)}>
          <FilePlus2 className="mr-2 h-5 w-5" />
          Create Custom Report
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {standardReports.map(report => (
          <ReportTemplateCard key={report.id} {...report} />
        ))}
      </div>

      <div className="mt-12">
        {/* Replace the placeholder with the actual table component */}
        <ScheduledReportsTable />
      </div>

      <CustomReportBuilderDialog isOpen={isBuilderOpen} onClose={() => setIsBuilderOpen(false)} />
    </div>
  );
}