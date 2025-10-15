"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { ReportGenerationDialog } from "./ReportGenerationDialog"; // Import the dialog

interface ReportTemplateCardProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export function ReportTemplateCard({ id, title, description, icon: Icon }: ReportTemplateCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Card className="glass-card flex flex-col transition-all duration-300 hover:-translate-y-1">
        <CardHeader className="items-center text-center">
          <div className="bg-primary/10 p-4 rounded-xl mb-4 border border-white/10">
            <Icon className="w-10 h-10 text-primary" />
          </div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 text-center">
          <CardDescription>{description}</CardDescription>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={() => setIsDialogOpen(true)}>
            <Download className="mr-2 h-4 w-4" />
            Generate Report
          </Button>
        </CardFooter>
      </Card>

      <ReportGenerationDialog 
        reportTitle={title} 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
      />
    </>
  );
}