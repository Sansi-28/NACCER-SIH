// app/api/proposals/[id]/summary/route.ts
import { NextResponse } from 'next/server';
import { appData } from '@/data/mockData'; // Assuming mockData is in this path

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const proposalId = params.id;
    const proposal = appData.proposals.find((p) => p.id === proposalId);

    if (!proposal) {
      return NextResponse.json({ error: 'Proposal not found' }, { status: 404 });
    }

    // AI would generate this summary in a real application
    const aiSummary = `This proposal, titled "${proposal.title}", focuses on ${proposal.research_area}. It demonstrates high novelty (${proposal.novelty_score}/100) and strong technical feasibility (${proposal.technical_feasibility}/100). The requested budget of ₹${proposal.budget.toLocaleString('en-IN')} is deemed reasonable for its scope.`;

    // We select and return ONLY the data needed for the quick view modal
    const summaryData = {
      id: proposal.id,
      title: proposal.title,
      pi_name: proposal.pi_name,
      institution: proposal.institution,
      status: proposal.status,
      submission_date: proposal.submission_date,
      research_area: proposal.research_area,
      budget: proposal.budget,
      duration: proposal.duration,
      overall_score: proposal.overall_score,
      scores: {
        novelty: proposal.novelty_score,
        technical_feasibility: proposal.technical_feasibility,
        financial_viability: proposal.financial_viability,
        team_capability: proposal.team_capability,
      },
      risk_level: proposal.risk_level,
      ai_summary: aiSummary,
    };

    return NextResponse.json(summaryData);

  } catch (error) {
    console.error('Failed to fetch proposal summary:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
