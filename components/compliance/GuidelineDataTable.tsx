import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FilePlus } from "lucide-react";

// Mock data for guidelines
const guidelines = [
  { id: "FIN-03", category: "Financial", description: "Budget must not exceed ₹50 Lakhs for initial phase projects.", status: "Active", version: "v1.2" },
  { id: "NOV-01", category: "Novelty", description: "Similarity score to existing projects must be below 70%.", status: "Active", version: "v1.0" },
  { id: "TECH-05", category: "Technical", description: "Project timeline must not exceed 48 months.", status: "Archived", version: "v1.0" },
];

export function GuidelineDataTable() {
  return (
    <div className="glass-card">
      <div className="p-4 flex justify-between items-center">
        <h3 className="text-xl font-semibold">Guideline Browser</h3>
        <Button><FilePlus className="mr-2 h-4 w-4" /> Create New Rule</Button>
      </div>
      <div className="border-t border-white/10">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-white/10 hover:bg-transparent">
              <TableHead>Rule ID</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {guidelines.map(rule => (
              <TableRow key={rule.id} className="border-b border-white/10">
                <TableCell className="font-mono text-xs">{rule.id}</TableCell>
                <TableCell><Badge variant="secondary">{rule.category}</Badge></TableCell>
                <TableCell className="text-sm text-text-secondary">{rule.description}</TableCell>
                <TableCell>
                  <Badge variant={rule.status === 'Active' ? 'success' : 'outline'}>{rule.status}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}