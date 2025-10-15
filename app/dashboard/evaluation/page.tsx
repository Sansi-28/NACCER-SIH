import { EvaluationQueueTable } from "@/components/evaluation/EvaluationQueueTable";
import { Header } from "@/components/layout/Header";
import { appData } from "@/data/mockData";
import { EvaluationQueueItem, Proposal } from "@/types";

function EvaluationPage() {
  const evaluationQueue: EvaluationQueueItem[] = appData.proposals
    .filter((p: any) => p.status === "Pending" || p.status === "Under Review")
    .map((p: any) => ({
      id: p.id,
      title: p.title,
      pi_name: p.pi_name,
      priority:
        p.risk_level === "High"
          ? "High"
          : p.risk_level === "Medium"
          ? "Medium"
          : "Low",
      ai_score: p.overall_score,
      assigned_date: new Date().toISOString().split("T")[0], // Placeholder
      progress: 0, // Placeholder
    }));

  return (
    <div>
      <Header
        title="Evaluation Queue"
        subtitle="Proposals awaiting review and evaluation."
      />
      <div className="p-6">
        <EvaluationQueueTable data={evaluationQueue} />
      </div>
    </div>
  );
}

export default EvaluationPage;
