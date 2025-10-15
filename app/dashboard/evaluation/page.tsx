import { EvaluationQueueTable } from "@/components/evaluation/EvaluationQueueTable";
import { Header } from "@/components/layout/Header";
import { appData } from "@/data/mockData";
import { Proposal } from "@/types";

function EvaluationPage() {
  const evaluationQueue: Proposal[] = appData.proposals.filter((p: any) => p.status === 'Pending' || p.status === 'Under Review');

  return (
    <div>
      <Header title="Evaluation Queue" subtitle="Proposals awaiting review and evaluation." />
      <div className="p-6">
        <EvaluationQueueTable data={evaluationQueue} />
      </div>
    </div>
  );
}

export default EvaluationPage;
