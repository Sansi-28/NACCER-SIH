"use client";

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter, X } from "lucide-react";

export function AnalyticsFilterBar() {
  // In a real app, state would be managed here to control the filters
  return (
    <div className="p-4 my-4 rounded-lg glass-card flex items-center gap-4">
      <Filter className="w-5 h-5 text-text-secondary" />
      <Select>
        <SelectTrigger className="w-[180px]"><SelectValue placeholder="Filter by Status" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="approved">Approved</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="rejected">Rejected</SelectItem>
        </SelectContent>
      </Select>
      {/* Add more filters for Research Area, Institution, Date Range etc. */}
      <Button variant="ghost" className="text-text-secondary hover:text-text-primary"><X className="w-4 h-4 mr-2" /> Clear Filters</Button>
    </div>
  );
}