"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle, FlaskConical, Play, XCircle } from "lucide-react";

export function RuleTestingSandbox() {
  const [result, setResult] = useState<string | null>(null);
  const [status, setStatus] = useState<"pass" | "fail" | null>(null);

  const runTest = () => {
    // Simulate API call to test a rule against a proposal
    const pass = Math.random() > 0.5;
    if (pass) {
      setStatus("pass");
      setResult("[Pass] Proposal P2023-001 passed rule FIN-03. Reason: Requested budget of ₹25L is within the ₹50L limit.");
    } else {
      setStatus("fail");
      setResult("[Fail] Proposal P2023-002 failed rule NOV-01. Reason: Similarity score of 78% exceeds the 70% threshold.");
    }
  };

  return (
    <div className="glass-card p-6">
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <FlaskConical className="w-6 h-6 text-primary" />
        Rule Testing Sandbox
      </h3>
      <div className="flex items-end gap-4">
        {/* In a real app, these would be searchable select dropdowns */}
        <div className="flex-1">
          <label className="text-xs text-text-secondary">Rule to Test</label>
          <input className="w-full mt-1 p-2 bg-black/20 rounded-md border border-white/10" defaultValue="FIN-03: Budget Cap" />
        </div>
        <div className="flex-1">
          <label className="text-xs text-text-secondary">Sample Proposal</label>
          <input className="w-full mt-1 p-2 bg-black/20 rounded-md border border-white/10" defaultValue="P2023-001: Quantum Communication" />
        </div>
        <Button onClick={runTest} className="h-10">
          <Play className="mr-2 h-4 w-4" /> Run Test
        </Button>
      </div>
      {result && (
        <Alert className={`mt-4 ${status === 'pass' ? 'border-green-500/50 text-green-400' : 'border-red-500/50 text-red-400'}`}>
          {status === 'pass' ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
          <AlertTitle className="font-bold">{status === 'pass' ? 'Test Passed' : 'Test Failed'}</AlertTitle>
          <AlertDescription className="text-xs">{result}</AlertDescription>
        </Alert>
      )}
    </div>
  );
}