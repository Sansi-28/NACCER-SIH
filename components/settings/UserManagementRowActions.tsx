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

interface UserManagementRowActionsProps<TData> {
  row: Row<TData>
}

export function UserManagementRowActions<TData>({
  row,
}: UserManagementRowActionsProps<TData>) {
  // In a real app, these would trigger API calls or open dialogs
  const handleEdit = () => console.log("Editing user:", row.original);
  const handleChangeStatus = () => console.log("Changing status for:", row.original);
  const handleDelete = () => console.log("Deleting user:", row.original);

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
        <DropdownMenuItem onClick={handleEdit}>Edit User</DropdownMenuItem>
        <DropdownMenuItem onClick={handleChangeStatus}>Change Status</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-400 focus:bg-red-500/20 focus:text-red-400" onClick={handleDelete}>
          Delete User
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}