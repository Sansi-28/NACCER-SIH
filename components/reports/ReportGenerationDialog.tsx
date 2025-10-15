"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label"; // Let's assume you'll create this simple component
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"; // Assume creation
import { Calendar, Download, Mail } from "lucide-react";

interface ReportGenerationDialogProps {
  reportTitle: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ReportGenerationDialog({ reportTitle, isOpen, onClose }: ReportGenerationDialogProps) {
  const [isScheduling, setIsScheduling] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-surface">
        <DialogHeader>
          <DialogTitle className="text-2xl">Generate '{reportTitle}'</DialogTitle>
          <DialogDescription>Configure your export options or schedule for later delivery.</DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div>
            <Label className="font-semibold">Export Format</Label>
            <div className="flex items-center space-x-4 mt-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="pdf" defaultChecked />
                <Label htmlFor="pdf">PDF</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="xlsx" />
                <Label htmlFor="xlsx">Excel (XLSX)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="csv" />
                <Label htmlFor="csv">CSV</Label>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="schedule-toggle" checked={isScheduling} onCheckedChange={() => setIsScheduling(!isScheduling)} />
            <Label htmlFor="schedule-toggle" className="font-semibold">Schedule this report</Label>
          </div>

          {isScheduling && (
            <div className="space-y-4 p-4 bg-black/20 rounded-md border border-white/10">
              <div>
                <Label htmlFor="recipients">Recipient Emails (comma-separated)</Label>
                <Input id="recipients" placeholder="board@naccer.gov.in, admin@example.com" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="frequency">Frequency</Label>
                <Select>
                  <SelectTrigger id="frequency" className="w-full mt-1">
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          {isScheduling ? (
            <Button className="bg-primary hover:bg-primary-hover">
              <Calendar className="mr-2 h-4 w-4" />
              Save Schedule
            </Button>
          ) : (
            <Button className="bg-primary hover:bg-primary-hover">
              <Download className="mr-2 h-4 w-4" />
              Download Now
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}