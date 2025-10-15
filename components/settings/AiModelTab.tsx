"use client";
import * as React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Save, AlertTriangle } from "lucide-react";

const initialWeights = {
  novelty: 30,
  technical_feasibility: 25,
  financial_viability: 20,
  team_capability: 25,
};

export function AiModelTab() {
  const [weights, setWeights] = React.useState(initialWeights);
  const totalWeight = Object.values(weights).reduce((sum, value) => sum + value, 0);

  const handleSliderChange = (key: keyof typeof weights, value: number) => {
    setWeights(prev => ({ ...prev, [key]: value }));
  };

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle>AI Evaluation Parameters</CardTitle>
        <CardDescription>Adjust the weighting of each criterion in the AI's overall score calculation. All weights must sum to 100%.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        {Object.entries(weights).map(([key, value]) => (
          <div key={key} className="grid grid-cols-6 items-center gap-4">
            <Label htmlFor={key} className="col-span-2 capitalize">{key.replace(/_/g, ' ')}</Label>
            <Slider
              id={key}
              value={[value]}
              max={100}
              step={5}
              onValueChange={(val) => handleSliderChange(key as keyof typeof weights, val[0])}
              className="col-span-3"
            />
            <Input
              type="number"
              value={value}
              onChange={(e) => handleSliderChange(key as keyof typeof weights, parseInt(e.target.value))}
              className="col-span-1 w-20"
            />
          </div>
        ))}
      </CardContent>
      <CardFooter className="flex justify-between items-center border-t border-white/10 pt-6">
        {totalWeight !== 100 ? (
          <Alert variant="destructive" className="w-auto">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>Total weight is {totalWeight}%. It must be 100% to save.</AlertDescription>
          </Alert>
        ) : (
          <div /> // Placeholder for alignment
        )}
        <Button disabled={totalWeight !== 100}>
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </CardFooter>
    </Card>
  );
}