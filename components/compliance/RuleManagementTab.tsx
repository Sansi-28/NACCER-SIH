import { GuidelineDataTable } from "@/components/compliance/GuidelineDataTable";
import { RuleTestingSandbox } from "@/components/compliance/RuleTestingSandbox";

export function RuleManagementTab() {
  return (
    <div className="space-y-6">
      <RuleTestingSandbox />
      <GuidelineDataTable />
    </div>
  );
}