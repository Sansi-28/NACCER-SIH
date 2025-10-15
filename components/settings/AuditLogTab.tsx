import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const logs = [
    { timestamp: "2024-10-15 10:30 AM", user: "Admin", action: "Updated AI Model Weights", details: "Novelty set to 30%" },
    { timestamp: "2024-10-15 09:15 AM", user: "Admin", action: "Invited User", details: "jane.doe@example.com as Evaluator" },
];

export function AuditLogTab() {
  return (
    <div className="glass-card">
       <div className="p-4">
        <h3 className="text-xl font-semibold">Audit Log</h3>
        <p className="text-sm text-text-secondary">A log of important administrative actions taken in the system.</p>
      </div>
      <div className="border-t border-white/10">
        <Table>
          <TableHeader>
             <TableRow className="border-b border-white/10 hover:bg-transparent">
                <TableHead>Timestamp</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Details</TableHead>
              </TableRow>
          </TableHeader>
          <TableBody>
            {logs.map((log, i) => (
              <TableRow key={i} className="border-b border-white/10">
                <TableCell className="text-xs">{log.timestamp}</TableCell>
                <TableCell>{log.user}</TableCell>
                <TableCell className="font-medium">{log.action}</TableCell>
                <TableCell className="text-xs text-text-secondary">{log.details}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}