"use client";

import { Table } from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X, Search } from "lucide-react";
import React from "react";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex flex-1 items-center space-x-2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-secondary" />
          <Input
            placeholder="Filter proposals by title..."
            value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              table.getColumn("title")?.setFilterValue(event.target.value)
            }
            className="h-10 w-[250px] lg:w-[350px] pl-10"
          />
        </div>
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-10 px-2 lg:px-3"
          >
            Reset
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      {/* View options or other controls can go here */}
    </div>
  );
}
