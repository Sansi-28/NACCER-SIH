"use client";

import { Header } from "@/components/layout/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RuleManagementTab } from "@/components/compliance/RuleManagementTab";
import { ComplianceMonitoringTab } from "@/components/compliance/ComplianceMonitoringTab";

export default function CompliancePage() {
  return (
    <div>
      <Header 
        title="Compliance & Rule Engine" 
        subtitle="Manage, test, and monitor S&T funding guidelines." 
      />
      
      <Tabs defaultValue="management" className="mt-6">
        <TabsList className="grid w-full grid-cols-2 glass-surface p-1 h-auto">
          <TabsTrigger value="management">Rule Management</TabsTrigger>
          <TabsTrigger value="monitoring">Compliance Monitoring</TabsTrigger>
        </TabsList>

        <TabsContent value="management" className="mt-4">
          <RuleManagementTab />
        </TabsContent>
        <TabsContent value="monitoring" className="mt-4">
          <ComplianceMonitoringTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}