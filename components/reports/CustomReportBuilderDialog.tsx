"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { GripVertical } from "lucide-react";

const availableFields = [
  "Proposal ID", "Title", "PI Name", "Institution", "Status", "AI Score",
  "Novelty Score", "Budget", "Submission Date", "Research Area"
];

interface CustomReportBuilderDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CustomReportBuilderDialog({ isOpen, onClose }: CustomReportBuilderDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[80vh] flex flex-col glass-surface p-0">
        <DialogHeader className="p-6 border-b border-white/10">
          <DialogTitle className="text-2xl font-bold">Custom Report Builder</DialogTitle>
          <DialogDescription>
            Select fields, apply filters, and export your custom dataset.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-3 gap-6 p-6 flex-1 overflow-y-auto">
          {/* Column 1: Available Fields */}
          <div className="col-span-1 space-y-2 border-r border-white/10 pr-6">
            <h3 className="font-semibold mb-2">Available Data Fields</h3>
            <p className="text-xs text-text-secondary mb-4">Select fields to include in your report.</p>
            {availableFields.map(field => (
              <div key={field} className="flex items-center space-x-2 p-2 rounded-md hover:bg-white/5">
                <Checkbox id={field} />
                <label htmlFor={field} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  {field}
                </label>
              </div>
            ))}
          </div>

          {/* Column 2 & 3: Canvas and Preview (Simplified) */}
          <div className="col-span-2 space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Selected Columns</h3>
              <div className="p-4 border-2 border-dashed border-white/20 rounded-md min-h-32">
                <p className="text-sm text-text-secondary text-center py-4">Your selected columns will appear here. Drag to reorder.</p>
                {/* Placeholder for selected items */}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Filters</h3>
              <div className="p-4 border-2 border-dashed border-white/20 rounded-md">
                 <Button variant="outline" size="sm">+ Add Filter</Button>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter className="p-6 border-t border-white/10">
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          <Button className="bg-primary hover:bg-primary-hover">Generate & Export</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}