"use client";

import { Header } from "@/components/layout/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AiModelTab } from "@/components/settings/AiModelTab";
import { UserManagementTab } from "@/components/settings/UserManagementTab";
import { SystemApiTab } from "@/components/settings/SystemApiTab";
import { AuditLogTab } from "@/components/settings/AuditLogTab";

export default function SettingsPage() {
  return (
    <div>
      <Header 
        title="System Settings" 
        subtitle="Configure AI parameters, manage users, and monitor system activity." 
      />
      
      <Tabs defaultValue="ai_model" className="mt-6">
        <TabsList className="grid w-full grid-cols-4 glass-surface p-1 h-auto">
          <TabsTrigger value="ai_model">AI Model Tuning</TabsTrigger>
          <TabsTrigger value="user_management">User Management</TabsTrigger>
          <TabsTrigger value="system">System & API</TabsTrigger>
          <TabsTrigger value="audit_log">Audit Log</TabsTrigger>
        </TabsList>

        <TabsContent value="ai_model" className="mt-4">
          <AiModelTab />
        </TabsContent>
        <TabsContent value="user_management" className="mt-4">
          <UserManagementTab />
        </TabsContent>
        <TabsContent value="system" className="mt-4">
          <SystemApiTab />
        </TabsContent>
        <TabsContent value="audit_log" className="mt-4">
          <AuditLogTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}