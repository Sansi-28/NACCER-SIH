import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import { UserManagementRowActions } from "./UserManagementRowActions"; // <-- IMPORT THE NEW COMPONENT

const users = [
{ id: "u-001", name: "Admin User", email: "admin@naccer.gov.in", role: "Admin", status: "Active" },
{ id: "u-002", name: "Dr. Jane Doe", email: "jane.doe@example.com", role: "Evaluator", status: "Active" },
{ id: "u-003", name: "John Smith", email: "john.smith@example.com", role: "Viewer", status: "Inactive" },
];

export function UserManagementTab() {
return (
<div className="glass-card">
<div className="p-4 flex justify-between items-center">
<div>
<h3 className="text-xl font-semibold">User Management</h3>
<p className="text-sm text-text-secondary">Invite, edit, and manage user roles and permissions.</p>
</div>
<Button><UserPlus className="mr-2 h-4 w-4" /> Invite New User</Button>
</div>
<div className="border-t border-white/10">
<Table>
<TableHeader>
<TableRow className="border-b border-white/10 hover:bg-transparent">
<TableHead>User</TableHead>
<TableHead>Role</TableHead>
<TableHead>Status</TableHead>
<TableHead>Actions</TableHead>
</TableRow>
</TableHeader>
<TableBody>
{users.map(user => (
<TableRow key={user.id} className="border-b border-white/10">
<TableCell>
<div className="font-medium">{user.name}</div>
<div className="text-xs text-text-secondary">{user.email}</div>
</TableCell>
<TableCell><Badge variant="secondary">{user.role}</Badge></TableCell>
<TableCell>
<Badge variant={user.status === 'Active' ? 'success' : 'outline'}>{user.status}</Badge>
</TableCell>
<TableCell>
{/* USE THE NEW, CORRECT COMPONENT HERE */}
<UserManagementRowActions row={{ original: user } as any} />
</TableCell>
</TableRow>
))}
</TableBody>
</Table>
</div>
</div>
);
}