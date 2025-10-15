"use client"

import { ColumnDef } from "@tanstack/react-table"
import { DataTableColumnHeader } from "./DataTableColumnHeader"
import { DataTableRowActions } from "./DataTableRowActions"
import { Badge } from "@/components/ui/badge"
import { ScoreCircle } from "@/components/ui/ScoreCircle"
import { Checkbox } from "@/components/ui/checkbox"
import { Proposal } from "@/types"

export const columns: ColumnDef<Proposal>[] = [
  // 1. Selection Column
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value: boolean) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: boolean) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  
  // 2. Proposal Title & PI (Enhanced Detail)
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Proposal" />
    ),
    cell: ({ row }) => {
      const proposal = row.original
      return (
        <div className="flex flex-col">
          <span className="font-medium">{proposal.title}</span>
          <span className="text-xs text-text-secondary">
            {proposal.pi_name}, {proposal.institution}
          </span>
        </div>
      )
    },
  },

  // 3. Status Badge
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      const variant = {
        "Approved": "success",
        "Under Review": "info",
        "Rejected": "destructive",
        "Pending Review": "warning",
        "Pending": "warning",
      }[status] || "default"

      return <Badge variant={variant as any}>{status}</Badge>
    },
    filterFn: (row, id, value: any) => {
      return value.includes(row.getValue(id))
    },
  },
  
  // 4. AI Score Circle
  {
    accessorKey: "overall_score",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="AI Score" />
    ),
    cell: ({ row }) => (
      <div className="flex justify-center">
        <ScoreCircle score={row.getValue("overall_score")} size="sm" />
      </div>
    ),
  },

  // 5. Research Area Badge
  {
    accessorKey: "research_area",
    header: "Research Area",
    cell: ({ row }) => <Badge variant="secondary">{row.getValue("research_area")}</Badge>,
  },

  // 6. Submission Date (with relative time)
  {
    accessorKey: "submission_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Submitted" />
    ),
    cell: ({ row }) => {
      // In a real app, use date-fns formatDistanceToNow
      return <span>{new Date(row.getValue("submission_date")).toLocaleDateString()}</span>
    }
  },

  // 7. Row Actions
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]
