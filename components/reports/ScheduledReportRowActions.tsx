"use client"

import { Row } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface ScheduledReportRowActionsProps<TData> {
  row: Row<TData>
}

export function ScheduledReportRowActions<TData>({
  row,
}: ScheduledReportRowActionsProps<TData>) {
  // In a real app, these would trigger state changes or API calls
  const handlePause = () => console.log("Pausing report:", row.original);
  const handleEdit = () => console.log("Editing report:", row.original);
  const handleDelete = () => console.log("Deleting report:", row.original);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem onClick={handleEdit}>Edit Recipients</DropdownMenuItem>
        <DropdownMenuItem onClick={handlePause}>Pause Schedule</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-400 focus:bg-red-500/20 focus:text-red-400" onClick={handleDelete}>
          Delete Schedule
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}