import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const recentViolations = [
    { proposalId: "P2023-004", rule: "NOV-01", details: "Similarity score of 72% exceeds threshold.", status: "Flagged" },
    { proposalId: "P2023-002", rule: "FIN-03", details: "Budget exceeded by ₹2L.", status: "Exception Granted" },
];

export function RecentViolationsTable() {
  return (
    <div className="glass-card">
      <div className="p-4">
        <h3 className="text-xl font-semibold">Recent Violations Log</h3>
        <p className="text-sm text-text-secondary">Live feed of automated compliance flags.</p>
      </div>
      <div className="border-t border-white/10">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-white/10 hover:bg-transparent">
              <TableHead>Proposal ID</TableHead>
              <TableHead>Violated Rule</TableHead>
              <TableHead>Details</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentViolations.map(v => (
              <TableRow key={v.proposalId} className="border-b border-white/10">
                <TableCell className="font-medium">{v.proposalId}</TableCell>
                <TableCell><Badge variant="destructive">{v.rule}</Badge></TableCell>
                <TableCell className="text-sm text-text-secondary">{v.details}</TableCell>
                <TableCell>
                  <Badge variant={v.status === 'Flagged' ? 'warning' : 'success'}>{v.status}</Badge>
                </TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">Grant Exception</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}