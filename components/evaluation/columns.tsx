"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ScoreCircle } from "@/components/ui/ScoreCircle"
import { DataTableColumnHeader } from "@/components/proposals/DataTableColumnHeader" // Reusing this component
import { EvaluationQueueItem } from "@/types" // We'll define this type

export const columns: ColumnDef<EvaluationQueueItem>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Proposal" />
    ),
    cell: ({ row }) => (
      <div>
        <div className="font-medium">{row.original.title}</div>
        <div className="text-xs text-text-secondary">{row.original.pi_name}</div>
      </div>
    ),
  },
  {
    accessorKey: "priority",
    header: "Priority",
    cell: ({ row }) => {
      const priority = row.getValue("priority") as string
      const variant = {
        "High": "destructive",
        "Medium": "warning",
        "Low": "default",
      }[priority] || "default"
      return <Badge variant={variant as any}>{priority}</Badge>
    },
  },
  {
    accessorKey: "ai_score",
    header: "AI Score",
    cell: ({ row }) => <ScoreCircle score={row.getValue("ai_score")} size="sm" />,
  },
  {
    accessorKey: "assigned_date",
    header: "Assigned",
    cell: ({ row }) => <span>{new Date(row.getValue("assigned_date")).toLocaleDateString()}</span>,
  },
  {
    accessorKey: "progress",
    header: "My Progress",
    cell: ({ row }) => {
      const progress = row.getValue("progress") as number
      return (
        <div className="flex items-center gap-2">
          <Progress value={progress} className="h-2 w-24" />
          <span className="text-xs text-text-secondary">{progress}%</span>
        </div>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <Link href={`/evaluation/${row.original.id}`} passHref>
        <Button size="sm" className="bg-primary hover:bg-primary-hover">
          {row.original.progress > 0 ? "Continue Review" : "Start Review"}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    ),
  },
]
