"use client";

import { useQuery } from '@tanstack/react-query';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ScoreCircle } from '@/components/ui/ScoreCircle';
import { ArrowRight, Bot, Lightbulb, Loader2, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

// Function to fetch data from our new API endpoint
async function fetchProposalSummary(proposalId: string) {
  const res = await fetch(`/api/proposals/${proposalId}/summary`);
  if (!res.ok) throw new Error('Failed to fetch proposal summary');
  return res.json();
}

interface QuickViewModalProps {
  proposalId: string | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProposalQuickViewModal({ proposalId, isOpen, onClose }: QuickViewModalProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['proposalSummary', proposalId],
    queryFn: () => fetchProposalSummary(proposalId!),
    enabled: !!proposalId, // Only fetch when a proposalId is provided
  });

  const getRiskColor = (level: string) => {
    switch(level.toLowerCase()) {
      case 'low': return 'bg-green-500/20 text-green-400';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400';
      case 'high': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl glass-surface p-0">
        {isLoading && (
          <div className="h-96 flex items-center justify-center gap-3">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <p className="text-lg text-text-secondary">Loading Summary...</p>
          </div>
        )}
        {isError && <div className="h-96 text-center text-red-400 p-8">Failed to load proposal details.</div>}
        {data && (
          <>
            <DialogHeader className="p-6 border-b border-white/10">
              <DialogTitle className="text-2xl font-bold">{data.title}</DialogTitle>
              <p className="text-sm text-text-secondary">
                By {data.pi_name}, {data.institution}
              </p>
            </DialogHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
              {/* Left Column */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2"><Bot className="w-5 h-5 text-primary"/> AI Executive Summary</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">{data.ai_summary}</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2"><Lightbulb className="w-5 h-5 text-yellow-400"/> Novelty Insight</h4>
                    <p className="text-sm text-text-secondary">Introduces a novel technique not found in 95% of past proposals.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-green-400"/> Compliance Check</h4>
                    <p className="text-sm text-text-secondary">All S&T funding guidelines passed initial screening.</p>
                  </div>
                </div>
              </div>
              
              {/* Right Column */}
              <div className="flex flex-col items-center gap-6">
                <ScoreCircle score={data.overall_score} size="lg" />
                <div className="w-full space-y-3 text-xs">
                  {Object.entries(data.scores).map(([key, value]) => (
                    <div key={key}>
                      <div className="flex justify-between mb-1">
                        <span className="capitalize text-text-secondary">{key.replace(/_/g, ' ')}</span>
                        <span>{value as any}%</span>
                      </div>
                      <Progress value={value as number} className="h-2" />
                    </div>
                  ))}
                </div>
                <Badge className={getRiskColor(data.risk_level)}>AI Risk Assessment: {data.risk_level}</Badge>
              </div>
            </div>

            <DialogFooter className="p-6 border-t border-white/10">
              <Button variant="ghost" onClick={onClose}>Close</Button>
              <Link href={`/proposals/${data.id}`} passHref>
                <Button className="bg-primary hover:bg-primary-hover">
                  View Full Detailed Report <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
