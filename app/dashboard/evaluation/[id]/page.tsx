"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Bot, Check, File, X } from "lucide-react"

// Mock Data for a single proposal's AI analysis
const aiAnalysis = {
  recommendation: "Approve",
  overallScore: 87,
  summary: "The AI recommends approval based on high novelty and a strong technical approach.",
  criteria: [
    { id: "novelty", name: "Novelty & Innovation", score: 92, justification: "Introduces a graphene-based filtration technique, a significant advancement over existing carbon capture methods." },
    { id: "feasibility", name: "Technical Feasibility", score: 85, justification: "The methodology is well-defined, and the team possesses relevant prior experience, indicating a high likelihood of success." },
    { id: "budget", name: "Financial Viability", score: 88, justification: "The budget is 10% below average for similar projects, demonstrating excellent cost-effectiveness without compromising on key resources." },
  ]
}

export default function DetailedEvaluationPage({ params }: { params: { id: string } }) {
  const [evaluatorScores, setEvaluatorScores] = React.useState<{ [key: string]: number | null }>({})

  const handleScoreChange = (id: string, value: number) => {
    setEvaluatorScores(prev => ({ ...prev, [id]: value }))
  }

  const handleAcceptAI = () => {
    const prefilledScores = aiAnalysis.criteria.reduce((acc, criterion) => {
      acc[criterion.id] = criterion.score;
      return acc;
    }, {} as { [key: string]: number });
    setEvaluatorScores(prefilledScores);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
      {/* Column 1: Document Viewer (Placeholder) */}
      <div className="lg:col-span-1 glass-card p-4 flex flex-col">
        <div className="flex-1 flex items-center justify-center text-center border-2 border-dashed border-white/20 rounded-md">
          <div>
            <File className="mx-auto h-12 w-12 text-text-secondary" />
            <p className="mt-2 text-sm text-text-secondary">Proposal Document Viewer</p>
            <p className="text-xs text-text-secondary">(e.g., PDF.js integration)</p>
          </div>
        </div>
      </div>

      {/* Column 2: The Workspace */}
      <div className="lg:col-span-2 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Evaluating: {params.id}</h1>
          <Button size="lg" className="bg-green-600 hover:bg-green-700">Submit Final Evaluation</Button>
        </div>
        
        {/* AI Recommendation Card */}
        <Alert className="glass-card">
          <Bot className="h-5 w-5 text-primary" />
          <AlertTitle className="font-bold">AI Recommendation: {aiAnalysis.recommendation} (Score: {aiAnalysis.overallScore})</AlertTitle>
          <AlertDescription>
            {aiAnalysis.summary}
            <div className="flex gap-2 mt-3">
              <Button size="sm" onClick={handleAcceptAI}><Check className="mr-2 h-4 w-4"/>Accept & Pre-fill</Button>
              <Button size="sm" variant="secondary" onClick={() => setEvaluatorScores({})}><X className="mr-2 h-4 w-4"/>Evaluate Manually</Button>
            </div>
          </AlertDescription>
        </Alert>

        {/* Scoring Accordion */}
        <Accordion type="single" collapsible className="w-full" defaultValue="novelty">
          {aiAnalysis.criteria.map((criterion) => {
            const evaluatorScore = evaluatorScores[criterion.id];
            const scoreMismatch = evaluatorScore != null && Math.abs(evaluatorScore - criterion.score) > 10;
            return (
              <AccordionItem value={criterion.id} key={criterion.id} className="glass-card mb-4 !border-t-0">
                <AccordionTrigger className="p-4 hover:no-underline">
                  <div className="flex justify-between w-full pr-4">
                    <span className="text-lg font-semibold">{criterion.name}</span>
                    <span className="text-lg font-bold text-primary">Your Score: {evaluatorScore ?? '--'}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-4 border-t border-white/10">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2 p-3 bg-black/20 rounded-md">
                      <h4 className="font-semibold text-text-secondary">AI Analysis</h4>
                      <p className="font-bold text-xl">{criterion.score} / 100</p>
                      <p className="text-xs text-text-secondary">{criterion.justification}</p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <Slider
                          value={[evaluatorScore ?? 0]}
                          max={100}
                          step={1}
                          onValueChange={(value) => handleScoreChange(criterion.id, value[0])}
                        />
                        <Input
                          type="number"
                          className="w-20"
                          value={evaluatorScore ?? ""}
                          onChange={(e) => handleScoreChange(criterion.id, parseInt(e.target.value))}
                        />
                      </div>
                      <Textarea placeholder="Provide your justification for this score..." />
                      {scoreMismatch && (
                        <p className="text-xs text-yellow-400">Justification is required due to significant score deviation from AI.</p>
                      )}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
      </div>

       {/* Column 3: Collaboration (Placeholder) */}
       <div className="lg:col-span-3 glass-card p-4 flex items-center justify-center text-center border-2 border-dashed border-white/20 rounded-md h-48">
        <div>
          <h3 className="text-lg font-semibold">Collaboration & History</h3>
          <p className="text-sm text-text-secondary">(Activity Feed & Comments Thread would be here)</p>
        </div>
      </div>
    </div>
  )
}
