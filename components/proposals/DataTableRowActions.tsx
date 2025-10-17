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

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
  onViewDetails: () => void;
}

export function DataTableRowActions<TData>({
  row,
  onViewDetails
}: DataTableRowActionsProps<TData>) {
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
        <DropdownMenuItem onClick={onViewDetails}>
          View Details
        </DropdownMenuItem>
        <DropdownMenuItem>Assign Reviewer</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Approve</DropdownMenuItem>
        <DropdownMenuItem>Reject</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}