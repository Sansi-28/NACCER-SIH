import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ScheduledReportRowActions } from "./ScheduledReportRowActions"; // <-- IMPORT THE NEW COMPONENT

// Mock data for scheduled reports
const scheduledReports = [
  { id: "SCH-001", name: "Monthly Evaluation Summary", frequency: "Monthly", nextRun: "2024-11-01", status: "Active", recipients: "board@naccer.gov.in" },
  { id: "SCH-002", name: "Institution Performance (Top 5)", frequency: "Quarterly", nextRun: "2025-01-01", status: "Active", recipients: "analytics-team@naccer.gov.in" },
  { id: "SCH-003", name: "Weekly Pending Reviews", frequency: "Weekly", nextRun: "2024-10-21", status: "Paused", recipients: "review-lead@naccer.gov.in" },
];

export function ScheduledReportsTable() {
  return (
    <div className="glass-card">
      <div className="p-4 border-b border-white/10">
        <h3 className="text-xl font-semibold">Scheduled Reports</h3>
      </div>
      <div>
        <Table>
          <TableHeader>
            <TableRow className="border-b border-white/10 hover:bg-transparent">
              <TableHead>Report Name</TableHead>
              <TableHead>Frequency</TableHead>
              <TableHead>Next Run</TableHead>
              <TableHead>Recipients</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {scheduledReports.map((report) => (
              <TableRow key={report.id} className="border-b border-white/10">
                <TableCell className="font-medium">{report.name}</TableCell>
                <TableCell>{report.frequency}</TableCell>
                <TableCell>{report.nextRun}</TableCell>
                <TableCell className="text-xs text-text-secondary">{report.recipients}</TableCell>
                <TableCell>
                  <Badge variant={report.status === 'Active' ? 'success' : 'secondary'}>{report.status}</Badge>
                </TableCell>
                <TableCell>
                  {/* USE THE NEW, CORRECT COMPONENT HERE */}
                  <ScheduledReportRowActions row={{ original: report } as any} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}